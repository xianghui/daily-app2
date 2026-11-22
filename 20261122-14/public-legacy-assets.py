from pathlib import Path
import urllib.request,hashlib,json
root=Path.cwd().parent/'deploy';folder=root/'20261029-11';paths=[folder/'index.html']+[p for p in (folder/'assets').iterdir()if p.suffix in ['.js','.css']]+[root/'20261028-24/assets/manifold-BE4c7gO-.wasm'];report=[]
for p in paths:
 url='https://xianghui.github.io/daily-app2/'+str(p.relative_to(root))
 with urllib.request.urlopen(url,timeout=90)as r:data=r.read()
 assert data==p.read_bytes(),url
 report.append({'url':url,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'matchesAssembled':True})
Path('public-legacy-assets-validation.json').write_text(json.dumps(report,indent=2));print('PASS public older shell, worker and shared geometry bytes')
