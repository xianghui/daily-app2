from pathlib import Path
import hashlib,json,urllib.request,os
root=Path(__file__).resolve().parent.parent
paths=['20261029-26/index.html','20261028-24/assets/manifold-BE4c7gO-.wasm']+[str(p.relative_to(root/'deploy'))for p in(root/'deploy/20261029-26/assets').glob('*.js')]
report=[]
for name in paths:
 p=root/'deploy'/name;local=p.read_bytes();row={'path':'/daily-app2/'+name,'sha256':hashlib.sha256(local).hexdigest(),'bytes':len(local)}
 if os.getenv('PUBLIC'):
  data=urllib.request.urlopen('https://xianghui.github.io'+row['path'],timeout=90).read();assert data==local;row['publicByteMatch']=True
 report.append(row)
Path(('public-'if os.getenv('PUBLIC')else'')+'legacy-asset-audit.json').write_text(json.dumps(report,indent=2));print('PASS legacy asset bytes:',len(report))
