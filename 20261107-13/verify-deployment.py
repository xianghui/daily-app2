from pathlib import Path
from urllib.request import urlopen,Request
import hashlib,json
base='https://xianghui.github.io/daily-app2/'
checks=[]
for p in Path('dist').rglob('*'):
 if not p.is_file():continue
 rel=str(p.relative_to('dist'));url=base+'20261107-13/'+rel
 data=urlopen(Request(url,headers={'Cache-Control':'no-cache'}),timeout=45).read()
 assert data==p.read_bytes(),url
 checks.append({'url':url,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
rel='20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm';data=urlopen(base+rel,timeout=60).read();assert hashlib.sha256(data).hexdigest()=='49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082';checks.append({'url':base+rel,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
data=urlopen(base,timeout=45).read();assert data==Path('../index.html').read_bytes()
Path('deployment-validation.json').write_text(json.dumps({'publicAssetHashes':checks,'publicRootMatches':True},indent=2));print('PASS public app, worker, WASM, factory and root match local production bytes')
