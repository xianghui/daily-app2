const cp=require('child_process'),vm=require('vm'),a=require('assert/strict'),fs=require('fs');
const read=ref=>cp.execFileSync('git',['show',ref+':index.html'],{encoding:'utf8'}),s=read('');
const arr=t=>JSON.parse(JSON.stringify(vm.runInNewContext(t.match(/const APPS\s*=\s*(\[[\s\S]*?\n\]);/)[1])));
let scripts=[...s.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]).filter(s=>s.trim());a(scripts.length);scripts.forEach(s=>new Function(s));
let prior=arr(read('HEAD')).filter(x=>x.folder!=='20261123-23'),staged=arr(s),working=arr(fs.readFileSync('../index.html','utf8'));
a.deepEqual(staged.filter(x=>x.folder!=='20261123-23'),prior);a.equal(staged.filter(x=>x.folder==='20261123-23'&&x.area==='ai-utility').length,1);
const extras=working.filter(x=>!staged.some(y=>y.folder===x.folder));a.deepEqual(extras.map(x=>x.folder),['20261109-17']);for(const x of staged)a.deepEqual(working.find(y=>y.folder===x.folder),x);
fs.writeFileSync('staged-source-validation.json',JSON.stringify({scripts:scripts.length,trackedPrior:prior.length,staged:staged.length,workingAndPublic:working.length,preexistingUntrackedRecoveryEntryExcluded:extras.map(x=>x.folder),allPreviouslyCommittedEntriesPreserved:true,newEntryOnce:true},null,2));console.log('PASS staged gallery: all tracked entries preserved; pre-existing recovery entry remains unstaged');
