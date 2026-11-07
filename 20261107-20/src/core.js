import Papa from 'papaparse';
export const examples={
'Support edits':`id,original,revision
S1,You can reset your password using the link in the sign-in screen.,Use the password recovery link on the login page to regain access.
S2,Your refund will arrive within 14 days.,Your refund will arrive within 7 days.
S3,Your parcel has been dispatched and is on its way to you.,The library is closed for roof repairs this weekend.
S4,Download your invoices from the billing section of your account.,Find your bills in account settings under billing and download them.`,
'Facilities edits':`id,original,revision
F1,Please turn off the lights when you leave the meeting room.,Switch off the meeting room lighting before leaving.
F2,The office opens at 08:30 and closes at 18:00.,The office opens at 09:30 and closes at 18:00.
F3,Report leaking pipes to the building maintenance team.,Bring a passport when collecting your airline ticket.
F4,Keep the emergency exit clear of boxes and furniture.,Do not block the fire exit with furniture or cartons.`};
export function inputs(text,threshold){
 if(typeof text!=='string'||!text.trim())throw Error('Paste a CSV with id,original,revision columns.');
 if(new TextEncoder().encode(text).length>24000)throw Error('CSV exceeds 24 KB.');
 const p=Papa.parse(text,{header:true,skipEmptyLines:'greedy'});
 if(p.errors.length||p.meta.fields?.join(',')!=='id,original,revision')throw Error('Valid CSV must have exactly id,original,revision headers; quote commas and newlines.');
 if(p.data.length<1||p.data.length>24)throw Error('Provide 1–24 paired edits.');
 const ids=new Set();for(const r of p.data){if(!r.id?.trim()||r.id.length>50||ids.has(r.id))throw Error('Each ID must be unique, nonempty and ≤50 characters.');ids.add(r.id);for(const k of ['original','revision'])if(!r[k]?.trim()||r[k].length>350)throw Error('Original and revision each need 1–350 characters.');}
 const t=Number(threshold);if(!Number.isFinite(t)||t<.1||t>.95)throw Error('Similarity threshold must be between 0.10 and 0.95.');
 return {pairs:p.data.map(r=>({...r})),threshold:t};
}
export function validateVectors(v,n){if(!Array.isArray(v)||v.length!==n||v.some(a=>!Array.isArray(a)||a.length!==384||a.some(x=>!Number.isFinite(x))||Math.abs(Math.hypot(...a)-1)>.03))throw Error('Malformed AI embeddings: expected one normalized 384-vector per text.');}
const cosine=(a,b)=>Math.max(-1,Math.min(1,a.reduce((s,x,i)=>s+x*b[i],0)));
// Numeric literal multiset, deliberately conservative: formatting changes are warnings too.
export const numbers=s=>(s.match(/\d+(?:[.,:]\d+)*/g)||[]).sort();
export function numberChanges(a,b){return JSON.stringify(numbers(a))!==JSON.stringify(numbers(b));}
export function propose(d,v){validateVectors(v,d.pairs.length*2);return d.pairs.map((p,i)=>{const score=cosine(v[i*2],v[i*2+1]),numeric=numberChanges(p.original,p.revision),flagged=numeric||score<d.threshold;return {...p,score,numeric,flagged,suggested:flagged?'hold':'revision',decision:flagged?'hold':'revision',owner:'',note:'',reviewed:false};});}
export function issues(d,rows){const a=[];if(rows.length!==d.pairs.length||rows.some((r,i)=>['id','original','revision'].some(k=>r[k]!==d.pairs[i][k])))a.push('Preserve every original paired record in source order.');for(const r of rows){if(!['hold','original','revision'].includes(r.decision)||typeof r.owner!=='string'||r.owner.length>80||typeof r.note!=='string'||r.note.length>500)a.push('Invalid review fields.');if(r.numeric&&r.decision==='revision')a.push(`${r.id}: numeric changes block release of the revision; hold or restore the original.`);if(r.score<d.threshold&&r.decision==='revision'&&!r.note.trim())a.push(`${r.id}: explain a manual override for low similarity.`);}return [...new Set(a)];}
export function stats(d,rows){return {total:rows.length,exactChanged:d.pairs.filter(r=>r.original!==r.revision).length,flagged:rows.filter(r=>r.flagged).length,numericWarnings:rows.filter(r=>r.numeric).length,lowSimilarity:rows.filter(r=>r.score<d.threshold).length,held:rows.filter(r=>r.decision==='hold').length,released:rows.filter(r=>r.decision!=='hold').length};}
export function artifact(d,rows){const e=issues(d,rows);if(e.length)throw Error(e.join(' '));if(!rows.every(r=>r.reviewed===true))throw Error('Review every decision before applying.');return {schema:'rewrite-guard/v1',model:'Xenova/all-MiniLM-L6-v2 q8; WASM CPU',original:structuredClone(d),rows:rows.map(r=>({...r,output:r.decision==='hold'?null:r[r.decision]})),metrics:stats(d,rows)};}
export function csvOutput(a){return Papa.unparse(a.rows.map(r=>({id:r.id,original:r.original,revision:r.revision,cosine:r.score,numericWarning:r.numeric,aiProposal:r.suggested,decision:r.decision,output:r.output??'',owner:r.owner,note:r.note,reviewed:r.reviewed})),{escapeFormulae:/^[=+\-@\t\r]/});}
export function markdown(a){const safe=s=>s.replace(/[\\`*_{}[\]<>#|]/g,'\\$&').replaceAll('\n',' ');return '# Reviewed copy register\n\n'+a.rows.map(r=>`## ${safe(r.id)} — ${r.decision==='hold'?'HOLD':r.decision==='original'?'ORIGINAL RESTORED':'REVISION APPROVED'}\n\n${r.output===null?'Not released.':safe(r.output)}\n\nOwner: ${safe(r.owner)||'Unassigned'} · Note: ${safe(r.note)||'—'}\n`).join('\n')+'\nHeld records have no released output. Consult JSON/CSV for all source pairs and evidence.\n';}
