export const examples=[{
 name:'Packing workshop',slots:2,severityGate:8,catalog:[
 {id:'guard',title:'Protective machine guard missing',description:'Missing protective safety guard, exposed moving machine parts, unshielded rotating equipment',severity:9},
 {id:'label',title:'Shipping label printing defect',description:'Shipping address label printer streaks, faded ink, unreadable printed address labels',severity:3},
 {id:'seal',title:'Carton tape seal opening',description:'Cardboard shipping carton sealing tape peeling off, open box seam, failed packaging tape adhesion',severity:5}],records:[
 {id:'P1',text:'Rotating machine parts are exposed because the protective cover is missing.',occurrence:1,detection:2},
 {id:'P2',text:'Address stickers come out with faded ink and printer streaks.',occurrence:8,detection:7},
 {id:'P3',text:'The adhesive tape peels away and the cardboard box opens at the seam.',occurrence:6,detection:5}]
},{name:'Office continuity',slots:2,severityGate:8,catalog:[
 {id:'backup',title:'Unrecoverable backup failure',description:'Backup restore fails, cannot recover archived business data, backup recovery unavailable',severity:9},
 {id:'wifi',title:'Wireless network disconnects',description:'Office wireless internet connection drops, Wi-Fi disconnects, unreliable wireless network',severity:4},
 {id:'paper',title:'Paper jam in copier',description:'Photocopier paper jam, printer sheet stuck in rollers, paper feed blockage',severity:2}],records:[
 {id:'O1',text:'Archived files could not be recovered when we tried restoring the backup.',occurrence:1,detection:2},
 {id:'O2',text:'Wireless internet in the office keeps dropping the connection.',occurrence:7,detection:6},
 {id:'O3',text:'Sheets of paper get stuck in the photocopier feed rollers.',occurrence:9,detection:8}]
}];
const text=(s,n=400)=>typeof s==='string'&&s.trim().length>0&&s.length<=n;
const rating=n=>Number.isInteger(n)&&n>=1&&n<=10;
export function validate(d){
 if(!d||!text(d.name,80)||!Array.isArray(d.catalog)||d.catalog.length<2||d.catalog.length>6||!Array.isArray(d.records)||d.records.length<1||d.records.length>24)throw Error('Need a name, 2–6 failure modes and 1–24 issue notes.');
 if(!Number.isInteger(d.slots)||d.slots<1||d.slots>24||!rating(d.severityGate))throw Error('Slots must be an integer 1–24; severity gate 1–10.');
 for(const a of[d.catalog,d.records])if(a.some(x=>!x||!text(x.id,40))||new Set(a.map(x=>x.id)).size!==a.length)throw Error('Use unique nonempty IDs ≤40 characters.');
 if(d.catalog.some(c=>!text(c.title,80)||!text(c.description)||!rating(c.severity)))throw Error('Each mode needs title ≤80, description ≤400 and integer severity 1–10.');
 if(d.records.some(r=>!text(r.text)||!rating(r.occurrence)||!rating(r.detection)))throw Error('Each note needs text ≤400 and integer occurrence/detection ratings 1–10.');return d;
}
export function parse(s){if(typeof s!=='string'||!s.trim()||s.length>1000000)throw Error('Paste JSON; originals ≤18 KB, audit import ≤1 MB.');let a;try{a=JSON.parse(s)}catch{throw Error('Invalid JSON. Load an example or repair the JSON.')}const d=a?.originalInput??a;if(JSON.stringify(d).length>18000)throw Error('Original input exceeds 18,000 characters.');return validate(d)}
export const texts=d=>[...d.catalog.map(c=>c.description),...d.records.map(r=>r.text)];
export function suggest(d,v){
 if(!Array.isArray(v)||v.length!==texts(d).length||v.some(x=>!Array.isArray(x)||x.length!==384||x.some(n=>!Number.isFinite(n))||Math.abs(x.reduce((s,n)=>s+n*n,0)-1)>.05))throw Error('Malformed AI embeddings. Retry real inference.');
 return d.records.map((r,i)=>{const candidates=d.catalog.map((c,j)=>({item:c.id,similarity:v[j].reduce((s,n,k)=>s+n*v[d.catalog.length+i][k],0)})).sort((a,b)=>b.similarity-a.similarity);const item=candidates[0].item;return{...r,item,proposed:item,severity:d.catalog.find(c=>c.id===item).severity,exact:d.catalog.find(c=>c.title.trim().toLowerCase()===r.text.trim().toLowerCase())?.id??null,candidates,decision:'pending',owner:'',action:'',note:''}});
}
export function analyze(d,rows){
 validate(d);if(!Array.isArray(rows)||rows.length!==d.records.length||rows.some((r,i)=>!r||r.id!==d.records[i].id||r.text!==d.records[i].text||!d.catalog.some(c=>c.id===r.item)||![r.severity,r.occurrence,r.detection].every(rating)||!['approve','hold'].includes(r.decision)||['owner','action','note'].some(k=>typeof r[k]!=='string'||r[k].length>400)))throw Error('Review every issue: verify mode and integer ratings 1–10, then approve or hold.');
 const approved=rows.filter(r=>r.decision==='approve').map(r=>({...r,rpn:r.severity*r.occurrence*r.detection,escalated:r.severity>=d.severityGate}));
 const byRPN=(a,b)=>b.rpn-a.rpn||a.id.localeCompare(b.id);
 const baseline=[...approved].sort(byRPN).slice(0,d.slots).map(r=>r.id);
 const ranked=[...approved].sort((a,b)=>Number(b.escalated)-Number(a.escalated)||(a.escalated?b.severity-a.severity:0)||byRPN(a,b));
 const selected=ranked.slice(0,d.slots).map(r=>r.id),high=approved.filter(r=>r.escalated),baselineHigh=high.filter(r=>baseline.includes(r.id)).length,selectedHigh=high.filter(r=>selected.includes(r.id)).length;
 return{schema:'severity-ledger/v1',originalInput:structuredClone(d),records:rows.map(r=>({...structuredClone(r),rpn:r.severity*r.occurrence*r.detection,escalated:r.severity>=d.severityGate,selected:r.decision==='approve'&&selected.includes(r.id),baselineSelected:baseline.includes(r.id)})),ranking:ranked.map(r=>r.id),selected,baseline,metrics:{total:rows.length,approved:approved.length,held:rows.length-approved.length,high:high.length,selectedHigh,baselineHigh,unselectedHigh:high.length-selectedHigh,exactResolved:rows.filter(r=>r.exact!==null).length,aiReviewAgreement:rows.filter(r=>r.decision==='approve'&&r.item===r.proposed).length}};
}
const cell=v=>{if(typeof v==='number')return String(v);let s=String(v??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"'};
export const csv=a=>[['id','source','aiProposed','reviewedMode','severity','occurrence','detection','rpn','decision','severityGateReached','selected','baselineSelected','owner','action','note'],...a.records.map(r=>[r.id,r.text,r.proposed,r.item,r.severity,r.occurrence,r.detection,r.rpn,r.decision,r.escalated?'yes':'no',r.selected?'yes':'no',r.baselineSelected?'yes':'no',r.owner,r.action,r.note])].map(r=>r.map(cell).join(',')).join('\r\n');
const md=s=>String(s).replaceAll('\\','\\\\').replaceAll('|','\\|').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('\n','<br>');
export function markdown(a){return '# Severity Ledger — reviewed action worksheet\n\n'+md(a.originalInput.name)+'\n\nLocal semantic matching assists identity only; all ratings and actions are human supplied. This is a custom workshop rule, not an industry action-priority standard or safety certification.\n\nSlots: '+a.originalInput.slots+'; severity gate: '+a.originalInput.severityGate+'. RPN = severity × occurrence × detection (larger detection means harder to detect).\n\nSelected: '+a.selected.map(md).join(', ')+'. Plain-RPN baseline: '+a.baseline.map(md).join(', ')+'. High-severity coverage: '+a.metrics.selectedHigh+'/'+a.metrics.high+' versus baseline '+a.metrics.baselineHigh+'/'+a.metrics.high+'.\n\n## All source issues — including held and deferred\n\n| ID | Source | Mode | S/O/D | RPN | Decision | Shortlist | Owner | Action | Note |\n|---|---|---|---|---|---|---|---|---|---|\n'+a.records.map(r=>'| '+[r.id,r.text,r.item,[r.severity,r.occurrence,r.detection].join('/'),r.rpn,r.decision,r.selected?'selected':r.decision==='hold'?'held':'deferred',r.owner,r.action,r.note].map(md).join(' | ')+' |').join('\n')+'\n'}
