import json,re,hashlib
from pathlib import Path
checks=[]
paths=list(Path('dist').rglob('*'))+[Path('../20261115-6/dist/assets/ai.worker-lkOoPoq8.js'),Path('../20261115-6/dist/runtime/ort-wasm-simd-threaded.asyncify.mjs'),Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm')]
for p in paths:
 if not p.is_file():continue
 b=p.read_bytes()
 if p.suffix in ['.js','.mjs','.html','.css','.json']:
  s=b.decode();assert not re.search(r'(?:sk-(?:proj-)?[A-Za-z0-9_-]{24,}|gh[pousr]_[A-Za-z0-9]{30,}|AKIA[A-Z0-9]{16})',s),p
  if p.suffix in ['.js','.mjs']:assert not re.search(r'https?://[^\s"\']*(?:openai.com/v1|openrouter.ai/api)',s),p
 checks.append(dict(path=str(p),bytes=len(b),sha256=hashlib.sha256(b).hexdigest()))
worker=Path('../20261115-6/dist/assets/ai.worker-lkOoPoq8.js').read_text();assert '/daily-app2/20261107-2/assets/ort-wasm' in worker
shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').read_bytes();report=json.loads(Path('browser-validation.json').read_text());req=report['requests'];assert all(x['method']=='GET' and not x['body'] for x in req)
from urllib.parse import urlsplit,quote
fixtures=json.loads(Path('export-fixture0.json').read_text())['originalInput']['records']+json.loads(Path('export-fixture1.json').read_text())['originalInput']['records']
for x in req:
 u=urlsplit(x['url']);assert u.scheme=='blob' or u.hostname in ['127.0.0.1','huggingface.co','us.aws.cdn.hf.co','xianghui.github.io']
 assert not any(r[field] in x['url'] or quote(r[field],safe='') in x['url'] for r in fixtures for field in ['description'])
 assert 'passwords' not in x['url'].lower()
Path('asset-audit.json').write_text(json.dumps(dict(files=checks,sharedWasmSha256=hashlib.sha256(shared).hexdigest(),requestsGetDownloadsOnly=True,noCredentialPatternsFound=True,scope='Pattern scan plus source/runtime request inspection, not a general security certification'),indent=2));print('PASS asset integrity/privacy scan')
