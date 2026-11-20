from pathlib import Path
import re,json
files=[p for p in Path('dist').rglob('*') if p.suffix in ['.js','.html','.css']];patterns=[r'sk-[A-Za-z0-9_-]{20,}',r'gh[pousr]_[A-Za-z0-9]{20,}',r'AKIA[A-Z0-9]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----'];hits=[]
for p in files:
 s=p.read_text()
 for q in patterns:
  if re.search(q,s):hits.append(str(p))
assert not hits,hits
Path('security-validation.json').write_text(json.dumps({'builtTextFilesScanned':len(files),'credentialPatternHits':hits,'sourceIntegrationInspected':'No remote provider, credentials, analytics, uploads or persistent user-content storage. Cache API stores runtime/model assets. Worker receives local texts via postMessage only. Network audit retained as host/path only; signed query strings never persisted.','scope':'Pattern scan plus source/network inspection, not a claim of exhaustive secret detection.'},indent=2));print('PASS built asset credential scan')
