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
# Older byte-identical geometry runtimes share an existing immutable copy.
# Preserve JS URLs; query-version their rewritten worker and HTML entry references.
# Source dist/ trees are never changed. Keep the shared older app published.
geometryName='manifold-BE4c7gO-.wasm'
geometryShared=deploy/'20261028-24/assets'/geometryName
geometryBytes=geometryShared.read_bytes()
geometrySharedURL='/daily-app2/20261028-24/assets/'+geometryName
geometryChanges=[];geometrySkipped=[]
# Discover every remaining byte-identical copy instead of trusting a frozen list.
# A folder is eligible only when the geometry URL is reached through a worker
# that a main bundle loads and the HTML shell links that main bundle.
# Anything wired differently keeps its own copy so no URL is left dangling.
for duplicate in sorted(deploy.glob('*/assets/'+geometryName)):
 folder=duplicate.parent.parent
 if folder.name==geometryShared.parent.parent.name:continue
 if duplicate.read_bytes()!=geometryBytes:raise SystemExit('Geometry runtime mismatch: '+folder.name)
 old='/daily-app2/'+folder.name+'/assets/'+geometryName
 jsFiles=list(folder.glob('assets/*.js'))
 workers=[]
 for f in jsFiles:
  text=f.read_text()
  if old not in text:continue
  rewritten=text.replace(old,geometrySharedURL)
  workers.append((f,rewritten,f.name+'?shared='+hashlib.sha256(rewritten.encode()).hexdigest()[:12]))
 if not workers:geometrySkipped.append({'folder':folder.name,'reason':'no-worker-reference'});continue
 mains=[]
 for f in jsFiles:
  # Vite browser-external warning strings mention worker names but are not entry references.
  if f.name.startswith('__vite-browser-external-'):continue
  text=f.read_text();revised=text
  for worker,_,newRef in workers:revised=revised.replace(worker.name,newRef)
  if text!=revised:mains.append((f,revised,f.name+'?shared='+hashlib.sha256(revised.encode()).hexdigest()[:12]))
 if not mains:geometrySkipped.append({'folder':folder.name,'reason':'geometry-referenced-directly-by-entry'});continue
 html=folder/'index.html';htmlText=html.read_text()
 if not any(main.name in htmlText for main,_,_ in mains):
  geometrySkipped.append({'folder':folder.name,'reason':'entry-not-linked-by-html'});continue
 for worker,rewritten,_ in workers:worker.write_text(rewritten)
 for main,revised,_ in mains:main.write_text(revised)
 for main,_,newRef in mains:htmlText=htmlText.replace(main.name,newRef)
 html.write_text(htmlText)
 for f in folder.rglob('*'):
  if f.suffix in ['.js','.mjs','.html','.css'] and old in f.read_text():raise SystemExit('Dangling geometry runtime URL: '+str(f))
 duplicate.unlink()
 geometryChanges.append({'folder':folder.name,'bytesRemoved':len(geometryBytes),'legacyJsURLsRetained':True,'queryVersionedEntries':True})
report={'beforeBytes':before,'afterBytes':size(),'sharedWasmSHA256':sha,'sharedURL':sharedURL,'apps':changed,'sourceBuildsUnmodified':True,'geometryReuse':geometryChanges,'geometrySkipped':geometrySkipped,'geometrySharedURL':geometrySharedURL,'geometrySHA256':hashlib.sha256(geometryBytes).hexdigest()}
reportPath=deploy/'runtime-deduplication.json'
for _ in range(4):
 reportPath.write_text(json.dumps(report,indent=2))
 actual=size()
 if actual==report['afterBytes']:break
 report['afterBytes']=actual
else:raise SystemExit('Size report did not converge.')
if report['afterBytes']>=1000000000:raise SystemExit('Combined site still exceeds conservative 1 GB published-site budget.')
print('Deploy-only WASM reuse:',len(changed),'apps;',before,'→',report['afterBytes'],'bytes; sources unchanged.')
