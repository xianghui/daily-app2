from pathlib import Path
import urllib.request,hashlib,json,re
root='https://xianghui.github.io/daily-app2/';p=Path('dist');files=[f for f in p.rglob('*') if f.is_file()];observed=[]
for f in files:
 path=str(f.relative_to(p));req=urllib.request.Request(root+'20261112-6/'+path,headers={'Cache-Control':'no-cache'})
 with urllib.request.urlopen(req,timeout=60) as r:data=r.read();status=r.status
 assert hashlib.sha256(data).digest()==hashlib.sha256(f.read_bytes()).digest(),path
 observed.append({'path':path,'status':status,'sha256':hashlib.sha256(data).hexdigest()})
shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm');data=urllib.request.urlopen(root+'20261107-2/assets/'+shared.name,timeout=90).read();assert data==shared.read_bytes();observed.append({'path':'sharedWasm','sha256':hashlib.sha256(data).hexdigest()})
html=urllib.request.urlopen(root+'?delegate-loom-release=20261112-6',timeout=60).read().decode();expected=Path('../index.html').read_text();assert html==expected,'Public gallery differs';assert html.count('folder:"20261112-6"')==1
Path('public-validation.json').write_text(json.dumps({'assets':observed,'galleryByteIdentical':True,'newEntryExactlyOnce':True,'galleryFolderEntries':len(re.findall(r'folder:"',html))},indent=2));print('PASS public app, runtime/worker/WASM hashes and exact gallery')
