import assert from 'node:assert/strict';
import {examples,parse,suggest,analyze,csv} from './src/core.js';
const d=parse(JSON.stringify(examples[0].data)),v=d.messages.map((_,i)=>Array.from({length:384},(_,k)=>k===i%2?1:0)),r=suggest(d,v).map(x=>({...x,decision:'approve'}));
assert.deepEqual(r.map(x=>x.parent),['','','a','b']);const out=analyze(d,r);assert.equal(out.metrics.links,2);assert.equal(out.metrics.messages,4);
for(const vectors of [[],[[NaN]],v.map(x=>x.map(()=>0)),v.map(x=>x.map(()=>Infinity))])assert.throws(()=>suggest(d,vectors));
for(const patch of [{parent:'a'}, {parent:'c'}, {parent:'d'}, {parent:'absent'}, {decision:'pending'}]){const bad=structuredClone(r);Object.assign(bad[0],patch);assert.throws(()=>analyze(d,bad))}
const held=structuredClone(r);held[0].decision='hold';assert.throws(()=>analyze(d,held));held[2].decision='hold';assert.equal(analyze(d,held).metrics.held,2);
for(const bad of [{...d,other:1},{...d,messages:[{...d.messages[0],time:'2026-02-30T00:00:00Z'}]},{...d,messages:[{...d.messages[0],text:'x'.repeat(201)}]},{...d,messages:[d.messages[0],d.messages[0]]}])assert.throws(()=>parse(JSON.stringify(bad)));
const quoted=structuredClone(r);quoted[0].note='=X(1,2)\n"quote"';assert(csv(analyze(d,quoted)).includes("'=X"));
console.log('PASS schemas, chronology, cycles, holds, exact conservation, vector guards, escaping');

const special=structuredClone(d);special.messages[0].id="__proto__";special.messages[1].id="constructor";const sr=suggest(special,v).map(x=>({...x,decision:"approve"}));assert.equal(analyze(special,sr).rows.length,4);
