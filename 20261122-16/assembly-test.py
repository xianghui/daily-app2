from pathlib import Path
import re,json,hashlib
p=Path.cwd();root=p.parent;deploy=root/'deploy'
s=(deploy/'index.html').read_text();folders=re.findall(r'folder:"([^"]+)"',s);assert len(folders)==797
assert (deploy/'index.html').read_bytes()==(root/'index.html').read_bytes()
assert all((deploy/f/'index.html').is_file()for f in folders)
for f in (p/'dist').rglob('*'):
 if f.is_file():assert f.read_bytes()==(deploy/p.name/f.relative_to(p/'dist')).read_bytes()
for d in json.loads((p/'runtime-dependency-audit.json').read_text()):
 f=deploy/d['url'].removeprefix('/daily-app2/');assert hashlib.sha256(f.read_bytes()).hexdigest()==d['sha256']
patterns=[r'sk-[A-Za-z0-9_-]{24,}',r'gh[pousr]_[A-Za-z0-9]{25,}',r'AKIA[0-9A-Z]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----']
assets=list((p/'dist').rglob('*.js'))+list((p/'dist').rglob('*.html'))+list((p/'dist').rglob('*.css'))
for f in assets:
 for pat in patterns:assert not re.search(pat,f.read_text()),f
size=sum(f.stat().st_size for f in deploy.rglob('*')if f.is_file());assert size<1000000000
j={'galleryEntries':len(folders),'everyGalleryAppPresent':True,'newProductionBytesMatch':True,'sharedRuntimeHashesMatch':True,'builtCredentialPatternScanClean':True,'integrationReview':'No provider/key fields, upload path or external actions; worker network limited to public asset downloads. Pattern scans alone are not exhaustive proof.','afterBytes':size,'sizeGuardUnchanged':1000000000}
(p/'assembly-validation.json').write_text(json.dumps(j,indent=2));print('PASS assembled collection',j)
