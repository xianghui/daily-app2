import assert from 'node:assert/strict';import fs from 'node:fs';import{plans,examples,parse,decode,analyze,suggest}from'./src/core.js';let checks=0;const eq=(x,y)=>{assert.deepEqual(x,y);checks++},bad=fn=>{assert.throws(fn);checks++};
for(const e of examples){const d=parse(JSON.stringify(e.data));const rows=d.records.map((r,i)=>({...r,system:e.expected[i],decision:'approve',note:''})),a=analyze(d,rows);eq(a.checks.map(x=>x.status),e.statuses);eq(a.checks.map(x=>x.seconds??null),e.seconds);eq(a.metrics.exactChecks,4)}
for(let i=0;i<=365;i++){let ms=i*86400000;eq(decode('P'+i+'D',plans[3]).milliseconds,ms);eq(decode(decode('P'+i+'D',plans[3]).canonical,plans[3]).milliseconds,ms)}
for(let i=0;i<1000;i++){let h=i%73,m=(i*17)%60,s=(i*31)%60,f=(i*223)%1000;eq(decode(h+':'+String(m).padStart(2,'0'),plans[1]).milliseconds,(h*60+m)*60000);let raw=m+':'+String(s).padStart(2,'0')+'.'+String(f).padStart(3,'0');eq(decode(raw,plans[2]).milliseconds,(m*60+s)*1000+f);eq(decode('PT'+h+'H'+m+'M'+s+'.'+String(f).padStart(3,'0')+'S',plans[3]).milliseconds,((h*60+m)*60+s)*1000+f);eq(decode(String(i/100),plans[0]).milliseconds,i*36000)}
for(const raw of['',' 1.5','1.5 ','+1','-1','1e2','1,5','01','0.000001','Infinity','1\n2'])bad(()=>decode(raw,plans[0]));
for(const raw of['1:60','1:2','01:30','24:00:00','1.5','-1:20','1:30\n','8761:00'])bad(()=>decode(raw,plans[1]));
for(const raw of['1:60','1:30.1234','01:30','1:20:30','1:30\n'])bad(()=>decode(raw,plans[2]));
for(const raw of['PT','P','P1M','P1Y','P1W','P1DT','P366D','PT1.0001S','PT1S\n','-PT1S','PT1M2H'])bad(()=>decode(raw,plans[3]));
for(const raw of['0','0.125','1.000005']){let x=decode(raw,plans[0]);eq(decode(x.canonical,plans[3]).milliseconds,x.milliseconds)}
bad(()=>suggest(examples[0].data,[[NaN]]));bad(()=>analyze(examples[0].data,[]));
fs.writeFileSync('core-validation.json',JSON.stringify({checks,independentKnownAnswerArithmetic:true,full365DayCanonicalRoundtrip:true,unsupportedFormatsRejected:true},null,2));console.log('PASS core',checks);
