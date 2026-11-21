from pathlib import Path
import json,re,hashlib,urllib.request
root=Path('..');origin='https://xianghui.github.io';urls=['/daily-app2/','/daily-app2/20261122-7/'];urls+=['/daily-app2/20261122-7/'+str(p.relative_to('dist'))for p in Path('dist/assets').iterdir()if p.is_file()];urls +=[d['url']for d in json.loads(Path('runtime-dependency-audit.json').read_text())['dependencies']]
results=[]
for url in urls:
 local=root/'deploy'/url.removeprefix('/daily-app2/');local=local/'index.html'if url.endswith('/')else local
 with urllib.request.urlopen(origin+url,timeout=90)as r:b=r.read();status=r.status
 expected=local.read_bytes();assert b==expected,url
 results.append({'url':origin+url,'status':status,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'matchesAssembled':True})
Path('public-asset-validation.json').write_text(json.dumps(results,indent=2));print('PASS',len(results),'public gallery/app/runtime asset byte matches')
