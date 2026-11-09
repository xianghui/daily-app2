import assert from 'node:assert/strict';import fs from 'node:fs';import {examples,parse,deadline,plan,suggest,texts,csv} from './src/core.js';
let checks=0;const eq=(a,b)=>{assert.deepEqual(a,b);checks++};
for(const d of examples)eq(parse(JSON.stringify(d)),d);
const [a,b]=examples;
eq(a.records.map((r,i)=>deadline(r,a.policies[i],a.calendar)),['2026-11-09T10:00Z','2026-11-09T13:30Z','2026-11-11T16:00Z']);
eq(b.records.map((r,i)=>deadline(r,b.policies[i],b.calendar)),['2026-11-10T08:30Z','2026-11-11T13:00Z','2026-11-11T13:30Z']);
const c={weekdays:[1,2,3,4,5],openHour:9,closeHour:17,holidays:[]};const r={created:'2026-11-06T16:00Z',pauses:[]};
eq(deadline(r,{minutes:60},c),'2026-11-06T17:00Z');eq(deadline(r,{minutes:61},c),'2026-11-09T09:01Z');
eq(deadline({created:'2026-11-07T10:00Z',pauses:[]},{minutes:1},c),'2026-11-09T09:01Z');
eq(deadline({created:'2026-11-06T08:00Z',pauses:[{start:'2026-11-06T08:00Z',end:'2026-11-06T10:00Z'}]},{minutes:30},c),'2026-11-06T10:30Z');
eq(deadline({created:'2026-11-06T16:00Z',pauses:[{start:'2026-11-06T17:00Z',end:'2026-11-09T09:00Z'}]},{minutes:120},c),'2026-11-09T10:00Z');
// Independent minute-by-minute reference: randomized calendars and pauses.
let seed=42;const rnd=n=>(seed=(1664525*seed+1013904223)>>>0)%n;for(let j=0;j<60;j++){const created=Date.parse('2026-11-01T00:00Z')+rnd(10000)*60000;const calendar={weekdays:[1,3,5],openHour:8,closeHour:12,holidays:['2026-11-04']};const pauses=[{start:new Date(created+30*60000).toISOString().slice(0,16)+'Z',end:new Date(created+600*60000).toISOString().slice(0,16)+'Z'}];const rr={created:new Date(created).toISOString().slice(0,16)+'Z',pauses},budget=1+rnd(1200);let t=created,left=budget;while(left){const dt=new Date(t),s=dt.toISOString();if(calendar.weekdays.includes(dt.getUTCDay())&&dt.getUTCHours()>=8&&dt.getUTCHours()<12&&!calendar.holidays.includes(s.slice(0,10))&&!(t>=Date.parse(pauses[0].start)&&t<Date.parse(pauses[0].end)))left--;t+=60000;}eq(deadline(rr,{minutes:budget},calendar),new Date(t).toISOString().slice(0,16)+'Z');}
for(const mutate of [d=>d.calendar.weekdays=[],d=>d.calendar.closeHour=9,d=>d.calendar.holidays=['2026-02-30'],d=>d.records[0].created='2026-02-30T09:00Z',d=>d.records[0].pauses=[{start:'2026-11-06T16:30Z',end:'2026-11-06T16:20Z'}],d=>d.records[0].pauses=[{start:'2026-11-06T16:30Z',end:'2026-11-09T11:00Z'}],d=>d.policies[0].minutes=0,d=>d.records.push(d.records[0])]){const d=structuredClone(a);mutate(d);assert.throws(()=>parse(JSON.stringify(d)));checks++;}
assert.throws(()=>suggest(a,[[NaN]]));checks++;const vectors=texts(a).map((_,i)=>Array.from({length:384},(_,k)=>+(k===i%3)));let rows=suggest(a,vectors);assert.throws(()=>plan(a,rows));checks++;rows=rows.map(r=>({...r,decision:'approve'}));const out=plan(a,rows);eq(out.counts,{total:3,approved:3,held:0,due:1});rows[2].decision='hold';eq(plan(a,rows).records[2].due,null);eq(plan(a,rows).counts.total,3);
fs.writeFileSync('core-validation.json',JSON.stringify({checks,randomizedReferenceCases:60,result:'passed'},null,2));console.log('PASS',checks,'core assertions');
