import assert from 'node:assert/strict';import {examples,parse,plan} from './src/core.js';
let seed=99;const rand=n=>(seed=(seed*1664525+1013904223)>>>0)%n;let cases=0;
for(let t=0;t<600;t++){
 const parts=Array.from({length:8},(_,i)=>({id:'P'+i,text:'Part '+i,kind:i<5?'assembly':'raw',stock:i<5?0:rand(80)})),lines=[],reviews=[];
 for(let i=0;i<5;i++)for(let j=0;j<1+rand(3);j++){const id='L'+lines.length;lines.push({id,parent:'P'+i,text:'Component',quantity:1+rand(4)});reviews.push({id,selected:'P'+(i+1+rand(7-i)),decision:rand(5)===0?'hold':'approve',note:'',proposed:'',baseline:''})}
 const d={title:'Random synthetic DAG',parts,lines,demands:Array.from({length:3},()=>({part:'P'+rand(8),quantity:1+rand(6)}))};parse(JSON.stringify(d));const a=plan(d,reviews),totals=Object.fromEntries(parts.map(p=>[p.id,0]));
 function expand(id,n){totals[id]+=n;for(let i=0;i<lines.length;i++)if(lines[i].parent===id&&reviews[i].decision==='approve')expand(reviews[i].selected,n*lines[i].quantity)}
 for(const x of d.demands)expand(x.part,x.quantity);
 for(const p of a.parts){assert.equal(p.gross,totals[p.id]);if(p.kind==='raw'){assert.equal(p.buy,Math.max(0,totals[p.id]-p.stock));assert.equal(p.gross,p.buy+p.stockUsed)}}
 for(const r of a.records)assert.equal(r.extendedQuantity,r.quantity*totals[r.parent]);assert.equal(a.metrics.complete,!a.records.some(r=>r.decision==='hold'&&totals[r.parent]>0));cases++;
}
console.log('PASS',cases,'random acyclic BOMs vs independent recursive expansion and conservation');

for(const id of ['__proto__','constructor','toString']){const d={title:'Unusual valid IDs',parts:[{id,text:'Assembly',kind:'assembly',stock:0},{id:'raw',text:'Raw part',kind:'raw',stock:1}],lines:[{id:'L',parent:id,text:'Raw part',quantity:2}],demands:[{part:id,quantity:3}]};parse(JSON.stringify(d));const a=plan(d,[{id:'L',selected:'raw',decision:'approve',note:''}]);assert.equal(a.parts.find(p=>p.id==='raw').gross,6);assert.equal(a.metrics.buyUnits,5)}
console.log('PASS prototype-like valid catalog IDs');
