from pathlib import Path
import urllib.request,json,hashlib,re
root=Path('../deploy');folder='20261028-30';html=(root/folder/'index.html').read_text();main=re.search(r'src="/daily-app2/([^\"]+)"',html)[1];worker=next((root/folder/'assets').glob('model.worker-*.js'));paths=[folder+'/index.html',main,folder+'/assets/'+worker.name,'20261028-24/assets/manifold-BE4c7gO-.wasm'];out=[]
for p in paths:
 actual=urllib.request.urlopen('https://xianghui.github.io/daily-app2/'+p,timeout=60).read();expected=(root/p.split('?')[0]).read_bytes();assert actual==expected,p;out.append({'path':p,'bytes':len(actual),'sha256':hashlib.sha256(actual).hexdigest(),'byteMatch':True})
Path('legacy-public-assets.json').write_text(json.dumps(out,indent=2));print('PASS four exact legacy entry/worker/shared-runtime public asset byte matches')
