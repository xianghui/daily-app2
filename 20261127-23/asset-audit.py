import pathlib,hashlib,json,re
root=pathlib.Path('/Volumes/ExternalHD/daily_app2');app=root/'20261127-23';files=[]
for p in (app/'dist').rglob('*'):
 if not p.is_file():continue
 data=p.read_bytes()
 if p.suffix in ['.js','.css','.html','.json','.mjs']:
  text=data.decode();assert not re.search(r'(?:sk-[A-Za-z0-9_-]{20,}|hf_[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|AKIA[A-Z0-9]{16})',text),p
 deployed=root/'deploy'/'20261127-23'/p.relative_to(app/'dist');assert data==deployed.read_bytes()
 files.append(dict(path=str(p.relative_to(app/'dist')),bytes=len(data),sha256=hashlib.sha256(data).hexdigest()))
for r in json.load(open('runtime-provenance.json')):
 p=root/'deploy'/r['path'].removeprefix('/daily-app2/');data=p.read_bytes();assert len(data)==r['bytes'];assert hashlib.sha256(data).hexdigest()==r['sha256']
size=sum(p.stat().st_size for p in (root/'deploy').rglob('*') if p.is_file());assert size<950000000
json.dump(dict(credentialPatternScan='no matches; code inspected: no credential/provider integrations',bundledFiles=files,sharedRuntimeHashesVerified=True,assembledBytes=size),open('asset-audit.json','w'),indent=2);print('PASS asset audit',size)
