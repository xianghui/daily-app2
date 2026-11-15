from pathlib import Path
import urllib.request,hashlib,json
root=Path.cwd().parent;dep=root/'deploy';out=[]
for f in (dep/'20261030-21').rglob('*'):
 if f.is_file() and f.suffix in ['.html','.js']:
  path=str(f.relative_to(dep));data=urllib.request.urlopen('https://xianghui.github.io/daily-app2/'+path,timeout=90).read();assert data==f.read_bytes(),path;out.append({'path':path,'sha256':hashlib.sha256(data).hexdigest()})
Path('legacy-public-assets.json').write_text(json.dumps(out,indent=2));print('PASS rewritten legacy public asset bytes')
