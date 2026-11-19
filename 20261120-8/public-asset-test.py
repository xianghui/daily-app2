from pathlib import Path
import os
os.chdir(Path(__file__).resolve().parent)
import hashlib,json,urllib.request
base='https://xianghui.github.io/daily-app2/'
root=Path('..')/'deploy';files=['index.html']+['20261120-8/'+str(p.relative_to(root/'20261120-8')) for p in (root/'20261120-8').rglob('*') if p.is_file()]+[x['url'].removeprefix('/daily-app2/') for x in json.loads(Path('runtime-dependency-audit.json').read_text())['dependencies']]
files+=['20261028-11/index.html','20261028-11/assets/index-DJignjj1.js','20261028-11/assets/model.worker-oC2r0LFp.js','20261028-24/assets/manifold-BE4c7gO-.wasm']
report=[]
for f in files:
 b=urllib.request.urlopen(base+f,timeout=60).read();local=(root/f).read_bytes();assert b==local,f+' public bytes differ';report.append({'path':f,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'publicMatchesCombinedBuild':True})
Path('public-asset-validation.json').write_text(json.dumps(report,indent=2));print('PASS public gallery/app/runtime/worker/WASM byte matches:',len(report))
