import subprocess,json,time
from pathlib import Path

def gh(*args):return subprocess.check_output(['gh',*args],text=True)
head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True).split()[0]
report={'expectedCommit':head,'observations':[]}
# Do not request a redundant rebuild while any real matching-head workflow is active.
for attempt in range(3):
 triggered=False
 for poll in range(50):
  latest=json.loads(gh('api','repos/xianghui/daily-app2/pages/builds/latest'))
  runs=json.loads(gh('run','list','--repo','xianghui/daily-app2','--limit','10','--json','databaseId,headSha,status,conclusion'))
  matches=[r for r in runs if r['headSha']==head];active=[r for r in matches if r['status']!='completed']
  report['observations'].append({'attempt':attempt+1,'poll':poll,'latest':{'status':latest['status'],'commit':latest['commit'],'error':latest.get('error')},'matchingRuns':matches})
  Path('pages-watch.json').write_text(json.dumps(report,indent=2))
  print('Pages',latest['status'],latest['commit'][:10],matches[:1],flush=True)
  if latest['commit']==head and latest['status']=='built' and any(r['conclusion']=='success' for r in matches):
   report['status']='built_verified';Path('pages-watch.json').write_text(json.dumps(report,indent=2));raise SystemExit(0)
  if not active and not triggered:
   # Existing run has settled, or no matching-head workflow exists. Bounded documented legacy trigger.
   report['buildRequest']=json.loads(gh('api','--method','POST','repos/xianghui/daily-app2/pages/builds'));triggered=True
  elif not active and triggered and matches and all(r['status']=='completed' for r in matches):break
  time.sleep(12)
report['status']='blocked';Path('pages-watch.json').write_text(json.dumps(report,indent=2));raise SystemExit('Pages did not build matching head after three bounded attempts')
