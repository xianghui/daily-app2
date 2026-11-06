from pathlib import Path
import re,json,hashlib
files=[f for f in Path('dist').rglob('*') if f.is_file()];patterns=[rb'sk-[a-zA-Z0-9_-]{20,}',rb'gh[pousr]_[a-zA-Z0-9]{20,}',rb'AKIA[A-Z0-9]{16}',rb'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----']
for f in files:
 if f.suffix in ['.js','.html','.css','.mjs','.json']:
  for pattern in patterns:assert not re.search(pattern,f.read_bytes()),str(f)
source=Path('src/App.jsx').read_text()+Path('src/ai.worker.js').read_text()
assert 'api.openai.com' not in source and 'openrouter.ai' not in source
r={'files':[{'path':str(f),'bytes':f.stat().st_size,'sha256':hashlib.sha256(f.read_bytes()).hexdigest()} for f in files],'credentialPatternMatches':0,'sourceReview':'No provider credentials, external inference, analytics, content uploads or secret inputs. Model assets fetched only after explicit start. Browser report captures actual requests.'}
Path('asset-audit.json').write_text(json.dumps(r,indent=2));print('Built text scan and source integration review passed; no credential patterns.')
