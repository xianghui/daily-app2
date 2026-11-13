import assert from 'node:assert/strict';
import {allocate,examples,parse,analyze,suggest} from './src/core.js';
// Independent exhaustive search confirms the greedy optimizer on small frames.
let checked=0;
for(let a=1;a<=5;a++)for(let b=1;b<=5;b++)for(const sa of [0,2,5])for(const sb of [0,1,4])for(let budget=2;budget<=a+b;budget++){
 const gs=[{population:a,sd:sa},{population:b,sd:sb}],out=allocate(gs,budget);const cost=n=>gs.reduce((s,g,i)=>s+g.population**2*g.sd**2/n[i],0);let best=Infinity;
 for(let x=1;x<=a;x++)for(let y=1;y<=b;y++)if(x+y===budget)best=Math.min(best,cost([x,y]));assert(Math.abs(cost(out)-best)<1e-8);checked++;
}
for(const e of examples){const d=parse(JSON.stringify(e.data));assert.throws(()=>suggest(d,[[NaN]]));const r=d.records.map((x,i)=>({...x,kind:d.parts[i%d.parts.length].id,proposed:'',evidence:[],decision:'approve',reviewNote:''}));const out=analyze(d,r);if(out.plan){assert.equal(out.plan.groups.reduce((s,g)=>s+g.sample,0),d.sample);assert(out.plan.variance<=out.plan.baselineVariance+1e-10)}}
console.log('PASS exhaustive integer optimality:',checked,'cases');
