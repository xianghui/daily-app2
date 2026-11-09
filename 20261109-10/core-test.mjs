import assert from 'node:assert/strict';import {parse,convert,suggest,plan,examples,csv} from './src/core.js';
for(const d of examples)assert.deepEqual(parse(JSON.stringify(d)),d);
for(const [v,a,b,w] of [[32,'F','C',0],[212,'F','C',100],[-40,'F','C',-40],[0,'C','K',273.15],[1,'lb','kg',.45359237],[1,'in','cm',2.54],[2,'min','ms',120000]])assert(Math.abs(convert(v,a,b)-w)<1e-9);
for(const a of Object.keys((await import('./src/core.js')).units)){assert(Math.abs(convert(12.5,a,a)-12.5)<1e-9)}
assert.throws(()=>convert(1,'kg','m'));assert.throws(()=>suggest(examples[0],[[NaN]]));const d=examples[0],v=Array(7).fill(Array(384).fill(1/Math.sqrt(384))),r=suggest(d,v);assert.throws(()=>plan(d,r));r.forEach(x=>x.decision='hold');const o=plan(d,r);assert.equal(o.counts.held,4);assert.equal(o.records[0].normalizedValue,null);assert.throws(()=>plan(d,r.slice(1)));
const signed=structuredClone(o);signed.records[0].value=-5;assert(csv(signed).includes(',-5,'));console.log('PASS deterministic conversions, schema, conservation, holds, signed numeric CSV');
