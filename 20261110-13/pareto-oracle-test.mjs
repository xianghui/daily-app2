import assert from 'node:assert/strict';import fs from 'node:fs';import {parse,plan}from './src/core.js';
let seed=1013;const rand=n=>(seed=(Math.imul(seed,1664525)+1013904223)>>>0)%n;let count=0;
for(const basis of ['units','rework'])for(let k=0;k<200;k++){
 const m=1+rand(8),n=1+rand(64),target=1+rand(100),categories=Array.from({length:m},(_,j)=>({id:'C'+j,title:'Synthetic category '+j,description:'Synthetic observable condition '+j})),notes=Array.from({length:n},(_,j)=>({id:'N'+j,text:'Synthetic report '+j,units:1+rand(500),minutesPerUnit:rand(21)}));
 const d=parse(JSON.stringify({name:'Oracle fixture',basis,target,categories,notes}));
 const rows=notes.map(x=>({id:x.id,selected:'C'+rand(m),proposed:'C0',candidates:[],units:x.units,minutesPerUnit:x.minutesPerUnit,decision:rand(4)?'approve':'hold',owner:'',action:'',rationale:''}));
 const a=plan(d,rows),weights=categories.map(c=>rows.filter(r=>r.decision==='approve'&&r.selected===c.id).reduce((s,r)=>s+(basis==='units'?r.units:r.units*r.minutesPerUnit),0)),total=weights.reduce((s,x)=>s+x,0);
 assert.equal(a.metrics.total,total);let minimum=Infinity;
 if(total===0)minimum=0;else for(let bits=1;bits<1<<m;bits++){let value=0,size=0;for(let j=0;j<m;j++)if(bits&(1<<j)){value+=weights[j];size++}if(value*100>=total*target)minimum=Math.min(minimum,size)}
 assert.equal(a.metrics.focusCategories,minimum);const approved=rows.filter(r=>r.decision==='approve');assert.equal(a.categories.flatMap(c=>c.reportIds).length,approved.length);assert.equal(a.records.length,n);assert.equal(a.metrics.approvedUnits,approved.reduce((s,x)=>s+x.units,0));assert.equal(a.metrics.estimatedMinutes,approved.reduce((s,x)=>s+x.units*x.minutesPerUnit,0));count++;
}
fs.writeFileSync('pareto-oracle-validation.json',JSON.stringify({cases:count,seed:1013,independentExhaustiveSubsetMinimum:true,reportConservation:true,unitsAndEffortConservation:true},null,2));console.log('PASS',count,'generated fixtures vs exhaustive focus-cardinality oracle');
