from pathlib import Path
import json,hashlib,re
p=Path(__file__).resolve().parent
files=list((p/'dist').rglob('*'));report=[]
for f in files:
 if not f.is_file():continue
 b=f.read_bytes();report.append({'path':str(f.relative_to(p/'dist')),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
 if f.suffix in ['.js','.html','.css','.json']:
  s=b.decode();assert not re.search(r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY|\bsk-(?:proj-)?[A-Za-z0-9_-]{24,}|ghp_[A-Za-z0-9]{30,}',s),str(f)
assert (p/'public/ocr-worker-7.0.0.js').read_bytes()==(p/'node_modules/tesseract.js/dist/worker.min.js').read_bytes()
core=Path('/tmp/label-scribe-core.js');assert core.read_bytes()==(p/'node_modules/tesseract.js-core/tesseract-core-lstm.wasm.js').read_bytes()
remote=[{'url':'https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0/tesseract-core-lstm.wasm.js','file':core},{'url':'https://cdn.jsdelivr.net/npm/@tesseract.js-data/eng@1.0.0/4.0.0_best_int/eng.traineddata.gz','file':Path('/tmp/label-scribe-eng.traineddata.gz')}]
(p/'asset-validation.json').write_text(json.dumps({'local':report,'remote':[{'url':x['url'],'bytes':x['file'].stat().st_size,'sha256':hashlib.sha256(x['file'].read_bytes()).hexdigest()}for x in remote],'workerMatchesPinnedPackage':True,'coreMatchesPinnedPackage':True,'builtCredentialPatternScanPassed':True,'scanNotExhaustiveProof':True},indent=2));print('PASS assets/size/pinned hashes and credential patterns')
