import subprocess,json,time
from pathlib import Path
head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True).split()[0]
for attempt in range(24):
 data=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest'],text=True));print(attempt,data['status'],data['commit'],flush=True)
 if data['commit']==head and data['status']=='built':Path('pages-build.json').write_text(json.dumps(data,indent=2));break
 if data['commit']==head and data['status']=='errored':raise SystemExit('Matching Pages build errored')
 time.sleep(10)
else:raise SystemExit('Timed out awaiting matching Pages build')
