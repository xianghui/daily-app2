import urllib.request,hashlib,json,re
from pathlib import Path
root=Path(__file__).resolve().parent;deploy=root.parent/'deploy';base='https://xianghui.github.io/daily-app2/'
paths=['index.html','20261128-4/index.html']
html=(deploy/'20261128-4/index.html').read_text()
paths += [p.removeprefix('/daily-app2/') for p in re.findall(r'(?:src|href)="(/daily-app2/[^"]+)"',html)]
paths += [p['path'].removeprefix('/daily-app2/') for p in json.loads((root/'runtime-provenance.json').read_text())]
report=[]
for path in paths:
 remote=urllib.request.urlopen(base+path,timeout=60).read();local=(deploy/path).read_bytes();assert remote==local,path
 report.append({'path':path,'bytes':len(remote),'sha256':hashlib.sha256(remote).hexdigest()})
(root/'public-assets-validation.json').write_text(json.dumps(report,indent=2));print('PASS public exact asset bytes:',len(report))
