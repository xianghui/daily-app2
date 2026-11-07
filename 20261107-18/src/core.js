import Papa from 'papaparse';
export const examples={
'Support queue':`id,text
B1,I was charged twice for my subscription this month.
B2,My monthly plan has a duplicate payment on the bill.
B3,There are two identical charges on my credit card.
A1,I forgot my password and cannot sign in to my account.
A2,The password reset email never arrived and I am locked out.
D1,My parcel arrived with a broken glass bottle inside.
D2,The shipment was damaged and the product is shattered.
T1,How can I export my account data as a CSV file?`,
'Facilities queue':`id,text
H1,The meeting room is freezing and the heater is not working.
H2,The office heating has failed and the temperature is very low.
H3,It is too cold to work because the central heating is broken.
L1,The ceiling lamp keeps flickering and needs a replacement bulb.
L2,The overhead light is broken and the room is dark.
W1,Water is dripping from the ceiling after heavy rain.
W2,There is a leak in the roof and puddles on the floor.
S1,The emergency exit is blocked by boxes and cannot be opened.`};
export function inputs(text,budget){
 if(typeof text!=='string'||!text.trim())throw Error('Paste a CSV with id,text columns.');
 if(new TextEncoder().encode(text).length>18000)throw Error('CSV exceeds 18 KB.');
 const parsed=Papa.parse(text,{header:true,skipEmptyLines:'greedy'});
 if(parsed.errors.length||parsed.meta.fields?.join(',')!=='id,text')throw Error('Valid CSV must have exactly id,text headers; quote commas and newlines.');
 const rows=parsed.data;
 if(rows.length<2||rows.length>40)throw Error('Provide 2–40 tickets.');
 const ids=new Set();
 for(const r of rows){if(!r.id?.trim()||r.id.length>50||ids.has(r.id))throw Error('Each ID must be nonempty, unique and ≤50 characters.');ids.add(r.id);if(!r.text?.trim()||r.text.length>350)throw Error('Each ticket needs 1–350 characters of text.');}
 const k=Number(budget);if(!Number.isInteger(k)||k<1||k>rows.length)throw Error('Review budget must be a whole number between 1 and the ticket count.');
 return {tickets:rows.map(r=>({...r})),budget:k};
}
export function validateVectors(v,n){if(!Array.isArray(v)||v.length!==n||v.some(a=>!Array.isArray(a)||a.length!==384||a.some(x=>!Number.isFinite(x))||Math.abs(Math.hypot(...a)-1)>.03))throw Error('Malformed AI embeddings: expected one normalized 384-vector per ticket.');}
const cosine=(a,b)=>Math.max(-1,Math.min(1,a.reduce((s,x,i)=>s+x*b[i],0)));
export function propose(d,v){
 validateVectors(v,d.tickets.length);const matrix=v.map(a=>v.map(b=>cosine(a,b))),n=v.length;
 // Start at the most central real record, then cover the least represented meaning.
 const central=matrix.map(a=>a.reduce((s,x)=>s+x,0)/n);const picked=[central.indexOf(Math.max(...central))];
 while(picked.length<d.budget){let best=-1,coverage=Infinity;for(let i=0;i<n;i++){if(picked.includes(i))continue;const near=Math.max(...picked.map(j=>matrix[i][j]));if(near<coverage){best=i;coverage=near;}}picked.push(best);}
 return {matrix,rows:d.tickets.map((t,i)=>({...t,selected:picked.includes(i),suggested:picked.includes(i),rank:picked.includes(i)?picked.indexOf(i)+1:null,owner:'',note:'',reviewed:false}))};
}
export function issues(d,rows){const a=[];if(rows.length!==d.tickets.length||rows.some((r,i)=>r.id!==d.tickets[i].id||r.text!==d.tickets[i].text))a.push('Original tickets must be preserved in order.');const count=rows.filter(r=>r.selected).length;if(count<1||count>d.budget)a.push(`Select between 1 and ${d.budget} tickets; current ${count}.`);if(rows.some(r=>typeof r.selected!=='boolean'||typeof r.owner!=='string'||r.owner.length>80||typeof r.note!=='string'||r.note.length>500))a.push('Invalid reviewed fields.');return a;}
export function stats(d,rows,matrix){
 const selected=rows.flatMap((r,i)=>r.selected?[i]:[]),base=Array.from({length:d.budget},(_,i)=>i);
 const cover=chosen=>chosen.length?matrix.reduce((s,a)=>s+Math.max(...chosen.map(j=>a[j])),0)/matrix.length:null;
 const exact=new Set(d.tickets.map(t=>t.text.trim().toLowerCase())).size;
 return {total:rows.length,selected:selected.length,deferred:rows.length-selected.length,budget:d.budget,baselineCoverage:cover(base),reviewedCoverage:cover(selected),uniqueExactTexts:exact};
}
export function evidence(i,rows,matrix){const selected=rows.flatMap((r,j)=>r.selected?[j]:[]).filter(j=>j!==i);if(!selected.length)return null;const j=selected.reduce((a,b)=>matrix[i][b]>matrix[i][a]?b:a);return {id:rows[j].id,text:rows[j].text,cosine:matrix[i][j]};}
export function artifact(d,rows,matrix){const errors=issues(d,rows);if(errors.length)throw Error(errors.join(' '));if(!rows.every(r=>r.reviewed===true))throw Error('Review every decision first.');return {schema:'queue-mosaic/v1',model:'Xenova/all-MiniLM-L6-v2 q8; WASM CPU',original:structuredClone(d),rows:structuredClone(rows),sample:rows.filter(r=>r.selected).map(r=>({...r})),metrics:stats(d,rows,matrix),similarityMatrix:matrix};}
export function csvOutput(a){return Papa.unparse(a.rows.map(r=>({id:r.id,text:r.text,decision:r.selected?'sample':'defer',aiProposal:r.suggested?'sample':'defer',owner:r.owner,note:r.note,reviewed:r.reviewed})),{escapeFormulae:/^[=+\-@\t\r]/});}
export function markdown(a){const safe=s=>s.replace(/[\\`*_{}\[\]<>#|]/g,'\\$&').replaceAll('\n',' ');return '# Reviewed quality audit sample\n\n'+a.sample.map(r=>`- [ ] ${safe(r.id)} — ${safe(r.text)}\n  - Owner: ${safe(r.owner)||'Unassigned'}; note: ${safe(r.note)||'—'}`).join('\n')+'\n\n'+a.metrics.selected+' selected / '+a.metrics.total+' original tickets. All deferred records remain in JSON/CSV.\n';}
