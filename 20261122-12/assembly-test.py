from pathlib import Path
import json,re,hashlib
r=Path('..');s=(r/'index.html').read_text();folders=re.findall(r'folder:"([^"]+)"',s)
assert len(folders)==len(set(folders));assert (r/'deploy/index.html').read_text()==s
for app in folders:assert(r/'deploy'/app/'index.html').exists(),app
for d in json.loads(Path('runtime-dependency-audit.json').read_text()):
 b=(r/'deploy'/d['url'].removeprefix('/daily-app2/')).read_bytes();assert hashlib.sha256(b).hexdigest()==d['sha256']
for p in Path('dist').rglob('*'):
 if p.is_file():assert p.read_bytes()==(r/'deploy/20261122-12'/p.relative_to('dist')).read_bytes()
report=json.loads((r/'deploy/runtime-deduplication.json').read_text());assert report['afterBytes']<1000000000
Path('assembly-validation.json').write_text(json.dumps({'galleryAndAppCount':len(folders),'allGalleryAppsPresent':True,'newAppAndSharedRuntimeByteMatches':True,'combinedBytes':report['afterBytes'],'unchangedSizeGuard':1000000000},indent=2));print('PASS assembly',len(folders),report['afterBytes'])
