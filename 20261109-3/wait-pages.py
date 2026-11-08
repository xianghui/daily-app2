import subprocess,time,json
from pathlib import Path
head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True).split()[0]
checks=[]
for attempt in range(50):
 d=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest'],text=True));item={k:d.get(k) for k in ['status','commit','error','updated_at']};checks.append(item)
 print(item['status'],item['commit'],flush=True)
 if d.get('commit')==head and d.get('status')=='built':
  Path('deployment-validation.json').write_text(json.dumps({'expectedGhPagesHead':head,'latest':item,'checks':checks},indent=2));break
 if d.get('commit')==head and d.get('status')=='errored':raise SystemExit('Pages build failed: '+json.dumps(item))
 time.sleep(15)
else:raise SystemExit('Matching Pages build not confirmed before timeout; inspect workflow before any trigger')
