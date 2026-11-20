from pathlib import Path
import json,hashlib
p=Path(__file__).resolve().parent;r=p.parent;deploy=r/'deploy';files=[]
for f in (p/'dist').rglob('*'):
 if not f.is_file():continue
 rel='20261120-11/'+str(f.relative_to(p/'dist'));assert(deploy/rel).read_bytes()==f.read_bytes();files.append(rel)
assert (deploy/'index.html').read_bytes()==(r/'index.html').read_bytes()
assert (r/'20261028-9/dist/assets/manifold-BE4c7gO-.wasm').exists();assert not (deploy/'20261028-9/assets/manifold-BE4c7gO-.wasm').exists()
assert (r/'20261028-9/dist/assets/manifold-BE4c7gO-.wasm').read_bytes()==(deploy/'20261028-24/assets/manifold-BE4c7gO-.wasm').read_bytes()
report=json.loads((deploy/'runtime-deduplication.json').read_text());assert report['afterBytes']<1000000000
(p/'assembly-validation.json').write_text(json.dumps({'assembledBytes':report['afterBytes'],'allNewFilesMatch':files,'olderSourceBuildPreserved':True,'sharedGeometryByteIdentical':True,'sizeGuardUnchanged':1000000000},indent=2));print('PASS combined assembly',report['afterBytes'])
