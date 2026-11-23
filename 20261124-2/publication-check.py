import json,subprocess
from pathlib import Path
repo='xianghui/daily-app2'
head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True,cwd='..').split()[0]
build=json.loads(subprocess.check_output(['gh','api',f'repos/{repo}/pages/builds/latest'],text=True))
r={'publishedBranch':head,'pagesBuildCommit':build['commit'],'status':build['status'],'error':build.get('error')};Path('pages-build-status.json').write_text(json.dumps(r,indent=2));print(json.dumps(r))
if build['commit']!=head or build['status']!='built':raise SystemExit(2)
