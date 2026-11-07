import Papa from 'papaparse';
export const examples={
'Service launch':{claims:`id,text
C1,Customers can recover their account using a password reset link.
C2,Refunds are processed within 7 days.
C3,Our packaging is made from recycled paper.
C4,Bills can be downloaded from account billing settings.`,sources:`id,text
S1,Use the password recovery link on the login page to regain access.
S2,Refunds are processed within 14 days.
S3,Download invoices from the billing section of your account.`},
'Community venue':{claims:`id,text
V1,Switch off the room lights before leaving.
V2,The workshop accommodates 50 visitors.
V3,Bring your passport to collect an airline ticket.
V4,Report dripping pipes to the maintenance team.`,sources:`id,text
R1,Please turn off the meeting room lighting when you leave.
R2,The workshop accommodates 30 visitors.
R3,Building maintenance handles water leaks and plumbing repairs.`}};
function parse(text,label){
 if(typeof text!=='string'||!text.trim())throw Error(`Paste ${label} CSV with id,text headers.`);
 if(new TextEncoder().encode(text).length>18000)throw Error(`${label} CSV exceeds 18 KB.`);
 const p=Papa.parse(text,{header:true,skipEmptyLines:'greedy'});
 if(p.errors.length||p.meta.fields?.join(',')!=='id,text')throw Error(`${label}: use valid CSV with exactly id,text headers; quote commas/newlines.`);
 if(!p.data.length||p.data.length>24)throw Error(`${label}: provide 1–24 records.`);
 const seen=new Set();return p.data.map(r=>{if(typeof r.id!=='string'||!r.id.trim()||r.id.length>50||seen.has(r.id)||typeof r.text!=='string'||!r.text.trim()||r.text.length>350)throw Error(`${label}: unique nonempty IDs ≤50 characters and text 1–350 characters required.`);seen.add(r.id);return {id:r.id,text:r.text};});
}
export function inputs(claims,sources,threshold){const t=Number(threshold);if(!Number.isFinite(t)||t<0.1||t>0.95)throw Error('Similarity threshold must be 0.1–0.95.');return {claims:parse(claims,'Claims'),sources:parse(sources,'Sources'),threshold:t};}
export function numbers(t){return (t.match(/\d+(?:[.,]\d+)*/g)||[]).sort();}
export function numericGap(claim,source){const a=numbers(claim),b=numbers(source);return a.some(x=>!b.includes(x));}
export function validateVectors(v,n){if(!Array.isArray(v)||v.length!==n||v.some(a=>!Array.isArray(a)||a.length!==384||a.some(x=>!Number.isFinite(x))))throw Error('Malformed AI vectors. Expected one finite 384-dimensional embedding per text.');}
export function cosine(a,b){return Math.max(-1,Math.min(1,a.reduce((s,x,i)=>s+x*b[i],0)));}
export function propose(d,v){validateVectors(v,d.claims.length+d.sources.length);return d.claims.map((c,i)=>{const ranked=d.sources.map((s,j)=>({id:s.id,score:cosine(v[i],v[d.claims.length+j])})).sort((a,b)=>b.score-a.score);const top=ranked[0],source=d.sources.find(s=>s.id===top.id),gap=numericGap(c.text,source.text);return {...c,candidates:ranked,sourceId:top.id,score:top.score,numeric:gap,suggested:top.score<d.threshold||gap?'hold':'verify',decision:'hold',note:'',owner:'',reviewed:false};});}
export function linked(d,r){return d.sources.find(s=>s.id===r.sourceId);}
export function issues(d,rows){return rows.flatMap(r=>{const s=linked(d,r);if(!['hold','supported','remove'].includes(r.decision))return ['Invalid decision.'];if(r.decision==='supported'&&(!s||numericGap(r.text,s.text)))return [`${r.id}: unsupported numeric literals block supported status. Correct source input or hold.`];if(r.decision==='supported'&&r.note.trim().length<8)return [`${r.id}: add a verification note of at least 8 characters; similarity never proves support.`];return [];});}
export function stats(d,rows){return {total:rows.length,exactMatches:d.claims.filter(c=>d.sources.some(s=>s.text===c.text)).length,candidates:rows.filter(r=>r.score>=d.threshold&&!r.numeric).length,supported:rows.filter(r=>r.decision==='supported').length,held:rows.filter(r=>r.decision==='hold').length,removed:rows.filter(r=>r.decision==='remove').length};}
export function artifact(d,rows){if(rows.length!==d.claims.length||rows.some((r,i)=>r.id!==d.claims[i].id||r.text!==d.claims[i].text||!r.reviewed)||issues(d,rows).length)throw Error('Review every unchanged claim and resolve verification guards first.');return {app:'Claim Ledger',version:1,model:'Xenova/all-MiniLM-L6-v2 q8',original:d,metrics:stats(d,rows),rows:rows.map(r=>({...r,sourceText:linked(d,r)?.text??'',output:r.decision==='supported'?r.text:null}))};}
export function csvOutput(a){return Papa.unparse(a.rows.map(r=>({id:r.id,claim:r.text,source_id:r.sourceId,source:r.sourceText,similarity:r.score,decision:r.decision,owner:r.owner,note:r.note,reviewed:r.reviewed,output:r.output??''})),{escapeFormulae:/^[=+\-@\t\r]/});}
export function markdown(a){return '# Claim Ledger — reviewed publication register\n\nSimilarity is not proof. Human decisions follow.\n\n'+a.rows.map(r=>`## ${r.id}: ${r.decision}\n\n${r.text}\n\nSource ${r.sourceId}: ${r.sourceText}\n\nReviewer: ${r.owner}\n\nVerification: ${r.note}\n`).join('\n');}
