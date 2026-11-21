from pathlib import Path
import json,re,hashlib
r=Path('..');d=r/'deploy';report=json.loads((d/'runtime-deduplication.json').read_text());assert report['afterBytes']<1000000000
assert (d/'index.html').read_bytes()==(r/'index.html').read_bytes();folders=re.findall(r'folder:"([^"]+)"',(r/'index.html').read_text());assert all((d/f/'index.html').is_file()for f in folders)
for p in Path('dist').rglob('*'):
 if p.is_file():assert p.read_bytes()==(d/'20261121-16'/p.relative_to('dist')).read_bytes()
assert any(x['folder']=='20261029-1'and x['bytesRemoved']==541470 for x in report['geometryReuse']);assert not(d/'20261029-1/assets/manifold-BE4c7gO-.wasm').exists();assert(r/'20261029-1/dist/assets/manifold-BE4c7gO-.wasm').is_file()
json.dump({'apps':len(folders),'allAppsPresent':True,'newAppAssetsMatchDist':True,'siteBytes':report['afterBytes'],'sizeGuard':1000000000,'legacyDuplicateBytesRemoved':541470,'sourceDistPreserved':True},open('assembly-validation.json','w'),indent=2);print('PASS assembly',report['afterBytes'],len(folders))
