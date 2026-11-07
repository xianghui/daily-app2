import assert from 'node:assert/strict';
import {inputs,parse,suggest,artifact,validateVectors} from './src/core.js';
import {writeFileSync} from 'node:fs';
const unit=k=>Array.from({length:384},(_,i)=>+(i===k));
const d=inputs('id,step\na,first\nb,second','id,step\nx,first changed\ny,second changed',.42);
const rows=suggest(d,[unit(0),unit(1),unit(0),unit(1)]);rows.forEach(r=>r.reviewed=true);
assert.deepEqual(rows.map(r=>r.previous),['a','b']);const a=artifact(d,rows,false);assert.equal(a.metrics.linked,2);
assert.throws(()=>artifact(d,[rows[0],{...rows[1],previous:'a'}],true),/once/);
assert.throws(()=>artifact(d,[rows[0]],true));assert.throws(()=>artifact(d,[{...rows[0],reviewed:false},rows[1]],true));
assert.throws(()=>artifact(d,[{...rows[0],previous:'bogus'},rows[1]],true));
assert.throws(()=>validateVectors([[NaN]],1));assert.throws(()=>validateVectors([Array(384).fill(0)],1));
assert.throws(()=>parse('id,step\na,a\na,b'));assert.throws(()=>inputs('id,step\na,a','id,step\nb,b',''));
// Conflict fixture: locally best greedy x->a (.8) blocks the better global x->b (.6), y->a (1).
const x=unit(0).map((z,i)=>i===0?.8:i===1?.6:0);
const optimal=suggest(d,[unit(0),unit(1),x,unit(0)]);assert.deepEqual(optimal.map(r=>r.previous),['b','a']);
const report={schemaRejections:8,nonFiniteAndZeroVectorsRejected:true,exactGlobalAssignment:true,duplicateOldLinkRejected:true,missingRowsRejected:true};
writeFileSync('core-validation.json',JSON.stringify(report,null,2));console.log(report);
