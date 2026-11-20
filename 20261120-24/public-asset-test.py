from pathlib import Path
import hashlib,json,urllib.request
root=Path('..')/'deploy';files=['index.html']+['20261120-24/'+str(p.relative_to(root/'20261120-24')) for p in (root/'20261120-24').rglob('*') if p.is_file()]+[x['url'].removeprefix('/daily-app2/') for x in json.loads(Path('runtime-dependency-audit.json').read_text())['dependencies']];report=[]
for f in files:
 print('Checking',f,flush=True)
 b=urllib.request.urlopen('https://xianghui.github.io/daily-app2/'+f,timeout=60).read();assert b==(root/f).read_bytes(),f+' differs from assembled site';report.append({'path':f,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'publicMatchesCombinedBuild':True})
Path('public-asset-validation.json').write_text(json.dumps(report,indent=2));print('PASS',len(report),'public app/gallery/runtime byte matches')
