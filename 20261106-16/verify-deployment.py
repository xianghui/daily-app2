import urllib.request,hashlib,json,re,subprocess
from pathlib import Path
base='https://xianghui.github.io/daily-app2/'
report={'pages':json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest'])),'assets':[]}
assert report['pages']['status']=='built',report['pages']['status']
report['ghPagesHead']=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],cwd='..',text=True).split()[0]
assert report['pages']['commit']==report['ghPagesHead']
for f in Path('dist').rglob('*'):
 if f.is_file():
  rel=f.relative_to('dist').as_posix();remote=urllib.request.urlopen(base+'20261106-16/'+rel).read();assert hashlib.sha256(remote).digest()==hashlib.sha256(f.read_bytes()).digest(),rel
  report['assets'].append({'path':rel,'bytes':len(remote),'sha256':hashlib.sha256(remote).hexdigest()})
root=urllib.request.urlopen(base).read().decode();assert root.count('folder:"20261106-16"')==1
assert 'area:"ai-utility"' in root
report['galleryEntryCount']=1
Path('deployment-validation.json').write_text(json.dumps(report,indent=2));print('Public Pages commit matches gh-pages; all production files verified byte-for-byte, gallery entry once.')
