import hashlib,json,re
from pathlib import Path
own=Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm').read_bytes();shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').read_bytes();assert own==shared
files=[p for p in Path('dist').rglob('*') if p.is_file()];hits=[]
for p in files:
 s=p.read_text(errors='replace')
 assert not re.search(r'sk-[A-Za-z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9]{20,}|AIza[0-9A-Za-z_-]{30,}',s),p
 assert '/Volumes/' not in s and '/Users/' not in s,p
 hits.append(str(p))
worker=next(Path('dist/assets').glob('ai.worker-*.js')).read_text();assert '/daily-app2/20261107-2/assets/ort-wasm' in worker;assert '/daily-app2/20261110-3/runtime/' in worker
json.dump({'sharedWasmBytes':len(shared),'sharedWasmSHA256':hashlib.sha256(shared).hexdigest(),'sameAsInstalledRuntime':True,'productionWorkerBaseAndSharedPaths':True,'builtFilesScannedForCredentialPatternsAndLocalPaths':hits,'note':'Pattern scan plus source review, not a universal secret-detection guarantee.'},open('asset-validation.json','w'),indent=2)
print('PASS shared runtime byte identity, production URLs, built-text scan')
