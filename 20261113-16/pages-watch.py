import subprocess,time,json
from pathlib import Path
remote=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True,cwd='..').split()[0]
Path('publication-status.json').write_text(json.dumps({'status':'awaiting-public-verification','pagesCommit':remote}))
for i in range(90):
 try:
  d=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest'],text=True))
  print(i,d.get('status'),d.get('commit'),flush=True)
  if d.get('commit')==remote and d.get('status')=='built':break
  if d.get('commit')==remote and d.get('status')=='errored':raise RuntimeError(d)
 except subprocess.CalledProcessError:pass
 time.sleep(10)
else:raise RuntimeError('Pages verification timed out')
