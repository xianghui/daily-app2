from pathlib import Path
import re,json,hashlib
root=Path('..');deploy=root/'deploy';folders=re.findall(r'folder:"([^"]+)"',(root/'index.html').read_text())
assert len(folders)==len(set(folders))
assert (deploy/'index.html').read_bytes()==(root/'index.html').read_bytes()
for f in folders:assert (deploy/f/'index.html').is_file(),f
for p in Path('dist').rglob('*'):
 if p.is_file():assert p.read_bytes()==(deploy/'20261112-15'/p.relative_to('dist')).read_bytes()
shared='20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'
assert (deploy/shared).read_bytes()==(root/'20261107-2/dist/assets'/Path(shared).name).read_bytes()
json.dump({'galleryEntries':len(folders),'allAppsAssembled':True,'rootByteIdentical':True,'newAppByteIdentical':True,'sharedWasmByteIdentical':True},open('combined-assembly-validation.json','w'),indent=2)
print('PASS combined',len(folders),'apps and exact runtime assets')
