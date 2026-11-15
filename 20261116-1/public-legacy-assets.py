from pathlib import Path
import urllib.request,hashlib,json
r=Path.cwd().parent/'deploy';base='https://xianghui.github.io/daily-app2/';out=[]
for p in [r/'20261030-23/index.html',*list((r/'20261030-23/assets').glob('*.js')),r/'20261028-24/assets/manifold-BE4c7gO-.wasm']:
 path=str(p.relative_to(r));b=urllib.request.urlopen(base+path,timeout=90).read();assert b==p.read_bytes(),path;out.append({'path':path,'sha256':hashlib.sha256(b).hexdigest()})
Path('public-legacy-assets.json').write_text(json.dumps(out,indent=2));print('PASS affected public legacy shell/worker/shared WASM hashes')
