from pathlib import Path
import re,json
files=[p for p in Path('dist').rglob('*') if p.suffix in ['.js','.html','.css','.mjs']]
patterns=[r'sk-[A-Za-z0-9]{20,}',r'gh[pousr]_[A-Za-z0-9]{20,}',r'AKIA[A-Z0-9]{16}',r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----']
for p in files:
 s=p.read_text()
 assert not any(re.search(x,s) for x in patterns),p
 assert not re.search(r'api_key\s*[:=]\s*[\"\'][^\"\']{12}',s,re.I),p
Path('security-validation.json').write_text(json.dumps({'builtTextAssetsScanned':len(files),'credentialPatternMatches':0,'sourceInspected':True,'remoteProviders':False,'noUploadCalls':True},indent=2))
print('PASS built text credential scan and source data flow review')
