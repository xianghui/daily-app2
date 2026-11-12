from pathlib import Path
import re,hashlib,json
files=[];findings=[]
for f in Path('dist').rglob('*'):
 if not f.is_file():continue
 data=f.read_bytes();files.append({'path':str(f.relative_to('dist')),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
 if f.suffix in ['.js','.html','.css','.mjs']:
  text=data.decode()
  for pattern in [r'gh[pousr]_[A-Za-z0-9]{30,}',r'sk-(?:proj-)?[A-Za-z0-9_-]{32,}',r'AKIA[A-Z0-9]{16}',r'-----BEGIN (?:RSA |EC )?PRIVATE KEY-----']:
   if re.search(pattern,text):findings.append(str(f))
assert not findings
worker=next(Path('dist/assets').glob('ai.worker-*.js')).read_text();assert '/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm' in worker
shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').read_bytes()
Path('asset-privacy-validation.json').write_text(json.dumps({'files':files,'sharedWasmBytes':len(shared),'sharedWasmSHA256':hashlib.sha256(shared).hexdigest(),'credentialPatternFindings':findings},indent=2));print('PASS runtime references, hashes and supplementary credential scan')
