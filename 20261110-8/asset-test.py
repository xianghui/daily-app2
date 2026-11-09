from pathlib import Path
import re,hashlib,json
checks=[]
for f in Path('dist').rglob('*'):
 if not f.is_file():continue
 b=f.read_bytes();checks.append({'path':str(f),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
 if f.suffix in ['.js','.html','.mjs','.css']:
  assert not re.search(r'(?:sk-(?:proj-)?[A-Za-z0-9_-]{20,}|hf_[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|-----BEGIN (?:RSA |EC )?PRIVATE KEY-----)',b.decode()),str(f)
wasm=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm');installed=Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm');assert wasm.read_bytes()==installed.read_bytes()
Path('asset-validation.json').write_text(json.dumps({'assets':checks,'builtCredentialPatternScan':'no matching credential patterns','wasmSharedByteIdentical':True,'wasmBytes':wasm.stat().st_size,'wasmSha256':hashlib.sha256(wasm.read_bytes()).hexdigest()},indent=2));print('PASS built asset audit, no credential patterns, shared WASM byte equality')
