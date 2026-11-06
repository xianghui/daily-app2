import assert from 'node:assert/strict';
import {inputs,suggest,artifact,examples,validateVectors,csvOutput,cleanCSV} from './src/core.js';
import Papa from 'papaparse';
const d=inputs(examples['Customer help'].source,.7);
for(const v of [null,[],Array(6).fill(Array(384).fill(0)),Array(6).fill(Array(384).fill(NaN)),Array(6).fill(Array(383).fill(1))])assert.throws(()=>validateVectors(v,6),/schema/);
// Unit schema/constraint checks only: successful AI evidence is the real-browser report.
const vector=(index)=>Array.from({length:384},(_,i)=>i===index?1:0);
const r=suggest(d,[vector(0),vector(1),vector(2),vector(0),vector(2),vector(3)]);
const a=artifact(d,r.review,r.findings);assert.equal(a.rows.length,6);assert.equal(a.metrics.keptEvaluation+a.metrics.quarantined,3);assert.equal(a.metrics.pairsCompared,9);
const invalid=structuredClone(r.review);invalid[0].decision='quarantine';assert.throws(()=>artifact(d,invalid,r.findings),/Training/);
const missing=structuredClone(r.findings);missing[3].match='nonexistent';assert.throws(()=>artifact(d,r.review,missing),/match schema/);
assert.equal(Papa.parse(csvOutput(a),{header:true,skipEmptyLines:true}).data.length,6);assert.equal(Papa.parse(cleanCSV(a),{header:true,skipEmptyLines:true}).data.length,4);
assert.throws(()=>inputs('id,split,text\na,train,猫\nb,eval,'+'猫'.repeat(14000),.7),/40 KB/);
console.log('PASS malformed model schema, row conservation, train immutability, match referential integrity, kept/audit counts, UTF-8 size bound.');
