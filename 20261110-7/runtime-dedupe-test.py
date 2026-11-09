from pathlib import Path
import json,re,hashlib
r=Path('..');dep=r/'deploy';a=json.loads((dep/'runtime-deduplication.json').read_text());assert len(a['apps'])==14
assert a['afterBytes']==sum(p.stat().st_size for p in dep.rglob('*')if p.is_file())
assert a['afterBytes']<1000000000
for item in a['apps']:
 folder=item['folder'];src=r/folder/'dist';dst=dep/folder
 old='/daily-app2/'+folder+'/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'
 assert (src/'assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').exists()
 assert not (dst/'assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm').exists()
 for p in dst.rglob('*'):
  if p.suffix in ['.js','.mjs','.html','.css']:
   text=p.read_text();assert old not in text
   for match in re.finditer(r'/daily-app2/(2026\d+-\d+/assets/[A-Za-z0-9_.-]+)',text):assert (dep/match[1]).is_file(),match[1]
 for p in src.rglob('*'):
  if not p.is_file():continue
  if p.name.endswith('.wasm') or p.name=='index.html' or p.name.startswith('ai.worker') or p.name.startswith('index-') and p.suffix=='.js':continue
  assert p.read_bytes()==(dst/p.relative_to(src)).read_bytes(),p
 checks=[w for w in json.load(open('legacy-runtime-validation.json'))['workers']if w['folder']==folder];assert len(checks)==1 and checks[0]['actualInference']
Path('runtime-deduplication-validation.json').write_text(json.dumps({'oldAppsRechecked':14,'exactPublishedBytes':a['afterBytes'],'underConservativeOneGB':True,'sourceWasmPreserved':True,'noDanglingAbsoluteAssetUrls':True,'nonchangedAssetsBytePreserved':True,'realWasmInferenceEachAffectedWorker':True},indent=2));print('PASS 14 legacy worker inferences, source assets preserved, no dangling paths, site under 1 GB')
