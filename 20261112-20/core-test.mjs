import assert from 'node:assert/strict';import{examples,parse,agreement,analyze,suggest}from './src/core.js';
assert(Math.abs(agreement([{a:1,b:1},{a:2,b:3},{a:3,b:2},{a:4,b:4}],4).kappa-.6)<1e-10);
assert(Math.abs(agreement([{a:1,b:4},{a:2,b:2},{a:3,b:3},{a:4,b:1}],4).kappa+.2)<1e-10);
assert.equal(agreement([{a:1,b:1}],4).kappa,null);assert.equal(agreement([],4).kappa,null);assert.equal(agreement([{a:1,b:1},{a:4,b:4}],4).kappa,1);
for(const d of examples){parse(JSON.stringify(d));const rs=d.records.map((r,i)=>({...r,item:d.catalog[i%2].id,decision:'approve',note:''}));const a=analyze(d,rs);assert.equal(a.disputes,2);assert.equal(a.rawDisagreements,4);assert.equal(a.criteria.reduce((s,c)=>s+c.matrix.flat().reduce((a,b)=>a+b,0),0),8);assert.deepEqual(parse(JSON.stringify(a)),d);assert.throws(()=>suggest(d,[]));rs[0].decision='pending';assert.throws(()=>analyze(d,rs));rs[0].decision='hold';assert.equal(analyze(d,rs).criteria,null);rs[0].decision='approve';rs[0].a=0;assert.throws(()=>analyze(d,rs))}
console.log('PASS weighted-kappa known answers, degenerate/negative/perfect, conservation, schema and roundtrip');
