from pathlib import Path
import json,hashlib,re
assets=[]
for p in Path('dist').rglob('*'):
 if not p.is_file():continue
 if p.suffix in ['.js','.html','.mjs']:
  assert not re.search(r'sk-[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{30,}|AIza[A-Za-z0-9_-]{30,}',p.read_text()),p
 assets.append({'path':str(p),'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
w=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm');assert hashlib.sha256(w.read_bytes()).digest()==hashlib.sha256(Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm').read_bytes()).digest()
Path('asset-audit.json').write_text(json.dumps({'assets':assets,'sharedWasmSHA256':hashlib.sha256(w.read_bytes()).hexdigest(),'credentialPatternScan':'passed; no provider integration exists'},indent=2))
