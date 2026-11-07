import assert from 'node:assert/strict';
import {inputs,suggest,artifact,violations,examples,metrics} from './src/core.js';
const header='id,question,response,seconds,protected\n';
// Construct vectors only to test deterministic safeguards. Successful browser AI tests use the real model.
const vec=(angle)=>{const a=Array(384).fill(0);a[0]=Math.cos(angle);a[1]=Math.sin(angle);return a;};
const d=inputs(header+'a,First,text,20,false\nb,Middle,text,30,false\nc,Last,text,40,false',.75,20);
let r=suggest(d,[vec(0),vec(.6),vec(1.2)]);assert.deepEqual(r.map(x=>x.decision),['keep','drop','keep']); // No transitive removal of C through dropped B.
const protectedLast=inputs(header+'a,First,text,20,false\nb,Second,text,30,true',.75,20);r=suggest(protectedLast,[vec(0),vec(0)]);assert.deepEqual(r.map(x=>x.decision),['drop','keep']);
const both=inputs(header+'a,First,text,20,true\nb,Second,text,30,true',.75,20);r=suggest(both,[vec(0),vec(0)]);assert(r.every(x=>x.decision==='keep'));
const types=inputs(header+'a,First,text,20,false\nb,Second,scale,30,false',.75,20);r=suggest(types,[vec(0),vec(0)]);assert(r.every(x=>x.decision==='keep'));
for(const vectors of[null,[],[[NaN]],Array(3).fill(Array(384).fill(0)),[vec(0),vec(0),Array(384).fill(Infinity)]])assert.throws(()=>suggest(d,vectors),/Malformed/);
r=suggest(d,[vec(0),vec(0),vec(1.5)]).map(x=>({...x,reviewed:true}));assert.equal(artifact(d,r).rows.length,3);r[0].decision='drop';assert(violations(d,r).length);assert.throws(()=>artifact(d,r));
const fixture=inputs(examples['Event feedback'],.75,120);assert.equal(metrics(fixture,fixture.questions.map(q=>({...q,decision:'keep'}))).originalSeconds,165);
console.log('Deterministic checks: no transitive loss, protected-first and multiple-protected retention, response type isolation, vector schema, replacement integrity, honest duration sums passed.');
