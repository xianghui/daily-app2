from pathlib import Path
import hashlib,json,os,urllib.request
p=Path(__file__).resolve().parent;r=p.parent/'deploy';report=[]
for path in json.loads((p/'legacy-asset-paths.json').read_text()):
 data=(r/path).read_bytes();sha=hashlib.sha256(data).hexdigest();url=os.environ.get('ASSET_BASE','http://127.0.0.1:6996/daily-app2/')+path+'?audit='+sha[:12];remote=urllib.request.urlopen(url,timeout=45).read();assert data==remote,path;report.append({'path':path,'bytes':len(data),'sha256':sha,'servedByteMatch':True})
(p/os.environ.get('LEGACY_ASSET_REPORT','legacy-asset-audit.json')).write_text(json.dumps(report,indent=2));print('PASS',len(report),'legacy/shared geometry asset byte matches')
