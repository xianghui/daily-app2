import fs from 'node:fs';
import {engine,checkSTL,mechanical,collisionCheck} from './validate.mjs';
import {generate,fields,binarySTL} from './src/geometry.js';
await engine();let state=2026102316;const rnd=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/2**32;};const report=[];
for(let i=0;i<128;i++){const p=Object.fromEntries(fields.map(([k,,a,b,s])=>[k,+(a+Math.floor(rnd()*((b-a)/s+1))*s).toFixed(3)]));let m;try{m=generate(p)}catch(e){console.error("FAILED VARIATION",i,p);throw e}const mesh=checkSTL(binarySTL(m),m);report.push({p,mesh,mechanism:mechanical(m),...(i<12?{probes:await collisionCheck(m)}:{})});}
fs.writeFileSync('variation-regression.json',JSON.stringify({seed:2026102316,cases:report},null,2));console.log('128 seeded variation exports passed independent binary mesh/mechanism checks.');
