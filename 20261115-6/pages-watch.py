import json,subprocess,time
from pathlib import Path
expected='60e8cbe6e80814d286fbb9bb4a27dd0a990e77e4'
for i in range(24):
 r=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest'],text=True))
 print(i,r['status'],r['commit'],flush=True)
 if r['commit']==expected and r['status']=='built':Path('pages-build.json').write_text(json.dumps(r,indent=2));break
 if r['commit']==expected and r['status']=='errored':raise RuntimeError(r.get('error'))
 time.sleep(15)
else:raise RuntimeError('Matching Pages build did not finish within six minutes')
