import Papa from 'papaparse';
export const accountsExample=`code,description
6100,Travel transportation train taxi airfare business trips
6200,Software subscription cloud computing hosting digital tools
6300,Office supplies stationery paper pens printer materials
6400,Meals catering restaurant food refreshments`;
export const examples={
 'Studio expenses':`id,description,amount
S1,Monthly cloud server hosting,49.00
S2,Train tickets for business trip,78.50
S3,Printer paper and pens,22.30
S4,Team lunch at restaurant,64.20`,
 'Field expenses':`id,description,amount
F1,Taxi fare to airport,31.20
F2,Annual software license renewal,120.00
F3,Notebooks and stationery,18.90
F4,Catering sandwiches for workshop,90.00`};
function parse(text,fields,max){if(!text.trim()||text.length>30000)throw Error('Enter CSV under 30,000 characters.');const p=Papa.parse(text,{header:true,skipEmptyLines:'greedy'});if(p.errors.length||p.meta.fields?.join(',')!==fields.join(','))throw Error('Use exact CSV headers: '+fields.join(',')+'; check quoting and column counts.');if(!p.data.length||p.data.length>max)throw Error('Require 1–'+max+' rows.');for(const r of p.data)for(const f of fields)if(!r[f]?.trim()||r[f].length>400)throw Error('Every field needs 1–400 characters.');return p.data.map(r=>Object.fromEntries(fields.map(f=>[f,r[f].trim()])));}
export function inputs(csv,tax){const rows=parse(csv,['id','description','amount'],40),accounts=parse(tax,['code','description'],12);if(new Set(rows.map(r=>r.id)).size!==rows.length||new Set(accounts.map(r=>r.code)).size!==accounts.length)throw Error('IDs and account codes must be unique.');for(const a of accounts)if(!/^[A-Za-z0-9_-]{1,20}$/.test(a.code))throw Error('Account codes: 1–20 letters, digits, _ or -.');return {rows:rows.map(r=>{if(!/^-?\d{1,7}(\.\d{1,2})?$/.test(r.amount))throw Error('Amounts must be plain numbers with at most two decimals (refunds may be negative).');return {...r,cents:Math.round(Number(r.amount)*100)};}),accounts};}
export function suggest(data,vectors,threshold){if(!Array.isArray(vectors)||vectors.length!==data.rows.length+data.accounts.length||!vectors.every(v=>Array.isArray(v)&&v.length===384&&v.every(Number.isFinite)))throw Error('Malformed AI output; expected finite 384-dimensional embeddings. Retry.');return data.rows.map((r,i)=>{const ranked=data.accounts.map((a,j)=>({code:a.code,description:a.description,score:vectors[i].reduce((s,x,k)=>s+x*vectors[data.rows.length+j][k],0)})).sort((a,b)=>b.score-a.score);const top=ranked[0];return {...r,code:top.score>=threshold?top.code:'',suggested:top.code,score:top.score,source:top.description,alternatives:ranked.slice(0,3),note:''};});}
export function artifact(rows,accounts){if(!rows.length||rows.some(r=>r.code&&!accounts.some(a=>a.code===r.code)))throw Error('Invalid reviewed account code.');const totals={};for(const r of rows)totals[r.code||'UNASSIGNED']=(totals[r.code||'UNASSIGNED']||0)+r.cents;return {schema:'ledger-lane/v1',currency:'single user-selected currency; no conversion',model:'Xenova/all-MiniLM-L6-v2 q8',totalCents:rows.reduce((s,r)=>s+r.cents,0),accountTotalsCents:totals,accounts,records:structuredClone(rows)};}
export function csvOutput(out){const safe=v=>typeof v==='string'&&/^[=+@\t\r-]/.test(v)?"'"+v:v;return Papa.unparse(out.records.map(r=>({id:safe(r.id),description:safe(r.description),amount:r.cents/100,account:r.code||'UNASSIGNED',note:safe(r.note)})),{escapeFormulae:true});}
export function baseline(rows,accounts){return rows.filter(r=>accounts.some(a=>r.description.toLowerCase().includes(a.code.toLowerCase()))).length;}
