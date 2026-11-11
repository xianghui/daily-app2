import assert from 'node:assert/strict';import fs from 'node:fs';import{examples,parse,validate,analyze,suggest,texts}from './src/core.js';
let count=0;
for(let slots=1;slots<=24;slots++)for(let gate=1;gate<=10;gate++){
 const d=structuredClone(examples[0]);d.slots=slots;d.severityGate=gate;
 d.records=Array.from({length:24},(_,i)=>({id:'I'+String(i).padStart(2,'0'),text:'Synthetic '+i,occurrence:i%10+1,detection:(i*3)%10+1}));
 const rows=d.records.map((r,i)=>({...r,item:d.catalog[i%3].id,proposed:d.catalog[i%3].id,severity:(i*7)%10+1,exact:null,decision:i%5===0?'hold':'approve',owner:'',action:'',note:''}));const a=analyze(d,rows),approved=rows.filter(r=>r.decision==='approve'),hi=approved.filter(r=>r.severity>=gate);
 assert.equal(a.records.length,24);assert.equal(a.selected.length,Math.min(slots,approved.length));assert.equal(new Set(a.selected).size,a.selected.length);assert(a.selected.every(id=>approved.some(r=>r.id===id)));assert.equal(a.metrics.selectedHigh,Math.min(hi.length,slots));assert(a.metrics.selectedHigh>=a.metrics.baselineHigh);assert.equal(a.metrics.approved+a.metrics.held,24);count++;
}
for(const d of examples){assert.deepEqual(parse(JSON.stringify({originalInput:d})),d);assert.throws(()=>suggest(d,[[NaN]]));assert.throws(()=>suggest(d,texts(d).map(()=>Array(384).fill(0))))}
fs.writeFileSync('core-validation.json',JSON.stringify({passed:true,capacityGateCombinations:count,recordConservation:true,selectedHighCoverageOptimalUnderRule:true,malformedVectorsRejected:true}));console.log('PASS',count,'capacity/gate combinations');
