import Papa from 'papaparse';
export const examples={
'Event launch':`id,task,produces,needs
A,Confirm venue,Confirmed venue address and room capacity,-
B,Design invitation,Invitation artwork with event location,Venue address and capacity confirmed
C,Send invitations,Invitations delivered to guests,Completed invitation design`,
'Bakery opening':`id,task,produces,needs
B1,Order ingredients,Flour sugar and butter delivered,-
B2,Bake pastries,Fresh baked croissants and cakes,Delivered baking ingredients
B3,Stock counter,Display case filled with pastries,Finished cakes and croissants`,
};
export function parse(text,floor){
 if(!text.trim()||text.length>16000)throw Error('Enter a CSV of 1–12 tasks, at most 16 KB.');
 if(!String(floor).trim()||!Number.isFinite(Number(floor))||floor<.2||floor>.95)throw Error('Similarity floor must be 0.20–0.95.');
 const p=Papa.parse(text,{header:true,skipEmptyLines:'greedy'});
 if(p.errors.length||['id','task','produces','needs'].some(k=>!p.meta.fields?.includes(k))||p.meta.fields.length!==4)throw Error('Use valid CSV with exactly id,task,produces,needs headers.');
 if(!p.data.length||p.data.length>12)throw Error('Use 1–12 tasks.');
 const ids=new Set();for(const r of p.data){for(const k of ['id','task','produces','needs'])if(typeof r[k]!=='string'||!r[k].trim()||r[k].length>(k==='id'?40:240))throw Error('Every field is required: id ≤40 characters; descriptions ≤240. Use - for no prerequisite.');if(ids.has(r.id))throw Error('Task IDs must be unique.');ids.add(r.id);}
 return {tasks:p.data,floor:Number(floor)};
}
export function suggest(d,v){const n=d.tasks.length;if(!Array.isArray(v)||v.length!==n*2||v.some(a=>!Array.isArray(a)||a.length!==384||a.some(x=>!Number.isFinite(x))||Math.abs(a.reduce((s,x)=>s+x*x,0)-1)>.03))throw Error('Invalid AI vector schema; expected normalized finite 384-dimensional embeddings.');return d.tasks.map((r,i)=>{const scores=d.tasks.map((_,j)=>i===j?-1:v[n+i].reduce((s,x,k)=>s+x*v[j][k],0));const best=scores.indexOf(Math.max(...scores));const parent=r.needs==='-'||scores[best]<d.floor?'':d.tasks[best].id;return {id:r.id,parent,suggested:parent,scores,reviewed:false,note:''};});}
export function graph(d,rows){const remaining=new Set(d.tasks.map(r=>r.id)),order=[],levels={};for(const r of rows)if(!remaining.has(r.id)||r.parent===r.id||r.parent&&!remaining.has(r.parent))throw Error('Invalid dependency or self-link.');if(rows.length!==remaining.size||new Set(rows.map(r=>r.id)).size!==remaining.size)throw Error('Lost or repeated tasks.');while(remaining.size){const ready=rows.filter(r=>remaining.has(r.id)&&(!r.parent||!remaining.has(r.parent)));if(!ready.length)return {order,cycle:[...remaining],levels};for(const r of ready){order.push(r.id);levels[r.id]=r.parent?levels[r.parent]+1:1;remaining.delete(r.id);}}return {order,cycle:[],levels};}
export function artifact(d,rows){if(!rows.every(r=>r.reviewed))throw Error('Review all tasks first.');const g=graph(d,rows);if(g.cycle.length)throw Error('Cycle detected. Remove a dependency before applying.');return {schema:'dependency-loom/v1',original:d.tasks,floor:d.floor,order:g.order,rows:rows.map(r=>({...r,source:d.tasks.find(t=>t.id===r.id),stage:g.levels[r.id]})),metrics:{tasks:rows.length,linked:rows.filter(r=>r.parent).length,stages:Math.max(...Object.values(g.levels)),exactBaseline:d.tasks.filter((r,i)=>r.needs!=='-'&&d.tasks.some((t,j)=>i!==j&&t.produces.toLowerCase()===r.needs.toLowerCase())).length}};}
export function csvOutput(a){return Papa.unparse(a.order.map((id,i)=>{const r=a.rows.find(t=>t.id===id);return {position:i+1,id,task:r.source.task,produces:r.source.produces,needs:r.source.needs,depends_on:r.parent,stage:r.stage,note:r.note};}),{escapeFormulae:/^[=+\-@\t\r]/});}
