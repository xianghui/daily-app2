import {bridge,parse,examples,analyze} from './src/core.js';import fs from 'node:fs';import a from 'node:assert/strict';
let seed=829;const next=n=>{seed=(seed*1664525+1013904223)>>>0;return seed%n};const cases=[];
for(let i=0;i<2000;i++){const r={plannedQty:next(100001),allowedQty:next(100001),actualQty:next(100001),actualCostCents:next(100000001)};const rate=1+next(1000000);cases.push({r,rate,got:bridge(r,rate)})}
for(const e of examples){const d=parse(JSON.stringify(e.data));const rs=d.records.map((r,i)=>({...r,kind:d.materials[i%2].id,decision:'approve',reviewNote:''}));const x=analyze(d,rs);a.equal(x.totals.price+x.totals.usage+x.totals.volume,x.totals.total)}
fs.writeFileSync('core-cases.json',JSON.stringify(cases));console.log('Generated 2000 exact arithmetic cases and checked fixtures');
