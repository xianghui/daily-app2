import assert from 'node:assert/strict';import fs from 'node:fs';import {inspect,examples,parse,suggest,analyze} from './src/core.js';
let count=0;const p=v=>({id:'c',description:'Synthetic cache contract',target:JSON.stringify({vary:v})});const batch=(rs,url='/a')=>JSON.stringify({url,requests:rs});const rs=[{headers:{'accept-language':'en'},representation:'A'},{headers:{'accept-language':'fr'},representation:'B'}];
for(const [vary,events,reuse] of [[[],1,true],[['accept-language'],0,true],[['accept-encoding'],1,true],[['*'],0,false]]){const c=inspect(batch(rs),p(vary));assert.equal(c.events.length,events);assert.equal(c.reusable,reuse);assert.equal(c.baseline.length,1);count++}
assert.equal(inspect(batch([{headers:{},representation:'A'},{headers:{x:''},representation:'B'}]),p(['x'])).events.length,0);count++;
assert.equal(inspect(batch(rs.map(r=>({...r,representation:'same'}))),p([])).events.length,0);count++;
for(const raw of ['{}',batch([{headers:{Cookie:'secret'},representation:'a'},rs[1]]),batch([{headers:{cookie:'secret'},representation:'a'},rs[1]]),batch([{headers:{x:'a\nb'},representation:'a'},rs[1]])]){assert.throws(()=>inspect(raw,p([])));count++}
for(const v of [['x','x'],['*','x'],['Accept'],[1]]){assert.throws(()=>inspect(batch(rs),p(v)));count++}
assert.throws(()=>suggest(examples[0].data,[[NaN]]));count++;
for(const e of examples){const d=parse(JSON.stringify(e.data));assert.equal(d.records.length,3);for(let i=0;i<3;i++)assert.equal(inspect(d.records[i].raw,d.plans[i]).events.length,0)}count+=6;
fs.writeFileSync('oracle-validation.json',JSON.stringify({assertions:count,checks:'Known-answer collisions, missing/empty, wildcard nonreuse, equal tags, malformed input, header limits and vector validation passed.'},null,2));console.log('PASS oracle',count)
