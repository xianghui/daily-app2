import assert from 'node:assert/strict';import {parse,examples,occurrences,plan,suggest,calendar} from './src/core.js';
assert.deepEqual(occurrences('2027-01-31','monthly','2027-01-01','2027-04-30','keep').map(x=>x.date),['2027-01-31','2027-02-28','2027-03-31','2027-04-30']);
assert.deepEqual(occurrences('2024-02-29','annual','2024-01-01','2028-12-31','keep').map(x=>x.date),['2024-02-29','2025-02-28','2026-02-28','2027-02-28','2028-02-29']);
assert.equal(occurrences('2027-01-02','daily','2027-01-01','2027-01-03','nextMonday').length,0);
assert.deepEqual(occurrences('2027-01-01','daily','2027-01-04','2027-01-04','nextMonday').map(x=>x.nominal),['2027-01-02','2027-01-03','2027-01-04']);
for(const d of examples)assert.deepEqual(parse(JSON.stringify(d)),d);
for(const patch of [{start:'2027-02-30'},{end:'2029-01-01'},{weekends:'foo'},{tasks:[]},{tasks:Array.from({length:25},(_,i)=>({id:''+i,description:'daily',firstDue:'2027-01-01'}))}])assert.throws(()=>parse(JSON.stringify({...examples[0],...patch})));
assert.throws(()=>suggest(examples[0],[[NaN]]));
console.log('PASS month-end non-drift, leap-year anchor, shifted horizon, validation');
