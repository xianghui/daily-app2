import assert from 'node:assert/strict';import fs from'node:fs';import{examples,parse,imported,calculate,apply,suggest,vectors,sql}from'./src/core.js';
let checks=0;const ok=fn=>{fn();checks++};
for(const e of examples){const d=parse(JSON.stringify(e.data));const r=d.requests.map((q,i)=>({id:q.id,profile:e.expected[i],decision:'approve',note:'',candidates:[]})),a=apply(d,r);ok(()=>assert.equal(a.cases.length,3));fs.writeFileSync('core-'+e.name.replaceAll(' ','-')+'.json',JSON.stringify(a));fs.writeFileSync('core-'+e.name.replaceAll(' ','-')+'.sql',sql(a));ok(()=>assert.deepEqual(imported(JSON.stringify(a)),d));}
ok(()=>assert.deepEqual(calculate(examples[0].data.requests[0].records,'rows').map(x=>x.total),[10,35,30,50]));ok(()=>assert.deepEqual(calculate(examples[0].data.requests[0].records,'peers').map(x=>x.total),[35,35,30,50]));
for(const raw of['','{}','null','[]',JSON.stringify({...examples[0].data,extra:true})])ok(()=>assert.throws(()=>parse(raw)));
for(const value of[1.5,1000001,Infinity,null,'1']){const d=structuredClone(examples[0].data);d.requests[0].records[0].value=value;ok(()=>assert.throws(()=>parse(JSON.stringify(d))))}
for(const value of[[],[[null]],Array(5).fill(Array(384).fill(0))])ok(()=>assert.throws(()=>suggest(examples[0].data,value)));
ok(()=>assert.throws(()=>apply(examples[0].data,examples[0].data.requests.map(q=>({id:q.id,profile:'row-ledger',decision:'pending',note:''})))));
const d=structuredClone(examples[0].data);d.requests[0].records.push(d.requests[0].records[0]);ok(()=>assert.throws(()=>parse(JSON.stringify(d))));
fs.writeFileSync('core-validation.json',JSON.stringify({checks}));console.log('PASS core',checks)
