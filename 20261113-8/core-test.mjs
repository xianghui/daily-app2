import {examples,parse,suggest,analyze,coverage,csv,markdown} from './src/core.js';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const d=parse(JSON.stringify(examples[0].data));
for(const v of [[],[[NaN]],Array(8).fill(Array(384).fill(0)),Array(8).fill(Array(384).fill(1))])assert.throws(()=>suggest(d,v),/Malformed/);
let seed=713;function rnd(n){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed%n}
for(let k=0;k<3000;k++){
 const x=structuredClone(d);x.tasks=Array.from({length:rnd(5)+1},(_,i)=>({id:'task-'+i,name:'Deliverable '+i}));x.records=Array.from({length:rnd(40)+1},(_,i)=>({id:'row-'+i,task:x.tasks[rnd(x.tasks.length)].id,person:x.people[rnd(4)],note:'Synthetic task note.',owner:'Coordinator'}));
 const rows=x.records.map(r=>({...r,kind:['R','A','C','I'][rnd(4)],proposed:'R',evidence:[],decision:rnd(4)?'approve':'hold',note:''}));
 const r=analyze(x,rows);assert.equal(r.total,r.approved+r.held);let ready=0,issues=0;
 for(const t of r.matrix){const selected=rows.filter(z=>z.task===t.task&&z.decision==='approve');const a=new Set(),resp=new Set(),seen=[],dups=new Set();for(const z of selected){if(z.kind==='A')a.add(z.person);if(z.kind==='R')resp.add(z.person);if(seen.includes(z.person))dups.add(z.person);seen.push(z.person)}const count=Number(a.size!==1)+Number(resp.size===0)+Number(dups.size>0);assert.equal(t.issues.length,count);assert.equal(t.ready,count===0);assert.deepEqual([...t.accountable].sort(),[...a].sort());assert.deepEqual([...t.responsible].sort(),[...resp].sort());assert.equal(t.assignments.length,selected.length);ready+=Number(count===0);issues+=count}
 assert.equal(r.ready,ready);assert.equal(r.issueCount,issues);assert.equal(r.followUps.length,issues);assert(r.followUps.every(f=>x.tasks.some(t=>t.id===f.task)));assert.deepEqual(parse(JSON.stringify(r.originalInput)),x);
}
const rows=d.records.map((r,i)=>({...r,kind:['R','A','C','I'][i],proposed:'R',evidence:[],decision:'approve',note:''}));
const r=analyze(d,rows);assert.equal(r.ready,1);assert.equal(r.issueCount,2);assert.equal(r.baseline.ready,0);assert.equal(r.baseline.recognizedRecords,0);
rows[0].decision='pending';assert.throws(()=>analyze(d,rows),/Review every/);rows[0].decision='approve';rows[0].kind='unknown';assert.throws(()=>analyze(d,rows),/Unknown/);
for(const field of ['tasks','people','records']){const x=structuredClone(d);x[field]=[];assert.throws(()=>parse(JSON.stringify(x)))}
const maximum=structuredClone(d);maximum.people=Array.from({length:12},(_,i)=>'Person '+i);maximum.tasks=Array.from({length:12},(_,i)=>({id:'task-'+i,name:'Deliverable '+i}));maximum.records=Array.from({length:40},(_,i)=>({id:'id-'+i,note:'I do the work.',task:maximum.tasks[i%12].id,person:maximum.people[i%12],owner:'Coordinator'}));parse(JSON.stringify(maximum));const maximumResult=analyze(maximum,maximum.records.map(x=>({...x,kind:'R',proposed:'R',decision:'hold',note:''})));assert.equal(maximumResult.matrix.length,12);assert.equal(maximumResult.followUps.length,24);assert.equal(maximumResult.total,40);for(const field of ['tasks','people','records']){const x=structuredClone(maximum);x[field].push(x[field][0]);assert.throws(()=>parse(JSON.stringify(x)))}
fs.writeFileSync('core-validation.json',JSON.stringify({independentCoverageCases:3000,malformedEmbeddingChecks:4,sourceReviewGuards:true,baselineFixtureRecognized:0,completeTaskPreservation:true,maximumTasksPeopleRecords:[12,12,40],overLimitRejected:true},null,2));console.log('PASS 3000 independent coverage cases and schema guards');
