from pathlib import Path
import re,json
files=[p for p in Path('dist').rglob('*') if p.suffix in ['.js','.html','.css']];bad=[]
for p in files:
 s=p.read_text()
 for pattern in [r'sk-[A-Za-z0-9_-]{20,}',r'gh[pousr]_[A-Za-z0-9]{20,}',r'AIza[0-9A-Za-z_-]{30,}',r'AKIA[0-9A-Z]{16}']:
  if re.search(pattern,s):bad.append(str(p))
assert not bad
s=Path('src/App.jsx').read_text();assert 'fetch(url)' in s and not re.search(r'Authorization|api_key|apiKey',s)
Path('static-audit.json').write_text(json.dumps({'builtTextAssetsScanned':len(files),'credentialPatternsFound':bad,'onlyFetchWorkerCode':True,'noOptionalRemoteProvider':True},indent=2));print('PASS static audit')
