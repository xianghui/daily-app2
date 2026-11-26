from pathlib import Path
from urllib.request import Request,urlopen
import hashlib,json,re
root=Path(__file__).resolve().parent.parent;base='https://xianghui.github.io/daily-app2/';files=['index.html','20261127-5/index.html']
files += ['20261127-5/'+str(p.relative_to('dist')) for p in Path('dist/assets').rglob('*') if p.is_file()]
files += [x['path'] for x in json.load(open('runtime-provenance.json'))]
report=[]
for path in files:
 expected=(root/'deploy'/path).read_bytes()
 with urlopen(Request(base+path,headers={'Cache-Control':'no-cache'}),timeout=60) as r:actual=r.read();status=r.status
 assert status==200 and actual==expected,(path,status,len(expected),len(actual))
 report.append({'path':path,'status':status,'bytes':len(actual),'sha256':hashlib.sha256(actual).hexdigest()})
Path('public-assets.json').write_text(json.dumps(report,indent=2));print('PASS public gallery/app/runtime exact bytes',len(report))
