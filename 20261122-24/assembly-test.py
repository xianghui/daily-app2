from pathlib import Path
import json,re,hashlib
p=Path.cwd();root=p.parent;deploy=root/'deploy';s=(deploy/'index.html').read_text();old=(p/'published-gallery-before.html').read_text();entries=lambda t:re.findall(r'\{folder:"[^\"]+"[^}]*\}',t)
a,b=entries(old),entries(s);assert len(b)==len(a)+1;assert all(x in b for x in a);assert s.count('folder:"20261122-24"')==1;assert re.search(r'folder:"20261122-24",name:"Prefix Harbor",area:"ai-utility"',s)
assert (deploy/'index.html').read_bytes()==Path('/tmp/prefix-release-index.html').read_bytes();assert all((deploy/f/'index.html').exists()for f in re.findall(r'folder:"([^\"]+)"',s));assert all((deploy/'20261122-24'/f.relative_to(p/'dist')).read_bytes()==f.read_bytes()for f in(p/'dist').rglob('*')if f.is_file())
for x in json.loads((p/'runtime-dependency-audit.json').read_text()):assert hashlib.sha256((deploy/x['url'].removeprefix('/daily-app2/')).read_bytes()).hexdigest()==x['sha256']
size=sum(f.stat().st_size for f in deploy.rglob('*')if f.is_file());assert size<1000000000
report={'publishedBefore':len(a),'assembled':len(b),'allExistingEntriesUnchanged':True,'newEntryExactlyOnce':True,'allAppShellsPresent':True,'productionAppBytesMatch':True,'sharedRuntimeHashesMatch':True,'totalBytes':size,'guardBytes':1000000000}
(p/'assembly-validation.json').write_text(json.dumps(report,indent=2));print(report)
