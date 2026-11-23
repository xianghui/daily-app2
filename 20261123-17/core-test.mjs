import a from 'node:assert/strict';import fs from 'node:fs';import{convert,parse,suggest,analyze,examples,profiles}from './src/core.js';
let checks=0;function eq(x,y){a.equal(x,y);checks++}
eq(convert('01:00:00;00','ntscDF').frames,107892);eq(convert('00:01:00;02','ntscDF').frames,1800);eq(convert('00:10:00;00','ntscDF').frames,17982);eq(convert('00:00:00;00','ntscDF').frames,0);eq(convert('23:59:59;29','ntscDF').frames,2589407);
for(let m=0;m<60;m++){for(let f=0;f<30;f++){const t='00:'+String(m).padStart(2,'0')+':00;'+String(f).padStart(2,'0'),r=convert(t,'ntscDF');eq(!!r.error,m%10!==0&&f<2);if(!r.error){eq(r.frames+r.omitted,r.nominal);eq(r.secondsNumerator,r.frames*1001);eq(r.secondsDenominator,30000)}}}
for(const p of profiles)for(let sec=0;sec<60;sec++){let t='00:00:'+String(sec).padStart(2,'0')+(p.id==='ntscDF'?';':':')+'00',r=convert(t,p.id);eq(r.frames,sec*(p.id==='film24'?24:p.id==='pal25'?25:30))}
for(const[v,p]of[['24:00:00:00','film24'],['00:60:00:00','pal25'],['00:00:60:00','video30'],['00:00:00:24','film24'],['00:00:00;00','pal25'],['00:00:00:00','ntscDF'],['x','ntscDF']])eq(!!convert(v,p).error,true);
for(const bad of['','{}','null',JSON.stringify({profiles:[null],records:[]})])a.throws(()=>parse(bad));
a.throws(()=>suggest(examples[0].data,[[null]]));a.throws(()=>analyze(examples[0].data,[]));
fs.writeFileSync('core-validation.json',JSON.stringify({checks,knownAnswerSource:'SMPTE 29.97 DF arithmetic: 17982 frames per ten minutes, 107892 per hour; explicitly enumerated dropped labels',result:'passed'},null,2));console.log('PASS',checks,'core checks');
