from pathlib import Path
import hashlib,re,json
files={str(p):hashlib.sha256(p.read_bytes()).hexdigest() for p in Path('dist').rglob('*') if p.is_file()}
patterns=[r'sk-[A-Za-z0-9_-]{20,}',r'gh[pousr]_[A-Za-z0-9]{20,}',r'AKIA[A-Z0-9]{16}',r'-----BEGIN (?:RSA |EC )?PRIVATE KEY-----']
hits=[]
for p in Path('dist').rglob('*'):
 if p.is_file() and p.suffix in ['.js','.json','.html','.mjs','.css']:
  for pattern in patterns:
   if re.search(pattern,p.read_text()):hits.append({'file':str(p),'pattern':pattern})
assert not hits,hits
wasm=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm')
assert wasm.read_bytes()==Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm').read_bytes()
json.dump({'sharedWasmSha256':hashlib.sha256(wasm.read_bytes()).hexdigest(),'sharedWasmBytes':wasm.stat().st_size,'credentialPatternHits':hits,'bundledAssets':files},open('asset-audit.json','w'),indent=2)
print('PASS credential-pattern scan and byte-identical shared runtime, bundled asset hashes')
