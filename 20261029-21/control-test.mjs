import assert from 'node:assert/strict';
import fs from 'node:fs';
import{init,generate,defaults,fields,binarySTL,fingerprint}from './src/geometry.js';
import{checkSTL}from './validate.mjs';
await init();
const base=fingerprint(binarySTL(generate(defaults))),changes={};
for(const[k,,lo,hi]of fields){const value=defaults[k]===lo?hi:lo,m=generate({...defaults,[k]:value});assert.notEqual(fingerprint(binarySTL(m)),base,k+' changes actual STL');checkSTL(binarySTL(m),m);changes[k]=value;}
assert.throws(()=>generate({...defaults,span:40,eyes:24,reach:2.4}),/walls too thin/);
fs.writeFileSync('control-validation.json',JSON.stringify({geometryChangingControls:changes,thinEyeWebRejected:true,physicalPrintTested:false},null,2));
console.log('All numeric controls change real STL; insufficient eye webs rejected.');
