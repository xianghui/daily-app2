from pathlib import Path
from urllib.request import Request,urlopen
import hashlib,json
base='https://xianghui.github.io/daily-app2/'
a=json.loads(Path('asset-audit.json').read_text());results=[]
for path,expected in a['assets'].items():
 url=base+'20261108-8/'+path
 with urlopen(Request(url,headers={'Cache-Control':'no-cache'}),timeout=60) as response:data=response.read();status=response.status
 observed=hashlib.sha256(data).hexdigest();assert observed==expected,(url,observed,expected);results.append({'url':url,'http':status,'bytes':len(data),'sha256':observed})
url=base+'20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'
with urlopen(url,timeout=60) as response:data=response.read();status=response.status
assert hashlib.sha256(data).hexdigest()==a['sharedWasmSha256'];results.append({'url':url,'http':status,'bytes':len(data),'sha256':a['sharedWasmSha256']})
with urlopen(base,timeout=60) as response:gallery=response.read()
assert gallery==Path('../index.html').read_bytes();Path('public-assets-validation.json').write_text(json.dumps({'assets':results,'galleryMatchesRoot':True},indent=2));print('PASS all public app/runtime/worker/WASM hashes; public gallery matches source')
