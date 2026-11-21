import assert from 'node:assert/strict';import fs from 'node:fs';import{parse,examples,assign,pairedStats,analyze,suggest,texts}from'./src/core.js';
for(const e of examples)assert.deepEqual(parse(JSON.stringify(e.data)),e.data);
for(const x of['','{}','not json','x'.repeat(60001),JSON.stringify({...examples[0].data,minCosine:2})])assert.throws(()=>parse(x));
assert.throws(()=>suggest(examples[0].data,[[NaN]]));
let cases=0;function oracle(s,f,i=0,used=new Set()){if(i===s.length)return 0;let best=oracle(s,f,i+1,used);for(let j=0;j<s[0].length;j++)if(!used.has(j)&&s[i][j]>f){used.add(j);best=Math.max(best,s[i][j]-f+oracle(s,f,i+1,used));used.delete(j)}return best}
let seed=913;function rand(){seed=(seed*1664525+1013904223)>>>0;return seed/2**32}
for(let n=1;n<=5;n++)for(let m=1;m<=5;m++)for(let k=0;k<12;k++){const s=Array.from({length:n},()=>Array.from({length:m},rand)),f=.25,out=assign(s,f);assert(Math.abs(out.value-oracle(s,f))<1e-10);const links=out.links.filter(x=>x!==null);assert.equal(new Set(links).size,links.length);cases++}
const pairs=(fp,pf,pp=0,ff=0)=>[...Array.from({length:fp},()=>({leftOutcome:'fail',rightOutcome:'pass'})),...Array.from({length:pf},()=>({leftOutcome:'pass',rightOutcome:'fail'})),...Array.from({length:pp},()=>({leftOutcome:'pass',rightOutcome:'pass'})),...Array.from({length:ff},()=>({leftOutcome:'fail',rightOutcome:'fail'}))];
assert.equal(pairedStats(pairs(3,0)).exactP,.25);assert.equal(pairedStats(pairs(5,1)).exactP,.21875);assert.equal(pairedStats([]).netRateChange,null);assert.equal(pairedStats([]).exactP,1);
for(let b=0;b<=12;b++)for(let c=0;c<=12-b;c++){let sum=0,n=b+c;for(let mask=0;mask<2**n;mask++){let ones=0;for(let k=0;k<n;k++)ones+=(mask>>k)&1;if(ones<=Math.min(b,c))sum++}assert.equal(pairedStats(pairs(b,c)).exactP,Math.min(1,2*sum/2**n))}
fs.writeFileSync('core-validation.json',JSON.stringify({exactAssignmentOracleCases:cases,binomialEnumerationCases:91,knownPValues:[.25,.21875],invalidInputsRejected:true},null,2));console.log('PASS exact assignment / binomial oracle / validation');
