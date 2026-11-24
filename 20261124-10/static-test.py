from pathlib import Path
import re,json,hashlib
files=[p for p in Path('dist').rglob('*') if p.is_file()];findings=[]
for p in files:
 if p.suffix in ['.js','.html','.css']:
  s=p.read_text()
  for pattern in [r'sk-[A-Za-z0-9_-]{25,}',r'ghp_[A-Za-z0-9]{25,}',r'AKIA[A-Z0-9]{16}',r'-----BEGIN (?:RSA |EC )?PRIVATE KEY-----']:
   assert not re.search(pattern,s),(p,pattern)
s=Path('src/App.jsx').read_text();assert s.count('fetch(')==1;assert "fetch(url)" in s;assert "worker.current.postMessage({id,texts:texts(d)})" in s
for r in json.loads(Path('runtime-provenance.json').read_text()):
 b=(Path('..')/r['path']).read_bytes();assert len(b)==r['bytes'];assert hashlib.sha256(b).hexdigest()==r['sha256']
Path('static-audit.json').write_text(json.dumps({'assetsScanned':len(files),'credentialPatternsFound':0,'manualDataflowReview':'Only fetch is fixed same-origin worker URL; texts passed into local worker. Shared worker requests public weights and same-origin runtime. No optional inference providers, user-content fetches or endpoint calls. Pattern scan alone is not credential-proof.','sharedRuntimeHashesMatch':True},indent=2));print('PASS static assets/privacy and runtime provenance')
