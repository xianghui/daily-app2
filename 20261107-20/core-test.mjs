import assert from 'node:assert/strict';
import {inputs,examples,propose,validateVectors,numberChanges,issues,artifact,stats} from './src/core.js';
const d=inputs(examples['Support edits'],.65),v=Array.from({length:8},()=>[1,...Array(383).fill(0)]);
assert.throws(()=>validateVectors([[NaN]],1),/Malformed/);assert.throws(()=>validateVectors(v.slice(1),8),/Malformed/);assert.throws(()=>validateVectors(v.map(a=>a.map(()=>0)),8),/Malformed/);
const r=propose(d,v);assert.equal(r.length,4);assert.equal(r[1].decision,'hold');assert(r[1].numeric);r[1].decision='revision';assert(issues(d,r).some(s=>s.includes('numeric')));r[1].decision='original';assert.throws(()=>artifact(d,r),/Review every/);r.forEach(x=>x.reviewed=true);const a=artifact(d,r);assert.equal(a.rows[1].output,d.pairs[1].original);assert.deepEqual(a.original,d);assert.equal(stats(d,r).total,4);r.pop();assert(issues(d,r).length);
assert(numberChanges('Cost 3.50 for 2 items','Cost 3.50 for 3 items'));assert(!numberChanges('2 items for 3.50','3.50 for 2 items'));assert(numberChanges('08:30','09:30'));assert(numberChanges('10 10','10'));assert(numberChanges('1,000','1000'));assert(!numberChanges('No numbers','No digits'));
console.log('Schema, finite embeddings, numeric multiset, release guards, review gate, conservation and source preservation pass. Defensive vector fixtures are not inference tests.');
