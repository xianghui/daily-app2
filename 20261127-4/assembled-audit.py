from pathlib import Path
import hashlib,json,re
root=Path.cwd().parent;app=Path.cwd().name;deploy=root/'deploy';source=(root/'index.html').read_text();folders=re.findall(r'folder:"([^"]+)"',source);assert len(folders)==904;assert (deploy/'index.html').read_bytes()==(root/'index.html').read_bytes();assert all((deploy/f/'index.html').is_file() for f in folders)
assets=[]
for p in Path('dist').rglob('*'):
 if p.is_file():
  target=deploy/app/p.relative_to('dist');assert target.read_bytes()==p.read_bytes();assets.append({'path':app+'/'+str(p.relative_to('dist')),'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
for x in json.load(open('runtime-provenance.json')):
 b=(deploy/x['path']).read_bytes();assert hashlib.sha256(b).hexdigest()==x['sha256'];assets.append(x)
size=sum(p.stat().st_size for p in deploy.rglob('*') if p.is_file());assert size<1000000000
Path('assembled-assets.json').write_text(json.dumps({'totalApps':len(folders),'bytes':size,'assets':assets},indent=2));print('PASS assembled',len(folders),'apps',size,'bytes')
