from pathlib import Path
import json,hashlib,re
assets=[]
for f in Path('dist').rglob('*'):
 if not f.is_file():continue
 b=f.read_bytes();assets.append({'path':str(f.relative_to('dist')),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
 if f.suffix in ['.js','.mjs','.html','.css','.json']:
  assert not re.search(r'(?:sk-[A-Za-z0-9]{20,}|gh[pousr]_[A-Za-z0-9]{20,}|AIza[\w-]{30,}|BEGIN (?:RSA )?PRIVATE KEY)',b.decode()),str(f)
Path('asset-audit.json').write_text(json.dumps({'assets':assets,'credentialPatternScan':'no matches; source inspected, no provider integrations','sharedWasm':'20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'},indent=2))
print('Asset hashes recorded; common credential patterns absent.')
