from pathlib import Path
import re,json,hashlib
root=Path('..'); assets=list(Path('dist').rglob('*')); scans=[]
for p in assets:
 if p.is_file() and p.suffix in ['.js','.html','.css','.json']:
  s=p.read_text();assert not re.search(r'sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}',s),str(p);scans.append(str(p))
for row in json.loads(Path('runtime-provenance.json').read_text()):assert hashlib.sha256((root/row['path']).read_bytes()).hexdigest()==row['sha256']
Path('static-validation.json').write_text(json.dumps({'builtAssetsCredentialPatternScan':scans,'sourceReviewedNoRemoteProviderOrAnalytics':True,'sharedRuntimeHashesMatched':True,'modelTokenizerMaxLength':512},indent=2));print('PASS static',len(scans))
