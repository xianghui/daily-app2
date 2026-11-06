import Papa from 'papaparse';
export const examples={
 'Contact import':{csv:'Given name,Family name,Electronic mail address,Cellular telephone,Employer organization,Internal memo\nAda,Quinn,ada@example.test,+1-202-555-0101,North Lab,Requested a callback\nBo,River,bo@example.test,+1-202-555-0102,South Studio,Met at a synthetic event\nCy,Stone,cy@example.test,+1-202-555-0103,East Works,Send a sample catalog',schema:'field,description,required\nfirst_name,Person first given name,false\nlast_name,Person family surname,false\nemail,Electronic email address,true\nphone,Mobile telephone number,false\ncompany,Employer company organization,false'},
 'Shipping import':{csv:'Parcel tracking code,Delivery destination,Shipment mass,Recipient full name,Warehouse remarks\nPKG-001,12 Example Lane,2.5,Alex Sample,Keep upright\nPKG-002,34 Synthetic Road,0.8,Sam Fiction,Leave at reception',schema:'field,description,required\ntracking_id,Parcel shipment tracking identifier,true\nship_to,Destination delivery street address,true\nweight,Package mass weight,false\nrecipient,Full name of parcel recipient,false'}
};
function table(text,maxRows,maxCols){
 if(!text.trim())throw Error('CSV input is empty.');if(new TextEncoder().encode(text).length>60000)throw Error('CSV input exceeds 60 KB.');
 const r=Papa.parse(text,{skipEmptyLines:'greedy'});if(r.errors.length)throw Error('Invalid CSV: '+r.errors[0].message);
 const [headers,...records]=r.data;if(!headers||headers.length<1||headers.length>maxCols||records.length<1||records.length>maxRows)throw Error(`Use 1–${maxRows} rows and 1–${maxCols} columns.`);
 if(headers.some(h=>!h.trim()||h.length>100)||new Set(headers.map(h=>h.trim().toLowerCase())).size!==headers.length)throw Error('Headers must be nonempty, unique and at most 100 characters.');
 if(records.some(r=>r.length!==headers.length))throw Error('Every row must have the same number of cells as its header.');
 if(records.flat().some(v=>v.length>400))throw Error('Each cell must be at most 400 characters.');return {headers,records};
}
export function inputs(csv,schema,threshold){
 const source=table(csv,100,12),target=table(schema,8,3);
 if(target.headers.join(',')!=='field,description,required')throw Error('Schema headers must be field,description,required.');
 const fields=target.records.map(([field,description,required])=>{if(!/^[a-z][a-z0-9_]{0,39}$/.test(field)||!description.trim()||description.length>300||!['true','false'].includes(required))throw Error('Schema needs unique lowercase field IDs, descriptions up to 300 characters, and true/false required flags.');return {field,description,required:required==='true'};});
 if(new Set(fields.map(f=>f.field)).size!==fields.length)throw Error('Destination field IDs must be unique.');
 threshold=Number(threshold);if(!Number.isFinite(threshold)||threshold<.1||threshold>.9)throw Error('Similarity threshold must be 0.1–0.9.');
 return {...source,fields,threshold};
}
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
export function baseline(d){return d.fields.filter(f=>d.headers.some(h=>norm(h)===norm(f.field))).length;}
export function suggest(d,vectors){
 const n=d.headers.length,m=d.fields.length;
 if(!Array.isArray(vectors)||vectors.length!==n+m||vectors.some(v=>!Array.isArray(v)||v.length!==384||v.some(x=>!Number.isFinite(x))||Math.abs(v.reduce((s,x)=>s+x*x,0)-1)>.05))throw Error('Malformed AI output: expected normalized 384-dimensional embeddings.');
 const scores=d.fields.map((_,j)=>d.headers.map((_,i)=>Math.max(-1,Math.min(1,vectors[n+j].reduce((s,x,k)=>s+x*vectors[i][k],0)))));
 // Exact DP: maximize number of eligible fields, then total cosine similarity.
 let states=new Map([[0,{count:0,total:0,map:[]}]]);
 for(let j=0;j<m;j++){const next=new Map();for(const [mask,state] of states){for(const i of [-1,...d.headers.map((_,i)=>i)]){if(i>=0&&((mask&(1<<i))||scores[j][i]<d.threshold))continue;const key=i<0?mask:mask|(1<<i),candidate={count:state.count+(i>=0?1:0),total:state.total+(i>=0?scores[j][i]:0),map:[...state.map,i]},prev=next.get(key);if(!prev||candidate.count>prev.count||candidate.count===prev.count&&candidate.total>prev.total)next.set(key,candidate);}}states=next;}
 const best=[...states.values()].sort((a,b)=>b.count-a.count||b.total-a.total)[0];
 return {scores,mapping:best.map.map((source,j)=>({field:d.fields[j].field,source,note:''}))};
}
export function artifact(d,mapping,scores){
 if(mapping.length!==d.fields.length||mapping.some((r,i)=>r.field!==d.fields[i].field||!Number.isInteger(r.source)||r.source< -1||r.source>=d.headers.length||typeof r.note!=='string'||r.note.length>500))throw Error('Invalid mapping schema.');
 const used=mapping.filter(r=>r.source>=0).map(r=>r.source);if(new Set(used).size!==used.length)throw Error('A source column cannot feed two destination fields. Resolve the duplicate or undo.');
 const issues=[];for(let j=0;j<d.fields.length;j++){const f=d.fields[j],s=mapping[j].source;if(f.required){if(s<0)issues.push(f.field+': required field is unmapped');else {const empty=d.records.flatMap((r,i)=>r[s].trim()?[]:[i+1]);if(empty.length)issues.push(f.field+': empty values in rows '+empty.join(', '));}}}
 const rows=d.records.map((r,i)=>({row:i+1,values:d.fields.map((_,j)=>mapping[j].source<0?'':r[mapping[j].source])}));
 return {format:'column-bridge-v1',model:'Xenova/all-MiniLM-L6-v2 q8 / WASM',original:{headers:d.headers,records:d.records},schema:d.fields,mapping:mapping.map((r,j)=>({...r,sourceHeader:r.source<0?null:d.headers[r.source],similarity:r.source<0?null:scores[j][r.source]})),unmappedSource:d.headers.filter((_,i)=>!used.includes(i)),rows,issues,metrics:{exactHeaderBaseline:baseline(d),reviewedMapped:used.length,recordsRetained:rows.length}};
}
export function csvOutput(a){return Papa.unparse({fields:a.schema.map(f=>f.field),data:a.rows.map(r=>r.values)},{escapeFormulae:/^[=+\-@\t\r]/});}
export function auditCSV(a){return Papa.unparse({fields:['row',...a.original.headers.map(h=>'original:'+h),...a.schema.map(f=>'target:'+f.field)],data:a.rows.map((r,i)=>[r.row,...a.original.records[i],...r.values])},{escapeFormulae:/^[=+\-@\t\r]/});}
