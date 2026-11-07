from pathlib import Path
import json,hashlib,re
p=Path.cwd();assets=[];violations=[]
for f in sorted((p/'dist').rglob('*')):
 if not f.is_file():continue
 b=f.read_bytes();assets.append({'path':str(f.relative_to(p/'dist')),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
 if f.suffix in ['.js','.html','.css','.mjs']:
  for pattern in [r'sk-[A-Za-z0-9]{20,}',r'ghp_[A-Za-z0-9]{20,}',r'AIza[A-Za-z0-9_-]{25,}']:
   if re.search(pattern,b.decode()):violations.append(str(f))
assert not violations
wasm=Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm').read_bytes();shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').read_bytes();assert wasm==shared
Path('asset-audit.json').write_text(json.dumps({'assets':assets,'totalDeployedBytes':sum(a['bytes']for a in assets),'sharedWasmSHA256':hashlib.sha256(wasm).hexdigest(),'credentialPatternMatches':violations,'note':'Pattern scan supplemented by source and actual browser request audit; no provider integration.'},indent=2))
print('Final production asset hashes recorded; shared WASM identical; credential pattern scan clear.')
