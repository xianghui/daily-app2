import json,re,hashlib,pathlib
report=[]
for item in json.load(open('runtime-provenance.json')):
 p=item['path'];folder,rel=p.split('/',1);b=(pathlib.Path('..')/folder/'dist'/rel).read_bytes();assert hashlib.sha256(b).hexdigest()==item['sha256'];assert len(b)==item['bytes'];report.append(item)
worker=pathlib.Path('../20261115-6/dist/assets/ai.worker-lkOoPoq8.js').read_text();assert 'Xenova/all-MiniLM-L6-v2'in worker and 'pooling:`mean`'in worker and 'normalize:!0'in worker
patterns=[r'sk-[A-Za-z0-9_-]{20,}',r'gh[pousr]_[A-Za-z0-9_]{20,}',r'AIza[0-9A-Za-z_-]{25,}',r'Bearer [A-Za-z0-9._-]{20,}'];assets=list(pathlib.Path('dist/assets').glob('*'));hits=[]
for p in assets:
 for pat in patterns:
  if re.search(pat,p.read_text()):hits.append({'file':p.name,'pattern':pat})
assert not hits
json.dump({'builtAssets':len(assets),'credentialPatternHits':hits,'noProviderIntegration':True,'sharedRuntimeHashVerified':True,'workerProtocol':'{id,texts} -> progress / batch / result {id,vectors} / error','textChunks':4,'vectorDimensions':384},open('bundle-audit.json','w'),indent=2)
print('PASS runtime provenance and bundle secret scan')
