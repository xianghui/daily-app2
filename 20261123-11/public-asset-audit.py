from pathlib import Path
import urllib.request,hashlib,json
root=Path(__file__).resolve().parent.parent;p=root/'20261123-11';site='https://xianghui.github.io';paths=['/daily-app2/','/daily-app2/20261123-11/']
paths += [row['url'] for row in json.loads((p/'runtime-dependency-audit.json').read_text())]
paths += ['/daily-app2/20261123-11/'+str(f.relative_to(root/'deploy/20261123-11')) for f in (root/'deploy/20261123-11').rglob('*') if f.is_file() and f.name!='index.html']
report=[]
for path in dict.fromkeys(paths):
 local=root/'deploy'/path.removeprefix('/daily-app2/')
 if path.endswith('/'):local=local/'index.html'
 req=urllib.request.Request(site+path,headers={'Cache-Control':'no-cache','User-Agent':'Serial-Compass-release-verification'})
 with urllib.request.urlopen(req,timeout=90) as response:data=response.read();status=response.status
 sha=hashlib.sha256(data).hexdigest();assert sha==hashlib.sha256(local.read_bytes()).hexdigest(),path
 report.append({'path':path,'status':status,'bytes':len(data),'sha256':sha,'matchesAssembled':True})
(p/'public-asset-audit.json').write_text(json.dumps(report,indent=2));print('PASS public byte audits:',len(report),'assets')
