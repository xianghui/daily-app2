import urllib.request,hashlib,json,re
from pathlib import Path
base='https://xianghui.github.io/daily-app2/'
root=Path('/Volumes/ExternalHD/daily_app2'); app=root/'20261114-1';checks=[]
paths=['20261114-1/'+str(f.relative_to(app/'dist')) for f in (app/'dist').rglob('*') if f.is_file()]
paths+=['20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm']
for path in paths:
 local=(app/'dist'/path.split('/',1)[1]) if path.startswith('20261114-1/') else root/'20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'
 data=urllib.request.urlopen(base+path,timeout=90).read();assert data==local.read_bytes(),path
 checks.append(dict(path=path,bytes=len(data),sha256=hashlib.sha256(data).hexdigest()))
html=urllib.request.urlopen(base,timeout=90).read().decode();assert html==(root/'index.html').read_text();assert len(re.findall('folder:"20261114-1"',html))==1
(app/'public-asset-validation.json').write_text(json.dumps(dict(publicFilesByteMatched=checks,galleryByteMatched=True),indent=2));print('PASS byte-matched public app, worker, runtime/WASM and complete gallery')
