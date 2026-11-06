import Papa from 'papaparse';
export const examples={
 'Workshop setup':{requests:`id,description,quantity,unit
R1,Portable electric drill for making holes,2,each
R2,Safety glasses eye protection,4,each
R3,Adhesive tape for packing boxes,3,roll
R4,Heavy duty scissors for cutting fabric,1,each`,stock:`id,description,quantity,unit
S1,Cordless power drilling tool,1,each
S2,Protective eyewear safety goggles,6,each
S3,Shipping carton sealing tape,2,roll
S4,Metal fabric cutting shears,2,each`},
 'Community kitchen':{requests:`id,description,quantity,unit
K1,Large pot for boiling soup,2,each
K2,Kitchen scales to weigh ingredients,1,each
K3,Heat resistant gloves for oven,3,pair
K4,Vegetable peeling hand tool,2,each`,stock:`id,description,quantity,unit
I1,Stainless steel stockpot cooking vessel,3,each
I2,Digital food weighing balance,2,each
I3,Insulated oven mitts,2,pair
I4,Manual potato peeler,4,each`}
};
const fields=['id','description','quantity','unit'];
function parse(text,max){if(!text.trim()||text.length>30000)throw Error('Enter CSV with 1–30,000 characters.');const p=Papa.parse(text,{header:true,skipEmptyLines:'greedy'});if(p.errors.length||p.meta.fields?.join(',')!==fields.join(','))throw Error('Use exact CSV headers: '+fields.join(',')+'. Check quoting and column counts.');if(!p.data.length||p.data.length>max)throw Error('Require 1–'+max+' records per CSV.');const rows=p.data.map(r=>{for(const f of fields)if(!r[f]?.trim()||r[f].length>400)throw Error('Every field needs 1–400 characters.');if(!/^[A-Za-z0-9_-]{1,24}$/.test(r.id.trim()))throw Error('IDs require 1–24 letters, digits, _ or -.');if(!/^\d{1,4}$/.test(r.quantity.trim())||+r.quantity<1)throw Error('Quantities must be whole numbers from 1 to 9999.');if(!/^[a-zA-Z]{1,16}$/.test(r.unit.trim()))throw Error('Use a plain unit such as each, pair, box or roll (1–16 letters).');return {id:r.id.trim(),description:r.description.trim(),quantity:+r.quantity,unit:r.unit.trim().toLowerCase()};});if(new Set(rows.map(r=>r.id)).size!==rows.length)throw Error('IDs must be unique within each CSV.');return rows;}
export function inputs(requests,stock){return {requests:parse(requests,30),stock:parse(stock,30)};}
function allocate(data,rankings,threshold){const remaining=Object.fromEntries(data.stock.map(s=>[s.id,s.quantity]));return data.requests.map((r,i)=>{const candidates=rankings[i].filter(c=>c.unit===r.unit);const chosen=candidates.find(c=>c.score>=threshold&&remaining[c.id]>0);const reuse=chosen?Math.min(r.quantity,remaining[chosen.id]):0;if(chosen)remaining[chosen.id]-=reuse;return {...r,stockId:chosen?.id||'',reuse,note:'',suggested:chosen?.id||'',alternatives:candidates.slice(0,5)};});}
export function suggest(data,vectors,threshold){if(!Number.isFinite(threshold)||threshold<0||threshold>1)throw Error('Invalid similarity threshold.');if(!Array.isArray(vectors)||vectors.length!==data.requests.length+data.stock.length||!vectors.every(v=>Array.isArray(v)&&v.length===384&&v.every(Number.isFinite)&&Math.abs(v.reduce((s,x)=>s+x*x,0)-1)<0.05))throw Error('Malformed AI output: expected normalized finite 384-dimensional vectors.');const ranked=data.requests.map((r,i)=>data.stock.map((s,j)=>({...s,score:vectors[i].reduce((n,v,k)=>n+v*vectors[data.requests.length+j][k],0)})).sort((a,b)=>b.score-a.score));return allocate(data,ranked,threshold);}
export function baseline(data){const rankings=data.requests.map(r=>data.stock.filter(s=>s.description.toLowerCase()===r.description.toLowerCase()).map(s=>({...s,score:1})));return allocate(data,rankings,1);}
export function artifact(rows,stock,sourceRequests){if(!rows.length||rows.length!==sourceRequests.length||new Set(rows.map(r=>r.id)).size!==rows.length)throw Error('Source records are missing or duplicated.');const used=Object.fromEntries(stock.map(s=>[s.id,0]));for(let i=0;i<rows.length;i++){const r=rows[i],s=stock.find(s=>s.id===r.stockId),o=sourceRequests[i];if(fields.some(f=>r[f]!==o[f]))throw Error('Original source fields must remain unchanged.');if(!Number.isInteger(r.reuse)||r.reuse<0||r.reuse>r.quantity||typeof r.note!=='string'||r.note.length>500)throw Error('Reuse must be a whole number between zero and requested quantity; notes max 500 characters.');if(r.stockId&&(!s||s.unit!==r.unit))throw Error('Stock units must exactly match the request unit. No pack conversion.');if(r.reuse&&!s)throw Error('Choose stock before reusing quantity.');if(s)used[s.id]+=r.reuse;}
for(const s of stock)if(used[s.id]>s.quantity)throw Error('Over-allocated '+s.id+': '+used[s.id]+' requested from '+s.quantity+' in stock. Reduce allocations.');return {schema:'stock-again/v1',model:'Xenova/all-MiniLM-L6-v2 q8',policy:'Input-order greedy allocation; one stock source per request, exact unit match; semantic similarity is not compatibility verification.',requests:structuredClone(sourceRequests),records:rows.map(r=>({...r,buy:r.quantity-r.reuse})),stock:stock.map(s=>({...s,used:used[s.id],remaining:s.quantity-used[s.id]}))};}
export function csvOutput(out){return Papa.unparse(out.records.map(r=>({id:r.id,description:r.description,requested:r.quantity,unit:r.unit,stock_id:r.stockId,reuse:r.reuse,buy:r.buy,note:r.note})),{escapeFormulae:/^[=+\-@\t\r]/});}
export function metrics(rows){return {covered:rows.filter(r=>r.reuse===r.quantity).length,purchase:rows.filter(r=>r.reuse<r.quantity).length};}
