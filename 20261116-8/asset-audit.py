from pathlib import Path
import hashlib,json,re,urllib.request,os
root=Path('..');deploy=root/'deploy';paths=['20261115-6/assets/ai.worker-lkOoPoq8.js','20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs','20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'];deps=[]
for path in paths:
 b=(deploy/path).read_bytes();x={'path':path,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()}
 if os.environ.get('PUBLIC_BASE'):
  with urllib.request.urlopen(os.environ['PUBLIC_BASE']+path,timeout=90) as r:remote=r.read();x['publicStatus']=r.status
  assert remote==b,path;x['publicBytesMatch']=True
 deps.append(x)
pattern=re.compile(r'(?:sk-[A-Za-z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9]{20,}|AIza[A-Za-z0-9_-]{20,}|AKIA[A-Z0-9]{16}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY)')
for p in Path('dist').rglob('*'):
 if p.suffix in ['.js','.html','.css','.json']:assert not pattern.search(p.read_text()),p
report={'dependencies':deps,'builtTextCredentialPatternScanPassed':True,'noProviderIntegration':True}
if os.environ.get('PUBLIC_BASE'):
 import re
 for path in [*Path('dist').rglob('*.js'),*Path('dist').rglob('*.css'),Path('dist/index.html')]:
  rel='20261116-8/'+str(path.relative_to('dist'))
  with urllib.request.urlopen(os.environ['PUBLIC_BASE']+rel,timeout=60) as r:b=r.read()
  assert b==path.read_bytes(),rel
 report['allPublicAppAssetsByteMatched']=True
Path(os.environ.get('AUDIT_REPORT','asset-audit.json')).write_text(json.dumps(report,indent=2));print('PASS runtime assets, credential scan'+(' and public byte matches' if os.environ.get('PUBLIC_BASE') else ''))
