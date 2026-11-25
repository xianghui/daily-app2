import a from'node:assert/strict';import{parse,examples,apply,suggest,adjust,imported}from'./src/core.js';const d=examples[0].data;
for(const raw of['','{}','null','[]',JSON.stringify({...d,weekend:[]}),JSON.stringify({...d,holidays:['2026-02-30']}),JSON.stringify({...d,requests:[{...d.requests[0],date:'2026-1-1'}]}),JSON.stringify({...d,profiles:[...d.profiles,d.profiles[0]]})])a.throws(()=>parse(raw));
a.throws(()=>suggest(d,[[null]]));a.throws(()=>suggest(d,Array(6).fill(Array(384).fill(1))));a.throws(()=>apply(d,[]));
const reviews=d.requests.map((r,i)=>({id:r.id,date:r.date,profile:examples[0].expected[i],decision:'approve',note:'x\ny'})),result=apply(d,reviews);a.deepEqual(imported(JSON.stringify(result)),d);a.equal(result.rows.length,3);a.equal(result.metrics.baselineDifferences,2);
a.deepEqual(result.rows.map(r=>r.output.date),['2026-02-03','2026-01-30','2026-01-30']);a.equal(adjust('2026-01-30','following',d).shiftDays,0);a.throws(()=>adjust('2099-12-31','following',{weekend:[0,1,2,3,4,5],holidays:['2099-12-31']}));
console.log('PASS core validation, review, reimport, holiday/month boundaries and supported range');

{const d=structuredClone(examples[0].data);d.holidays=["2099-12-31"];d.requests=[{id:"last",date:"2099-12-31",note:"Use previous day"}];const r=apply(d,[{id:"last",date:"2099-12-31",profile:"prior",decision:"approve",note:""}]);a.equal(r.rows[0].output.date,"2099-12-30");a(r.rows[0].baselineError);a.equal(r.metrics.baselineBlocked,1);console.log("PASS reviewed output survives baseline year boundary")}
