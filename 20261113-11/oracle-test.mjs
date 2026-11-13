import a from 'node:assert/strict';import fs from 'node:fs';import {examples,parse,analyze,calculate,suggest} from './src/core.js';
let count=0;
for(let i=0;i<3000;i++){
 const d=parse(JSON.stringify(examples[i%2].data));d.systems.forEach((s,j)=>{s.rpoHours=(i+j)%49;s.rtoMinutes=(i*7+j)%300+1});
 const rows=d.records.map((r,j)=>({id:r.id,kind:d.systems[(i+j)%4].id,proposed:'orders',decision:(i+j)%7===0?'hold':'approve',ageHours:(i*11+j)%60,restoreMinutes:(i*13+j)%400+1,jobOk:(i+j)%3!==0,tested:(i+j)%4!==0,owner:'Reviewer',note:''}));
 const out=analyze(d,rows);let base=0,covered=0,missing=0;
 for(const s of d.systems){const rs=rows.filter(r=>r.kind===s.id&&r.decision==='approve');if(!rs.length)missing++;if(rs.some(r=>r.jobOk))base++;if(rs.some(r=>r.jobOk&&r.tested&&BigInt(r.ageHours)<=BigInt(s.rpoHours)&&BigInt(r.restoreMinutes)<=BigInt(s.rtoMinutes)))covered++}
 a.equal(out.baselineCovered,base);a.equal(out.targetCovered,covered);a.equal(out.missing,missing);a.equal(out.approved+out.held,rows.length);a(out.targetCovered<=out.baselineCovered);count++;
}
const t=examples[0].data.systems[0],r={id:'boundary',ageHours:t.rpoHours,restoreMinutes:t.rtoMinutes,jobOk:true,tested:true};a(calculate(r,t).passes);a(!calculate({...r,ageHours:r.ageHours+1},t).passes);a(!calculate({...r,restoreMinutes:r.restoreMinutes+1},t).passes);
const d=parse(JSON.stringify(examples[0].data));a.throws(()=>suggest(d,[[NaN]]));for(const bad of ['','null','{}',' '.repeat(40001)])a.throws(()=>parse(bad));a.throws(()=>parse(JSON.stringify({...d,asOf:'2026-02-30T02:00:00Z'})));a.throws(()=>parse(JSON.stringify({...d,records:[d.records[0],d.records[0]]})));
// No combining a fresh-but-slow copy with a stale-but-fast copy.
const split=[{...r,id:'db-a',kind:'orders',proposed:'orders',decision:'approve',owner:'A',note:'',ageHours:0,restoreMinutes:1000},{...r,id:'art-a',kind:'orders',proposed:'orders',decision:'approve',owner:'B',note:'',ageHours:1000,restoreMinutes:1}];const two={...d,records:d.records.slice(0,2)};a.equal(analyze(two,split).targetCovered,0);
fs.writeFileSync('oracle-validation.json',JSON.stringify({independentBigIntCoverageCases:count,boundaries:true,noCrossCopyPassCombination:true,invalidInputs:true}));console.log('PASS',count,'independent coverage cases and boundaries');
