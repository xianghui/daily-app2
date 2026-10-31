const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const root='../',html=fs.readFileSync(root+'index.html','utf8'),apps=vm.runInNewContext(html.match(/const APPS=(\[[\s\S]*?\]);/)[1]);
assert(fs.readFileSync(root+'deploy/index.html').equals(Buffer.from(html)));
for(const a of apps)assert(fs.existsSync(root+'deploy/'+a.folder+'/index.html'),a.folder+' missing');
const walk=(p)=>fs.readdirSync(p,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(p+'/'+x.name):[p+'/'+x.name]);const files=walk('dist');for(const f of files)assert(fs.readFileSync(f).equals(fs.readFileSync(root+'deploy/20261031-17/'+f.slice(5))),f);
const result={appCount:apps.length,rootIndexExact:true,everyGalleryAppIncluded:true,newAppFilesByteMatched:files.length};fs.writeFileSync('combined-build-validation.json',JSON.stringify(result,null,2));console.log(result);
