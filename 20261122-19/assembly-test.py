from pathlib import Path
import re,json,hashlib
p=Path.cwd();root=p.parent;deploy=root/'deploy';s=(deploy/'index.html').read_text();before=(p/'published-gallery-before.html').read_text();entries=lambda t:re.findall(r'\{folder:"[^"]+"[^}]*\}',t);old=entries(before);now=entries(s);assert len(now)==len(old)+1 and all(e in now for e in old);folders=re.findall(r'folder:"([^"]+)"',s);assert folders.count('20261122-19')==1;assert (deploy/'index.html').read_bytes()==Path('/tmp/restore-trail-index.html-release-source').read_bytes();assert all((deploy/f/'index.html').is_file()for f in folders)
for f in (p/'dist').rglob('*'):
 if f.is_file():assert f.read_bytes()==(deploy/p.name/f.relative_to(p/'dist')).read_bytes()
for d in json.loads((p/'runtime-dependency-audit.json').read_text()):assert hashlib.sha256((deploy/d['url'].removeprefix('/daily-app2/')).read_bytes()).hexdigest()==d['sha256']
patterns=[r'sk-[A-Za-z0-9_-]{24,}',r'gh[pousr]_[A-Za-z0-9]{25,}',r'AKIA[0-9A-Z]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----']
files=list((p/'dist').rglob('*.js'))+list((p/'dist').rglob('*.html'))+list((p/'dist').rglob('*.css'))
for d in json.loads((p/'runtime-dependency-audit.json').read_text()):
 if not d['url'].endswith('.wasm'):files.append(deploy/d['url'].removeprefix('/daily-app2/'))
for f in files:
 for pat in patterns:assert not re.search(pat,f.read_text()),f
size=sum(f.stat().st_size for f in deploy.rglob('*')if f.is_file());assert size<1000000000
report={'galleryEntries':len(folders),'everyOlderPublishedEntryPreserved':True,'everyGalleryAppPresent':True,'newProductionBytesMatch':True,'sharedRuntimeHashesMatch':True,'builtCredentialPatternScanClean':True,'integrationReview':'No key inputs, providers, POST requests, content uploads or storage actions. Pattern scan alone is not proof.','afterBytes':size,'sizeGuardUnchanged':1000000000,'unrelatedPendingRecoveryExcluded':True};(p/'assembly-validation.json').write_text(json.dumps(report,indent=2));print('PASS',report)
