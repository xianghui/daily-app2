import a from 'node:assert/strict';import fs from 'node:fs';import{agreement,analyze,parse,examples,suggest}from './src/core.js';
const rows=Array.from({length:25},(_,i)=>({id:'p'+i,sample:'s'+i,a:i+1,b:i===24?103:100}));
const r=agreement(rows,5,100);a(Math.abs(r.bias-100.12)<1e-10);a.equal(r.sd,.125);a.deepEqual(r.individualSignals,['p24']);a.deepEqual(r.rangeSignals,['p24']);a(r.biasOnlyWithin);a(!r.envelopeWithin);a.equal(r.rangeUpper,.408375);a.deepEqual(agreement([...rows].reverse(),5,100),r);
a.throws(()=>agreement([...rows,{...rows[0],id:'new'}],5,100),/Duplicate/);
const constant=agreement(rows.slice(0,24),5,100);a.equal(constant.sd,0);a.deepEqual(constant.individualSignals,[]);a.throws(()=>agreement(rows.slice(0,2),5,100),/three/);
a.throws(()=>suggest(examples[0].data,[[NaN]]),/Malformed/);
for(const d of examples){a.doesNotThrow(()=>parse(JSON.stringify(d.data)));const invalid=structuredClone(d.data);invalid.records[0].a=1.5;a.throws(()=>parse(JSON.stringify(invalid)),/integer/)}
fs.writeFileSync('core-validation.json',JSON.stringify({known25PointSpike:r,constantSeries:constant,reverseOrderInvariant:true,duplicateSequenceBlocked:true,fractionalSequenceBlocked:true,malformedEmbeddingsBlocked:true},null,2));console.log('PASS independent known-answer I-MR arithmetic and hard constraints');
