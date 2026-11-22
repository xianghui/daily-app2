from pathlib import Path
import re,json,hashlib,subprocess
p=Path.cwd();root=p.parent;deploy=root/'deploy';s=(deploy/'index.html').read_text();folders=re.findall(r'folder:"([^"]+)"',s);before=(p/'published-gallery-before.html').read_text();old=re.findall(r'\{folder:"[^"]+"[^}]*\}',before);now=re.findall(r'\{folder:"[^"]+"[^}]*\}',s);assert len(now)==len(old)+1;assert all(e in now for e in old);assert folders.count('20261122-18')==1;assert 'folder:"20261122-18",name:"Commit Cove",area:"ai-utility"'in s
assert (deploy/'index.html').read_bytes()==subprocess.check_output(['git','show',':index.html'],cwd=root);assert all((deploy/f/'index.html').is_file()for f in folders)
for f in (p/'dist').rglob('*'):
 if f.is_file():assert f.read_bytes()==(deploy/p.name/f.relative_to(p/'dist')).read_bytes()
for d in json.loads((p/'runtime-dependency-audit.json').read_text()):
 f=deploy/d['url'].removeprefix('/daily-app2/');assert hashlib.sha256(f.read_bytes()).hexdigest()==d['sha256']
patterns=[r'sk-[A-Za-z0-9_-]{24,}',r'gh[pousr]_[A-Za-z0-9]{25,}',r'AKIA[0-9A-Z]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----']
for f in list((p/'dist').rglob('*.js'))+list((p/'dist').rglob('*.html'))+list((p/'dist').rglob('*.css')):
 for pat in patterns:assert not re.search(pat,f.read_text()),f
size=sum(f.stat().st_size for f in deploy.rglob('*')if f.is_file());assert size<1000000000
report={'galleryEntries':len(folders),'everyOlderPublishedEntryPreserved':True,'everyGalleryAppPresent':True,'newProductionBytesMatch':True,'sharedRuntimeHashesMatch':True,'builtCredentialPatternScanClean':True,'integrationReview':'No provider/key fields, upload path or external actions. Pattern scan alone not exhaustive.','afterBytes':size,'sizeGuardUnchanged':1000000000,'unrelatedPendingRecoveryExcluded':True}
(p/'assembly-validation.json').write_text(json.dumps(report,indent=2));print('PASS',report)
