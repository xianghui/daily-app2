import assert from 'node:assert/strict';
import Papa from 'papaparse';
import fs from 'node:fs';
import {parse,occurrences,texts,analyze,initial,artifact,csv,examples} from './src/core.js';
// Defensive tests use vectors only for invalid-schema checks; real AI tested in browser.
const d=parse(JSON.stringify(examples['Software & medicine']));const rows=occurrences(d);
assert.equal(rows.length,4);assert.equal(texts(d,rows).length,6);
for(const bad of [[],[[NaN]],Array.from({length:6},()=>Array(384).fill(0))])assert.throws(()=>analyze(d,rows,bad),/Malformed/);
const e={document:'API, API. API-foo XAPI API2 api\nAPI',senses:d.senses};assert.deepEqual(occurrences(e).map(r=>r.start),[0,5,10,32]);
assert.throws(()=>parse(JSON.stringify({...d,document:'x'.repeat(6001)})),/6000/);
const exported=JSON.parse(fs.readFileSync('export-reviewed.json'));const decoded=Papa.parse(fs.readFileSync('export-reviewed.csv','utf8'),{header:true,skipEmptyLines:true});assert.equal(decoded.errors.length,0);assert.equal(decoded.data.length,4);assert.equal(decoded.data[0].expansion,exported.records[0].expansion);assert.equal(decoded.data[0].note,exported.records[0].note);
assert.equal(fs.readFileSync('export-reviewed.txt','utf8'),exported.document);
// Special characters, multiline formula protection and held-span conservation.
const a=exported.records.map(({ranked,suggested,margin,id,term,start,end,context})=>({ranked,suggested,margin,id,term,start,end,context}));
const review=initial(exported.input,a).map(r=>({...r,decision:'hold',note:'=HYPERLINK("bad")\nsecond,line'}));review[0].decision='accept';review[0].expansion='A, "quoted"\nmeaning';
const special=artifact(exported.input,a,review);const p=Papa.parse(csv(special),{header:true});assert.equal(p.errors.length,0);assert.equal(p.data.length,4);assert.equal(p.data[0].expansion,review[0].expansion);assert.equal(p.data[0].note,"'"+review[0].note);assert.equal(special.metrics.held,3);assert.equal(special.document.split('PC').length-1,4);
assert.throws(()=>artifact(exported.input,a,initial(exported.input,a)),/pending/);
assert.deepEqual(parse(JSON.stringify(exported)),exported.input);
console.log('PASS source boundaries, schema/norm guards, CSV/TXT/JSON roundtrip, multiline formula escape, held conservation and pending guard');
