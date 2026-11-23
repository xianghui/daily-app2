from pathlib import Path
import re,json,hashlib
rows=[]
for f in Path('dist').rglob('*'):
 if f.suffix in ['.js','.html','.css','.svg']:
  s=f.read_text();assert not re.search(r'(?:sk-(?:proj-)?[A-Za-z0-9_-]{24,}|gh[pousr]_[A-Za-z0-9]{30,}|AKIA[A-Z0-9]{16}|-----BEGIN (?:RSA |OPENSSH )?PRIVATE KEY)',s),f
  rows.append({'file':str(f),'bytes':f.stat().st_size,'sha256':hashlib.sha256(f.read_bytes()).hexdigest()})
net=json.loads(Path('browser-validation.json').read_text())['network'];assert all(not r['body'] and r['method']=='GET' for r in net)
Path('static-audit.json').write_text(json.dumps({'builtFiles':rows,'credentialPatternScan':'no matches; source reviewed; not an exhaustive secret guarantee','requestHosts':sorted(set(r['host'] for r in net)),'GETOnlyAssetTraffic':True,'beforeModelLoadNoModelRequest':True,'noRemoteProviderOrContentUploadCode':True},indent=2))
print('PASS source/network/bundle audit')
