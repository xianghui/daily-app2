"""Deploy-only byte-verified WASM reuse; preserve source builds and legacy JS URLs."""
from pathlib import Path
import hashlib,json,sys
root=Path(__file__).resolve().parents[1];deploy=root/'deploy'
name='ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm';shared=deploy/'20261107-2/assets'/name
if not shared.is_file():raise SystemExit('Required shared WASM is missing; refusing deployment.')
sharedBytes=shared.read_bytes();sha=hashlib.sha256(sharedBytes).hexdigest();sharedURL='/daily-app2/20261107-2/assets/'+name
size=lambda:sum(p.stat().st_size for p in deploy.rglob('*')if p.is_file())
before=size();changed=[]
for wasm in list(deploy.glob('*/assets/'+name)):
 if wasm==shared:continue
 if wasm.read_bytes()!=sharedBytes:raise SystemExit('Nonidentical WASM cannot be deduplicated: '+str(wasm))
 folder=wasm.parent.parent;oldURL='/daily-app2/'+folder.name+'/assets/'+name
 workers=[]
 for f in list(folder.glob('assets/*.js')):
  s=f.read_text()
  if oldURL not in s:continue
  rewritten=s.replace(oldURL,sharedURL)
  # Cache-bust workers so Cache API cannot indefinitely reuse an old-source worker.
  fresh=f.with_name(f.stem+'-shared-'+hashlib.sha256(rewritten.encode()).hexdigest()[:12]+f.suffix)
  fresh.write_text(rewritten);f.write_text(rewritten) # compatibility URL for an older loaded shell
  workers.append((f.name,fresh.name))
 if not workers:raise SystemExit('No explicit worker reference found; refusing to remove '+str(wasm))
 mains=[]
 for f in list(folder.glob('assets/*.js')):
  if f.name.startswith('ai.worker'):continue
  s=f.read_text();rewritten=s
  for old,new in workers:rewritten=rewritten.replace(old,new)
  if s==rewritten:continue
  fresh=f.with_name(f.stem+'-shared-'+hashlib.sha256(rewritten.encode()).hexdigest()[:12]+f.suffix)
  fresh.write_text(rewritten);f.write_text(rewritten)
  mains.append((f.name,fresh.name))
 if not mains:raise SystemExit('No shell worker reference found for '+folder.name)
 html=folder/'index.html';s=html.read_text()
 for old,new in mains:
  if old not in s:raise SystemExit('Entry shell not linked by HTML: '+old)
  s=s.replace(old,new)
 html.write_text(s)
 # Only delete duplicate build artifacts after every referenced URL has been rewritten.
 for f in folder.rglob('*'):
  if f.suffix in ['.js','.mjs','.html','.css'] and oldURL in f.read_text():raise SystemExit('Dangling duplicate URL: '+str(f))
 wasm.unlink()
 changed.append({'folder':folder.name,'workers':[new for _,new in workers],'shells':[new for _,new in mains],'compatibilityAliasesRetained':True,'duplicateBytesRemoved':len(sharedBytes)})
report={'beforeBytes':before,'afterBytes':size(),'sharedWasmSHA256':sha,'sharedURL':sharedURL,'apps':changed,'sourceBuildsUnmodified':True}
reportPath=deploy/'runtime-deduplication.json'
for _ in range(4):
 reportPath.write_text(json.dumps(report,indent=2))
 actual=size()
 if actual==report['afterBytes']:break
 report['afterBytes']=actual
else:raise SystemExit('Size report did not converge.')
if report['afterBytes']>=1000000000:raise SystemExit('Combined site still exceeds conservative 1 GB published-site budget.')
print('Deploy-only WASM reuse:',len(changed),'apps;',before,'→',report['afterBytes'],'bytes; sources unchanged.')
