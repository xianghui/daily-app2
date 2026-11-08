from pathlib import Path
import re,json,hashlib
root=Path('..');html=(root/'index.html').read_text();folders=re.findall(r'folder:"([^"]+)"',html)
assert (root/'deploy/index.html').read_bytes()==(root/'index.html').read_bytes()
assert len(folders)==len(set(folders))
for folder in folders:
 assert (root/'deploy'/folder/'index.html').exists(),folder
for f in Path('dist').rglob('*'):
 if f.is_file():assert f.read_bytes()==(root/'deploy/20261109-5'/f.relative_to('dist')).read_bytes()
assert (root/'deploy/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').exists()
Path('combined-build-validation.json').write_text(json.dumps({'allGalleryAppsHaveIndex':len(folders),'newAppAllAssetsMatch':True,'rootIndexMatches':True,'sharedRuntimePresent':True},indent=2));print('PASS combined build',len(folders),'apps, root and runtime assets')
