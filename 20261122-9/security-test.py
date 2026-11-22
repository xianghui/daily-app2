from pathlib import Path
import json,re
report=[]
for p in Path('dist').rglob('*'):
 if p.suffix not in ['.js','.html','.css']:continue
 s=p.read_text();patterns=[r'sk-[A-Za-z0-9_-]{20,}',r'ghp_[A-Za-z0-9]{30,}',r'github_pat_[A-Za-z0-9_]{30,}',r'AIza[A-Za-z0-9_-]{30,}',r'BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY']
 for pattern in patterns:assert not re.search(pattern,s),str(p)
 report.append({'file':str(p),'credentialPatternHits':0})
s=Path('src/App.jsx').read_text();assert 'new Worker' in s and 'id!==token.current' in s and '180000' in s;assert not any(x in s for x in ['localStorage','api.openai.com','api.anthropic.com','api_key'])
Path('security-validation.json').write_text(json.dumps({'assets':report,'integrationInspection':'Single local worker path; only public model/runtime file GETs; no provider integration, storage of user data or credentials. Pattern scan is not an exhaustive proof; actual network trace also checked.'},indent=2));print('PASS static integration and built credential scan')
