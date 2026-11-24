import assert from 'node:assert/strict';import fs from 'node:fs';import{tokens,inspect,examples,parse,suggest,analyze}from './src/core.js';
const cases=[];for(let i=0;i<400;i++){const key=['a/b','~tilde','', 'a~1b','normal'][i%5],path='/'+key.replaceAll('~','~0').replaceAll('/','~1')+'/items/'+i%4+'/value',document={[key]:{items:Array.from({length:4},(_,j)=>({value:i+j}))}},value=-(i+1),profile={id:'x',description:'test numeric field',pointer:path,type:'number'},r=inspect(JSON.stringify({document,value}),profile);assert.equal(r.before,i+i%4);assert.equal(r.after[key].items[i%4].value,value);assert.deepEqual(document,r.document);cases.push(r)}
for(const s of['','x','/bad~','/bad~2','/a/__proto__','/constructor','/'+Array(10).fill('a').join('/')])assert.throws(()=>tokens(s));
const p={id:'x',description:'x',pointer:'/a/0',type:'number'};for(const document of[{a:[]},{a:1},{a:['text']},{b:[1]}])assert.throws(()=>inspect(JSON.stringify({document,value:1}),p));
for(const pointer of['/a/01','/a/-','/a/1','/a/-1','/a/1e0'])assert.throws(()=>inspect(JSON.stringify({document:{a:[1]},value:2}),{...p,pointer}));
for(const value of['1',null,true,{},[],1e100])assert.throws(()=>inspect(JSON.stringify({document:{a:[1]},value}),p));
const nullable={...p,pointer:'/a',type:'null'};assert.equal(inspect('{"document":{"a":null},"value":null}',nullable).changed,false);
assert.throws(()=>inspect('{"document":{"__proto__":{"polluted":1}},"value":1}',p));assert.equal({}.polluted,undefined);
assert.throws(()=>inspect(JSON.stringify({document:{a:Array(301).fill(0)},value:1}),p));
assert.throws(()=>suggest(examples[0].data,[[0]]));assert.throws(()=>suggest(examples[0].data,Array(6).fill(Array(384).fill(Infinity))));
assert.deepEqual(parse(JSON.stringify(examples[0].data)),examples[0].data);assert.throws(()=>analyze(examples[0].data,[]));
fs.writeFileSync('oracle-cases.json',JSON.stringify(cases));fs.writeFileSync('core-validation.json',JSON.stringify({generatedPatchCases:cases.length,invalidPointersAndIndicesBlocked:true,scalarTypesEnforced:true,nodeBoundsEnforced:true,malformedVectorsBlocked:true,originalsPreserved:true,prototypeKeysBlocked:true},null,2));console.log('PASS core',cases.length);
