import assert from 'node:assert/strict';
import fs from 'node:fs';
import {plans,examples,parse,decode,analyze,suggest,bytes,release} from './src/core.js';
const report=[];
for(const ex of examples){let d=parse(JSON.stringify(ex.data));let rows=d.records.map((r,i)=>({...r,system:ex.expected[i],decision:'approve',note:''}));const r=analyze(d,rows);assert.deepEqual(r.checks.map(c=>c.status),ex.statuses);assert.deepEqual(r.checks.map(c=>c.text??null),ex.decoded);assert.equal(r.metrics.ready,4);assert.equal(release(r).length,4);report.push({fixture:ex.name,decoded:r.checks.map(c=>c.text??null),metrics:r.metrics})}
for(const raw of['','f','0x41','gg','41'.repeat(201),'41\u0000'])assert.throws(()=>bytes(raw));
for(const raw of['c0af','eda080','f4908080','e282','80','00','7f'])assert.throws(()=>decode(raw,plans[0]));
for(const b of['81','8d','8f','90','9d','efbbbf41'])assert.throws(()=>decode(b,plans[1]));
assert.equal(decode('41 0a 42\r\n09',plans[0]).text,'A\nB\t');
assert.equal(decode('efbbbf41',plans[0]).canonicalHex,'efbbbf41');
assert.equal(decode('efbfbd',plans[0]).text,'\ufffd'); // literal replacement character is valid, not a decoding error
for(let b=0;b<256;b++){if([0x81,0x8d,0x8f,0x90,0x9d].includes(b)||b<32&&![9,10,13].includes(b)||b===127)continue;const s=b.toString(16).padStart(2,'0');assert.equal(decode(s,plans[1]).canonicalHex,s)}
assert.throws(()=>suggest(examples[0].data,[[NaN]]));
assert.throws(()=>analyze(examples[0].data,[]));
let r=examples[0].data.records.map((x,i)=>({...x,system:examples[0].expected[i],decision:'hold',note:''}));assert.equal(analyze(examples[0].data,r).metrics.held,6);
fs.writeFileSync('core-validation.json',JSON.stringify({fixtures:report,allDefinedPrintableCP1252BytesRoundTrip:true,invalidSequencesFailClosed:true,bomAndNewlinesPreserved:true},null,2));console.log('PASS core');
