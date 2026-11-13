from pathlib import Path
import re,json
root=Path('..');s=(root/'index.html').read_text();apps=re.findall(r'folder:"([^"\n]+)"',s);assert len(apps)==len(set(apps))
assert (root/'deploy/index.html').read_text()==s
for app in apps:assert (root/'deploy'/app/'index.html').exists(),app
for p in Path('dist').rglob('*'):
 if p.is_file():assert p.read_bytes()==(root/'deploy/20261113-23'/p.relative_to('dist')).read_bytes(),str(p)
Path('combined-assembly-validation.json').write_text(json.dumps({'galleryAndAllAppsPresent':len(apps),'ownBundleByteIdentical':True}))
print('PASS combined assembly',len(apps),'apps')
