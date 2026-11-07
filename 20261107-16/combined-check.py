from pathlib import Path
import re,json,hashlib
root=Path('..');entries=re.findall(r'folder:"([^"]+)"',(root/'index.html').read_text());assert entries[0]=='20261107-16';assert len(entries)==len(set(entries))
assert (root/'deploy/index.html').read_bytes()==(root/'index.html').read_bytes()
for f in entries: assert (root/'deploy'/f/'index.html').is_file(),f
for p in Path('dist').rglob('*'):
 if p.is_file():assert p.read_bytes()==(root/'deploy/20261107-16'/p.relative_to('dist')).read_bytes()
Path('combined-validation.json').write_text(json.dumps({'entries':len(entries),'allAppsPresent':True,'newBuildByteIdentical':True},indent=2));print('All',len(entries),'apps present; combined root/new build byte-identical.')
