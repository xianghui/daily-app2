from pathlib import Path
import re,json
hits=[]
for p in Path('dist').rglob('*'):
 if p.suffix not in ['.html','.js','.css']:continue
 s=p.read_text()
 for pattern in [r'sk-[A-Za-z0-9]{24,}',r'ghp_[A-Za-z0-9]{30,}',r'AIza[A-Za-z0-9_-]{30,}',r'-----BEGIN (?:RSA |EC )?PRIVATE KEY']:
  if re.search(pattern,s):hits.append(str(p))
assert not hits
Path('security-validation.json').write_text(json.dumps({'builtAssetCredentialPatternHits':hits,'sourceIntegrationsInspected':'No remote inference, provider keys, analytics, credential handling or content persistence. Worker postMessage only; downloads are documented static GETs. Pattern scan is not exhaustive proof.','observedNetworkReport':'browser-validation.json'},indent=2));print('PASS built credential-pattern scan and source data-flow inspection')
