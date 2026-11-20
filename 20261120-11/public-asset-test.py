from pathlib import Path
import json,hashlib,urllib.request
p=Path(__file__).resolve().parent;root=p.parent/'deploy';files=['index.html']+['20261120-11/'+str(f.relative_to(root/'20261120-11'))for f in(root/'20261120-11').rglob('*')if f.is_file()]
files+=['20261028-9/index.html','20261028-24/assets/manifold-BE4c7gO-.wasm']+[str(f.relative_to(root))for f in(root/'20261028-9/assets').glob('*.js')if f.name.startswith(('index-','model.worker-'))]
report=[]
for f in files:
 b=urllib.request.urlopen('https://xianghui.github.io/daily-app2/'+f,timeout=60).read();assert b==(root/f).read_bytes(),f;report.append({'path':f,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'publicMatchesCombinedBuild':True})
(p/'public-asset-validation.json').write_text(json.dumps(report,indent=2));print('PASS public byte matches',len(report))
