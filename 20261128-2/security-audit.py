from pathlib import Path
import re,json,hashlib,urllib.request,sys
p=Path(__file__).resolve().parent;root=p.parent
patterns=[r'\bsk-[A-Za-z0-9_-]{20,}',r'\bgh[pousr]_[A-Za-z0-9]{25,}',r'AKIA[0-9A-Z]{16}',r'-----BEGIN (?:RSA |EC )?PRIVATE KEY-----']
files=[f for f in (p/'dist').rglob('*') if f.suffix in ['.js','.css','.html']]
for f in files:
 for pattern in patterns:assert not re.search(pattern,f.read_text()),str(f)
assets=json.loads((root/'20261128-1/runtime-provenance.json').read_text());local=[]
for asset in assets:
 f=root/'deploy'/asset['path'].removeprefix('/daily-app2/');b=f.read_bytes();assert len(b)==asset['bytes'];assert hashlib.sha256(b).hexdigest()==asset['sha256'];local.append(asset)
if '--public' in sys.argv:
 for asset in assets:
  b=urllib.request.urlopen('https://xianghui.github.io'+asset['path']).read();assert hashlib.sha256(b).hexdigest()==asset['sha256']
 for f in files:
  data=urllib.request.urlopen('https://xianghui.github.io/daily-app2/20261128-2/'+str(f.relative_to(p/'dist'))).read();assert hashlib.sha256(data).digest()==hashlib.sha256(f.read_bytes()).digest()
(p/'runtime-provenance.json').write_text(json.dumps(local,indent=2));(p/('public-security-validation.json' if '--public' in sys.argv else 'security-validation.json')).write_text(json.dumps({'builtTextAssetsScanned':len(files),'credentialPatternsFound':0,'runtimeHashesVerified':len(assets),'publicByteHashesMatched':'--public' in sys.argv},indent=2));print('PASS security/assets')
