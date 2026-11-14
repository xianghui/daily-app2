from pathlib import Path
import json,hashlib
root=Path('..');deploy=root/'deploy';app=Path('.')
checks=[]
for f in Path('dist').rglob('*'):
 if f.is_file():
  target=deploy/'20261115-6'/f.relative_to('dist');assert target.read_bytes()==f.read_bytes();checks.append(str(target))
assert (deploy/'index.html').read_bytes()==(root/'index.html').read_bytes()
r=json.loads((deploy/'runtime-deduplication.json').read_text());assert r['afterBytes']<1000000000
assert any(x['folder']=='20261030-10' for x in r['geometryReuse'])
for folder in ['20261025-7','20261025-8','20261030-10','20261030-11','20261030-12','20261030-13','20261030-14']:
 assert not (deploy/folder/'assets/manifold-BE4c7gO-.wasm').exists()
 s=''.join(f.read_text() for f in (deploy/folder/'assets').glob('*.js'))
 assert '/daily-app2/20261028-24/assets/manifold-BE4c7gO-.wasm' in s
 assert '/daily-app2/'+folder+'/assets/manifold-BE4c7gO-.wasm' not in s
json.dump({'appFilesByteMatched':checks,'galleryMatched':True,'siteBytes':r['afterBytes'],'additionalGeometryReuse':'20261030-10','sourceBuildsUnmodified':r['sourceBuildsUnmodified']},open('combined-asset-validation.json','w'),indent=2)
print('PASS combined assets and guarded site size',r['afterBytes'])
