import {transport,parse,examples,analyze,suggest} from './src/core.js';import assert from 'node:assert/strict';import fs from 'node:fs';
let seed=423617;function rnd(n){seed=(seed*1664525+1013904223)>>>0;return seed%n}const cases=[];
for(let k=0;k<1200;k++){
 const W=1+rnd(3),T=2+rnd(2),d={warehouses:Array.from({length:W},(_,i)=>({id:'w'+i,supply:rnd(5)})),rules:Array.from({length:T},(_,i)=>({id:'t'+i})),routes:[]},dem=Object.fromEntries(d.rules.map(t=>[t.id,rnd(5)]));
 for(const w of d.warehouses)for(const t of d.rules)if(rnd(4))d.routes.push({from:w.id,to:t.id,cap:rnd(3),cents:rnd(10)});
 let best={served:-1,cost:Infinity};const stock=d.warehouses.map(w=>w.supply),need=d.rules.map(t=>dem[t.id]);
 function visit(i,served,cost){if(i===d.routes.length){if(served>best.served||served===best.served&&cost<best.cost)best={served,cost};return}const z=d.routes[i],w=d.warehouses.findIndex(w=>w.id===z.from),t=d.rules.findIndex(t=>t.id===z.to);for(let n=0;n<=Math.min(z.cap,stock[w],need[t]);n++){stock[w]-=n;need[t]-=n;visit(i+1,served+n,cost+n*z.cents);stock[w]+=n;need[t]+=n}}
 visit(0,0,0);const a=transport(d,dem);assert.equal(a.served,best.served);assert.equal(a.costCents,best.cost);cases.push({case:k,served:a.served,cost:a.costCents});
}
for(const e of examples){const d=parse(JSON.stringify(e.data)),rows=d.records.map((r,i)=>({...r,procedure:d.rules[[0,1,2,0][i]].id,decision:'approve',reviewNote:''})),r=analyze(d,rows);assert.equal(r.optimized.served,rows.reduce((s,x)=>s+x.quantity,0));assert(r.optimized.served>r.baseline.served||r.optimized.costCents<r.baseline.costCents);console.log(e.name,r.optimized.served,r.optimized.costCents,'vs baseline',r.baseline.served,r.baseline.costCents)}
assert.throws(()=>suggest(examples[0].data,[[0]]));
fs.writeFileSync('arithmetic-validation.json',JSON.stringify({method:'Independent exhaustive enumeration of every integer lane quantity; maximum served then minimum cents',cases:cases.length,passed:true,seed:423617},null,2));console.log('PASS',cases.length,'exhaustive network comparisons');
