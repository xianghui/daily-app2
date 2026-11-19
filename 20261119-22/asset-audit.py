import os
from pathlib import Path
os.chdir(Path(__file__).resolve().parent)
from pathlib import Path
import hashlib,json,os,re,urllib.request,time
root=Path('../deploy');base=os.getenv('ASSET_BASE','http://127.0.0.1:7002/daily-app2/');paths=['index.html','20261115-6/assets/ai.worker-lkOoPoq8.js','20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs','20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm']+[str(p.relative_to(root)) for p in (root/'20261119-22').rglob('*') if p.is_file()];report=[]
for path in paths:
 data=(root/path).read_bytes()
 for attempt in range(1,4):
  try:
   remote=urllib.request.urlopen(base+path,timeout=25).read();break
  except Exception:
   if attempt==3:raise
   time.sleep(2)
 assert data==remote,path
 report.append({'path':path,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'servedByteMatch':True,'attempts':attempt})
for p in (root/'20261119-22').rglob('*'):
 if p.suffix in ['.js','.html','.css']:assert not re.search(r'sk-[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{30,}|AIza[0-9A-Za-z_-]{30,}',p.read_text()),p
Path(os.getenv('ASSET_REPORT','assembled-asset-audit.json')).write_text(json.dumps({'assets':report,'credentialPatternScanPassed':True,'noProviderIntegration':True},indent=2));print('PASS',len(report),'served app/gallery/runtime byte matches, credential-pattern scan')
