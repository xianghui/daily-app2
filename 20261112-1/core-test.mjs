import assert from 'node:assert/strict';import fs from 'node:fs';import {examples,validate,parse,suggest,texts,analyze} from './src/core.js';
const report={cases:0,checks:[]};let seed=87103;const rand=n=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed%n};
for(let t=0;t<1800;t++){
 const k=2+rand(5),n=1+rand(10),catalog=Array.from({length:k},(_,i)=>({id:'p'+i,title:'Product '+i,description:'Product '+i})),records=[],review=[];let id=0;
 for(let b=0;b<n;b++){const m=1+rand(4);for(let j=0;j<m&&records.length<24;j++){const r={id:'r'+id++,basket:'b'+b,text:'note '+b+' '+j};records.push(r);review.push({...r,item:'p'+rand(k),decision:rand(7)===0?'hold':'approve',note:'',proposed:'p0',exact:null})}}
 const d={name:'oracle',catalog,records,minSupport:1+rand(4),minLift:rand(40)/10},a=analyze(d,review);
 // Independent bitmask oracle: build from original review lines, not returned baskets or counts.
 const ids=[...new Set(review.map(r=>r.basket))],masks=[];
 for(const bid of ids){const rs=review.filter(r=>r.basket===bid);if(rs.some(r=>r.decision==='hold'))continue;let mask=0;for(const r of rs)mask|=1<<Number(r.item.slice(1));masks.push(mask)}
 assert.equal(a.metrics.completeBaskets,masks.length);assert.equal(a.records.length,records.length);assert.equal(a.pairs.length,k*(k-1)/2);assert.equal(a.baskets.reduce((s,b)=>s+b.lines.length,0),records.length);
 const expected=[];
 for(let i=0;i<k;i++)for(let j=i+1;j<k;j++){
 let count=0,ac=0,bc=0;for(const mask of masks){if(mask&(1<<i))ac++;if(mask&(1<<j))bc++;if((mask&((1<<i)|(1<<j)))===((1<<i)|(1<<j)))count++}
 const p=a.pairs.find(p=>p.a==='p'+i&&p.b==='p'+j);assert.equal(p.count,count);assert.equal(p.aCount,ac);assert.equal(p.bCount,bc);assert.equal(p.lift,ac&&bc?count*masks.length/(ac*bc):null);assert.equal(p.support,masks.length?count/masks.length:null);assert.equal(p.aToB,ac?count/ac:null);assert.equal(p.bToA,bc?count/bc:null);const q=count>=d.minSupport&&ac>0&&bc>0&&count*masks.length>=d.minLift*ac*bc;assert.equal(p.qualifies,q);if(q)expected.push([p.a,p.b].join('/'));
 }
 assert.deepEqual(a.rules.map(p=>[p.a,p.b].join('/')).sort(),expected.sort());assert(a.rules.every((p,i)=>!i||a.rules[i-1].lift>=p.lift));report.cases++;
}
report.checks.push('1800 seeded independent bitmask association/count/hold oracle cases');
const d=examples[0];assert.deepEqual(parse(JSON.stringify({originalInput:d})),d);
const n=texts(d).length,v=Array.from({length:n},()=>Array.from({length:384},(_,i)=>+(i===0)));
for(const bad of[null,[],v.slice(1),v.map(x=>x.slice(1)),v.map(x=>x.map(()=>0)),v.map(x=>x.map(()=>NaN))])assert.throws(()=>suggest(d,bad));assert.equal(suggest(d,v).length,d.records.length);report.checks.push('embedding schema: finite normalized 384D count checks');
for(const bad of[null,{}, {...d,records:[]},{...d,minSupport:1.5},{...d,minLift:NaN},{...d,catalog:[null]}, {...d,records:[{id:'r',basket:'b',text:'x'.repeat(401)}]}])assert.throws(()=>validate(bad));
const rows=suggest(d,v);assert.throws(()=>analyze(d,rows));rows.forEach(r=>r.decision='approve');assert.equal(analyze(d,rows).metrics.completeBaskets,6);rows[0].basket='';assert.throws(()=>analyze(d,rows));report.checks.push('input limits and pending/invalid review guards');
fs.writeFileSync('core-validation.json',JSON.stringify(report,null,2));console.log('PASS',JSON.stringify(report));
