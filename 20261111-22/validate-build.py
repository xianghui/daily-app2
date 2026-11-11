from pathlib import Path
import json,re,hashlib
p=Path('dist');hits=[];assets=[]
patterns=[r'sk-[A-Za-z0-9_-]{20,}',r'gh[pousr]_[A-Za-z0-9]{25,}',r'AKIA[A-Z0-9]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----']
for f in p.rglob('*'):
 if not f.is_file():continue
 data=f.read_bytes();assets.append({'path':str(f.relative_to(p)),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
 if f.suffix in ['.js','.html','.css','.json']:
  s=data.decode(errors='replace')
  for pattern in patterns:
   if re.search(pattern,s):hits.append({'file':str(f),'pattern':pattern})
assert not hits,hits
Path('secret-scan.json').write_text(json.dumps({'passed':True,'patternsChecked':patterns,'findings':hits,'scope':'Built text assets; pattern scan plus source/network inspection, not proof against all possible secrets'},indent=2))
Path('runtime-assets.json').write_text(json.dumps(assets,indent=2))
root=Path('../deploy');assert (root/'index.html').read_bytes()==Path('../index.html').read_bytes()
html=(root/'index.html').read_text();names=re.findall(r'folder:"([^"]+)"',html);missing=[n for n in names if not(root/n/'index.html').is_file()];assert not missing,missing
for f in p.rglob('*'):
 if f.is_file():assert f.read_bytes()==(root/'20261111-22'/f.relative_to(p)).read_bytes(),f
shared=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm');assert shared.read_bytes()==(root/'20261107-2/assets'/shared.name).read_bytes()
Path('combined-assembly-validation.json').write_text(json.dumps({'passed':True,'apps':len(names),'allGalleryEntriesHaveIndex':True,'newAppAssetsIdentical':True,'sharedWasmSha256':hashlib.sha256(shared.read_bytes()).hexdigest(),'rootIndexIdentical':True},indent=2))
print('PASS combined assembly',len(names),'apps, new build and shared WASM byte-identical; built secret pattern scan')
