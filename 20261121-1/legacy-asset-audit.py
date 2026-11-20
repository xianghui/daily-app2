from pathlib import Path
import hashlib,json,urllib.request,os
root=Path('..');folder='20261028-2';source=root/folder/'dist';deployed=root/'deploy'/folder
files=[p for p in deployed.rglob('*') if p.is_file() and (p.suffix in ['.js','.html','.wasm'])]
report=[]
for p in files:
 if p.suffix=='.js' and not ('model.worker' in p.name or p.name.startswith('index-')):continue
 rel=str(p.relative_to(root/'deploy'));b=p.read_bytes()
 if os.environ.get('PUBLIC_AUDIT'):
  pub=urllib.request.urlopen('https://xianghui.github.io/daily-app2/'+rel,timeout=60).read();assert pub==b,rel
 report.append({'path':rel,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'publicMatch':bool(os.environ.get('PUBLIC_AUDIT'))})
shared='20261028-24/assets/manifold-BE4c7gO-.wasm';b=(root/'deploy'/shared).read_bytes();assert b==(source/'assets/manifold-BE4c7gO-.wasm').read_bytes()
if os.environ.get('PUBLIC_AUDIT'):assert urllib.request.urlopen('https://xianghui.github.io/daily-app2/'+shared,timeout=60).read()==b
assert not (deployed/'assets/manifold-BE4c7gO-.wasm').exists()
report.append({'shared':shared,'bytes':len(b),'identicalOriginalBinary':True,'sha256':hashlib.sha256(b).hexdigest()})
Path('public-legacy-asset-validation.json' if os.environ.get('PUBLIC_AUDIT') else 'legacy-asset-validation.json').write_text(json.dumps(report,indent=2));print('PASS legacy asset identity and source-preserved shared binary')
