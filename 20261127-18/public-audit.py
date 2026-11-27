import urllib.request,pathlib,hashlib,json,re
root=pathlib.Path('/Volumes/ExternalHD/daily_app2');app=root/'20261127-18';base='https://xianghui.github.io/daily-app2/'; paths=['index.html','20261127-18/index.html']+[str(p.relative_to(root/'deploy')) for p in (root/'deploy/20261127-18').rglob('*') if p.is_file() and p.name!='index.html'];paths += [r['path'].removeprefix('/daily-app2/') for r in json.load(open(app/'runtime-provenance.json'))];results=[]
for path in paths:
 with urllib.request.urlopen(base+path,timeout=90) as r:body=r.read();assert r.status==200
 local=(root/'deploy'/path).read_bytes();assert body==local,path
 results.append({'path':path,'bytes':len(body),'sha256':hashlib.sha256(body).hexdigest()})
json.dump({'allPublicFilesByteIdentical':True,'files':results},open(app/'public-asset-audit.json','w'),indent=2);print('PASS exact public assets',len(results))
