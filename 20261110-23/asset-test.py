from pathlib import Path
import re,json,hashlib
p=Path('dist');worker=next((p/'assets').glob('ai.worker-*.js'));s=worker.read_text();shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm');local=Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm');assert shared.read_bytes()==local.read_bytes();assert '/daily-app2/20261107-2/assets/' in s
for f in p.rglob('*'):
 if f.is_file() and f.suffix in ['.js','.html','.mjs','.css']:
  assert not re.search(r'(sk-(?:proj-)?[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{25,}|AIza[A-Za-z0-9_-]{30,})',f.read_text())
a={'bytes':sum(f.stat().st_size for f in p.rglob('*') if f.is_file()),'sharedWasmSHA256':hashlib.sha256(local.read_bytes()).hexdigest(),'sharedWasmByteIdentical':True,'credentialPatternScan':'no matches; not an exhaustive security proof','assets':{str(f.relative_to(p)):hashlib.sha256(f.read_bytes()).hexdigest() for f in p.rglob('*') if f.is_file()}};Path('asset-validation.json').write_text(json.dumps(a,indent=2));print('PASS bundled production assets and shared WASM identity')
