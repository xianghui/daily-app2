from pathlib import Path
import urllib.request,json,hashlib,subprocess
root='https://xianghui.github.io/daily-app2/'
audit=json.loads(Path('asset-audit.json').read_text())
checks=[]
for a in audit['assets']:
 url=root+'20261107-24/'+a['path']
 data=urllib.request.urlopen(url).read()
 assert hashlib.sha256(data).hexdigest()==a['sha256'],url
 checks.append({'url':url,'bytes':len(data),'sha256':a['sha256']})
url=root+'20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'
data=urllib.request.urlopen(url).read();assert hashlib.sha256(data).hexdigest()=='49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082'
checks.append({'url':url,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'shared':True})
html=urllib.request.urlopen(root).read().decode();assert html.count('folder:"20261107-24"')==1
pages=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest']))
head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True).split()[0]
assert pages['commit']==head and pages['status']=='built',(pages['status'],pages['commit'],head)
Path('deployment-validation.json').write_text(json.dumps({'pages':{k:pages[k] for k in ['status','commit','error']},'ghPagesHead':head,'assets':checks,'galleryEntryCount':1},indent=2))
print('Public Pages built commit matches branch; all app/runtime assets byte-identical; gallery entry once.')
