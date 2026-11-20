from pathlib import Path
import hashlib,json,re
root=Path('..');deploy=root/'deploy';app='20261120-22'
assert (deploy/'index.html').read_bytes()==(root/'index.html').read_bytes()
report=[]
for f in (Path('dist')).rglob('*'):
 if f.is_file():
  p=deploy/app/f.relative_to('dist');assert p.read_bytes()==f.read_bytes();report.append({'path':str(p.relative_to(deploy)),'bytes':f.stat().st_size,'sha256':hashlib.sha256(f.read_bytes()).hexdigest()})
for d in json.loads(Path('runtime-dependency-audit.json').read_text())['dependencies']:
 p=deploy/d['url'].removeprefix('/daily-app2/');assert hashlib.sha256(p.read_bytes()).hexdigest()==d['sha256'];report.append(d)
for f in Path('dist').rglob('*'):
 if f.suffix in ['.js','.html','.css']:
  s=f.read_text();assert not re.search(r'sk-[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{25,}|AIza[A-Za-z0-9_-]{25,}|Bearer\s+[A-Za-z0-9_-]{15,}',s),f
size=sum(p.stat().st_size for p in deploy.rglob('*') if p.is_file());assert size<1000000000
Path('asset-validation.json').write_text(json.dumps({'files':report,'combinedBytes':size,'secretsPatternScanPassed':True,'scope':'pattern scan plus source/network review, not an exhaustive secret proof'},indent=2));print('PASS assembled production assets, shared protocol dependencies and size:',size)
