import json,subprocess,hashlib,urllib.request
from pathlib import Path
base='https://xianghui.github.io/daily-app2/20261107-2/'
head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True).split()[0]
pages=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest'],text=True))
assert pages['status']=='built' and pages['commit']==head,(pages['status'],pages['commit'],head)
checks=[]
for p in Path('dist').rglob('*'):
 if not p.is_file():continue
 rel=str(p.relative_to('dist'))
 req=urllib.request.Request(base+rel,headers={'Cache-Control':'no-cache'})
 with urllib.request.urlopen(req,timeout=90) as response:b=response.read()
 assert b==p.read_bytes(),rel+' public/local mismatch'
 checks.append({'path':rel,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
with urllib.request.urlopen('https://xianghui.github.io/daily-app2/',timeout=90) as response:html=response.read().decode()
assert html.count('folder:"20261107-2"')==1
Path('deployment-validation.json').write_text(json.dumps({'pages':{k:pages[k] for k in ['status','commit','error']},'ghPagesHead':head,'assets':checks,'galleryEntryCount':1},indent=2))
print('Public Pages head matches built deployment. All public bundle/worker/WASM hashes match local build.')
