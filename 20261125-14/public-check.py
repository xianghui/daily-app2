import urllib.request,json,hashlib,pathlib
base='https://xianghui.github.io/daily-app2/';out=[]
for p in pathlib.Path('dist').rglob('*'):
 if p.is_file():
  route='20261125-14/'+str(p.relative_to('dist'));data=urllib.request.urlopen(base+route).read();assert data==p.read_bytes(),route;out.append({'path':route,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
remote=urllib.request.urlopen(base).read();assert remote==pathlib.Path('../index.html').read_bytes();out.append({'path':'index.html','bytes':len(remote),'identicalToSource':True});json.dump(out,open('public-app-assets.json','w'),indent=2);print('PASS public app assets and gallery bytes')
