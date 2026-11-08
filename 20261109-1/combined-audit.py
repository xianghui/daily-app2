from pathlib import Path
import re,json,hashlib
r=Path(__file__).resolve().parent.parent;folders=re.findall(r'folder:"([^"]+)"',(r/'index.html').read_text());assert len(folders)==540 and len(set(folders))==540
assert (r/'deploy/index.html').read_bytes()==(r/'index.html').read_bytes()
for f in folders:assert (r/'deploy'/f/'index.html').is_file(),f
for f in (r/'20261109-1/dist').rglob('*'):
 if f.is_file():assert f.read_bytes()==(r/'deploy/20261109-1'/f.relative_to(r/'20261109-1/dist')).read_bytes()
assert (r/'deploy/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').stat().st_size==26861777
(r/'20261109-1/combined-build-validation.json').write_text(json.dumps({'all540AppsPresent':True,'newAppAllAssetsMatch':True,'galleryMatches':True,'sharedWasmPresent':True},indent=2))
print('PASS combined deployment: all 540 apps, gallery and new app/shared runtime assets')
