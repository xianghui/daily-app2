from pathlib import Path
import re,json
r=Path('..');names=re.findall(r'folder:"([^"]+)"',(r/'index.html').read_text());assert len(names)==len(set(names));assert (r/'deploy/index.html').read_bytes()==(r/'index.html').read_bytes()
for name in names:assert (r/'deploy'/name/'index.html').exists(),name
for p in Path('dist').rglob('*'):
 if p.is_file():assert p.read_bytes()==(r/'deploy/20261110-7'/p.relative_to('dist')).read_bytes()
assert (r/'deploy/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').exists()
Path('combined-validation.json').write_text(json.dumps({'appDirectories':len(names),'rootGalleryMatches':True,'newBuildAllFilesMatch':True,'sharedWasmPreserved':True},indent=2));print('PASS combined gallery, all app directories, new production assets and shared WASM')
