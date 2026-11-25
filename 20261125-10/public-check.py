from pathlib import Path
import hashlib,urllib.request,json
base='https://xianghui.github.io/daily-app2/';reports=[]
for p in Path('dist').rglob('*'):
 if not p.is_file():continue
 url=base+'20261125-10/'+str(p.relative_to('dist'));data=urllib.request.urlopen(url).read();assert data==p.read_bytes(),url;reports.append({'path':url,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
data=urllib.request.urlopen(base).read();assert data==Path('../index.html').read_bytes()
json.dump({'appAssets':reports,'rootGalleryByteIdentical':True},open('public-byte-validation.json','w'),indent=2);print('PASS public app assets/gallery')
