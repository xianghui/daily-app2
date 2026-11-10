from pathlib import Path
import re,hashlib,json
p=Path('.');files=list((p/'dist').rglob('*'));js='\n'.join(f.read_text() for f in files if f.suffix in ['.js','.html','.mjs'])
assert '20261110-12/assets/ort-wasm' not in js
assert '/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm' in js
assert not re.search(r'sk-[a-zA-Z0-9]{20,}|ghp_[a-zA-Z0-9]{20,}|AIza[a-zA-Z0-9_-]{25,}',js)
wasm=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm');assert hashlib.sha256(wasm.read_bytes()).hexdigest()==hashlib.sha256(Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm').read_bytes()).hexdigest()
(p/'asset-validation.json').write_text(json.dumps({'builtBytes':sum(f.stat().st_size for f in files if f.is_file()),'credentialPatternScan':'no matches; source has no optional provider integration','sharedWasmSha256':hashlib.sha256(wasm.read_bytes()).hexdigest(),'sharedWasmBytes':wasm.stat().st_size},indent=2))
print('PASS runtime paths, identical shared WASM and credential-pattern scan')
