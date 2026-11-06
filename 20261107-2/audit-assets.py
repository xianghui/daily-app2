import re,json,hashlib
from pathlib import Path
files=[]
for p in Path('dist').rglob('*'):
 if not p.is_file():continue
 b=p.read_bytes()
 if p.suffix in ['.html','.js','.mjs','.css','.json']:
  t=b.decode()
  for pattern in [r'sk-(?:proj-)?[A-Za-z0-9_-]{32,}',r'gh[pousr]_[A-Za-z0-9]{32,}',r'AKIA[A-Z0-9]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----']:
   assert not re.search(pattern,t),f'Credential-shaped string in {p}'
 files.append({'path':str(p.relative_to('dist')),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
Path('asset-audit.json').write_text(json.dumps({'credentialPatternHits':0,'assets':files},indent=2))
print('Built text assets scanned; no credential-shaped strings. Runtime/worker hashes recorded.')
