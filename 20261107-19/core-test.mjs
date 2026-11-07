import assert from 'node:assert/strict';import {inputs,examples,conflicts,issues,propose,calendar,artifact} from './src/core.js';
const d=inputs(examples['Office bookings'].bookings,examples['Office bookings'].rooms);
assert.throws(()=>propose(d,[]),/Malformed/);assert.throws(()=>propose(d,Array(7).fill(Array(384).fill(0))),/Malformed/);
assert.equal(conflicts([{id:'a',assigned:'x',start:'2026-11-09T09:00Z',end:'2026-11-09T10:00Z'},{id:'b',assigned:'x',start:'2026-11-09T10:00Z',end:'2026-11-09T11:00Z'}]).length,0);
const rows=d.bookings.map((r,i)=>({...r,assigned:d.rooms[[0,0,1,2][i]].id,note:'é'.repeat(120),reviewed:true}));rows[1].start='2026-11-09T10:00Z';rows[1].end='2026-11-09T11:00Z';assert.equal(issues(d,rows).length,0);const a=artifact(d,rows,[]),ics=calendar(a);assert(ics.includes('DTSTAMP:'+a.generatedAt.replace(/[-:]/g,'').replace(/\.\d{3}Z$/,'Z')));for(const line of ics.split('\r\n'))assert(new TextEncoder().encode(line).length<=75);
assert.throws(()=>inputs(examples['Office bookings'].bookings,examples['Office bookings'].rooms.replace('R2,','R1,')),/Duplicate/);
assert.throws(()=>inputs('é'.repeat(12001),examples['Office bookings'].rooms),/24 KB/);
assert.throws(()=>artifact(d,rows.map(r=>({...r,assigned:''})),[]),/Assign/);
console.log('PASS: schema, vector dimensions/norms, endpoint adjacency, conservation, export guards, UTF-8 folding, UTC stamp, byte size.');
