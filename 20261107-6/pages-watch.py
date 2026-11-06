import json,subprocess,time,sys
from pathlib import Path
head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True).split()[0]
print('Expect gh-pages',head,flush=True)
# Poll for the matching deployment; do not request redundant legacy rebuilds.
for i in range(32):
 p=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest']))
 runs=json.loads(subprocess.check_output(['gh','run','list','--repo','xianghui/daily-app2','--limit','6','--json','headSha,status,conclusion']))
 print(i,p['status'],p['commit'],[(r['status'],r['conclusion']) for r in runs if r['headSha']==head],flush=True)
 if p['commit']==head and p['status']=='built':
  Path('pages-status.json').write_text(json.dumps({'head':head,'pages':p,'runs':runs},indent=2));sys.exit(0)
 if p['commit']==head and p['status']=='errored':
  Path('pages-status.json').write_text(json.dumps({'head':head,'pages':p,'runs':runs},indent=2));sys.exit(2)
 time.sleep(20)
print('Timed out waiting for Pages; inspect runs before any rebuild.',flush=True);sys.exit(3)
