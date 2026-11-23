import subprocess,json
from pathlib import Path
root=Path(__file__).resolve().parent.parent
head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],cwd=root,text=True).split()[0]
build=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest'],text=True))
r={'publishedBranch':head,'pagesBuildCommit':build['commit'],'status':build['status'],'error':build.get('error')};Path('pages-build-status.json').write_text(json.dumps(r,indent=2));print(json.dumps(r));assert build['commit']==head and build['status']=='built','Pages has not finished the matching published commit'
