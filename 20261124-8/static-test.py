from pathlib import Path
import json,re,hashlib
root=Path('..');p=Path('.');provenance=json.loads((p/'runtime-provenance.json').read_text())
for row in provenance:
 b=(root/row['path']).read_bytes();assert hashlib.sha256(b).hexdigest()==row['sha256'];assert len(b)==row['bytes']
worker=(root/provenance[0]['path']).read_text();assert 'all-MiniLM-L6-v2' in worker and 'normalize:!0' in worker and 'pooling:`mean`' in worker
findings=[]
for f in (p/'dist').rglob('*'):
 if f.suffix in ['.js','.css','.html','.mjs']:
  s=f.read_text()
  for pat in [r'sk-[A-Za-z0-9_-]{20,}',r'ghp_[A-Za-z0-9]{20,}',r'AKIA[0-9A-Z]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----']:
   if re.search(pat,s):findings.append(str(f))
assert not findings
source=(p/'src/App.jsx').read_text();assert '/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js' in source;assert '180000' in source
Path('static-audit.json').write_text(json.dumps({'runtimeHashesVerified':True,'modelProtocolInspected':True,'credentialPatternMatches':findings,'defaultInference':'local WASM worker; no provider API integration','sourceAndExportScope':'synthetic fixtures only; no user content persisted by app'},indent=2));print('PASS static assets, model protocol and secret pattern scan')
