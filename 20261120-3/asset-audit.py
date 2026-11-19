from pathlib import Path
import urllib.request,json,hashlib,sys,re
p=Path(__file__).resolve().parent;root=p.parent;production=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:7022';dest='public-asset-audit.json' if production.startswith('https:') else 'assembled-asset-audit.json'
paths=[Path('index.html'),Path('20261120-3/index.html')]+[Path('20261120-3')/x.relative_to(p/'dist') for x in (p/'dist/assets').iterdir() if x.is_file()]
for dep in json.loads((p/'runtime-dependency-audit.json').read_text())['dependencies']:paths.append(Path(dep['url'].removeprefix('/daily-app2/')))
paths += [Path('20261028-13/index.html'),Path('20261028-13/assets/index-Cy0Ro0_I.js'),Path('20261028-13/assets/model.worker-D9ZZ2E3y.js'),Path('20261028-24/assets/manifold-BE4c7gO-.wasm')]
results=[]
for path in paths:
 local=(root/'deploy'/path).read_bytes();url=production+'/daily-app2/'+str(path);remote=urllib.request.urlopen(url,timeout=90).read();assert remote==local,str(path);results.append({'path':str(path),'bytes':len(remote),'sha256':hashlib.sha256(remote).hexdigest(),'matchesAssembled':True})
folders=re.findall(r'folder:"([^"]+)"',(root/'index.html').read_text());assert len(folders)==736 and len(set(folders))==736
for f in folders:assert (root/'deploy'/f/'index.html').exists(),f
r=json.loads((root/'deploy/runtime-deduplication.json').read_text());assert r['afterBytes']<1000000000
(p/dest).write_text(json.dumps({'assets':results,'allGalleryFoldersPresent':len(folders),'combinedBytes':r['afterBytes'],'additionalLegacyRuntimeSharing':'20261028-13'},indent=2));print('PASS',len(results),'asset byte matches;',len(folders),'folders;',r['afterBytes'],'bytes')
