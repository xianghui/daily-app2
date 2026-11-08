import assert from 'node:assert/strict';import fs from 'node:fs';import {examples,parse,suggest,apply,normalize} from './src/core.js';
let checks=0;function check(name,f){f();console.log('PASS',name);checks++}
const d=parse(JSON.stringify(examples['Help center']));const vec=(i)=>Array.from({length:384},(_,j)=>j===i?1:0);
check('normalization includes NFKC whitespace case',()=>assert.equal(normalize('  ＲＥＳＥＴ\t  Password\n'),'reset password'));
const v=[vec(0),vec(1),vec(2),vec(0),vec(0),vec(1),vec(2)];const r=suggest(d,v);for(const x of r)x.decision='accept';
check('bounded schema and conserved original rows',()=>{assert.deepEqual(apply(d,r).records.map(x=>x.text),d.queries.map(x=>x.text));assert.equal(apply(d,r).synonyms.length,3)});
check('reject bad vector count finite dimensions and norms',()=>{for(const v of [[],[[NaN]],Array(7).fill(Array(384).fill(0)),Array(7).fill(Array(384).fill(1))])assert.throws(()=>suggest(d,v),/Malformed/)});
check('pending invalid target altered source missing rows rejected',()=>{for(const mutate of [a=>a[0].decision='pending',a=>a[0].target='missing',a=>a[0].text='changed',a=>a.pop()]){const a=structuredClone(r);mutate(a);assert.throws(()=>apply(d,a))}});
check('collision across normalized equivalent aliases',()=>{const data=structuredClone(d);data.queries.push({id:'DUP',text:'  FORGOT  my login secret '});const a=suggest(data,[...v.slice(0,4),vec(1),...v.slice(4)]);for(const row of a)row.decision='accept';assert.throws(()=>apply(data,a),/collision/);a[4].target='access';assert.equal(apply(data,a).synonyms.length,3)});
check('canonical labels cannot be remapped even if another row held',()=>{const a=structuredClone(r);a[3].target='billing';assert.throws(()=>apply(d,a),/collision/)});
check('all holds preserve originals no new rules baseline still works',()=>{const a=structuredClone(r);a.forEach(x=>x.decision='hold');const out=apply(d,a);assert.equal(out.synonyms.length,0);assert.equal(out.metrics.reviewedHits,1);assert.equal(out.records.length,4)});
fs.writeFileSync('core-validation.json',JSON.stringify({checks,realAI:false,note:'Synthetic normalized vectors only for deterministic boundary tests. Browser suite tests real AI.'},null,2));
