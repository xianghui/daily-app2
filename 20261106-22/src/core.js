import Papa from 'papaparse';
export const examples={
 'Store changes':{changes:`id,description,priority
C1,Customers must pay using credit cards at checkout,5
C2,Account recovery now uses a password reset email link,4
C3,Warehouse inventory decreases when an order is placed,3`,articles:`id,description,owner
A0,How to choose homepage banner colors,Design
A1,Pay for purchases using Visa and Mastercard,Billing
A2,Recover account access after forgetting your password,Support
A3,Stock levels after a customer places an order,Operations
A4,Finding the office address and parking,People`},
 'Clinic changes':{changes:`id,description,priority
H1,Patients can book a medical appointment with a doctor,5
H2,Medication allergy warnings display before prescribing,5
H3,Download a patient billing invoice as PDF,2`,articles:`id,description,owner
K0,Choosing fonts for the reception sign,Design
K1,Schedule a patient consultation in the physician calendar,Reception
K2,Alerts when prescribing drugs that cause allergic reactions,Clinical
K3,Export a medical bill to a printable PDF file,Billing
K4,Staff holiday policy and annual leave,People`}}
function parse(text,kind){
 if(typeof text!=='string'||!text.trim())throw Error('Both CSV inputs are required.');
 if(text.length>30000)throw Error('Each CSV must be at most 30,000 characters.');
 const fields=kind==='changes'?['id','description','priority']:['id','description','owner'];
 const p=Papa.parse(text,{header:true,skipEmptyLines:'greedy'});
 if(p.errors.length||p.meta.fields?.join(',')!==fields.join(','))throw Error('Expected CSV header: '+fields.join(','));
 const limit=kind==='changes'?20:30;
 if(!p.data.length||p.data.length>limit)throw Error('Use 1–'+limit+' '+kind+' rows.');
 const ids=new Set();return p.data.map(r=>{const id=r.id.trim(),description=r.description.trim();
 if(!/^[a-zA-Z0-9_-]{1,32}$/.test(id)||ids.has(id))throw Error('IDs must be unique per list, 1–32 letters, numbers, _ or -.');ids.add(id);
 if(!description||description.length>400)throw Error('Descriptions must be 1–400 characters.');
 if(kind==='changes'){const priority=Number(r.priority);if(!Number.isInteger(priority)||priority<1||priority>5)throw Error('Priority must be a whole number 1–5.');return {id,description,priority};}
 if(!r.owner.trim()||r.owner.length>80)throw Error('Owner must be 1–80 characters.');return {id,description,owner:r.owner.trim()};});
}
export function inputs(changes,articles,threshold){if(!Number.isFinite(+threshold)||+threshold<.2||+threshold>.8)throw Error('Similarity threshold must be 0.2–0.8.');return {changes:parse(changes,'changes'),articles:parse(articles,'articles'),threshold:+threshold};}
export function validateVectors(vectors,n){if(!Array.isArray(vectors)||vectors.length!==n||vectors.some(v=>!Array.isArray(v)||v.length!==384||v.some(x=>!Number.isFinite(x))))throw Error('Malformed AI embeddings: expected one finite 384-dimensional vector per description.');}
export function suggest(data,vectors){const nc=data.changes.length;validateVectors(vectors,nc+data.articles.length);return data.articles.map((a,i)=>{const matches=data.changes.map((c,j)=>({changeId:c.id,score:Math.max(-1,Math.min(1,vectors[j].reduce((s,v,k)=>s+v*vectors[nc+i][k],0)))}));return {...a,matches,suggested:matches.some(m=>m.score>=data.threshold)?'Check for update':'No link found',action:matches.some(m=>m.score>=data.threshold)?'Check for update':'No link found',note:''};});}
const actions=['Check for update','Update required','No change needed','No link found'];
export function metrics(rows,data){return {flagged:rows.filter(r=>r.matches.some(m=>m.score>=data.threshold)).length,queued:rows.filter(r=>['Check for update','Update required'].includes(r.action)).length,reviewed:rows.filter(r=>['Update required','No change needed'].includes(r.action)).length,baseline:data.articles.filter(a=>data.changes.some(c=>a.description.toLowerCase().includes(c.description.toLowerCase()))).length};}
export function artifact(rows,data){if(!Array.isArray(rows)||rows.length!==data.articles.length||new Set(rows.map(r=>r.id)).size!==rows.length)throw Error('Every article must be preserved exactly once.');rows.forEach((r,i)=>{const a=data.articles[i];if(r.id!==a.id||r.description!==a.description||!actions.includes(r.action)||!actions.includes(r.suggested)||typeof r.owner!=='string'||!r.owner.trim()||r.owner.length>80||typeof r.note!=='string'||r.note.length>500)throw Error('Invalid review: retain all articles, select an action, and use owner 1–80 / note up to 500 characters.');if(!Array.isArray(r.matches)||r.matches.length!==data.changes.length||r.matches.some((m,j)=>m.changeId!==data.changes[j].id||!Number.isFinite(m.score)||m.score< -1||m.score>1))throw Error('Invalid semantic result schema.');});return {schema:'shelf-life/v1',model:'Xenova/all-MiniLM-L6-v2 q8',threshold:data.threshold,original:structuredClone(data),articles:structuredClone(rows),summary:metrics(rows,data)};}
export function csvOutput(a){return Papa.unparse(a.articles.map(r=>({id:r.id,description:r.description,owner:r.owner,action:r.action,suggested:r.suggested,linked_change_ids:r.matches.filter(m=>m.score>=a.threshold).map(m=>m.changeId).join(';'),review_note:r.note})),{escapeFormulae:/^[=+\-@\t\r]/});}
export function markdown(a){return '# Knowledge update queue\n\n'+a.summary.queued+' queued / '+a.articles.length+' articles. Semantic suggestions require review.\n\n'+a.articles.map(r=>'- ['+(['Update required','No change needed'].includes(r.action)?'x':' ')+'] '+r.id+' · '+r.description.replace(/\n/g,' ')+' — '+r.action+' · '+r.owner+(r.note?' — '+r.note.replace(/\n/g,' '):'')).join('\n');}
