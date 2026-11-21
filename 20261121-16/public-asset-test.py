import json,pathlib,hashlib,urllib.request
root=pathlib.Path('..');base='https://xianghui.github.io';app='/daily-app2/20261121-16/';checks=[]
paths=[(app+'index.html',root/'deploy/20261121-16/index.html')]
for p in(root/'deploy/20261121-16/assets').iterdir():paths.append((app+'assets/'+p.name,p))
for d in json.loads(pathlib.Path('runtime-dependency-audit.json').read_text())['dependencies']:paths.append((d['url'],root/'deploy'/d['url'].removeprefix('/daily-app2/')))
# All changed legacy entry/worker scripts and its immutable runtime, not unrelated maker assets.
legacy=root/'deploy/20261029-1';paths.append(('/daily-app2/20261029-1/index.html',legacy/'index.html'))
for p in legacy.glob('assets/*.js'):
 if '?shared=' in p.read_text() or '/daily-app2/20261028-24/assets/manifold-' in p.read_text():paths.append(('/daily-app2/20261029-1/assets/'+p.name,p))
paths.append(('/daily-app2/20261028-24/assets/manifold-BE4c7gO-.wasm',root/'deploy/20261028-24/assets/manifold-BE4c7gO-.wasm'))
for url,p in paths:
 data=urllib.request.urlopen(base+url,timeout=90).read();assert hashlib.sha256(data).digest()==hashlib.sha256(p.read_bytes()).digest(),url
 checks.append({'path':url,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
s=urllib.request.urlopen(base+'/daily-app2/',timeout=90).read().decode();assert s==(root/'index.html').read_text();pathlib.Path('public-asset-validation.json').write_text(json.dumps({'hashMatchedAssets':checks,'publicGalleryByteMatches':True},indent=2));print('PASS public asset bytes',len(checks))
