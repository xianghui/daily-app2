from pathlib import Path
import json,hashlib,urllib.request
root=Path('..');urls=['/daily-app2/','/daily-app2/20261122-17/']
urls+=['/daily-app2/20261122-17/'+str(p.relative_to('dist'))for p in Path('dist').rglob('*')if p.is_file() and p.name!='index.html']
urls +=[d['url']for d in json.loads(Path('runtime-dependency-audit.json').read_text())]
results=[]
for url in urls:
 local=root/'deploy'/url.removeprefix('/daily-app2/');local=local/'index.html'if url.endswith('/')else local
 with urllib.request.urlopen('https://xianghui.github.io'+url,timeout=90)as r:b=r.read();status=r.status
 assert b==local.read_bytes(),url
 results.append({'url':'https://xianghui.github.io'+url,'status':status,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'matchesAssembled':True})
Path('public-asset-validation.json').write_text(json.dumps(results,indent=2));print('PASS',len(results),'public gallery/app/runtime asset byte matches')
