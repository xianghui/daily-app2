from pathlib import Path
import hashlib,re,json,urllib.request,os
files=list(Path('dist').rglob('*'));report=[]
for p in files:
 if not p.is_file():continue
 data=p.read_bytes()
 if p.suffix in ['.js','.html','.mjs']:
  assert not re.search(rb'sk-(?:proj-)?[a-zA-Z0-9_-]{24,}|ghp_[a-zA-Z0-9]{30,}|AKIA[0-9A-Z]{16}',data),p
 report.append({'path':str(p),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
p=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm');data=p.read_bytes();assert hashlib.sha256(data).hexdigest()=='49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082'
report.append({'path':str(p),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
if os.getenv('PUBLIC'):
 for item in report:
  url='https://xianghui.github.io/daily-app2/'+('20261107-2/'+item['path'].split('/dist/')[1] if item['path'].startswith('../') else '20261108-7/'+item['path'].removeprefix('dist/'))
  with urllib.request.urlopen(url,timeout=90) as response:body=response.read()
  assert hashlib.sha256(body).hexdigest()==item['sha256'],url
  item['publicUrl']=url;item['publicHashMatches']=True
Path('deployment-validation.json' if os.getenv('PUBLIC') else 'asset-validation.json').write_text(json.dumps({'files':report,'credentialPatternScan':'No common credential patterns found; not exhaustive proof'},indent=2));print('PASS assets',len(report))
