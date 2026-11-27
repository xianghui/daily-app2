from pathlib import Path
import re,json,hashlib
root=Path(__file__).resolve().parent
patterns=[r'sk-[A-Za-z0-9_-]{20,}',r'gh[pousr]_[A-Za-z0-9]{20,}',r'AKIA[A-Z0-9]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----']
files=[p for p in (root/'dist').rglob('*') if p.suffix in ['.js','.css','.html','.json']]
for p in files:
 s=p.read_text()
 for pattern in patterns:assert not re.search(pattern,s),p
shared=json.loads((root/'runtime-provenance.json').read_text())
for f in shared:
 path=root.parent/'deploy'/f['path'].removeprefix('/daily-app2/')
 assert len(path.read_bytes())==f['bytes']
 assert hashlib.sha256(path.read_bytes()).hexdigest()==f['sha256']
(root/'security-validation.json').write_text(json.dumps({'builtTextFilesScanned':len(files),'credentialPatternHits':0,'sharedAssetsVerified':shared,'scope':'Pattern scan plus code review and real browser request audit; no absolute secret-detection claim'},indent=2))
print('PASS credential pattern scan and shared runtime SHA-256 verification')
