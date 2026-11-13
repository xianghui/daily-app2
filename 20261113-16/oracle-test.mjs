import {interval,parse,examples,suggest,analyze} from './src/core.js';
import a from 'node:assert/strict';import fs from 'node:fs';
let seed=917;const rand=n=>{seed=(1664525*seed+1013904223)>>>0;return seed%n};
const cases=[[0,0,0,1],[1,0,0,1],[2,1,0,1],[0,2,1,3],[2,9,1,3],[1,0,1,3],[3,0,1,3],[0,0,1,3],[4,0,1,3]];
for(let i=0;i<4000;i++){const lo=rand(100000),hi=lo+1+rand(100000);cases.push([rand(250000),rand(20000),lo,hi])}
for(const [v,u,lo,hi]of cases){const r=interval(v,u,lo,hi),x=BigInt(v),e=BigInt(u),l=BigInt(lo),h=BigInt(hi);const inLower=x-e>=l,inUpper=x+e<=h,intersects=x-e<=h&&x+e>=l;const expected=inLower&&inUpper?'contained':intersects?'overlap':'disjoint';a.equal(r.outcome,expected);a.equal(r.nominal,x>=l&&x<=h?'inside':'outside');a.equal(BigInt(r.end)-BigInt(r.start),2n*e)}
for(const args of [[1.1,0,0,2],[1,-1,0,2],[1,0,2,2],[1,0,3,2],[NaN,0,0,2]])a.throws(()=>interval(...args));
for(const e of examples){const d=parse(JSON.stringify(e.data));a.throws(()=>suggest(d,[]));a.throws(()=>suggest(d,Array(8).fill(Array(384).fill(0))));a.throws(()=>analyze(d,[]));}
fs.writeFileSync('oracle-validation.json',JSON.stringify({cases:cases.length,oracle:'Independent BigInt endpoint/interval predicate with boundary and zero-uncertainty cases',passed:true},null,2));console.log('PASS',cases.length,'independent interval oracle cases');
