from pathlib import Path
import hashlib,json,urllib.request,re,sys
base=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:7497'
prefix=sys.argv[2] if len(sys.argv)>2 else 'assembled-'
root=Path('..')/'deploy';app='20261123-20';paths=['index.html',app+'/index.html']+[app+'/assets/'+p.name for p in (root/app/'assets').iterdir()]+['20261115-6/assets/ai.worker-lkOoPoq8.js','20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs','20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm']
r=[]
for p in paths:
 local=(root/p).read_bytes();remote=urllib.request.urlopen(base+'/daily-app2/'+p,timeout=60).read();assert local==remote,p;r.append({'path':p,'bytes':len(local),'sha256':hashlib.sha256(local).hexdigest()})
for p in (root/app).rglob('*'):
 if p.suffix in ['.js','.html','.css']:
  s=p.read_text();assert not re.search(r'sk-[a-zA-Z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9]{30,}|AIza[\w-]{30,}',s),p
Path(prefix+'asset-audit.json').write_text(json.dumps({'byteMatches':r,'credentialPatternScan':'no matches; not exhaustive secret detection'},indent=2));print('PASS byte audit',len(r))
