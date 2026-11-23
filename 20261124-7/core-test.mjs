import {inspect,plans,parse,suggest,examples,analyze,release} from './src/core.js';import a from 'node:assert/strict';import fs from 'node:fs';
const w=plans[0],o=plans[1],c=plans[2];
for(const [raw,p,expected]of[['2020011',w,'2019-12-30'],['2020535',w,'2021-01-01'],['2020060',o,'2020-02-29'],['2000366',o,'2000-12-31'],['2020011',o,'2020-01-11'],['20241231',c,'2024-12-31']])a.equal(inspect(raw,p).date,expected);
for(const[raw,p]of[['2021531',w],['2020001',w],['2020010',w],['2020018',w],['2023366',o],['1900366',o],['2023000',o],['20230229',c],['20241301',c],['20240100',c],['2020011\n',w],['２０２００１１',w],['1899011',w]])a.throws(()=>inspect(raw,p));
a.throws(()=>suggest(examples[0].data,[[NaN]]));a.throws(()=>parse('{}'));a.throws(()=>analyze(examples[0].data,[]));
// Exhaustive year/week/day catalog for independent Python datetime oracle.
const probes=[];for(let y=1900;y<=2099;y++)for(let week=1;week<=53;week++)for(let d=1;d<=7;d++){const raw=String(y)+String(week).padStart(2,'0')+d;try{probes.push({raw,date:inspect(raw,w).date})}catch{probes.push({raw,date:null})}}
fs.writeFileSync('date-oracle-input.json',JSON.stringify(probes));console.log('PASS boundaries and schema; oracle cases',probes.length);
