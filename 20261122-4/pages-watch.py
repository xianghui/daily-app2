import subprocess,json,time
from pathlib import Path
repo='xianghui/daily-app2'
head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True).split()[0]
for attempt in range(30):
 build=json.loads(subprocess.check_output(['gh','api',f'repos/{repo}/pages/builds/latest'],text=True))
 runs=json.loads(subprocess.check_output(['gh','run','list','--repo',repo,'--limit','5','--json','databaseId,headSha,status,conclusion'],text=True));match=next((x for x in runs if x['headSha']==head),None)
 report={'commit':head,'status':build['status'],'buildCommit':build['commit'],'workflow':match,'attempt':attempt+1};Path('pages-watch.json').write_text(json.dumps(report,indent=2));print(report,flush=True)
 if build['commit']==head and build['status']=='built':break
 if match and match['status']=='completed'and match['conclusion']!='success':raise SystemExit('Matching Pages workflow failed; inspect before any retry')
 time.sleep(15)
else:raise SystemExit('Timed out waiting for Pages')
