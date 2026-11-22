from pathlib import Path
import urllib.request,hashlib,json,re
root=Path(__file__).resolve().parent.parent;site='https://xianghui.github.io';paths=['/daily-app2/','/daily-app2/20261123-8/']
for row in json.loads((root/'20261123-8/runtime-dependency-audit.json').read_text()):paths.append(row['url'])
legacy=root/'deploy/20261029-20';paths.append('/daily-app2/20261029-20/')
for f in legacy.glob('assets/*.js'):
 if f.name.startswith('model.worker'):paths.append('/daily-app2/20261029-20/assets/'+f.name)
paths.append('/daily-app2/20261028-24/assets/manifold-BE4c7gO-.wasm')
report=[]
for path in dict.fromkeys(paths):
 rel=path.removeprefix('/daily-app2/');local=root/'deploy'/rel
 if path.endswith('/'):local=local/'index.html'
 req=urllib.request.Request(site+path,headers={'Cache-Control':'no-cache','User-Agent':'Linecraft-release-verification'})
 with urllib.request.urlopen(req,timeout=90) as response:data=response.read();status=response.status
 actual=hashlib.sha256(data).hexdigest();expected=hashlib.sha256(local.read_bytes()).hexdigest()
 assert actual==expected,(path,actual,expected)
 report.append({'path':path,'status':status,'bytes':len(data),'sha256':actual,'matchesAssembled':True})
(root/'20261123-8/public-asset-audit.json').write_text(json.dumps(report,indent=2));print('PASS public byte audits:',len(report),'assets')
