from pathlib import Path
import hashlib,json,urllib.request,os,re
root=Path('..');base=os.environ.get('ASSET_BASE','https://xianghui.github.io/daily-app2/');paths=['index.html']+['20261121-14/'+str(p.relative_to('dist')) for p in Path('dist').rglob('*') if p.is_file()]+[x['url'].removeprefix('/daily-app2/') for x in json.loads(Path('runtime-dependency-audit.json').read_text())['dependencies']];out=[]
for rel in paths:
 expected=(root/'deploy'/rel).read_bytes();actual=urllib.request.urlopen(base+rel,timeout=60).read();assert actual==expected,rel;out.append({'path':rel,'bytes':len(actual),'sha256':hashlib.sha256(actual).hexdigest(),'byteMatch':True})
Path(os.environ.get('ASSET_REPORT','public-asset-validation.json')).write_text(json.dumps(out,indent=2));print('PASS',len(out),'exact gallery/app/runtime byte matches')
