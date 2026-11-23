from pathlib import Path
import os,json,hashlib,urllib.request
root=Path.cwd().parent;base=os.environ.get('ASSET_BASE','http://127.0.0.1:7541/daily-app2/');prefix=os.environ.get('PREFIX','assembled-');folder='20261124-8'
paths=[str(f.relative_to(root/'deploy')) for f in (root/'deploy'/folder).rglob('*') if f.is_file()]
paths += ['index.html']
paths += [r['path'].replace('/dist','') for r in json.loads(Path('runtime-provenance.json').read_text())]
rows=[]
for path in paths:
 expected=(root/'deploy'/path).read_bytes()
 with urllib.request.urlopen(base+path,timeout=60) as response:actual=response.read();assert response.status==200
 assert expected==actual,path
 rows.append({'path':path,'bytes':len(actual),'sha256':hashlib.sha256(actual).hexdigest(),'matchesAssembledBundle':True})
report=json.loads((root/'deploy/runtime-deduplication.json').read_text());assert report['afterBytes']<1000000000
Path(prefix+'asset-validation.json').write_text(json.dumps({'assets':rows,'combinedSiteBytes':report['afterBytes'],'sizeGuardUnchanged':True},indent=2));print('PASS asset bytes',len(rows))
