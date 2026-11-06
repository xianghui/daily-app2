import Papa from 'papaparse';
export const examples={
 'Commerce release':{changes:`id,description,priority
C1,Customers can pay by credit card at checkout,5
C2,Customers can reset a forgotten password by email,4
C3,Warehouse inventory decreases when an order is placed,3`,tests:`id,description,minutes
T0,Check homepage banner colors and fonts,4
T1,Complete a purchase using Visa payment details,6
T2,Recover account access using the password reset link,5
T3,Verify inventory is reduced after a customer places an order,4
T4,Search the product catalog by keyword,3`},
 'Clinic release':{changes:`id,description,priority
H1,Patients can book a medical appointment with a doctor,5
H2,Medication allergy warnings display before prescribing,5
H3,Download a patient billing invoice as PDF,2`,tests:`id,description,minutes
K0,Verify the login page logo colors,3
K1,Schedule a patient consultation in the physician calendar,5
K2,Check alerts when prescribing drugs that cause allergic reactions,6
K3,Export a medical bill to a printable PDF file,4
K4,Search the staff directory by name,2`}
};
function parse(text,kind){
 if(typeof text!=='string'||!text.trim())throw Error('Both CSV inputs are required.');
 if(text.length>30000)throw Error('Each CSV must be at most 30,000 characters.');
 const fields=kind==='changes'?['id','description','priority']:['id','description','minutes'];
 const p=Papa.parse(text,{header:true,skipEmptyLines:'greedy'});
 if(p.errors.length||p.meta.fields?.join(',')!==fields.join(','))throw Error('Expected CSV header: '+fields.join(','));
 const limit=kind==='changes'?20:30;
 if(!p.data.length||p.data.length>limit)throw Error('Use 1–'+limit+' '+kind+' rows.');
 const ids=new Set();return p.data.map(r=>{
 const id=r.id.trim(),description=r.description.trim(),key=fields[2],value=Number(r[key]);
 if(!/^[a-zA-Z0-9_-]{1,32}$/.test(id)||ids.has(id))throw Error('IDs must be unique per list, 1–32 letters, numbers, _ or -.');
 ids.add(id);
 if(!description||description.length>400)throw Error('Descriptions must be 1–400 characters.');
 if(!Number.isInteger(value)||value<1||value>(kind==='changes'?5:120))throw Error(key+' must be a whole number from 1 to '+(kind==='changes'?5:120)+'.');
 return {id,description,[key]:value};});
}
export function inputs(changes,tests,budget,threshold){if(!Number.isInteger(+budget)||+budget<1||+budget>480)throw Error('Budget must be 1–480 whole minutes.');if(!Number.isFinite(+threshold)||+threshold<.2||+threshold>.8)throw Error('Similarity threshold must be 0.2–0.8.');return {changes:parse(changes,'changes'),tests:parse(tests,'tests'),budget:+budget,threshold:+threshold};}
export function validateVectors(vectors,n){if(!Array.isArray(vectors)||vectors.length!==n||vectors.some(v=>!Array.isArray(v)||v.length!==384||v.some(x=>!Number.isFinite(x))))throw Error('Malformed AI embeddings: expected one finite 384-dimensional vector per description.');}
export function coverage(rows,data){const selected=rows.filter(r=>r.selected),minutes=selected.reduce((s,r)=>s+r.minutes,0);const changes=data.changes.map(c=>{const matches=selected.flatMap(t=>t.matches.filter(m=>m.changeId===c.id&&m.score>=data.threshold).map(m=>({testId:t.id,score:m.score})));return {...c,covered:matches.length>0,matches};});return {minutes,covered:changes.filter(c=>c.covered).length,weight:changes.filter(c=>c.covered).reduce((s,c)=>s+c.priority,0),changes};}
export function baseline(rows,data){let left=data.budget;return rows.map(r=>{const selected=r.minutes<=left;if(selected)left-=r.minutes;return {...r,selected};});}
export function suggest(data,vectors){validateVectors(vectors,data.changes.length+data.tests.length);const nc=data.changes.length;let rows=data.tests.map((t,i)=>({...t,selected:false,note:'',matches:data.changes.map((c,j)=>({changeId:c.id,score:Math.max(-1,Math.min(1,vectors[j].reduce((s,v,k)=>s+v*vectors[nc+i][k],0)))}))}));let left=data.budget;const covered=new Set();
 while(true){let best=null,gainBest=0;for(const r of rows){if(r.selected||r.minutes>left)continue;const gain=r.matches.filter(m=>m.score>=data.threshold&&!covered.has(m.changeId)).reduce((s,m)=>s+data.changes.find(c=>c.id===m.changeId).priority,0)/r.minutes;if(gain>gainBest+1e-12){gainBest=gain;best=r;}}
 if(!best)break;best.selected=true;left-=best.minutes;best.matches.filter(m=>m.score>=data.threshold).forEach(m=>covered.add(m.changeId));}
 return rows.map(r=>({...r,suggested:r.selected}));}
export function artifact(rows,data){if(!Array.isArray(rows)||rows.length!==data.tests.length||new Set(rows.map(r=>r.id)).size!==rows.length)throw Error('Every test must be preserved exactly once.');for(let i=0;i<rows.length;i++){const r=rows[i],s=data.tests[i];if(r.id!==s.id||r.description!==s.description||typeof r.selected!=='boolean'||!Number.isInteger(r.minutes)||r.minutes<1||r.minutes>120||typeof r.note!=='string'||r.note.length>500)throw Error('Invalid review: retain all tests; use whole durations 1–120 and notes up to 500 characters.');if(!Array.isArray(r.matches)||r.matches.length!==data.changes.length||r.matches.some((m,j)=>m.changeId!==data.changes[j].id||!Number.isFinite(m.score)||m.score< -1||m.score>1))throw Error('Invalid semantic result schema.');}
 const summary=coverage(rows,data);if(summary.minutes>data.budget)throw Error('Over budget: '+summary.minutes+' / '+data.budget+' minutes. Deselect tests or correct durations.');return {schema:'test-loom/v1',model:'Xenova/all-MiniLM-L6-v2 q8',method:'Mean-pooled normalized embeddings; cosine threshold; greedy weighted-coverage/minute selection. Human review required.',budget:data.budget,threshold:data.threshold,summary,original:structuredClone(data),tests:structuredClone(rows)};}
export function csvOutput(a){return Papa.unparse(a.tests.map(t=>({id:t.id,description:t.description,minutes:t.minutes,selected:t.selected?'yes':'no',suggested:t.suggested?'yes':'no',covered_change_ids:t.matches.filter(m=>m.score>=a.threshold).map(m=>m.changeId).join(';'),review_note:t.note})),{escapeFormulae:/^[=+\-@\t\r]/});}
export function markdown(a){return '# Reviewed release QA plan\n\nBudget: '+a.summary.minutes+' / '+a.budget+' minutes. Semantic coverage: '+a.summary.covered+' / '+a.original.changes.length+' changes (not execution evidence).\n\n'+a.tests.map(t=>'- ['+(t.selected?'x':' ')+'] '+t.id+' · '+t.description.replace(/\n/g,' ')+' ('+t.minutes+' min)'+(t.note?' — '+t.note.replace(/\n/g,' '):'')).join('\n')+'\n\n## Change coverage\n'+a.summary.changes.map(c=>'- '+c.id+': '+(c.covered?c.matches.map(m=>m.testId).join(', '):'GAP — write a test or review the threshold')+' — '+c.description).join('\n');}
