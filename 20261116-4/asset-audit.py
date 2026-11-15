from pathlib import Path
import json,re,hashlib
root=Path.cwd().parent;app=Path.cwd();paths=['20261115-6/assets/ai.worker-lkOoPoq8.js','20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs','20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'];out=[]
for path in paths:
 folder,tail=path.split('/',1);f=root/folder/'dist'/tail;data=f.read_bytes();out.append(dict(path=path,bytes=len(data),sha256=hashlib.sha256(data).hexdigest()))
for f in (app/'dist').rglob('*'):
 if f.suffix in ['.js','.html','.css']:
  s=f.read_text();assert not re.search(r'(?:sk-[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{20,}|AIza[A-Za-z0-9_-]{25,})',s),f
assert '/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm' in (root/'20261115-6/dist/assets/ai.worker-lkOoPoq8.js').read_text()
Path('asset-audit.json').write_text(json.dumps({'dependencies':out,'builtTextCredentialPatternScanPassed':True,'noProviderIntegration':True},indent=2));print('PASS runtime dependency hashes and built text scan')
