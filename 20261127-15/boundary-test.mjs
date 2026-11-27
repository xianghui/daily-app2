import a from 'node:assert/strict';import fs from 'node:fs';import {plan,examples} from './src/core.js';
const base={...examples[0].data.records[0],duration:1,exposureMs:1000,overheadMs:0,fps:1,minPlayback:1,maxInterval:1,frameKB:1,storageKB:1};
const checks=[];let r=plan(base);a.equal(r.frames,1);a.equal(r.finishMs,1000);a.equal(r.status,'ready');checks.push('One exposure finishing exactly at endpoint, one required frame, exact budget');
r=plan({...base,duration:10,maxInterval:3,storageKB:4});a.equal(r.interval,3);a.equal(r.frames,4);a.equal(r.finishMs,10000);checks.push('Final exposure exactly at endpoint and slowest tied interval');
r=plan({...base,overheadMs:1});a.equal(r.status,'infeasible');checks.push('One extra overhead millisecond blocks one-second cadence');
r=plan({...base,duration:86400,exposureMs:1,storageKB:86400});a.equal(r.frames,86400);a.equal(r.lastStartMs,86399000);checks.push('Maximum window and smallest integer interval retains all 86400 frames');
r=plan({...base,duration:86400,exposureMs:1,storageKB:86399});a.equal(r.status,'infeasible');checks.push('One KB below exact requirement blocks operational output');
fs.writeFileSync('boundary-validation.json',JSON.stringify(checks,null,2));console.log('PASS exact boundaries',checks.length);
