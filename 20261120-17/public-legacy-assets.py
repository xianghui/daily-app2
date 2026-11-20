from pathlib import Path
import json,hashlib,urllib.request,re
root=Path(__file__).resolve().parent.parent;deploy=root/'deploy';name='20261028-6';h=(deploy/name/'index.html').read_text();main=re.search(r'src="([^"]+\.js[^\"]*)"',h)[1];mainpath=main.removeprefix('/daily-app2/').split('?')[0];s=(deploy/mainpath).read_text();worker=re.search(r'model\.worker-[A-Za-z0-9_-]+\.js',s)[0]
files=[name+'/index.html',mainpath,name+'/assets/'+worker,'20261028-24/assets/manifold-BE4c7gO-.wasm'];report=[]
for f in files:
 b=urllib.request.urlopen('https://xianghui.github.io/daily-app2/'+f,timeout=60).read();assert b==(deploy/f).read_bytes();report.append({'path':f,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'publicMatch':True})
Path('public-legacy-asset-validation.json').write_text(json.dumps(report,indent=2));print('PASS four affected legacy runtime/shell byte matches')
