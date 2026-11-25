import pathlib,json,hashlib,urllib.request,re,os
root=pathlib.Path('..');base=os.getenv('ASSET_BASE');report=[]
for x in json.load(open('runtime-provenance.json')):
 p=x['path'];data=urllib.request.urlopen(base+p.replace('/dist/','/')).read() if base else (root/p).read_bytes();assert len(data)==x['bytes'];assert hashlib.sha256(data).hexdigest()==x['sha256'];report.append({'path':p,'bytes':len(data),'sha256':x['sha256']})
for p in pathlib.Path('dist').rglob('*'):
 if p.suffix in ['.js','.css','.html']:
  s=p.read_text();assert not re.search(r'sk-[a-zA-Z0-9]{20,}|ghp_[a-zA-Z0-9]{20,}|AIza[\w-]{30,}',s)
json.dump({'assets':report,'builtCredentialPatternScan':'passed; not an exhaustive proof'},open(os.getenv('PREFIX','')+'asset-validation.json','w'),indent=2);print('PASS assets')
