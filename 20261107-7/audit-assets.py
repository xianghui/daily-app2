from pathlib import Path
import hashlib,json,re
assets=[]
for p in Path('dist').rglob('*'):
 if not p.is_file():continue
 data=p.read_bytes();assets.append({'path':str(p.relative_to('dist')),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
 if p.suffix in ['.js','.html','.css','.mjs']:
  text=data.decode();assert not re.search(r'sk-[A-Za-z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9]{25,}|AIza[A-Za-z0-9_-]{30,}',text),str(p)
worker=next(Path('dist/assets').glob('ai.worker-*.js')).read_text()
assert 'token-classification' in worker and 'Xenova/bert-base-NER' in worker
assert '/daily-app2/20261107-7/runtime/' in worker
assert '/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm' in worker
assert 'api.openai.com' not in worker
assert not list(Path('dist').rglob('*.wasm'))
shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm')
sha=hashlib.sha256(shared.read_bytes()).hexdigest();assert sha=='49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082'
Path('asset-audit.json').write_text(json.dumps({'assets':assets,'sharedWasm':{'path':str(shared),'sha256':sha,'bytes':shared.stat().st_size},'credentialPatternScan':'passed, not a proof of absence','realRuntime':True,'sourceDataFlowInspection':'Only model/runtime downloads; no remote inference endpoint or credentials.'},indent=2));print('PASS local worker/factory/shared WASM paths, asset hashes and credential pattern scan')
