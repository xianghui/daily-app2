import subprocess,json,time
from pathlib import Path

def run(*args):return subprocess.check_output(args,text=True).strip()
head=run('git','ls-remote','origin','refs/heads/gh-pages').split()[0]
for i in range(24):
 build=json.loads(run('gh','api','repos/xianghui/daily-app2/pages/builds/latest'))
 runs=json.loads(run('gh','run','list','--repo','xianghui/daily-app2','--limit','5','--json','databaseId,headSha,status,conclusion'))
 out={'target':head,'build':{k:build.get(k) for k in ['status','commit','error']},'matchingRuns':[r for r in runs if r['headSha']==head]}
 Path('pages-build.json').write_text(json.dumps(out,indent=2));print(json.dumps(out),flush=True)
 if build.get('commit')==head and build.get('status')=='built':break
 if build.get('commit')==head and build.get('status')=='errored':raise SystemExit('Pages reported failed build; inspect workflow')
 time.sleep(20)
else:raise SystemExit('Pages build not verified within eight minutes; inspect active workflow before any trigger')
