from pathlib import Path
import re,json,hashlib
root=Path('..'); html=(root/'index.html').read_bytes();assert (root/'deploy/index.html').read_bytes()==html
folders=re.findall(r'folder:"([^"]+)"',html.decode());assert len(folders)==len(set(folders))==513
for f in folders:assert (root/'deploy'/f/'index.html').is_file(),f
for p in Path('dist').rglob('*'):
 if p.is_file():assert p.read_bytes()==(root/'deploy/20261107-21'/p.relative_to('dist')).read_bytes()
wasm=root/'deploy/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm';assert hashlib.sha256(wasm.read_bytes()).hexdigest()=='49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082'
Path('combined-validation.json').write_text(json.dumps({'apps':len(folders),'allEntrypointsPresent':True,'newAppBytesMatch':True,'sharedWasmVerified':True},indent=2));print('Combined output: 513 app entrypoints, new assets and shared CPU binary verified.')
