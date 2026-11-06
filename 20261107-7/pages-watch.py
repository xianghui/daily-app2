import subprocess,json,time
from pathlib import Path
head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True).split()[0]
for attempt in range(18):
 pages=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest']))
 print(attempt,pages['status'],pages['commit'],head,flush=True)
 if pages['commit']==head and pages['status']=='built':
  Path('pages-status.json').write_text(json.dumps({'head':head,'pages':{k:pages[k] for k in ['status','commit','error','created_at','updated_at']}},indent=2));break
 if pages['commit']==head and pages['status']=='errored':raise SystemExit('Pages deployment errored: '+str(pages['error']))
 time.sleep(10)
else:raise SystemExit('Pages build not confirmed after 180 seconds; inspect current runs before retrying.')
