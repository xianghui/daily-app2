from pathlib import Path
import urllib.request,json,hashlib,re
p=Path.cwd();deploy=p.parent/'deploy';base='https://xianghui.github.io/daily-app2/';paths=['index.html',*[str(f.relative_to(deploy))for f in(deploy/'20261123-2').rglob('*')if f.is_file()],*[x['url'].removeprefix('/daily-app2/')for x in json.loads((p/'runtime-dependency-audit.json').read_text())]]
report=[]
for path in paths:
 with urllib.request.urlopen(base+path,timeout=90)as r:b=r.read();assert r.status==200
 expected=(deploy/path).read_bytes();assert b==expected,path
 report.append({'path':path,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'matchesAssembled':True})
(p/'public-asset-validation.json').write_text(json.dumps(report,indent=2));print('PASS',len(report),'public gallery/app/runtime assets byte-match')
