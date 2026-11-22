from pathlib import Path
import re,json,hashlib
p=Path.cwd();dep=p.parent/'deploy';patterns=[r'sk-[A-Za-z0-9_-]{24,}',r'gh[pousr]_[A-Za-z0-9]{25,}',r'AKIA[0-9A-Z]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----'];files=[f for f in(p/'dist').rglob('*')if f.suffix in ['.js','.html','.css']]
for f in files:
 for pat in patterns:assert not re.search(pat,f.read_text()),f
for x in json.loads((p/'runtime-dependency-audit.json').read_text()):assert hashlib.sha256((dep/x['url'].removeprefix('/daily-app2/')).read_bytes()).hexdigest()==x['sha256']
s=(p/'src/App.jsx').read_text();assert 'fetch(url)'in s;assert not re.search(r'api[_-]?key|[\"\']Authorization[\"\']\s*:|https://api\.',s,re.I)
d=json.loads((dep/'runtime-deduplication.json').read_text());assert any(x['folder']=='20261029-15'for x in d['geometryReuse']);assert (p.parent/'20261029-15/dist/assets/manifold-BE4c7gO-.wasm').read_bytes()==(dep/'20261028-24/assets/manifold-BE4c7gO-.wasm').read_bytes();assert not (dep/'20261029-15/assets/manifold-BE4c7gO-.wasm').exists()
(p/'bundle-audit.json').write_text(json.dumps({'builtTextAssetsScanned':len(files),'credentialPatternsClean':True,'integrationReview':'Only public worker/runtime/model GET downloads, no provider/key or upload fields; pattern scan not exhaustive.','sharedRuntimeHashesVerified':True,'legacySourceRuntimeByteIdentical':True,'legacySourceBuildPreserved':True,'newGeometryReusePresent':True,'combinedBytes':d['afterBytes']},indent=2));print('PASS bundle/shared runtime/legacy reuse audit')
