import re,json,hashlib
from pathlib import Path
p=Path('dist');scripts=list(p.rglob('*.js'));assert scripts
worker=next(x for x in scripts if 'ai.worker-' in x.name);s=worker.read_text();assert '/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm' in s;assert '/daily-app2/20261111-12/runtime/' in s
shared=Path('../deploy/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm');assert shared.exists();assert hashlib.sha256(shared.read_bytes()).hexdigest()=='49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082'
for f in p.rglob('*'):
 if f.is_file():assert (Path('../deploy/20261111-12')/f.relative_to(p)).read_bytes()==f.read_bytes(),str(f)
Path('assembly-validation.json').write_text(json.dumps({'allAppFilesByteIdentical':True,'sharedWasmHashVerified':True,'runtimeWorkerPathsVerified':True,'rootIndexPresent':Path('../deploy/index.html').exists()},indent=2));print('PASS assembled runtime paths, WASM and app hashes')
