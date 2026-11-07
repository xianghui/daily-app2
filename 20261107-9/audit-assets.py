from pathlib import Path
import hashlib,json,re
assets=[];hits=[]
for p in Path('dist').rglob('*'):
 if p.is_file():
  b=p.read_bytes();assets.append({'path':str(p.relative_to('dist')),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
  if p.suffix in ['.js','.html','.mjs']:
   s=b.decode(errors='ignore')
   for pat in [r'sk-[A-Za-z0-9_-]{24,}',r'gh[pousr]_[A-Za-z0-9]{30,}',r'AKIA[0-9A-Z]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----']:
    if re.search(pat,s):hits.append({'asset':str(p),'pattern':pat})
assert not hits,hits
Path('asset-audit.json').write_text(json.dumps({'assets':assets,'credentialPatternHits':hits,'manualDataFlowReview':'Only pipeline public model GET requests, no API integration, telemetry or content upload. Scan alone is not proof.','sharedWasmSHA256':'49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082'},indent=2))
print('Audited',len(assets),'production assets; no credential pattern hits.')
