from pathlib import Path
import hashlib,json,os,urllib.request
p=Path(__file__).resolve().parent;root=p.parent;app='20261028-4';built=root/'deploy'/app;source=root/app/'dist';shared='20261028-24/assets/manifold-BE4c7gO-.wasm';key='/daily-app2/'+app+'/assets/manifold-BE4c7gO-.wasm';report={'sourceWasmPreserved':True,'identicalOriginalSharedWasm':True,'legacyJsURLsPreserved':True,'noDanglingOldWasmReferences':True,'files':[]}
assert (source/'assets/manifold-BE4c7gO-.wasm').read_bytes()==(root/'deploy'/shared).read_bytes()
assert not (built/'assets/manifold-BE4c7gO-.wasm').exists()
for f in source.rglob('*'):
 if f.is_file() and f.suffix in ['.js','.css','.html','.png','.stl']:assert (built/f.relative_to(source)).is_file()
for f in built.rglob('*'):
 if f.suffix in ['.js','.html','.mjs']:assert key not in f.read_text()
if os.getenv('PUBLIC'):
 for f in [built/'index.html',built/'assets/index-DT-5s9Qp.js',built/'assets/model.worker-CVk6ba2j.js',root/'deploy'/shared]:
  path=f.relative_to(root/'deploy');remote=urllib.request.urlopen('https://xianghui.github.io/daily-app2/'+str(path),timeout=60).read();assert remote==f.read_bytes();report['files'].append({'path':str(path),'bytes':len(remote),'sha256':hashlib.sha256(remote).hexdigest(),'publicMatches':True})
(p/('public-legacy-asset-validation.json' if os.getenv('PUBLIC') else 'legacy-asset-validation.json')).write_text(json.dumps(report,indent=2));print('PASS byte-identical legacy sharing and compatibility paths')
