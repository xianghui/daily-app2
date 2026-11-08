import hashlib,json,re
from pathlib import Path
assets=[{'path':str(f),'bytes':f.stat().st_size,'sha256':hashlib.sha256(f.read_bytes()).hexdigest()} for f in sorted(Path('dist').rglob('*')) if f.is_file()];own=Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm').read_bytes();shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').read_bytes();assert own==shared
for f in Path('dist').rglob('*.js'):
 s=f.read_text();assert not re.search(r'sk-(?:proj-|or-v1-)?[A-Za-z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9]{25,}|AIza[0-9A-Za-z_-]{25,}',s)
Path('asset-audit.json').write_text(json.dumps({'assets':assets,'sharedWasmSHA256':hashlib.sha256(shared).hexdigest(),'credentialPatternScan':'no matches; source inspected: no provider integrations'},indent=2));print('PASS runtime byte identity, asset hashes and secret-pattern scan')
