import assert from 'node:assert/strict';
import {parseInputs,validateVectors,samples,artifact,csv} from './src/core.js';
assert.throws(()=>parseInputs('x',JSON.stringify([{...samples.shelf[0]},{...samples.shelf[0]}])));
for(const q of ['',Array(26).fill('x').join('\n'),'x'.repeat(16001)])assert.throws(()=>parseInputs(q,JSON.stringify(samples.shelf)));
for(const v of [null,[],[[NaN]],[[Infinity]],Array(2).fill(Array(384).fill(0))])assert.throws(()=>validateVectors(v,2));
assert.equal(parseInputs('a\n\nb',JSON.stringify(samples.shelf)).questions.length,2);
const a=JSON.parse(JSON.stringify(artifact([{id:1,question:'=literal',accepted:false,sourceId:'returns',answer:'not exported',similarity:.1}],samples.shelf)));assert.equal(a.records[0].answer,'');assert.equal(a.records[0].question,'=literal');
console.log('Input bounds, duplicate IDs, malformed/zero vectors and lossless JSON passed.');
