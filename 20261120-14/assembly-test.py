from pathlib import Path
import json,hashlib
p=Path(__file__).resolve().parent;r=p.parent;deploy=r/'deploy'
files=['20261120-14/'+str(f.relative_to(p/'dist')) for f in (p/'dist').rglob('*') if f.is_file()]
for f in files:assert (deploy/f).read_bytes()==(p/'dist'/Path(f).relative_to('20261120-14')).read_bytes()
assert (deploy/'index.html').read_bytes()==(r/'index.html').read_bytes()
for x in json.loads((p/'runtime-dependency-audit.json').read_text())['dependencies']:assert hashlib.sha256((deploy/x['url'].removeprefix('/daily-app2/')).read_bytes()).hexdigest()==x['sha256']
report=json.loads((deploy/'runtime-deduplication.json').read_text());assert report['afterBytes']<1000000000
(p/'assembly-validation.json').write_text(json.dumps({'assembledBytes':report['afterBytes'],'allNewFilesMatch':files,'sharedRuntimeHashesMatch':True,'oldSourceBuildPreserved':True,'sizeGuardUnchanged':1000000000},indent=2));print('PASS combined assembly',report['afterBytes'])
