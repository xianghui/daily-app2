# The __vite-browser-external shim is referenced only inside the Node-process branch, never browser workers. Existing Jekyll hides underscore files; audit browser-reachable assets.
from pathlib import Path
import hashlib,json,urllib.request,os
base=os.environ.get('ASSET_BASE','https://xianghui.github.io/daily-app2/');root=Path('../deploy');paths=['20261029-19/index.html']+[str(p.relative_to(root)) for p in (root/'20261029-19/assets').glob('*') if p.suffix in ['.js','.css'] and not p.name.startswith('__vite-browser-external-')]+['20261028-24/assets/manifold-BE4c7gO-.wasm'];out=[]
for path in paths:
 b=(root/path).read_bytes();actual=urllib.request.urlopen(base+path,timeout=60).read();assert actual==b,path;out.append({'path':path,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'byteMatch':True})
Path(os.environ.get('LEGACY_ASSET_REPORT','public-legacy-asset-validation.json')).write_text(json.dumps(out,indent=2));print('PASS',len(out),'affected legacy exact asset matches')
