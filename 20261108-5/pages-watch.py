import subprocess,json,time
from pathlib import Path
history=[]
for i in range(30):
 head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True).split()[0]
 p=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest']))
 state={k:p.get(k)for k in ['status','commit','error']};state['head']=head;history.append(state);Path('pages-watch.json').write_text(json.dumps(history,indent=2));print(state,flush=True)
 if p['commit']==head and p['status']=='built':break
 if p['commit']==head and p['status']=='errored':raise SystemExit('Pages matching deployment failed')
 time.sleep(15)
else:raise SystemExit('Pages build did not reach matching built state within bounded wait')
