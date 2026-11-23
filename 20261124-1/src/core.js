export const plans=[
{id:'hours',description:'Payroll timesheet export records elapsed work as decimal hours, with fractions of an hour',format:'decimal-hours'},
{id:'clock',description:'Project planning estimates elapsed hours and minutes in H:MM clock notation',format:'hours-minutes'},
{id:'stopwatch',description:'Stopwatch lap timings for short tasks are elapsed minutes and seconds in M:SS notation',format:'minutes-seconds'},
{id:'iso',description:'Machine API uses ISO 8601 duration strings with P and T designators for days hours minutes seconds',format:'iso'}];
const contexts=[
'The payroll timesheet system exports labor in decimal hours; the fractional part is a fraction of one hour.',
'Project planners write elapsed hours followed by a colon and minutes, not time of day.',
'Lap stopwatch timings for short tasks use minutes followed by a colon and seconds.',
'The machine API provides ISO 8601 durations with P and T component designators.'
];
export const examples=[{name:'Operations handoff',data:{plans,records:[
{id:'payroll',context:contexts[0],raw:'1.5'},
{id:'planning',context:contexts[1],raw:'1:30'},
{id:'lap',context:contexts[2],raw:'1:30'},
{id:'api',context:contexts[3],raw:'PT1H30M'},
{id:'bad-minute',context:contexts[1],raw:'1:75'},
{id:'calendar-month',context:contexts[3],raw:'P1M'}]},expected:['hours','clock','stopwatch','iso','clock','iso'],statuses:['ready','ready','ready','ready','blocked','blocked'],seconds:['5400','5400','90','5400',null,null]},
{name:'Maintenance handoff',data:{plans,records:[
{id:'short-check',context:contexts[2],raw:'12:05.250'},
{id:'shift',context:contexts[1],raw:'27:15'},
{id:'fractional-work',context:contexts[0],raw:'0.125'},
{id:'overnight-api',context:contexts[3],raw:'P1DT2H3M4.005S'},
{id:'negative',context:contexts[0],raw:'-1.5'},
{id:'empty-iso',context:contexts[3],raw:'PT'}]},expected:['stopwatch','clock','hours','iso','hours','iso'],statuses:['ready','ready','ready','ready','blocked','blocked'],seconds:['725.25','98100','450','93784.005',null,null]}];
const text=(s,max)=>typeof s==='string'&&s.trim().length>0&&s.length<=max;
export function validatePlan(p){if(!p||!text(p.id,60)||!text(p.description,200)||!['decimal-hours','hours-minutes','minutes-seconds','iso'].includes(p.format))throw Error('Profiles need IDs ≤60, descriptions ≤200 and format decimal-hours, hours-minutes, minutes-seconds or iso.');}
export function parse(s){if(typeof s!=='string'||s.length>24000)throw Error('Source JSON must be at most 24,000 characters.');let d;try{d=JSON.parse(s)}catch{throw Error('Enter valid JSON or choose a synthetic example.')}if(!d||!Array.isArray(d.plans)||d.plans.length<2||d.plans.length>5||!Array.isArray(d.records)||!d.records.length||d.records.length>24)throw Error('Use 2–5 format profiles and 1–24 duration records.');let ids=new Set;for(const p of d.plans){validatePlan(p);if(ids.has(p.id))throw Error('Profile IDs must be unique.');ids.add(p.id)}ids.clear();for(const r of d.records){if(!r||!text(r.id,80)||ids.has(r.id)||!text(r.context,200)||typeof r.raw!=='string'||r.raw.length>600)throw Error('Records need unique IDs ≤80, source context ≤200 and duration strings ≤600 characters.');ids.add(r.id)}return structuredClone(d)}
export function texts(d){return [...d.plans.map(p=>p.description),...d.records.map(r=>r.context)]}
export function suggest(d,v){const n=d.plans.length+d.records.length;if(!Array.isArray(v)||v.length!==n||!v.every(a=>Array.isArray(a)&&a.length===384&&a.every(Number.isFinite)&&Math.abs(Math.hypot(...a)-1)<.02))throw Error('Malformed model vectors. Retry; no suggestions applied.');return d.records.map((r,i)=>{const evidence=d.plans.map((p,j)=>({system:p.id,similarity:v[j].reduce((s,x,k)=>s+x*v[d.plans.length+i][k],0)})).sort((a,b)=>b.similarity-a.similarity);return{id:r.id,system:evidence[0].system,raw:r.raw,decision:'pending',note:'',evidence}})}
const sec=ms=>String(Math.floor(ms/1000))+(ms%1000?'.'+String(ms%1000).padStart(3,'0').replace(/0+$/,''):'');
export function decode(raw,p){validatePlan(p);if(typeof raw!=='string'||raw.length>600)throw Error('Duration must be a bounded string.');let ms,m,parts=[];
if(p.format==='decimal-hours'){
 if(!/^(0|[1-9]\d{0,5})(\.\d{1,6})?$/.test(raw))throw Error('Decimal hours need unsigned digits, dot fractions ≤6 places, no whitespace or units.');
 const[a,b='']=raw.split('.'),den=10n**BigInt(b.length),num=BigInt(a+b)*3600000n;if(num%den)throw Error('Duration is not an exact whole millisecond. No rounding applied.');ms=Number(num/den);parts=[{component:'decimal hours',value:raw,milliseconds:ms}];
}else if(p.format==='hours-minutes'||p.format==='minutes-seconds'){
 const re=p.format==='hours-minutes'?/^(0|[1-9]\d{0,5}):([0-5]\d)$/:/^(0|[1-9]\d{0,5}):([0-5]\d)(?:\.(\d{1,3}))?$/;
 m=raw.match(re);if(!m)throw Error(p.format==='hours-minutes'?'Use H:MM, minutes 00–59; no seconds or time-of-day rollover.':'Use M:SS[.sss], seconds 00–59.');
 const scale=p.format==='hours-minutes'?60000:1000;ms=(Number(m[1])*60+Number(m[2]))*scale+Number((m[3]||'').padEnd(3,'0'));parts=[{component:p.format==='hours-minutes'?'hours':'minutes',value:m[1],milliseconds:Number(m[1])*60*scale},{component:p.format==='hours-minutes'?'minutes':'seconds',value:m[2]+(m[3]?'.'+m[3]:''),milliseconds:Number(m[2])*scale+Number((m[3]||'').padEnd(3,'0'))}];
}else{
 m=raw.match(/^P(?:(\d{1,5})D)?(?:T(?:(\d{1,8})H)?(?:(\d{1,8})M)?(?:(\d{1,8})(?:\.(\d{1,3}))?S)?)?$/);
 if(!m||!m.slice(1).some(x=>x!==undefined)||raw.endsWith('T'))throw Error('Use fixed ISO P[nD][T[nH][nM][n[.sss]S]]. No years, calendar months, weeks, signs or empty T.');
 const scales=[86400000,3600000,60000,1000];parts=['days','hours','minutes','seconds'].map((component,i)=>({component,value:m[i+1]||'0',milliseconds:Number(m[i+1]||0)*scales[i]}));ms=parts.reduce((s,x)=>s+x.milliseconds,0)+Number((m[5]||'').padEnd(3,'0'));parts[3].milliseconds+=Number((m[5]||'').padEnd(3,'0'));parts[3].value+=(m[5]?'.'+m[5]:'');
}
if(!Number.isSafeInteger(ms)||ms<0||ms>31536000000)throw Error('Duration must be 0–365 fixed 24-hour days and exact to milliseconds.');
const canonical='PT'+sec(ms)+'S';const baseline=Number.parseFloat(raw)*3600000;return{milliseconds:ms,seconds:sec(ms),canonical,parts,baselineSeconds:Number.isFinite(baseline)?String(baseline/1000):null,differentFromBaseline:!Number.isFinite(baseline)||Math.abs(baseline-ms)>.00001,exactVerified:parts.reduce((s,x)=>s+x.milliseconds,0)===ms};}
export function analyze(d,rows){parse(JSON.stringify(d));if(!Array.isArray(rows)||rows.length!==d.records.length||rows.some((r,i)=>!r||r.id!==d.records[i].id||!['approve','hold'].includes(r.decision)||!d.plans.some(p=>p.id===r.system)||typeof r.raw!=='string'||r.raw.length>600||typeof r.note!=='string'||r.note.length>2000))throw Error('Approve or hold every source; review fields must be valid.');const checks=rows.map(r=>{const p=d.plans.find(p=>p.id===r.system),base={id:r.id,system:p.id,raw:r.raw,format:p.format};if(r.decision==='hold')return{...base,status:'held',reason:'Reviewer hold'};try{const value=decode(r.raw,p);if(!value.exactVerified)throw Error('Component conservation failed.');return{...base,...value,status:'ready'}}catch(e){return{...base,status:'blocked',reason:e.message}}});const total=checks.filter(c=>c.status==='ready').reduce((s,c)=>s+c.milliseconds,0);return{version:1,originalInput:structuredClone(d),reviews:structuredClone(rows),checks,metrics:{records:rows.length,ready:checks.filter(c=>c.status==='ready').length,held:checks.filter(c=>c.status==='held').length,blocked:checks.filter(c=>c.status==='blocked').length,exactChecks:checks.filter(c=>c.exactVerified).length,changedInterpretations:checks.filter(c=>c.differentFromBaseline).length,totalSeconds:sec(total)}}}
function cell(v){if(typeof v==='number'&&Number.isFinite(v))return String(v);let s=String(v??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"'}
export function csv(r){return [['id','source_context','original_duration','reviewed_duration','profile','format','decision','status','seconds','milliseconds','iso_duration','reason','parseFloat_hours_baseline_seconds','review_note'],...r.checks.map((c,i)=>[c.id,r.originalInput.records[i].context,r.originalInput.records[i].raw,c.raw,c.system,c.format,r.reviews[i].decision,c.status,c.seconds??'',c.milliseconds??'',c.canonical??'',c.reason||'',c.baselineSeconds??'',r.reviews[i].note])].map(row=>row.map(cell).join(',')).join('\r\n')}
export function release(r){return r.checks.filter(c=>c.status==='ready').map(c=>({id:c.id,seconds:c.seconds,milliseconds:c.milliseconds,isoDuration:c.canonical}))}
export function markdown(r){return '# Duration Quay\n\n'+r.checks.map((c,i)=>`${i+1}. ${JSON.stringify(c.id)} · ${c.status}\n   Source: ${JSON.stringify(r.originalInput.records[i])}\n   Review: ${JSON.stringify(r.reviews[i])}\n   Duration check: ${JSON.stringify(c)}`).join('\n\n')+'\n\nComputed counts: '+JSON.stringify(r.metrics)+'\n\nBaseline: parseFloat(raw) interpreted as decimal hours, compared only on ready rows. Exact parser never guesses a format or rounds. Fixed elapsed durations only, not calendar arithmetic, payroll rules or time of day.'}
