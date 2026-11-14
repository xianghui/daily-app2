import json,re,hashlib
from pathlib import Path
files=[p for p in Path('dist').rglob('*') if p.is_file()]; checks=[]
for p in files:
 b=p.read_bytes()
 if p.suffix in ['.js','.mjs','.html','.css','.json']:
  s=b.decode();assert not re.search(r'(?:sk-(?:proj-)?[A-Za-z0-9_-]{24,}|gh[pousr]_[A-Za-z0-9]{30,}|AKIA[A-Z0-9]{16})',s),p
  if p.suffix in ['.js','.mjs']:assert not re.search(r'https?://[^\s"\']*(?:openai.com/v1|openrouter.ai/api)',s),p
 checks.append(dict(path=str(p),bytes=len(b),sha256=hashlib.sha256(b).hexdigest()))
worker=next(Path('dist/assets').glob('ai.worker-*.js')).read_text();assert '/daily-app2/20261107-2/assets/ort-wasm' in worker;assert '/daily-app2/20261115-1/assets/ort-wasm' not in worker
shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').read_bytes();assert shared==Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm').read_bytes()
assert Path('public/runtime/ort-wasm-simd-threaded.asyncify.mjs').read_bytes()==Path('node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.mjs').read_bytes()
report=json.loads(Path('browser-validation.json').read_text());req=report['requests'];assert all(x['method']=='GET' and not x['body'] for x in req)
for x in req:
 assert not any(t in x['url'].lower() for t in ['roasted%20beans','printer%20cartridge','passwords','api_key'])
Path('asset-audit.json').write_text(json.dumps(dict(files=checks,sharedWasmSha256=hashlib.sha256(shared).hexdigest(),runtimeFactoryMatchesInstalled=True,requestsGetDownloadsOnly=True,noCredentialPatternsFound=True,scope='Pattern scan plus source/runtime request inspection, not a general security certification'),indent=2));print('PASS asset integrity/privacy scan')
