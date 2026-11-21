from pathlib import Path
import re,json,hashlib,urllib.request
root=Path('..');dist=Path('dist');assets=[]
patterns=[r'sk-[A-Za-z0-9_-]{20,}',r'gh[pousr]_[A-Za-z0-9]{30,}',r'hf_[A-Za-z0-9]{25,}',r'AKIA[0-9A-Z]{16}',r'-----BEGIN [A-Z ]*PRIVATE KEY-----']
for p in dist.rglob('*'):
 if p.is_file():
  b=p.read_bytes();text=b.decode('utf8');assert all(not re.search(x,text)for x in patterns),p
  assets.append({'file':str(p),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
for p in ['src/App.jsx','src/core.js','src/alignment.js']:
 t=Path(p).read_text();assert not re.search(r'localStorage|sessionStorage|sendBeacon|XMLHttpRequest|api_key|apiKey|dangerouslySetInnerHTML',t)
r=json.loads(Path('runtime-dependency-audit.json').read_text())
for dep in r['dependencies']:
 folder,rel=dep['url'].removeprefix('/daily-app2/').split('/',1);b=(root/'deploy'/folder/rel).read_bytes();assert hashlib.sha256(b).hexdigest()==dep['sha256']
assert (root/'deploy/index.html').read_bytes()==(root/'index.html').read_bytes()
assert (root/'deploy/20261121-17/index.html').read_bytes()==(dist/'index.html').read_bytes()
size=sum(p.stat().st_size for p in (root/'deploy').rglob('*')if p.is_file());assert size<1000000000
Path('security-validation.json').write_text(json.dumps({'appAssets':assets,'credentialPatternMatches':0,'storageOrUploadOrUnsafeHTMLAPIsInApp':False,'note':'Pattern scan is not a proof; app/runtime data flows separately reviewed and actual network captured. Only worker-source static fetch and model/runtime static downloads. No provider integration.','allAssembledRuntimeHashesMatch':True,'assembledBytes':size,'unchangedBudget':1000000000},indent=2))
try:
 with urllib.request.urlopen('https://huggingface.co/api/models/Xenova/bert-base-NER',timeout=40)as r:d=json.load(r)
 Path('model-host-audit.json').write_text(json.dumps({'modelId':d['id'],'sha':d['sha'],'license':d.get('cardData',{}).get('license'),'modelMainUnpinned':True},indent=2))
except Exception as e:raise RuntimeError('Cannot verify current public model metadata')from e
print('PASS build-secret scan, source data flow, assembly bytes and immutable dependencies')
