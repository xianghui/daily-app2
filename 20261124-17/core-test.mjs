import assert from 'node:assert/strict';import fs from 'node:fs';import{plans,robots,examples,parse,parsePolicy,inspect,suggest,analyze}from './src/core.js';
const cases=[],check=(policy,agent,path)=>{const p={...plans[0],agent};let result=inspect(JSON.stringify({path}),p,policy);cases.push({policy,agent,path,result});return result};
for(const e of examples){parse(JSON.stringify(e.data));const rows=e.data.records.map((r,i)=>({...r,system:e.expected[i],note:'',decision:'approve'}));const r=analyze(e.data,rows);assert.equal(r.metrics.ready,4);}
assert.equal(check('User-agent: *\nDisallow: /\nAllow: /public/','AnyBot','/public/welcome').selected,'allow');
assert.equal(check('User-agent: *\nDisallow: /same\nAllow: /same','AnyBot','/same').selected,'allow');
assert.equal(check('User-agent: *\nDisallow: /\nUser-agent: MyBot\nAllow: /public\nUser-agent: mybot\nDisallow: /private','MyBot','/private').selected,'disallow');
assert.equal(check('User-agent: *\nDisallow: /\nUser-agent: Bot\nDisallow: /public\nUser-agent: LongBot\nAllow: /public','LongBot','/public').selected,'allow');
assert.equal(check('User-agent: *\nDisallow: /*.tmp$','Bot','/x.tmp?x=1').selected,'allow');
assert.equal(check('User-agent: *\nDisallow:\nAllow:','Bot','/x').selected,'allow');
let seed=1729;function rand(n){seed=(seed*1664525+1013904223)>>>0;return Math.floor(seed/65536)%n}const patterns=['/','/a','/a/','/a/b','/*b$','/*.tmp$','/a*','/a*b','/a+b','/x?y=1$','/file[1]','/a.b','/a**b$','/a($'];const paths=['/','/a','/a/b','/ab','/a+b','/x?y=1','/a.tmp','/a.tmp?q=1','/file[1]','/a.b','/a(','/aaab','/a/B'];for(let i=0;i<1600;i++){let policy='User-agent: *\n';for(let j=0;j<5;j++)policy+=(rand(2)?'Allow':'Disallow')+': '+patterns[rand(patterns.length)]+'\n';if(i%3===0)policy+='User-agent: Bot\nDisallow: /a\nAllow: /a/b\nUser-agent: bot\nAllow: /x?y=1$\n';check(policy,'Bot',paths[rand(paths.length)]);}
for(const policy of ['','Sitemap: /map.xml','User-agent: *\nCrawl-delay: 2','User-agent: *\nDisallow: /%20','User-agent: *\nAllow: /a$b','User-agent: *\nDisallow: /非'])assert.throws(()=>parsePolicy(policy));
for(const path of ['https://example.test/a','/a%20b','/a b','/a#frag','/非','/a\\b','x'.repeat(241)])assert.throws(()=>inspect(JSON.stringify({path}),plans[0],robots));
assert.throws(()=>suggest(examples[0].data,[[NaN]]));assert.throws(()=>analyze(examples[0].data,[]));
fs.writeFileSync('oracle-cases.json',JSON.stringify(cases));console.log('PASS core and',cases.length,'oracle cases generated');

const hardPolicy='User-agent: *\nDisallow: /'+'a*'.repeat(80)+'b$',hardRaw=JSON.stringify({path:'/'+'a'.repeat(230)}),started=performance.now();for(let i=0;i<100;i++)assert.equal(inspect(hardRaw,plans[0],hardPolicy).selected,'allow');fs.writeFileSync('wildcard-stress-validation.json',JSON.stringify({boundedAdversarialPatterns:100,allPassed:true,observedMilliseconds:performance.now()-started,algorithm:'Dynamic programming O(pattern length × path length), no backtracking regex'}));
