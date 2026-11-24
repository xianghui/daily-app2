import a from 'node:assert/strict';import fs from 'node:fs';import {plans,examples,parse,suggest,inspect,analyze,release} from './src/core.js';
let cases=0;const test=(name,fn)=>{fn();cases++;};const base=JSON.parse(examples[0].data.records[0].raw),raw=o=>JSON.stringify({...base,...o}),check=(o,p=plans[0])=>inspect(raw(o),p);
test('server wait floor',()=>a.equal(check({retryAfter:'12'}).retryAt,'2026-11-24T07:00:12.000Z'));
test('exponential backoff',()=>a.equal(check({attempt:3,retryAfter:''}).delaySeconds,8));
test('cap only local delay',()=>{const r=check({attempt:10,retryAfter:'300'},{...plans[0],maxRetries:10});a.equal(r.backoff,30);a.equal(r.delaySeconds,300);a.equal(r.selected,'stop')});
test('deadline equality permitted',()=>a.equal(check({deadline:'2026-11-24T07:00:12Z'}).selected,'retry'));
test('past server date zero minimum',()=>a.equal(check({retryAfter:'Mon, 23 Nov 2026 07:00:00 GMT'}).serverDelay,0));
test('IMF-fixdate',()=>a.equal(check({retryAfter:'Tue, 24 Nov 2026 07:00:25 GMT'}).delaySeconds,25));
test('key needed',()=>a.equal(check({retryAfter:''},plans[1]).selected,'stop'));
test('key is assertion, not credential',()=>a.equal(check({retryAfter:'',keyConfirmed:true},plans[1]).selected,'retry'));
test('never replay even keyed',()=>a.equal(check({keyConfirmed:true},plans[2]).selected,'stop'));
test('retry limit',()=>a.equal(check({attempt:5}).selected,'stop'));
test('status subset',()=>{for(const status of [200,400,500])a.equal(check({status}).selected,'stop')});
for(const o of [{retryAfter:'-1'},{retryAfter:'1.5'},{retryAfter:'Wed, 24 Nov 2026 07:00:25 GMT'},{retryAfter:'2026-11-24'},{now:'2026-02-30T07:00:00Z'},{deadline:'2026-11-24T06:00:00Z'},{deadline:'2026-12-24T07:00:00Z'},{attempt:0},{keyConfirmed:'true'},{status:600}])test('invalid '+JSON.stringify(o),()=>a.throws(()=>check(o)));
for(const d of examples){parse(JSON.stringify(d.data));const rows=d.data.records.map((r,i)=>({...r,system:d.expected[i],decision:'approve',note:'',evidence:[]})),r=analyze(d.data,rows);a.equal(r.metrics.ready,4);a.equal(r.metrics.disagreements,4);a.equal(release(r).cases.length,4)}
a.throws(()=>suggest(examples[0].data,[]));a.throws(()=>parse('{}'));fs.writeFileSync('core-validation.json',JSON.stringify({passed:cases,fixtureComparisons:[4,4],allOriginalRecordsConserved:true},null,2));console.log('PASS core',cases);
