import assert from 'node:assert/strict';
import {inputs,examples,artifact,suggest,baseline,metrics,csvOutput} from './src/core.js';
import Papa from 'papaparse';
const d=inputs(examples['Workshop setup'].requests,examples['Workshop setup'].stock);
const rows=d.requests.map((r,i)=>({...r,stockId:d.stock[i].id,reuse:Math.min(r.quantity,d.stock[i].quantity),note:'',alternatives:[]}));
const a=artifact(rows,d.stock,d.requests);assert.equal(a.records.length,d.requests.length);assert(a.stock.every(s=>s.used+s.remaining===s.quantity&&s.remaining>=0));assert(a.records.every(r=>r.reuse+r.buy===r.quantity));assert.deepEqual(metrics(rows),{covered:2,purchase:2});assert.equal(metrics(baseline(d)).covered,0);
for(const change of[{reuse:2},{reuse:-1},{reuse:NaN},{reuse:.5},{stockId:'missing'},{stockId:'S3'},{quantity:99},{note:'x'.repeat(501)}]){const bad=structuredClone(rows);Object.assign(bad[0],change);assert.throws(()=>artifact(bad,d.stock,d.requests));}
assert.throws(()=>artifact(rows.slice(1),d.stock,d.requests));assert.throws(()=>suggest(d,[],.3));assert.throws(()=>suggest(d,Array.from({length:8},()=>Array(384).fill(0)),.3));assert.throws(()=>suggest(d,Array.from({length:8},()=>Array(384).fill(NaN)),.3));
const exact=inputs('id,description,quantity,unit\na,Same drill,2,each\nb,Same drill,2,each','id,description,quantity,unit\ns,Same drill,3,each');assert.deepEqual(baseline(exact).map(r=>r.reuse),[2,1]);
const safe=structuredClone(a);safe.records[0].description='=FORMULA(), "quoted"\nsecond line';safe.records[0].note='@unsafe';const parsed=Papa.parse(csvOutput(safe),{header:true});assert.equal(parsed.errors.length,0);assert.equal(parsed.data.length,4);assert.equal(parsed.data[0].description,"'"+safe.records[0].description);assert.equal(parsed.data[0].note,"'@unsafe");
console.log('Core invariants: conservation, source preservation, greedy depletion, invalid schema/units/quantities, CSV escaping passed. Synthetic vectors used only for defensive rejection; actual AI tested in browser.');
