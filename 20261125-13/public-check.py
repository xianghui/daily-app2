from pathlib import Path
import urllib.request,hashlib,json
root=Path('..');base='https://xianghui.github.io/daily-app2/';items=['index.html']+['20261125-13/'+str(p.relative_to(root/'deploy/20261125-13')) for p in (root/'deploy/20261125-13').rglob('*') if p.is_file()]+[x['path'].replace('/dist/','/') for x in json.load(open('runtime-provenance.json'))];out=[]
for path in items:
 remote=urllib.request.urlopen(base+path,timeout=90).read();local=(root/'deploy'/path).read_bytes();assert remote==local,path;out.append({'path':path,'bytes':len(remote),'sha256':hashlib.sha256(remote).hexdigest()})
Path('public-byte-validation.json').write_text(json.dumps(out,indent=2));print('PASS public bytes',len(items))
