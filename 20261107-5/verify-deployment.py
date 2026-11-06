from pathlib import Path
import urllib.request,json,hashlib,subprocess
root='https://xianghui.github.io/daily-app2/'
audit=json.loads(Path('asset-audit.json').read_text());checks=[]
for path,sha in audit['sha256'].items():
 url=root+'20261107-5/'+path.removeprefix('dist/')
 data=urllib.request.urlopen(url).read();assert hashlib.sha256(data).hexdigest()==sha,url
 checks.append({'url':url,'bytes':len(data),'sha256':sha})
url=root+'20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm';data=urllib.request.urlopen(url).read();assert hashlib.sha256(data).hexdigest()==audit['sharedWasmSha256'];checks.append({'url':url,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'shared':True})
html=urllib.request.urlopen(root).read().decode();assert html.count('folder:"20261107-5"')==1
pages=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest']));head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True).split()[0]
assert pages['commit']==head and pages['status']=='built',(pages['status'],pages['commit'],head)
Path('deployment-validation.json').write_text(json.dumps({'pages':{k:pages[k] for k in ['status','commit','error']},'ghPagesHead':head,'assets':checks,'galleryEntryCount':1},indent=2));print('Public Pages built commit matches branch; all app/runtime assets byte-identical; gallery entry once.')
