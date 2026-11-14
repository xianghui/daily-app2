from pathlib import Path
import hashlib,json
root=Path('..');deploy=root/'deploy';app=Path('.')
matched=[]
for f in Path('dist').rglob('*'):
 if f.is_file():
  target=deploy/'20261115-3'/f.relative_to('dist');assert target.read_bytes()==f.read_bytes(),str(target);matched.append(str(f.relative_to('dist')))
assert (deploy/'index.html').read_bytes()==(root/'index.html').read_bytes()
r=json.loads((deploy/'runtime-deduplication.json').read_text());assert r['afterBytes']<1000000000
actual=sum(p.stat().st_size for p in deploy.rglob('*') if p.is_file());assert actual==r['afterBytes']
legacy=[]
for folder in ['20261025-7','20261025-8']:
 for p in (root/folder/'dist').rglob('*'):
  if not p.is_file():continue
  q=deploy/folder/p.relative_to(root/folder/'dist')
  if p.name=='manifold-BE4c7gO-.wasm':assert not q.exists()
  elif p.suffix not in ['.js','.html']:assert p.read_bytes()==q.read_bytes()
 legacy.append(folder)
Path('combined-asset-validation.json').write_text(json.dumps(dict(allAppFilesByteMatched=matched,rootIndexByteMatched=True,combinedBytes=actual,legacySourceBuildsUnmodified=True,geometryReuse=r['geometryReuse'],sharedGeometrySHA256=r['geometrySHA256']),indent=2))
print('PASS combined assets and bounded size',actual)
