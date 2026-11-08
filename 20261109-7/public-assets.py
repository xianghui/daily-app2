import hashlib,json,urllib.request
from pathlib import Path
base='https://xianghui.github.io/daily-app2/'
checks=[]
for f in sorted(Path('dist').rglob('*')):
 if not f.is_file():continue
 rel=f.relative_to('dist').as_posix();url=base+'20261109-7/'+rel
 with urllib.request.urlopen(url,timeout=60) as response: body=response.read();assert response.status==200
 assert body==f.read_bytes(),rel
 checks.append({'path':rel,'sha256':hashlib.sha256(body).hexdigest(),'bytes':len(body)})
wasm='20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'
with urllib.request.urlopen(base+wasm,timeout=60) as r:body=r.read()
assert body==Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').read_bytes()
checks.append({'path':wasm,'sha256':hashlib.sha256(body).hexdigest(),'bytes':len(body)})
with urllib.request.urlopen(base,timeout=60) as r:body=r.read()
assert body==Path('../index.html').read_bytes()
Path('public-asset-validation.json').write_text(json.dumps({'publicBundleByteIdentical':True,'galleryByteIdentical':True,'checks':checks},indent=2));print('PASS public gallery, app, worker, factory and shared WASM byte hashes')
