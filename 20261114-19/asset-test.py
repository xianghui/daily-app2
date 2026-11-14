from pathlib import Path
import json,re,hashlib
r=Path('..');d=Path('dist');out=[]
for f in d.rglob('*'):
 if f.is_file():
  b=f.read_bytes();deployed=r/'deploy/20261114-19'/f.relative_to(d)
  assert deployed.read_bytes()==b
  if f.suffix in ['.js','.html','.mjs']:
   assert not re.search(rb'sk-(?:proj-)?[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{30,}|AKIA[0-9A-Z]{16}',b)
  out.append(dict(path=str(f),bytes=len(b),sha256=hashlib.sha256(b).hexdigest()))
assert (r/'deploy/index.html').read_bytes()==(r/'index.html').read_bytes()
Path('combined-asset-validation.json').write_text(json.dumps(dict(assets=out,builtCredentialPatternsAbsent=True),indent=2));print('PASS exact assembled assets and secret pattern scan')
