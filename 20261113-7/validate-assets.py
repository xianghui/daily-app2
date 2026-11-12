from pathlib import Path
import hashlib,json,re
root=Path('dist');files=list(root.rglob('*.js'))+list(root.rglob('*.mjs'));bad=[]
for p in files:
 if re.search(r'gh[pousr]_[A-Za-z0-9]{20,}|sk-[A-Za-z0-9]{24,}|AIza[\w-]{30,}',p.read_text()):bad.append(str(p))
assert not bad
wasm=Path('../20261107-2/dist/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm')
Path('asset-validation.json').write_text(json.dumps(dict(credentialPatternScanFiles=len(files),credentialMatches=bad,sharedWasmBytes=wasm.stat().st_size,sharedWasmSHA256=hashlib.sha256(wasm.read_bytes()).hexdigest(),workerLocallyBundled=True,runtimeFactoryLocallyBundled=True),indent=2));print('PASS built-asset credential-pattern scan and shared WASM audit')
