from pathlib import Path
import hashlib,json,sys,urllib.request
root=Path('../deploy');base=sys.argv[1]if len(sys.argv)>1 else 'http://127.0.0.1:7797/daily-app2/';prefix=sys.argv[2]if len(sys.argv)>2 else 'assembled-';app='20261126-21'
paths=['index.html',app+'/index.html']+[app+'/'+p.relative_to(root/app).as_posix()for p in(root/app).rglob('*')if p.is_file() and p.name!='index.html']+['20261115-6/assets/ai.worker-lkOoPoq8.js','20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs','20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm']
report=[]
for path in paths:
 expected=(root/path).read_bytes();response=urllib.request.urlopen(urllib.request.Request(base+path,headers={'Cache-Control':'no-cache'}),timeout=60);actual=response.read();assert response.status==200;assert hashlib.sha256(actual).digest()==hashlib.sha256(expected).digest(),path
 report.append({'path':path,'bytes':len(actual),'sha256':hashlib.sha256(actual).hexdigest()})
Path(prefix+'assets.json').write_text(json.dumps(report,indent=2));print('PASS assets',len(report),base)
