import assert from 'node:assert/strict';import {inputs,examples,optimize,artifact,suggest,baseline} from './src/core.js';
const s=inputs(examples['Product circle'],.45,true);assert.equal(baseline(s),0);
for(const bad of['','x','id,name,team,interests\nA,a,t,x','id,name,team,interests\nA,a,t,x\nA,b,t,y',examples['Product circle'].replace('Accessible interfaces and screen reader usability','x'.repeat(401))])assert.throws(()=>inputs(bad,.45,true));
assert.throws(()=>suggest(s,[[NaN]]));const vectors=s.people.map((_,i)=>Array.from({length:384},(_,j)=>j===i?1:0));assert.equal(suggest(s,vectors).rows.length,0);
const scores=s.people.map(()=>s.people.map(()=>.8));let rows=[{a:'A',b:'B',accepted:true,note:'x'},{a:'C',b:'D',accepted:true,note:''}];assert.equal(artifact(rows,s,scores).participants.length,5);assert.throws(()=>artifact([...rows,{a:'E',b:'B',accepted:true,note:''}],s,scores));const same=structuredClone(s);same.people[1].team='Design';assert.throws(()=>artifact(rows,same,scores));
// Exact matching compared with exhaustive enumeration on six-node weighted graph.
const people=Array.from({length:6},(_,i)=>({id:String(i)}));const edge=people.map((_,i)=>people.map((_,j)=>i===j?null:(i+j)%3===0?null:(i+j)/12));const sol=optimize(people,edge);assert.equal(sol.length,3);assert.equal(new Set(sol.flatMap(p=>[p.a,p.b])).size,6);
let brute=-1;function walk(left,sum){if(!left.length){brute=Math.max(brute,sum);return}const [i,...rest]=left;for(const j of rest)if(edge[i][j]!==null)walk(rest.filter(x=>x!==j),sum+edge[i][j]);}walk([0,1,2,3,4,5],0);assert(Math.abs(sol.reduce((a,p)=>a+p.score,0)-brute)<1e-8);
console.log('Input/schema, disjoint/cross-team constraints and exact matching optimum verified.');
