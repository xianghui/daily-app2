import a from'node:assert/strict';import fs from'node:fs';import{examples,validate,parse,propose,calculate,apply,restore,pretty}from'./src/core.js';
const e=examples[0];function bad(fn){a.throws(fn)}
for(const data of[null,[],{}, {...e.data,title:'\ud800'}, {...e.data,resistors:[100,100]}, {...e.data,records:[]}, {...e.data,profiles:[e.data.profiles[0]]}])bad(()=>validate(data));
for(const vectors of[[],[[null]],Array(6).fill(Array(384).fill(0)),Array(6).fill(Array(384).fill(Infinity))])bad(()=>propose(e.data,vectors));
for(const raw of['','{','x'.repeat(30001)])bad(()=>parse(raw));
const rows=e.data.records.map((r,i)=>({...r,profileId:e.expected[i],loadOHM:e.data.profiles[i].loadOHM,decision:'approve',reviewerNote:''}));
bad(()=>apply(e.data,rows.slice(1)));bad(()=>apply(e.data,rows.toReversed()));bad(()=>apply(e.data,rows.map(r=>({...r,decision:'pending'}))));bad(()=>apply(e.data,rows.map(r=>({...r,reviewerNote:'\u0000'}))));a.deepEqual(restore(pretty(apply(e.data,rows))),e.data);
// Export independently replayable cases; Python uses Decimal nodal equations.
let seed=4829;const rand=()=>((seed=(seed*1664525+1013904223)>>>0)/2**32);const cases=[];
for(let i=0;i<250;i++){const r={...rows[0],vin:3+Math.floor(rand()*21),target:1+Math.floor(rand()*20),loadOHM:10**(2+Math.floor(rand()*7)),tolerance:[1,5,10,20][Math.floor(rand()*4)],currentCapMA:[.001,.01,.1,1,10][Math.floor(rand()*5)],powerCapMW:[.1,1,10,100][Math.floor(rand()*4)]};r.target=Math.min(r.target,r.vin-1);const source={...e.data,resistors:[100,220,470,1000,2200,4700,10000,22000,47000,100000,220000,470000]};cases.push({source,r,result:calculate(source,r)})}fs.writeFileSync('core-cases.json',JSON.stringify(cases));fs.writeFileSync('core-validation.json',JSON.stringify({inputAndSchemaGuards:'passed',replayCases:cases.length,auditOriginalRestore:'passed'},null,2));console.log('PASS core schema and guards; 250 independent replay cases prepared');
