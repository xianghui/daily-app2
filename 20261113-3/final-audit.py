from pathlib import Path
import json,hashlib,re
p=Path('dist');app=Path('..')/'deploy/20261113-3';paths=[]
for f in p.rglob('*'):
 if f.is_file():
  target=app/f.relative_to(p);assert target.read_bytes()==f.read_bytes();paths.append(str(f.relative_to(p)))
# Runtime only downloads weights; no shared provider secrets/integrations.
source='\n'.join(f.read_text() for f in Path('src').glob('*') if f.suffix in ['.js','.jsx'])
assert 'api_key' not in source.lower();assert 'localStorage' not in source;assert 'POST' not in source
Path('final-asset-audit.json').write_text(json.dumps({'assembledAssetsMatchDist':paths,'noProviderKeysOrUserContentPersistenceInSource':True},indent=2));print('PASS assembled runtime/code asset equivalence and integration review')
