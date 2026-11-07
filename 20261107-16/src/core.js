import Papa from 'papaparse';
export const examples={
 'Food dispatch':`id,instructions,units
F1,Keep ice cream frozen during delivery,4
F2,Glass jars break easily protect from impacts,3
F3,Store gelato below freezing until handover,2
F4,Ceramic mugs need cushioning and careful handling,3
F5,Printed leaflets can travel at room temperature,4
F6,Books need no special temperature or breakage precautions,2`,
 'Lab dispatch':`id,instructions,units
L1,Frozen tissue samples must remain below zero,3
L2,Delicate microscope slides may shatter in transit,2
L3,Dry manuals can be shipped in ordinary ambient conditions,3
L4,Ice packs must not thaw before arrival,3
L5,Glass laboratory vessels need padding against breakage,4
L6,Paper labels have no special handling needs,3`
};
export const defaultPolicies=`id,procedure,description
COLD,Frozen chain,Keep goods frozen below zero prevent thawing use freezer packs
FRAGILE,Protect breakables,Fragile glass ceramics delicate items break shatter cushion protect from impacts
AMBIENT,Standard dry,Ordinary dry paper printed books manuals room temperature no special handling`;
function parse(text,headers,max){if(typeof text!=='string'||!text.trim())throw Error('CSV is empty.');if(new TextEncoder().encode(text).length>16000)throw Error('Each CSV must be at most 16 KB.');const x=Papa.parse(text,{header:true,skipEmptyLines:'greedy'});if(x.errors.length||JSON.stringify(x.meta.fields)!==JSON.stringify(headers))throw Error('Invalid CSV. Required columns: '+headers.join(',')+'.');if(!x.data.length||x.data.length>max)throw Error('CSV must contain 1–'+max+' records.');const ids=new Set();for(const r of x.data){for(const h of headers){if(typeof r[h]!=='string'||!r[h].trim())throw Error('Every field is required.');if(r[h].length>(['instructions','description'].includes(h)?300:100))throw Error('Field too long: '+h+'.');}if(ids.has(r.id))throw Error('Duplicate record ID: '+r.id);ids.add(r.id);}return x.data;}
export function inputs(source,policies,capacity){const orders=parse(source,['id','instructions','units'],24),profiles=parse(policies,['id','procedure','description'],6);if(profiles.some(p=>p.id==='HOLD'))throw Error('HOLD is reserved for manual review.');const cap=Number(capacity);if(!Number.isInteger(cap)||cap<1||cap>100)throw Error('Wave capacity must be an integer from 1 to 100.');for(const r of orders){if(!/^\d+$/.test(r.units)||+r.units<1||+r.units>cap)throw Error('Each units value must be a positive integer no larger than wave capacity.');r.units=+r.units;}return {orders,profiles,capacity:cap};}
export function suggest(d,v){const n=d.orders.length+d.profiles.length;if(!Array.isArray(v)||v.length!==n||v.some(a=>!Array.isArray(a)||a.length!==384||a.some(x=>typeof x!=='number'||!Number.isFinite(x))||Math.abs(a.reduce((s,x)=>s+x*x,0)-1)>.03))throw Error('Malformed AI vectors: expected finite normalized 384-dimensional embeddings for every record.');return d.orders.map((o,i)=>{const scores=d.profiles.map((p,j)=>({id:p.id,value:v[i].reduce((s,x,k)=>s+x*v[d.orders.length+j][k],0)})).sort((a,b)=>b.value-a.value);return {id:o.id,profile:scores[0].id,suggested:scores[0].id,scores,note:'',reviewed:false};});}
// Best-fit decreasing is a deterministic heuristic, not a globally optimal bin packer.
export function waves(d,rows,grouped=true){const bins=[];const sorted=grouped?[...d.orders].sort((a,b)=>b.units-a.units):d.orders;for(const o of sorted){const r=rows.find(r=>r.id===o.id);if(r.profile==='HOLD')continue;let bin;if(grouped)bin=bins.filter(b=>b.profile===r.profile&&b.units+o.units<=d.capacity).sort((a,b)=>b.units-a.units)[0];else {const b=bins.at(-1);if(b&&b.profile===r.profile&&b.units+o.units<=d.capacity)bin=b;}if(!bin){bin={id:'W'+(bins.length+1),profile:r.profile,units:0,orders:[]};bins.push(bin);}bin.units+=o.units;bin.orders.push(o.id);}return bins;}
export function metrics(d,rows){const planned=waves(d,rows),baseline=waves(d,rows,false);return {waves:planned.length,sourceOrderWaves:baseline.length,units:d.orders.reduce((s,o)=>s+o.units,0),held:rows.filter(r=>r.profile==='HOLD').length,plannedUnits:planned.reduce((s,b)=>s+b.units,0),capacity:d.capacity};}
export function artifact(d,rows){if(rows.length!==d.orders.length||rows.some((r,i)=>r.id!==d.orders[i].id||!r.reviewed||!['HOLD',...d.profiles.map(p=>p.id)].includes(r.profile)||r.note.length>500))throw Error('Every source record needs a valid reviewed handling decision.');const plan=waves(d,rows);const ids=plan.flatMap(b=>b.orders);if(new Set(ids).size!==ids.length||ids.length+rows.filter(r=>r.profile==='HOLD').length!==rows.length||plan.some(b=>b.units>d.capacity))throw Error('Wave conservation or capacity validation failed.');return {schema:'pack-relay/v1',model:'Xenova/all-MiniLM-L6-v2 q8 / WASM',original:d,metrics:metrics(d,rows),waves:plan,rows:rows.map((r,i)=>({...d.orders[i],...r,wave:plan.find(b=>b.orders.includes(r.id))?.id??'HOLD'}))};}
export function csvOutput(a){return Papa.unparse(a.rows.map(r=>({id:r.id,instructions:r.instructions,units:r.units,handling:r.profile,wave:r.wave,note:r.note})),{escapeFormulae:/^[=+\-@\t\r]/});}
