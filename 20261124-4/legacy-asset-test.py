from pathlib import Path
import json,hashlib,urllib.request,os
root=Path('..');base=os.getenv('ASSET_BASE','http://127.0.0.1:7521/daily-app2/');prefix=os.getenv('PREFIX','legacy-local-');folder='20261029-31';paths=[str(p.relative_to(root/'deploy')) for p in (root/'deploy'/folder).rglob('*') if p.is_file() and p.suffix in ['.js','.html','.wasm','.mjs']];paths+=['20261028-24/assets/manifold-BE4c7gO-.wasm'];rows=[]
for path in paths:
 expected=(root/'deploy'/path).read_bytes()
 with urllib.request.urlopen(base+path,timeout=60) as r:actual=r.read();assert r.status==200
 assert expected==actual,path
 rows.append({'path':path,'bytes':len(actual),'sha256':hashlib.sha256(actual).hexdigest()})
Path(prefix+'asset-validation.json').write_text(json.dumps({'assets':rows,'allMatchAssembled':True},indent=2));print('PASS legacy asset bytes',len(rows))
