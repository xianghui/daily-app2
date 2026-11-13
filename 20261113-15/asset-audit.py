from pathlib import Path
import re,json,hashlib
p=Path('.');assets=list((p/'dist').rglob('*'));texts=[f for f in assets if f.is_file() and f.suffix in ['.js','.html','.css','.mjs','.svg']]
for f in texts:
 s=f.read_text();assert not re.search(r'sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|AIza[A-Za-z0-9_-]{25,}',s),str(f)
wasm=Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm').read_bytes();shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').read_bytes();assert wasm==shared
assert '20261107-2/assets/ort-wasm' in next((p/'dist/assets').glob('ai.worker-*.js')).read_text()
Path('asset-validation.json').write_text(json.dumps({'scannedBuiltTextFiles':len(texts),'credentialPatternHits':0,'runtimeWasmBytes':len(wasm),'sharedWasmByteIdentical':True,'sha256':hashlib.sha256(wasm).hexdigest(),'ownDistBytes':sum(f.stat().st_size for f in assets if f.is_file()),'workerLocal':True},indent=2));print('PASS bundled asset scan and byte-identical shared WASM')
