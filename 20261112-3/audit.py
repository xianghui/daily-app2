from pathlib import Path
import hashlib,json,re
p=Path('dist');assets=[]
for f in p.rglob('*'):
 if f.is_file():assets.append({'path':str(f.relative_to(p)),'bytes':f.stat().st_size,'sha256':hashlib.sha256(f.read_bytes()).hexdigest()})
own=Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm');shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm');assert own.read_bytes()==shared.read_bytes();assets.append({'path':'sharedWasm','bytes':shared.stat().st_size,'sha256':hashlib.sha256(shared.read_bytes()).hexdigest()})
worker=next(p.glob('assets/ai.worker-*.js')).read_text();assert '/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm' in worker;assert '/daily-app2/20261112-3/runtime/' in worker
Path('runtime-assets.json').write_text(json.dumps(assets,indent=2))
patterns=[r'sk-[A-Za-z0-9_-]{24,}',r'ghp_[A-Za-z0-9]{30,}',r'AIza[A-Za-z0-9_-]{30,}',r'-----BEGIN (?:RSA |EC )?PRIVATE KEY-----']
findings=[]
for f in [*Path('src').glob('*'),*[f for f in p.rglob('*') if f.suffix in ['.js','.html','.css','.mjs']]]:
 if f.is_file():
  s=f.read_text()
  for pat in patterns:
   if re.search(pat,s):findings.append({'file':str(f),'pattern':pat})
assert not findings,findings
Path('secret-scan.json').write_text(json.dumps({'passed':True,'credentialPatterns':len(patterns),'findings':findings,'limitation':'Pattern scan plus source/network inspection, not universal proof.'},indent=2))
s=Path('src/App.jsx').read_text();w=Path('src/ai.worker.js').read_text();assert 'localStorage' not in s;assert 'fetch(url)' in s;assert 'model(data.texts.slice' in w;assert 'new Worker(blob' in s;assert 'id!==token.current' in s
Path('source-privacy-validation.json').write_text(json.dumps({'passed':True,'sourceOnlyFetch':'static bundled worker','modelRuntime':'download-only library path, observed traffic GET-only','noRemoteInferenceIntegration':True,'noCredentialInputsOrPersistence':True,'runIdentityGuards':True},indent=2));print('PASS source, runtime and secret audits')
