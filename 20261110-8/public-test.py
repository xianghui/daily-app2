from pathlib import Path
import urllib.request,hashlib,json
root=Path('/Volumes/ExternalHD/daily_app2');app=root/'20261110-8';base='https://xianghui.github.io/daily-app2/';checks=[]
files=[('20261110-8/'+str(p.relative_to(app/'dist')),p) for p in (app/'dist').rglob('*') if p.is_file()]
files.append(('20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm',root/'20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'))
for name,p in files:
 data=urllib.request.urlopen(base+name,timeout=60).read();assert data==p.read_bytes(),name;checks.append({'path':name,'sha256':hashlib.sha256(data).hexdigest(),'bytes':len(data)})
assert urllib.request.urlopen(base,timeout=60).read()==(root/'index.html').read_bytes()
(app/'public-assets-validation.json').write_text(json.dumps({'assets':checks,'galleryByteIdentical':True},indent=2));print('PASS public app, runtime, worker, shared WASM and gallery hashes')
