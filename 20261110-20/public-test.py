import urllib.request,hashlib,json,time
from pathlib import Path
base='https://xianghui.github.io/daily-app2/';root=Path('.')
def get(path):
 req=urllib.request.Request(base+path+'?verify=20261110-20-'+str(time.time_ns()),headers={'Cache-Control':'no-cache'})
 return urllib.request.urlopen(req,timeout=60).read()
report={'publicUrl':base+'20261110-20/','assets':[]}
for f in sorted((root/'dist').rglob('*')):
 if not f.is_file():continue
 rel='20261110-20/'+f.relative_to(root/'dist').as_posix();actual=get(rel);assert actual==f.read_bytes(),rel
 report['assets'].append({'path':rel,'bytes':len(actual),'sha256':hashlib.sha256(actual).hexdigest()})
shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm');actual=get('20261107-2/assets/'+shared.name);assert actual==shared.read_bytes();report['sharedWasmSHA256']=hashlib.sha256(actual).hexdigest()
assert get('index.html')==Path('../index.html').read_bytes()
report['publicGalleryMatchesSource']=True;Path('public-asset-validation.json').write_text(json.dumps(report,indent=2));print('PASS public HTML, JS, worker, factory, shared WASM and gallery byte/hash checks')
