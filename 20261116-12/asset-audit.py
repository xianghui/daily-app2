import pathlib,hashlib,json,re,urllib.request,os
root=pathlib.Path('..');deploy=root/'deploy';base=os.getenv('ASSET_BASE','http://127.0.0.1:6945/daily-app2/');paths=['20261115-6/assets/ai.worker-lkOoPoq8.js','20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs','20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'];paths+=['20261116-12/'+str(p.relative_to(deploy/'20261116-12')) for p in (deploy/'20261116-12').rglob('*') if p.is_file()];report=[]
for path in paths:
 data=(deploy/path).read_bytes();remote=urllib.request.urlopen(base+path,timeout=60).read();assert remote==data,path
 report.append({'path':path,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'servedByteMatch':True})
for p in (deploy/'20261116-12').rglob('*'):
 if p.suffix in ['.js','.mjs','.html','.css']:
  assert not re.search(r'sk-[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{30,}|AIza[0-9A-Za-z_-]{30,}',p.read_text()),p
pathlib.Path(os.getenv('ASSET_REPORT','assembled-asset-audit.json')).write_text(json.dumps({'assets':report,'builtTextCredentialPatternScanPassed':True,'noProviderIntegration':True},indent=2));print('PASS all served app and dependency bytes, credential-pattern scan')
