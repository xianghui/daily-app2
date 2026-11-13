import re,json,hashlib
from pathlib import Path
root=Path('..');deploy=root/'deploy';s=(root/'index.html').read_text();apps=re.findall(r'folder:"([^"]+)"',s)
assert len(apps)==len(set(apps));assert (deploy/'index.html').read_text()==s
missing=[x for x in apps if not (deploy/x/'index.html').exists()];assert not missing,missing
for p in Path('dist').rglob('*'):
 if p.is_file(): assert p.read_bytes()==(deploy/'20261114-3'/p.relative_to('dist')).read_bytes(),str(p)
assert (deploy/'20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').is_file()
Path('combined-assembly-validation.json').write_text(json.dumps({'allAppFoldersPresent':len(apps),'galleryByteMatched':True,'newAppFilesByteMatched':True,'sharedWasmPresent':True}));print('PASS combined assembly:',len(apps),'apps')
