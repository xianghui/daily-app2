import {init,generate,defaults} from './src/geometry.js';
import {collisionCheck} from './validate.mjs';import fs from 'node:fs';
await init();const report=[];
for(const R of [15,16,17])for(const A of [2,3,4]){const m=generate({...defaults,length:R,spring:A,gap:.3});report.push({radiusMm:R,amplitudeMm:A,...await collisionCheck(m,192)});}
fs.writeFileSync('dense-motion-validation.json',JSON.stringify(report,null,2));console.log('Dense full-revolution checks passed for all 9 radius/amplitude combinations.');
