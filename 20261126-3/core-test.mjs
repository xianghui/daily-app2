import a from'node:assert/strict';import{parse,examples,calculate,suggest,apply,imported,texts,decimal}from'./src/core.js';
let count=0;const ok=(f)=>{f();count++},bad=f=>{a.throws(f);count++};
for(const x of examples)ok(()=>a.deepEqual(parse(JSON.stringify(x.data)),x.data));
for(const [start,end,rule,days,interest]of[['2024-02-28','2024-03-01','ACT/360',2,'0.56'],['2026-01-31','2026-03-31','30E/360',60,'16.67'],['2024-02-29','2024-03-31','30E/360',31,'8.61'],['2024-02-29','2024-02-29','ACT/365F',0,'0.00']])ok(()=>{const o=calculate({start,end,principal:'1000',rate:'10'},rule);a.equal(o.days,days);a.equal(o.interest,interest)});
ok(()=>a.equal(calculate({start:'2026-01-01',end:'2026-01-02',principal:'1.80',rate:'100'},'ACT/360').interest,'0.01'));
for(const v of['-1','NaN','1e2','1,000','01','1000000001','1.001'])bad(()=>decimal(v,2,100000000000n,'Principal'));
const d=examples[0].data,v=Array.from({length:texts(d).length},()=>Array.from({length:384},(_,i)=>i===0?1:0));ok(()=>a.equal(suggest(d,v).length,3));for(const vec of[[],[[null]],v.map(a=>a.map(()=>0)),v.map(a=>a.map(()=>Infinity))])bad(()=>suggest(d,vec));const review=suggest(d,v);bad(()=>apply(d,review));review.forEach((r,i)=>{r.profile=d.profiles[i].id;r.decision='approve'});ok(()=>{const r=apply(d,review);a.equal(r.metrics.baselineDifferences,2);a.deepEqual(imported(JSON.stringify(r)),d)});for(const k of['start','end','principal','rate'])bad(()=>apply(d,review.map((r,i)=>i===0?{...r,[k]:''}:r)));
console.log('PASS core',count);
