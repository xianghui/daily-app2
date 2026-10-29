import assert from 'node:assert/strict';import fs from 'node:fs';import {init,generate,defaults,fields,fingerprint,binarySTL} from './src/geometry.js';
await init();const original=fingerprint(binarySTL(generate(defaults))),changes=[];
for(const[k,,a,b,step]of fields){const value=defaults[k]+step<=b?defaults[k]+step:defaults[k]-step,m=generate({...defaults,[k]:value}),sig=fingerprint(binarySTL(m));assert.notEqual(sig,original,k+' must affect actual STL');changes.push({parameter:k,value,signature:sig});}
fs.writeFileSync('parameter-validation.json',JSON.stringify({everyPhysicalControlChangesExport:changes},null,2));console.log(changes.length+' physical parameter controls alter exported geometry');
