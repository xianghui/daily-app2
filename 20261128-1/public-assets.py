import urllib.request,pathlib,hashlib,json,sys
app=pathlib.Path(__file__).resolve().parent;root=app.parent;host='https://xianghui.github.io'
paths=['/daily-app2/20261128-1/'+str(p.relative_to(app/'dist')) for p in (app/'dist').rglob('*') if p.is_file()]+[r['path'] for r in json.loads((app/'runtime-provenance.json').read_text())]
report=[]
for path in paths:
 req=urllib.request.Request(host+path,headers={'Cache-Control':'no-cache'})
 with urllib.request.urlopen(req,timeout=90) as res:
  data=res.read();status=res.status;ctype=res.headers.get('Content-Type')
 local=(root/'deploy'/path.removeprefix('/daily-app2/')).read_bytes()
 assert data==local,(path,len(data),len(local))
 report.append({'path':path,'status':status,'contentType':ctype,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'matchesAssembled':True})
(app/'public-asset-validation.json').write_text(json.dumps(report,indent=2));print('PASS public asset hashes',len(report))
