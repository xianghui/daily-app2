from pathlib import Path
import hashlib,json,re,os,urllib.request
r=Path('/Volumes/ExternalHD/daily_app2');p=r/'20261125-4';d=r/'deploy';public=os.environ.get('PUBLIC')=='1';base='https://xianghui.github.io/daily-app2/' if public else 'http://127.0.0.1:5998/daily-app2/'
files=['20261106-4/index.html']+[str(f.relative_to(d)) for f in (d/'20261106-4/assets').glob('*.js')]+['20261028-24/assets/manifold-BE4c7gO-.wasm','20261125-4/index.html']+[str(f.relative_to(d)) for f in (d/'20261125-4/assets').glob('*')]+['20261115-6/assets/ai.worker-lkOoPoq8.js','20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs','20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm','index.html']
report=[]
for f in files:
 b=(d/f).read_bytes();actual=urllib.request.urlopen(base+f,timeout=60).read();assert b==actual,f
 report.append({'path':f,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'matches':True})
for f in (d/'20261125-4').rglob('*'):
 if f.suffix in ['.js','.css','.html']:
  text=f.read_text();assert not re.search(r'(?:sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{25,}|AIza[A-Za-z0-9_-]{30,}|-----BEGIN [A-Z ]*PRIVATE KEY)',text),str(f)
(p/('public-asset-validation.json' if public else 'assembled-asset-validation.json')).write_text(json.dumps({'matches':report,'credentialPatternScanPassed':True,'note':'Pattern scan supplemented by source review: no credential fields, remote inference integration or API tokens.'},indent=2))
print('PASS exact asset byte matches',len(files))
