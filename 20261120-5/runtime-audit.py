import hashlib,json,re,urllib.request
from pathlib import Path
r=Path('..');paths=['20261115-6/assets/ai.worker-lkOoPoq8.js','20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs','20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'];items=[]
for p in paths:
 f,a=p.split('/',1);b=(r/f/'dist'/a).read_bytes();items.append({'url':'/daily-app2/'+p,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
worker=(r/'20261115-6/src/ai.worker.js').read_text();assert 'i+=4' in worker and "device:'wasm',dtype:'q8'" in worker and "pooling:'mean',normalize:true" in worker
sha=json.load(urllib.request.urlopen('https://huggingface.co/api/models/Xenova/all-MiniLM-L6-v2',timeout=60))['sha']
d={'dependencies':items,'sourceInspected':'20261115-6/src/ai.worker.js','model':'Xenova/all-MiniLM-L6-v2','observedModelRevision':sha,'hostRevisionRecheckedThisRun':True,'transformersVersion':'4.3.2','device':'wasm','dtype':'q8','task':'feature-extraction','dimensions':384,'chunk':4,'actualTokenizerCeiling':512,'noWebGPURequired':True,'note':'main is unpinned; per-call max_length ignored by feature-extraction pipeline, tokenizer ceiling applies; descriptions separately bounded to 300 characters'}
Path('runtime-dependency-audit.json').write_text(json.dumps(d,indent=2))
patterns=[r'sk-[A-Za-z0-9_-]{20,}',r'gh[pousr]_[A-Za-z0-9]{20,}',r'AKIA[A-Z0-9]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY']
scanned=[]
for p in Path('dist').rglob('*'):
 if p.suffix in ['.js','.html','.css','.json']:
  s=p.read_text();assert not any(re.search(x,s) for x in patterns),str(p);scanned.append(str(p))
Path('asset-validation.json').write_text(json.dumps({'builtTextFilesScanned':scanned,'credentialPatternMatches':0,'manualIntegrationReview':'No keys, providers, analytics or remote-content inference. Same-origin transport plus public Hugging Face weights only. Network browser audit separately recorded.','actualBuildBytes':sum(p.stat().st_size for p in Path('dist').rglob('*') if p.is_file())},indent=2));print('PASS runtime dependency protocol/hash audit and built-asset credential pattern scan; observed model revision',sha)
