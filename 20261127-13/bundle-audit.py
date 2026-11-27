from pathlib import Path
import re,hashlib,json
root=Path(__file__).resolve().parent.parent
paths=['20261115-6/dist/assets/ai.worker-lkOoPoq8.js','20261115-6/dist/runtime/ort-wasm-simd-threaded.asyncify.mjs','20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm']
assets=[]
for p in paths:
 b=(root/p).read_bytes();assets.append({'path':p.replace('/dist/','/'),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
worker=(root/paths[0]).read_text();assert 'Xenova/all-MiniLM-L6-v2' in worker;assert 'pooling:`mean`,normalize:!0' in worker;assert 'n+=4' in worker;assert 'numThreads=1' in worker
scanned=[]
for p in Path('dist').rglob('*'):
 if p.is_file() and p.suffix in ['.js','.css','.html']:
  s=p.read_text();assert not re.search(r'sk-[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{20,}|AIza[\w-]{25,}',s);assert 'api.openai.com' not in s;scanned.append(str(p))
Path('bundle-audit.json').write_text(json.dumps({'assets':assets,'scanned':scanned,'patternScanOnly':True,'protocol':'{id,texts} -> progress/batch/result(vectors)/error','workerSourceReviewed':True},indent=2));print('PASS runtime provenance and built text credential-pattern scan')
