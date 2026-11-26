export const profiles=[
{id:'first',label:'Passed first attempt',description:'Successful initial inspection. The assembly inspection passed on the first attempt. The electrical test passed immediately. Accepted immediately at the initial check.'},
{id:'recovered',label:'Passed after correction',description:'Successful retest after repair. The first assembly inspection failed, then it was reworked and passed a repeat inspection. The first electrical test failed, then repair resolved it and it passed on retest.'},
{id:'failed',label:'Still failed / unresolved',description:'Unresolved failed inspection. The assembly inspection remains failed and rejected. The electrical test is still failing. The problem remains unresolved, pending repair and a successful retest.'}
];
const ids=x=>typeof x==='string'&&/^[A-Za-z0-9_-]{1,32}$/.test(x);
function str(x,n,label){if(typeof x!=='string'||!x.trim()||x.length>n)throw Error(label+' must be nonempty text ≤'+n+' characters');return x}
export function parse(raw){if(typeof raw!=='string'||raw.length>60000)throw Error('Source limit: 60,000 characters');let d;try{d=JSON.parse(raw)}catch{throw Error('Paste valid source JSON or choose an example')}
if(!d||Array.isArray(d)||typeof d!=='object')throw Error('Source must be an object');str(d.title,100,'Title');if(!Array.isArray(d.stations)||d.stations.length<2||d.stations.length>4)throw Error('Supply 2–4 station IDs');if(!d.stations.every(ids)||new Set(d.stations).size!==d.stations.length)throw Error('Station IDs must be unique alphanumeric/underscore/hyphen text');
if(!Array.isArray(d.records)||!d.records.length||d.records.length>24)throw Error('Supply 1–24 records');const keys=new Set(),units=new Set();for(const r of d.records){if(!r||!ids(r.unit)||!d.stations.includes(r.station))throw Error('Each record needs a valid unit and listed station');str(r.note,200,'Inspection note');let key=r.unit+'|'+r.station;if(keys.has(key))throw Error('Duplicate unit/station observation: '+key);keys.add(key);units.add(r.unit)}
if(units.size>12)throw Error('Maximum 12 units');if(d.records.length!==units.size*d.stations.length)throw Error('Complete cohort required: exactly one observation per unit at every listed station. Missing inspections are not passes.');return structuredClone(d)}
export function imported(raw){if(raw.length>8000000)throw Error('Import exceeds 8 MB');let x;try{x=JSON.parse(raw)}catch{throw Error('Invalid JSON file')}return parse(JSON.stringify(x?.format==='firstpass-atlas-v1'?x.original:x))}
export const anchors=[
{outcome:'first',text:'Assembly accepted at its first inspection, no rework was required.'},
{outcome:'first',text:'Electrical testing passed initially, no repeat test or repair was required.'},
{outcome:'first',text:'Successful initial check. Passed first time, without corrections or adjustments.'},
{outcome:'recovered',text:'Assembly rejected initially, then reworked and accepted on reinspection.'},
{outcome:'recovered',text:'Electrical test failed initially, then repaired and passed a repeat test.'},
{outcome:'recovered',text:'Initial failure, adjusted and corrected successfully, passed the retest.'},
{outcome:'failed',text:'Assembly remains rejected with unresolved faults. No successful reinspection is recorded.'},
{outcome:'failed',text:'Electrical testing remains failed. No passing retest is recorded and the problem is unresolved.'},
{outcome:'failed',text:'Failed inspection, still defective and unresolved, awaiting correction.'}
];
export function texts(d){return [...anchors.map(x=>x.text),...d.records.map(x=>x.note)]}
export function suggest(d,v){const n=texts(d).length;if(!Array.isArray(v)||v.length!==n||!v.every(x=>Array.isArray(x)&&x.length===384&&x.every(Number.isFinite)&&x.some(z=>z!==0)))throw Error('Malformed AI vectors: expected one finite 384-dimensional nonzero vector per text');return d.records.map((r,i)=>{const candidates=profiles.map(p=>{const ranked=anchors.map((a,j)=>({outcome:a.outcome,reference:a.text,score:v[j].reduce((s,x,k)=>s+x*v[i+anchors.length][k],0)})).filter(a=>a.outcome===p.id).sort((a,b)=>b.score-a.score);return {id:p.id,score:ranked[0].score,reference:ranked[0].reference}}).sort((a,b)=>b.score-a.score);return {unit:r.unit,station:r.station,outcome:candidates[0].id,decision:'pending',note:'',candidates}})}
export function apply(d,review){if(!Array.isArray(review)||review.length!==d.records.length)throw Error('Review must retain every original record');for(let i=0;i<review.length;i++){let r=review[i],o=d.records[i];if(r.unit!==o.unit||r.station!==o.station||!profiles.some(p=>p.id===r.outcome)||!['approve','hold'].includes(r.decision)||typeof r.note!=='string'||r.note.length>500)throw Error('Approve or hold every valid outcome before applying')}
const held=review.filter(r=>r.decision==='hold').length, rows=d.records.map((r,i)=>({...r,reviewedOutcome:review[i].outcome,decision:review[i].decision,reviewerNote:review[i].note})),base={format:'firstpass-atlas-v1',original:structuredClone(d),review:structuredClone(review),rows,status:held?'blocked':'ready',metrics:{records:rows.length,held,reviewed:rows.length-held}};
if(held)return {...base,summary:null,stations:[],units:[],blockers:['A held observation blocks cohort yield. No incomplete-cohort percentage is reported.']};
const units=[...new Set(rows.map(r=>r.unit))].map(id=>{const checks=rows.filter(r=>r.unit===id);return {id,firstPass:checks.every(r=>r.reviewedOutcome==='first'),finalPass:checks.every(r=>r.reviewedOutcome!=='failed'),reworkStations:checks.filter(r=>r.reviewedOutcome==='recovered').map(r=>r.station),failedStations:checks.filter(r=>r.reviewedOutcome==='failed').map(r=>r.station)}}),stations=d.stations.map(id=>{const rs=rows.filter(r=>r.station===id);return {id,total:rs.length,first:rs.filter(r=>r.reviewedOutcome==='first').length,recovered:rs.filter(r=>r.reviewedOutcome==='recovered').length,failed:rs.filter(r=>r.reviewedOutcome==='failed').length}}),first=units.filter(u=>u.firstPass).length,final=units.filter(u=>u.finalPass).length;
return {...base,status:'ready',units,stations,blockers:[],summary:{total:units.length,first,final,reworkUnits:units.filter(u=>u.reworkStations.length).length,firstRate:first/units.length,finalRate:final/units.length,independenceEstimate:stations.reduce((s,r)=>s*r.first/r.total,1),baselineOvercount:final-first}}}
const cell=v=>{let s=String(v??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"'};
export function csv(r){return [['unit','station','original_note','reviewed_outcome','decision','reviewer_note'],...r.rows.map(x=>[x.unit,x.station,x.note,x.reviewedOutcome,x.decision,x.reviewerNote])].map(a=>a.map(cell).join(',')).join('\r\n')+'\r\n'}
export const pct=x=>(100*x).toFixed(1)+'%';
export function markdown(r){const s=r.summary;return '# Firstpass Atlas\n\n'+r.original.title+'\n\n'+(s?`Observed first-pass: ${s.first}/${s.total} (${pct(s.firstRate)}). Final-pass baseline: ${s.final}/${s.total} (${pct(s.finalRate)}). Product of station first-pass proportions: ${pct(s.independenceEstimate)} (independence scenario, not measured cohort yield).\n\n`:'BLOCKED: held observations; no cohort yield.\n\n')+r.rows.map(x=>`## ${x.unit} / ${x.station}\nOriginal: ${x.note}\nReviewed: ${x.reviewedOutcome} — ${x.decision}\nReviewer note: ${x.reviewerNote}\n`).join('\n')}
const make=(name,notes)=>({name,data:{title:name,stations:['assembly','test'],records:notes.map((note,i)=>({unit:'unit-'+(Math.floor(i/2)+1),station:i%2?'test':'assembly',note}))}});
export const examples=[make('Correlated corrections',[
'The assembly inspection passed on the first attempt. No adjustments needed.','The electrical test passed immediately with no retest or repair.',
'The first assembly inspection failed. After rework it passed the repeat inspection.','The first electrical test failed. After repair it passed the repeat test.',
'Assembly passed at the initial check without any correction.','The electrical test passed on the first attempt with no repair.',
'The initial assembly check passed without adjustments.','The electrical test remains failed and unresolved. No passing retest is recorded.'
]),make('Distributed corrections',[
'The first assembly inspection failed. It was adjusted and passed the repeat inspection.','Electrical test passed on the first attempt without any repair.',
'Assembly inspection passed immediately without correction.','The first electrical test failed. It was repaired and passed on retest.',
'The assembly inspection passed on the first attempt without rework.','The electrical inspection passed immediately without a repeat test.',
'The assembly inspection passed on the first attempt without adjustments.','The electrical test passed immediately without repair.'
])];
examples[0].expected=['first','first','recovered','recovered','first','first','first','failed'];examples[1].expected=['recovered','first','first','recovered','first','first','first','first'];
