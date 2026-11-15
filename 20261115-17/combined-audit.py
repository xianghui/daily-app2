from pathlib import Path
import re,json,hashlib
root=Path('..');source=(root/'index.html').read_bytes();deploy=root/'deploy';assert (deploy/'index.html').read_bytes()==source
folders=re.findall(r'folder:"([^"]+)"',source.decode());assert len(folders)==len(set(folders))==len(folders)
for f in folders:assert (deploy/f/'index.html').is_file(),f
paths=['20261115-17/'+str(f.relative_to(Path('dist'))) for f in Path('dist').rglob('*') if f.is_file()]+['20261115-6/assets/ai.worker-lkOoPoq8.js','20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs','20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm']
checks=[]
for p in paths:
 folder,tail=p.split('/',1);local=root/folder/'dist'/tail;combined=deploy/p;assert combined.read_bytes()==local.read_bytes(),p
 checks.append(dict(path=p,sha256=hashlib.sha256(combined.read_bytes()).hexdigest(),bytes=combined.stat().st_size))
Path('combined-asset-validation.json').write_text(json.dumps(dict(apps=len(folders),galleryByteMatched=True,assets=checks),indent=2));print('PASS combined app/runtime assets and every gallery folder')
