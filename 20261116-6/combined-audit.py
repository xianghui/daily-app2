from pathlib import Path
import json,re
root=Path.cwd().parent;dep=root/'deploy';report=json.loads(Path('asset-audit.json').read_text());out=[]
for row in report['dependencies']:
 f=dep/row['path'];import hashlib;assert hashlib.sha256(f.read_bytes()).hexdigest()==row['sha256'];out.append(row['path'])
for f in Path('dist').rglob('*'):
 if f.is_file():assert f.read_bytes()==(dep/'20261116-6'/f.relative_to('dist')).read_bytes()
assert (dep/'index.html').read_bytes()==(root/'index.html').read_bytes()
Path('combined-asset-validation.json').write_text(json.dumps({'allAppFilesByteMatched':True,'dependenciesByteMatched':out,'galleryByteMatched':True,'collectionBytes':json.loads((dep/'runtime-deduplication.json').read_text())['afterBytes']},indent=2));print('PASS combined bytes and immutable dependency paths')
