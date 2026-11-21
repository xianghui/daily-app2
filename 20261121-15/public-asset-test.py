import json,pathlib,hashlib,urllib.request,re
root=pathlib.Path('..');base='https://xianghui.github.io';app='/daily-app2/20261121-15/';checks=[]
paths=[(app+'index.html',root/'deploy/20261121-15/index.html')]
for p in(root/'deploy/20261121-15/assets').iterdir():paths.append((app+'assets/'+p.name,p))
audit=json.loads(pathlib.Path('runtime-dependency-audit.json').read_text())
for d in audit['dependencies']:paths.append((d['url'],root/'deploy'/d['url'].removeprefix('/daily-app2/')))
for url,p in paths:
 data=urllib.request.urlopen(base+url,timeout=90).read();assert hashlib.sha256(data).digest()==hashlib.sha256(p.read_bytes()).digest(),url
 checks.append({'path':url,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
s=urllib.request.urlopen(base+'/daily-app2/',timeout=90).read().decode();assert s==(root/'index.html').read_text();scripts=re.findall(r'<script\b[^>]*>([\s\S]*?)</script>',s);assert scripts;pathlib.Path('public-asset-validation.json').write_text(json.dumps({'hashMatchedAssets':checks,'publicGalleryByteMatches':True},indent=2));print('PASS public asset bytes',len(checks))
