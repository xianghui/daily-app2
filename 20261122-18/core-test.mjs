import assert from 'node:assert/strict';import fs from 'node:fs';import{examples,parse,compute,analyze,suggest,texts,planCsv}from './src/core.js';
const rows=d=>d.operations.map((o,i)=>({index:i,id:o.id,transaction:o.transaction,mode:o.mode,resource:o.resourceNote,aiResource:o.resourceNote,evidence:[],decision:'approve',note:''}));
const make=(operations,commits)=>({title:'Known answer',resources:[{id:'x',description:'X'},{id:'y',description:'Y'}],transactions:['A','B'],operations:operations.map((o,i)=>({id:'o'+i,transaction:o[0],mode:o[1],resourceNote:o[2]})),commits:commits.map(c=>({transaction:c[0],after:c[1]}))});
let tests=0;const cases=[
 ['early reader commit',make([['A','W','x'],['B','R','x']],[['B',2],['A',2]]),[false,false,false,1,0]],
 ['dirty but recoverable',make([['A','W','x'],['B','R','x']],[['A',2],['B',2]]),[true,false,false,0,0]],
 ['committed reader source',make([['A','W','x'],['B','R','x']],[['A',1],['B',2]]),[true,true,true,0,0]],
 ['dirty overwrite only',make([['A','W','x'],['B','W','x']],[['A',2],['B',2]]),[true,true,false,0,1]],
 ['read own write',make([['A','W','x'],['A','R','x'],['B','R','y']],[['B',3],['A',3]]),[true,true,true,0,0]],
 ['latest writer determines read',make([['A','W','x'],['B','W','x'],['B','R','x']],[['B',3],['A',3]]),[true,true,false,0,1]],
 ['initial source',make([['A','R','x'],['B','R','x']],[['B',2],['A',2]]),[true,true,true,0,0]]
];const report=[];for(const[name,d,expected]of cases){parse(JSON.stringify(d));const a=compute(d,rows(d));assert.deepEqual([a.recoverable,a.cascadeless,a.strict,a.violations.length,a.dirtyWrites.length],expected);assert.equal(a.events.length,d.operations.length+d.transactions.length);report.push({name,expected,passed:true});tests++}
for(const s of['','x','null','{}',JSON.stringify({...examples[0].data,commits:[]}),JSON.stringify({...examples[0].data,commits:[{transaction:'checkout',after:1},{transaction:'restock',after:6}]})]){assert.throws(()=>parse(s));tests++}
const d=cases[0][1],r=rows(d);assert.throws(()=>analyze(d,r.map(x=>({...x,decision:'pending'}))));assert.equal(analyze(d,r.map(x=>({...x,decision:'reject'}))).analysis.status,'held');assert.throws(()=>suggest(d,[[NaN]]));assert.throws(()=>suggest(d,Array.from({length:texts(d).length},()=>Array(384).fill(0))));tests+=4;
fs.writeFileSync('core-validation.json',JSON.stringify({checks:tests,cases:report},null,2));console.log('PASS',tests,'core checks');
