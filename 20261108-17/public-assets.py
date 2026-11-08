from pathlib import Path
from urllib.request import Request,urlopen
import hashlib,json
base='https://xianghui.github.io/daily-app2/'
a=json.loads(Path('asset-audit.json').read_text());results=[]
for asset in a['assets']:
 path=asset['path'].removeprefix('dist/');url=base+'20261108-17/'+path
 with urlopen(Request(url,headers={'Cache-Control':'no-cache'}),timeout=60) as r:data=r.read();status=r.status
 assert hashlib.sha256(data).hexdigest()==asset['sha256'],url
 results.append({'url':url,'http':status,'bytes':len(data),'sha256':asset['sha256']})
url=base+'20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'
with urlopen(url,timeout=60) as r:data=r.read()
assert hashlib.sha256(data).hexdigest()==a['sharedWasmSHA256']
with urlopen(base,timeout=60) as r:gallery=r.read()
assert gallery==Path('../index.html').read_bytes()
Path('public-assets-validation.json').write_text(json.dumps({'assets':results,'sharedWasmMatches':True,'galleryMatchesSource':True},indent=2));print('PASS all public assets, shared WASM and gallery hashes')
