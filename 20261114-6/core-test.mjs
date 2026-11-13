import assert from 'node:assert/strict';
import fs from 'node:fs';
import {examples,parse,texts,suggest,analyze} from './src/core.js';
const report=[];
for(const [i,e] of examples.entries()){
 const d=parse(JSON.stringify(e.data)),expected=i?['draft','review','publish','draft','publish','review']:['intake','repair','test','close','intake','close','repair','repair'];
 const rows=d.records.map((r,j)=>({...r,kind:expected[j],decision:'approve',reviewNote:''}));
 const result=analyze(d,rows);assert.equal(result.violationCount,1);assert.equal(result.longGapCount,1);assert.equal(result.repeatCount,i?0:1);
 assert.throws(()=>suggest(d,[[NaN]]),/Malformed/);assert.throws(()=>analyze(d,rows.slice(1)),/Preserve/);
 assert.throws(()=>analyze(d,rows.map(r=>({...r,decision:'pending'}))),/Review/);
 const reversed={...d,records:[...d.records].reverse()},rev=analyze(reversed,[...rows].reverse());assert.deepEqual(rev.cases,result.cases);
 for(const c of result.cases){assert.equal(c.gaps.reduce((s,g)=>s+g.minutes,0),c.elapsedMinutes);assert(c.gaps.every(g=>g.minutes>0))}
 rows[0].decision='hold';assert.equal(analyze(d,rows).checkedCases,1);
 report.push({fixture:e.name,violations:result.violationCount,longGaps:result.longGapCount,repeats:result.repeatCount,orderIndependent:true});
}
// Transitive prerequisites are not implicitly invented: each explicit direct prerequisite is checked.
const d=parse(JSON.stringify(examples[0].data));d.records=[d.records[0],d.records[2]];const r=analyze(d,d.records.map((x,i)=>({...x,kind:i?'test':'intake',decision:'approve',reviewNote:''})));assert.deepEqual(r.cases[0].violations[0].missing,['repair']);
// Exact threshold is not above target.
d.maxGapMinutes=120;assert.equal(analyze(d,r.reviews).longGapCount,0);
const tied=structuredClone(r.reviews);tied[1].minute=0;assert(analyze(d,tied).cases[0].reasons.length);
const cycle=structuredClone(d);cycle.activities[0].requires=['close'];assert.throws(()=>parse(JSON.stringify(cycle)),/cycle/);
// Independent pairwise-time oracle for generated traces, including shuffled input.
let seed=19;const rand=n=>{seed=(seed*1664525+1013904223)>>>0;return seed%n};
for(let trial=0;trial<500;trial++){
 const source=structuredClone(examples[1].data);source.maxGapMinutes=1+rand(50);const n=1+rand(32);
 source.records=Array.from({length:n},(_,i)=>({id:'e'+i,caseId:'c'+rand(4),description:'synthetic event',minute:i*10,owner:'Analyst'}));
 const rows=source.records.map(r=>({...r,kind:source.activities[rand(3)].id,decision:'approve',reviewNote:''}));
 // Shuffle source and review together; actual trace must not depend on import ordering.
 for(let k=n-1;k>0;k--){const j=rand(k+1);[source.records[k],source.records[j]]=[source.records[j],source.records[k]];[rows[k],rows[j]]=[rows[j],rows[k]]}
 const actual=analyze(source,rows);let missing=0,repeats=0,long=0;
 for(const r of rows){const same=rows.filter(x=>x.caseId===r.caseId),earlier=same.filter(x=>x.minute<r.minute),prereqs=source.activities.find(x=>x.id===r.kind).requires;
  if(prereqs.some(id=>!earlier.some(x=>x.kind===id)))missing++;
  if(earlier.some(x=>x.kind===r.kind))repeats++;
  const prev=earlier.reduce((best,x)=>!best||x.minute>best.minute?x:best,null);
  if(prev&&r.minute-prev.minute>source.maxGapMinutes)long++;
 }
 assert.equal(actual.violationCount,missing);assert.equal(actual.repeatCount,repeats);assert.equal(actual.longGapCount,long);
 assert.equal(actual.cases.flatMap(x=>x.eventIds).length,n);
}
report.push({generatedIndependentPairwiseOracleCases:500,matched:true});
fs.writeFileSync('core-validation.json',JSON.stringify(report,null,2));console.log('PASS known-answer traces, conservation, strict thresholds, explicit prerequisites, holds, ties, cycles and malformed vectors');
