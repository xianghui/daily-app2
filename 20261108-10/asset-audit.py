from pathlib import Path
import hashlib,json,re
p=Path(__file__).resolve().parent
assets={}
for f in (p/'dist').rglob('*'):
 if f.is_file():assets[str(f.relative_to(p/'dist'))]={'bytes':f.stat().st_size,'sha256':hashlib.sha256(f.read_bytes()).hexdigest()}
wasm=p.parent/'20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm';own=p/'node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm'
assert wasm.read_bytes()==own.read_bytes()
patterns=[r'sk-[a-zA-Z0-9_-]{24,}',r'ghp_[a-zA-Z0-9]{20,}',r'AKIA[0-9A-Z]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----']
findings=[]
for f in (p/'dist').rglob('*'):
 if f.suffix in ['.js','.html','.mjs']:
  for pat in patterns:
   if re.search(pat,f.read_text()):findings.append({'asset':f.name,'pattern':pat})
assert not findings
(p/'asset-audit.json').write_text(json.dumps({'assets':assets,'sharedWasm':{'url':'/daily-app2/20261107-2/assets/'+wasm.name,'bytes':wasm.stat().st_size,'sha256':hashlib.sha256(wasm.read_bytes()).hexdigest(),'matchesInstalledRuntime':True},'credentialPatternFindings':findings,'note':'Pattern scan supplements source inspection and request capture; not a guarantee about arbitrary dependencies.'},indent=2))
