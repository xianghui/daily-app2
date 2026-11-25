import subprocess,json,time
from pathlib import Path
r=Path('..');target=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],cwd=r).decode().split()[0]
report={'target':target,'observations':[]}
for i in range(12):
 x=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest'],cwd=r));o={k:x.get(k) for k in ['status','commit','error','updated_at']};report['observations'].append(o);print(json.dumps(o),flush=True);Path('pages-deployment-status.json').write_text(json.dumps(report,indent=2))
 if x['commit']==target and x['status']=='built':break
 if x['commit']==target and x['status']=='errored':raise SystemExit('Matching Pages build errored')
 time.sleep(10)
else:raise SystemExit('Matching Pages build not built yet')
