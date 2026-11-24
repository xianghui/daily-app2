import a from 'node:assert/strict';import fs from 'node:fs';import{parse,examples,suggest,inspect,plans,analyze}from'./src/core.js';
const p={...plans[0],maxAge:300};let n=0;for(const[t,age,expected]of[
[{requestTime:100,responseTime:110,date:100,now:400,age:0},300,'revalidate'],
[{requestTime:100,responseTime:110,date:100,now:399,age:0},299,'fresh'],
[{requestTime:100,responseTime:110,date:500,now:120,age:0},20,'fresh'],
[{requestTime:100,responseTime:110,date:0,now:120,age:0},120,'fresh'],
[{requestTime:100,responseTime:110,date:100,now:120,age:295},315,'revalidate']]){const r=inspect(JSON.stringify(t),p);a.equal(r.currentAge,age);a.equal(r.selected,expected);n++}
a.equal(inspect(JSON.stringify({requestTime:0,responseTime:0,date:0,now:0,age:0}),{...p,noCache:true}).selected,'revalidate');n++;
for(const raw of ['null','[]','{}','{','{"requestTime":1,"responseTime":0,"date":0,"now":2,"age":0}','{"requestTime":0,"responseTime":3,"date":0,"now":2,"age":0}','{"requestTime":0,"responseTime":0,"date":0,"now":0,"age":0.1}']){a.throws(()=>inspect(raw,p));n++}
const d=parse(JSON.stringify(examples[0].data));for(const v of[null,[],[[0]],Array.from({length:7},()=>Array(384).fill(0)),Array.from({length:7},()=>Array(384).fill(NaN))]){a.throws(()=>suggest(d,v));n++}a.throws(()=>analyze(d,[]));n++;fs.writeFileSync('core-validation.json',JSON.stringify({assertionGroups:n,passed:true}));console.log('PASS core',n)
