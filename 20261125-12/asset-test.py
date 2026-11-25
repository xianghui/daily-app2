from pathlib import Path
import json,hashlib,urllib.request,re,os
r=Path('/Volumes/ExternalHD/daily_app2');d=r/'deploy';p=r/'20261125-12';public=os.environ.get('PUBLIC')=='1';base='https://xianghui.github.io/daily-app2/' if public else 'http://127.0.0.1:7613/daily-app2/'
files=['index.html','20261125-12/index.html']+[str(x.relative_to(d)) for x in (d/'20261125-12').rglob('*') if x.is_file()]+['20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs','20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm','20261028-24/assets/manifold-BE4c7gO-.wasm']
for app in ['20261105-24','20261105-23']:
 files.append(app+'/index.html');files += [app+'/'+x for x in re.findall(r'(?:src|href)="/daily-app2/'+app+r'/([^"]+)"',(d/app/'index.html').read_text())]
checks=[]
for name in dict.fromkeys(files):
 b=(d/name.split('?',1)[0]).read_bytes();actual=urllib.request.urlopen(base+name,timeout=60).read();assert b==actual,name;checks.append({'path':name,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'exactMatch':True})
for f in (d/'20261125-12').rglob('*'):
 if f.suffix in ['.js','.css','.html']:
  s=f.read_text();assert not re.search(r'(?:sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{25,}|AIza[A-Za-z0-9_-]{30,}|-----BEGIN [A-Z ]*PRIVATE KEY)',s),str(f)
size=json.load(open(d/'runtime-deduplication.json'));assert size['afterBytes']<1000000000
for app in ['20261105-24','20261105-23']:assert any(x['folder']==app for x in size['geometryReuse'])
(p/('public-asset-validation.json' if public else 'assembled-asset-validation.json')).write_text(json.dumps({'matches':checks,'credentialPatternScanPassed':True,'collectionBytes':size['afterBytes'],'privacySourceReview':'No credentials/provider integrations/content upload functions; only static GET fetches and worker inference.'},indent=2));print('PASS exact assets',len(checks),'collection',size['afterBytes'])
