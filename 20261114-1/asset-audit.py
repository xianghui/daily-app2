from pathlib import Path
import hashlib,json,re
p=Path('dist');files=list(p.rglob('*'));texts=[f for f in files if f.suffix in ['.js','.html','.mjs','.css']];patterns=[r'sk-[A-Za-z0-9]{20,}',r'ghp_[A-Za-z0-9]{20,}',r'AKIA[A-Z0-9]{16}',r'AIza[A-Za-z0-9_-]{30,}'];hits=[]
for f in texts:
 s=f.read_text()
 for pat in patterns:
  if re.search(pat,s):hits.append(str(f))
assert not hits,hits
worker=next((p/'assets').glob('ai.worker-*.js'));s=worker.read_text();assert '/daily-app2/20261107-2/assets/ort-wasm' in s;assert '/daily-app2/20261114-1/runtime/' in s
local=Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm');shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm');assert local.read_bytes()==shared.read_bytes();assert (p/'runtime/ort-wasm-simd-threaded.asyncify.mjs').read_bytes()==Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.mjs').read_bytes()
Path('asset-validation.json').write_text(json.dumps({'credentialPatternScanTextFiles':len(texts),'hits':hits,'sharedWasmBytes':local.stat().st_size,'sha256':hashlib.sha256(local.read_bytes()).hexdigest(),'factoryByteMatched':True,'workerPathsCorrect':True,'appBytes':sum(f.stat().st_size for f in files if f.is_file())},indent=2));print('PASS runtime paths, exact shared WASM, factory and built credential-pattern scan')
