import json,hashlib,urllib.request,re
from pathlib import Path
root=Path(__file__).resolve().parent;origin='https://xianghui.github.io';result=[]
paths=['/daily-app2/index.html','/daily-app2/20261128-3/index.html']
html=(root/'dist/index.html').read_text();paths.extend(re.findall(r'(?:src|href)="(/daily-app2/20261128-3/[^\"]+)"',html));paths.extend(x['path'] for x in json.loads((root/'runtime-provenance.json').read_text()))
for path in paths:
 with urllib.request.urlopen(origin+path,timeout=60) as r:remote=r.read();status=r.status
 local=(root.parent/'deploy'/path.removeprefix('/daily-app2/')).read_bytes()
 assert remote==local,path
 result.append({'path':path,'status':status,'bytes':len(remote),'sha256':hashlib.sha256(remote).hexdigest(),'matchesAssembled':True})
(root/'public-assets-validation.json').write_text(json.dumps(result,indent=2));print('PASS public byte-exact gallery, app, bundled assets and shared worker/factory/WASM',len(result))
