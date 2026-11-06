import assert from 'node:assert/strict';import {parse,optimize,metrics,artifact,overlaps,examples} from './src/core.js';
const rows=parse(examples[0].text).map((r,i)=>({...r,group:i<2?1:r.id}));assert.deepEqual(optimize(rows,35),[1,3,4]);assert.equal(metrics(rows.map(r=>({...r,selected:optimize(rows,35).includes(r.id)}))).minutes,35);
// Compare grouped DP to exhaustive enumeration, including varying budgets and ties.
for(let budget=5;budget<=80;budget++){const chosen=optimize(rows,budget);let best=0;for(let mask=0;mask<1<<rows.length;mask++){const r=rows.filter((_,i)=>mask>>i&1);const m=metrics(r.map(r=>({...r,selected:true})));if(m.minutes<=budget&&!m.collisions)best=Math.max(best,m.priority)}assert.equal(rows.filter(r=>chosen.includes(r.id)).reduce((s,r)=>s+r.priority,0),best)}
for(const v of[[],[[NaN]],Array(5).fill(Array(384).fill(0))])assert.throws(()=>overlaps(rows,v,.65),/Malformed/);
assert.throws(()=>parse('x'.repeat(20001)));assert.throws(()=>optimize(rows,NaN));assert.throws(()=>artifact(rows.map(r=>({...r,selected:true})),35,'',.65));console.log('Core: malformed schemas, limits, budget constraints and 76 exhaustive optimizer comparisons passed.');
