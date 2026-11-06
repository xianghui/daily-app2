import assert from 'node:assert/strict';
import {examples,inputs,suggest,coverage,artifact,validateVectors,csvOutput} from './src/core.js';
import Papa from 'papaparse';
const d=inputs(examples['Commerce release'].changes,examples['Commerce release'].tests,15,.35);
assert.equal(d.changes.length,3);assert.equal(d.tests.length,5);
for(const bad of [[],[[NaN]],Array(8).fill(Array(384).fill(Infinity))])assert.throws(()=>validateVectors(bad,8));
for(const bad of ['', 'id,description,priority\na,x,0','id,description,priority\na,x,1\na,y,2','id,description,priority\na,'+'x'.repeat(401)+',2','id,description,priority\n'+Array.from({length:21},(_,i)=>`${i},x,2`).join('\n')])assert.throws(()=>inputs(bad,examples['Commerce release'].tests,15,.35));
assert.throws(()=>inputs(examples['Commerce release'].changes,examples['Commerce release'].tests,NaN,.35));
assert.throws(()=>inputs(examples['Commerce release'].changes,examples['Commerce release'].tests,15,NaN));
// Synthetic vectors exercise invariants only; real inference is browser-tested separately.
const vs=Array.from({length:8},(_,i)=>Array.from({length:384},(_,j)=>+(j===i%3)));
const r=suggest(d,vs);const a=artifact(r,d);assert(a.summary.minutes<=15);assert.equal(a.tests.length,5);assert.equal(a.summary.changes.length,3);
assert.throws(()=>artifact(r.slice(1),d));assert.throws(()=>artifact(r.map(t=>({...t,selected:true})),d));
assert.throws(()=>artifact(r.map((t,i)=>i? t:{...t,minutes:0}),d));
assert.throws(()=>artifact(r.map((t,i)=>i? t:{...t,description:'changed source'}),d));
assert.equal(coverage(r,d).covered,a.summary.covered);
const edited=structuredClone(r);edited[0].note='=one, "two"\nthree';const parsed=Papa.parse(csvOutput(artifact(edited,d)),{header:true});assert.equal(parsed.data.length,5);assert.equal(parsed.data[0].review_note,"'=one, \"two\"\nthree");console.log('Core validation passed: schema, budget, IDs, durations, sources, malformed vectors, CSV escaping.');
