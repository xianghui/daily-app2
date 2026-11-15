import urllib.request,hashlib,json,re
from pathlib import Path
base='https://xianghui.github.io/daily-app2/'
root=Path('/Volumes/ExternalHD/daily_app2'); app=root/'20261115-17';checks=[]
paths=['20261115-17/'+str(f.relative_to(app/'dist')) for f in (app/'dist').rglob('*') if f.is_file()]
paths+=['20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm','20261115-6/assets/ai.worker-lkOoPoq8.js','20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs']
for path in paths:
 folder,tail=path.split('/',1);local=root/folder/'dist'/tail
 data=urllib.request.urlopen(base+path,timeout=90).read();assert data==local.read_bytes(),path
 checks.append(dict(path=path,bytes=len(data),sha256=hashlib.sha256(data).hexdigest()))
html=urllib.request.urlopen(base,timeout=90).read().decode();assert html==(root/'index.html').read_text();assert len(re.findall('folder:"20261115-17"',html))==1
(app/'public-asset-validation.json').write_text(json.dumps(dict(publicFilesByteMatched=checks,galleryByteMatched=True),indent=2));print('PASS byte-matched public app, worker, runtime/WASM and complete gallery')
