import Papa from 'papaparse';
export const examples=[
{name:'Community parcels',data:{rules:[
{id:'library',label:'Library collection point',description:'Public library books reading room catalogue lending library collection point'},
{id:'sports',label:'Recreation centre',description:'Swimming pool sports recreation gym fitness leisure centre'},
{id:'waste',label:'Recycling depot',description:'Waste recycling rubbish collection sorting depot bins'}],warehouses:[{id:'north',supply:8},{id:'south',supply:4}],routes:[
{from:'north',to:'library',cap:8,cents:100},{from:'north',to:'sports',cap:8,cents:200},{from:'north',to:'waste',cap:8,cents:300},
{from:'south',to:'library',cap:4,cents:150},{from:'south',to:'sports',cap:4,cents:900},{from:'south',to:'waste',cap:4,cents:900}],records:[
{id:'C1',description:'Deliver the standard parcel to the book lending and reading building',quantity:2,owner:'Library operations'},
{id:'C2',description:'Standard parcels for the swimming and gym facility',quantity:4,owner:'Recreation desk'},
{id:'C3',description:'Standard parcels for the rubbish sorting and recycling site',quantity:4,owner:'Collection desk'},
{id:'C4',description:'Two more standard parcels for the public library catalogue desk',quantity:2,owner:'Library operations'}]}},
{name:'Workshop deliveries',data:{rules:[
{id:'charge',label:'Battery charging zone',description:'Electric vehicle battery charging electricity car recharge zone'},
{id:'wash',label:'Vehicle washing zone',description:'Vehicle car washing cleaning exterior water shampoo wash zone'},
{id:'inflate',label:'Tyre inflation zone',description:'Tyre tire air pressure inflation pump wheel service zone'}],warehouses:[{id:'main',supply:6},{id:'annex',supply:3}],routes:[
{from:'main',to:'charge',cap:6,cents:10},{from:'main',to:'wash',cap:6,cents:20},{from:'main',to:'inflate',cap:6,cents:30},
{from:'annex',to:'charge',cap:3,cents:15}],records:[
{id:'W1',description:'Take standard consumable packs to the electric car recharging area',quantity:2,owner:'Energy operations'},
{id:'W2',description:'Standard packs requested at the exterior shampoo and rinse area',quantity:3,owner:'Wash operations'},
{id:'W3',description:'Bring standard packs to the tire air pressure pumps',quantity:3,owner:'Forecourt'},
{id:'W4',description:'One more standard pack for electric van battery recharging',quantity:1,owner:'Energy operations'}]}}];
const err=m=>{throw Error(m)},txt=(s,n)=>typeof s==='string'&&s.trim().length>0&&s.length<=n,int=(x,a,b)=>Number.isInteger(x)&&x>=a&&x<=b;
export function parse(s){if(typeof s!=='string'||!s.trim()||s.length>30000)err('Enter source JSON; limit 30,000 characters.');let d;try{d=JSON.parse(s)}catch{err('Invalid JSON. Use an example or repair the source.')}
if(!d||!Array.isArray(d.rules)||d.rules.length<2||d.rules.length>6||!Array.isArray(d.records)||!d.records.length||d.records.length>32||!Array.isArray(d.warehouses)||d.warehouses.length<1||d.warehouses.length>6||!Array.isArray(d.routes)||d.routes.length>36)err('Require 2–6 destinations, 1–32 requests, 1–6 warehouses and at most 36 lanes.');
for(const a of[d.rules,d.records,d.warehouses])if(a.some(x=>!x||!txt(x.id,50))||new Set(a.map(x=>x.id)).size!==a.length)err('IDs must be unique nonempty strings in each list.');
for(const r of d.rules)if(!txt(r.label,100)||!txt(r.description,300))err('Destination needs label and description ≤300 characters.');
for(const r of d.records)if(!txt(r.description,300)||!int(r.quantity,1,10000)||!txt(r.owner,150))err('Request needs description ≤300, integer quantity 1–10000 and owner.');
for(const w of d.warehouses)if(!int(w.supply,0,10000))err('Warehouse supply must be an integer 0–10000.');
const seen=new Set();for(const z of d.routes){if(!z||!d.warehouses.some(w=>w.id===z.from)||!d.rules.some(t=>t.id===z.to)||!int(z.cap,0,10000)||!int(z.cents,0,1000000))err('Lane needs known from/to, integer cap 0–10000 and cents/unit 0–1000000.');const k=JSON.stringify([z.from,z.to]);if(seen.has(k))err('Duplicate warehouse/destination lane.');seen.add(k)}return d;}
export const texts=d=>[...d.rules.map(x=>x.description),...d.records.map(x=>x.description)];
export function suggest(d,v){if(!Array.isArray(v)||v.length!==texts(d).length||v.some(x=>!Array.isArray(x)||x.length!==384||x.some(y=>!Number.isFinite(y))||Math.abs(Math.hypot(...x)-1)>.02))err('Malformed AI embeddings. No suggestions applied; retry.');return d.records.map((r,i)=>{const evidence=d.rules.map((z,j)=>({id:z.id,score:v[j].reduce((s,x,k)=>s+x*v[d.rules.length+i][k],0)})).sort((a,b)=>b.score-a.score);return {...r,procedure:evidence[0].id,proposed:evidence[0].id,evidence,decision:'pending',reviewNote:''}})}
// Successive shortest augmenting paths on a residual network. Reverse edges permit
// rerouting earlier cheap choices. Bellman-Ford supports their negative costs.
export function transport(d,demand,greedy=false){
 const W=d.warehouses.length,T=d.rules.length,N=W+T+2,S=N-2,E=N-1,g=Array.from({length:N},()=>[]);
 function edge(u,v,cap,cost){const a={to:v,cap,cost,rev:g[v].length,initial:cap};const b={to:u,cap:0,cost:-cost,rev:g[u].length};g[u].push(a);g[v].push(b);return a}
 d.warehouses.forEach((w,i)=>edge(S,i,w.supply,0));d.rules.forEach((t,j)=>edge(W+j,E,demand[t.id]||0,0));
 const lanes=d.routes.map(z=>({z,e:edge(d.warehouses.findIndex(w=>w.id===z.from),W+d.rules.findIndex(t=>t.id===z.to),z.cap,z.cents)}));
 if(greedy){const stock=d.warehouses.map(w=>w.supply),need=d.rules.map(t=>demand[t.id]||0);for(const {z,e}of [...lanes].sort((a,b)=>a.z.cents-b.z.cents)){const i=d.warehouses.findIndex(w=>w.id===z.from),j=d.rules.findIndex(t=>t.id===z.to),n=Math.min(stock[i],need[j],z.cap);e.cap-=n;stock[i]-=n;need[j]-=n}}
 else for(let iter=0;iter<10000;iter++){
  const dist=Array(N).fill(Infinity),prev=Array(N);dist[S]=0;
  for(let k=0;k<N-1;k++){let changed=false;for(let u=0;u<N;u++)if(Number.isFinite(dist[u]))for(let j=0;j<g[u].length;j++){const e=g[u][j];if(e.cap>0&&dist[e.to]>dist[u]+e.cost){dist[e.to]=dist[u]+e.cost;prev[e.to]=[u,j];changed=true}}if(!changed)break}
  if(!prev[E])break;let n=Infinity;for(let v=E;v!==S;){const[u,j]=prev[v];n=Math.min(n,g[u][j].cap);v=u}
  for(let v=E;v!==S;){const[u,j]=prev[v],e=g[u][j];e.cap-=n;g[v][e.rev].cap+=n;v=u}
  if(iter===9999)err('Allocation iteration limit reached. Reduce problem and retry.');
 }
 const shipments=lanes.map(({z,e})=>({...z,quantity:e.initial-e.cap})),served=shipments.reduce((s,z)=>s+z.quantity,0),costCents=shipments.reduce((s,z)=>s+z.quantity*z.cents,0);
 return {shipments,served,costCents,unmet:d.rules.map(t=>({destination:t.id,demand:demand[t.id]||0,served:shipments.filter(z=>z.to===t.id).reduce((s,z)=>s+z.quantity,0)})).map(t=>({...t,unmet:t.demand-t.served}))};
}
export function analyze(d,rows){parse(JSON.stringify(d));if(!Array.isArray(rows)||rows.length!==d.records.length||rows.some((r,i)=>!r||r.id!==d.records[i].id||!d.rules.some(z=>z.id===r.procedure)||!int(r.quantity,1,10000)||!txt(r.owner,150)||typeof r.reviewNote!=='string'||r.reviewNote.length>1000||!['approve','hold'].includes(r.decision)))err('Review every row: approve or hold, verify destination, integer quantity and owner.');
 const demand=Object.fromEntries(d.rules.map(z=>[z.id,0]));for(const r of rows)if(r.decision==='approve')demand[r.procedure]+=r.quantity;
 const optimized=transport(d,demand),baseline=transport(d,demand,true),remaining=Object.fromEntries(optimized.unmet.map(t=>[t.destination,t.served]));
 const reviews=rows.map(r=>{const allocated=r.decision==='hold'?0:Math.min(r.quantity,remaining[r.procedure]);remaining[r.procedure]-=allocated;return {...r,allocated,unmet:r.decision==='hold'?null:r.quantity-allocated}});
 return {app:'Freight Weave',originalInput:structuredClone(d),reviews:structuredClone(reviews),total:rows.length,approved:rows.filter(r=>r.decision==='approve').length,held:rows.filter(r=>r.decision==='hold').length,demand,optimized,baseline};}
export const csv=r=>Papa.unparse(r.reviews.map(x=>({id:x.id,originalDescription:r.originalInput.records.find(y=>y.id===x.id).description,destination:x.procedure,quantity:x.quantity,decision:x.decision,allocated:x.allocated,unmet:x.unmet,owner:x.owner,reviewNote:x.reviewNote})),{escapeFormulae:/^[=+\-@\t\r]/});
export const lanesCsv=r=>Papa.unparse(r.optimized.shipments.map(x=>({...x,lineCents:x.quantity*x.cents})),{escapeFormulae:/^[=+\-@\t\r]/});
export const markdown=r=>['# Freight Weave transport worksheet',`${r.total} requests retained; ${r.approved} approved; ${r.held} held.`,r.held?'PARTIAL: held demand excluded.':'Verify demand coverage.',`Approved demand: ${Object.values(r.demand).reduce((s,x)=>s+x,0)} units.`, `Maximum-served, minimum variable-cost: ${r.optimized.served} units / ${r.optimized.costCents} cents.`, `Cheapest-lane-first: ${r.baseline.served} units / ${r.baseline.costCents} cents. Costs are not comparable as savings when served quantities differ.`,'\n## Lanes',...r.optimized.shipments.map(x=>`- ${x.from} → ${x.to}: ${x.quantity} units × ${x.cents} cents; cap ${x.cap}.`),'\n## All requests',...r.reviews.map(x=>`- ${x.id}: ${x.procedure}; ${x.decision}; quantity ${x.quantity}; allocated ${x.allocated}; unmet ${x.unmet??'held'}.\n  Owner: ${x.owner}\n  ${x.reviewNote.replaceAll('\n','\n  ')}`),'','Conditional single-commodity planning, not dispatch. Identical interchangeable units, variable linear lane costs only, no fixed charges, travel times or mixed products. Partial demand is assigned to requests in source order within each destination, not by urgency.'].join('\n');
