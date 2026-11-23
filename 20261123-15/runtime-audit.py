import json,hashlib,pathlib
p=pathlib.Path('.').resolve();root=p.parent
for x in json.load(open('runtime-dependency-audit.json')):
 relative=x['path'].removeprefix('/daily-app2/');folder,*rest=relative.split('/');suffix='/'.join(rest);candidates=[root/relative,root/folder/'dist'/suffix,root/folder/'public'/suffix,root/'deploy'/relative];f=next(f for f in candidates if f.is_file());assert hashlib.sha256(f.read_bytes()).hexdigest()==x['sha256']
print('PASS immutable runtime dependency source hashes')
