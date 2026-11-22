from pathlib import Path
import re,json,hashlib
p=Path.cwd();dep=p.parent/'deploy';patterns=[r'sk-[A-Za-z0-9_-]{24,}',r'gh[pousr]_[A-Za-z0-9]{25,}',r'AKIA[0-9A-Z]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----'];files=[f for f in(p/'dist').rglob('*')if f.suffix in ['.js','.html','.css']]
for f in files:
 for pat in patterns:assert not re.search(pat,f.read_text()),f
s=(p/'src/App.jsx').read_text();assert 'fetch(url)'in s;assert not re.search(r'api[_-]?key|[\"\']Authorization[\"\']\s*:|https://api\.',s,re.I)
for x in json.loads((p/'runtime-dependency-audit.json').read_text()):
 q=x['url'].removeprefix('/daily-app2/');assert hashlib.sha256((dep/q).read_bytes()).hexdigest()==x['sha256']
d=json.loads((dep/'runtime-deduplication.json').read_text());assert d['afterBytes']<1000000000
(p/'bundle-audit.json').write_text(json.dumps({'builtTextAssetsScanned':len(files),'credentialPatternsClean':True,'integrationReview':'Public worker/runtime/model GET downloads only; no provider/key/upload integration. Pattern scan is not exhaustive proof.','sharedRuntimeHashesVerified':True,'extraLegacySharing':'20261029-18 byte-identical geometry runtime; source builds unchanged','combinedBytes':d['afterBytes']},indent=2));print('PASS credential-pattern/integration/shared-runtime/size audit')
