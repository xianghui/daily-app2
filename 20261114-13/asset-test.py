from pathlib import Path
import hashlib,json,re
p=Path('dist');files=list(p.rglob('*'));texts=[x for x in files if x.suffix in ['.html','.js','.css','.mjs']]
issues=[]
for f in texts:
 s=f.read_text()
 for pattern in [r'sk-[A-Za-z0-9_-]{20,}',r'ghp_[A-Za-z0-9]{25,}',r'AKIA[A-Z0-9]{16}']:
  if re.search(pattern,s):issues.append(str(f))
assert not issues,issues
name='ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'
wasm=Path('../deploy/20261107-2/assets')/name
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert sha(wasm)=='49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082'
assert sha(Path('public/runtime/ort-wasm-simd-threaded.asyncify.mjs'))==sha(Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.mjs'))
worker=next(p.glob('assets/ai.worker-*.js'));s=worker.read_text();assert '/daily-app2/20261107-2/assets/'+name in s
assert '/daily-app2/20261114-13/runtime/' in s
Path('asset-validation.json').write_text(json.dumps({'textAssetsScanned':len(texts),'credentialPatternHits':issues,'sharedWasmSha256':sha(wasm),'runtimeFactoryMatchesInstalled':True,'correctWorkerBase':True},indent=2));print('PASS runtime paths, hashes and built asset credential-pattern scan')
