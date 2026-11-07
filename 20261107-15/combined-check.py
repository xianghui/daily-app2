from pathlib import Path
import re,json,hashlib
root=Path('..');html=(root/'index.html').read_bytes();assert html==(root/'deploy/index.html').read_bytes();apps=re.findall(r'folder:"([^"]+)"',html.decode());assert len(apps)==len(set(apps));assert len(apps)==508
for folder in apps:assert (root/'deploy'/folder/'index.html').is_file(),folder
for p in Path('dist').rglob('*'):
 if p.is_file():assert p.read_bytes()==(root/'deploy/20261107-15'/p.relative_to('dist')).read_bytes(),p
shared=root/'deploy/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm';assert hashlib.sha256(shared.read_bytes()).hexdigest()=='49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082'
Path('combined-validation.json').write_text(json.dumps({'apps':len(apps),'rootGalleryIdentical':True,'newAppBytesIdentical':True,'sharedWasmPreserved':True,'allAppEntrypointsPresent':True},indent=2));print('Combined deployment: 508 app entrypoints, exact new build and gallery, shared WASM preserved.')
