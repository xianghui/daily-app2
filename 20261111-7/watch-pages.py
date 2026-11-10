import subprocess,json,time,urllib.request,urllib.error
from pathlib import Path
repo='xianghui/daily-app2'
def call(args):
 return subprocess.check_output(['gh',*args],text=True)
def api(path):return json.loads(call(['api',path]))
head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True).split()[0]
report={'commit':head,'attempts':[]};seen=set();start=time.time();last=0
while time.time()-start<2700:
 runs=json.loads(call(['run','list','--repo',repo,'--limit','10','--json','databaseId,headSha,status,conclusion']))
 matching=[r for r in runs if r['headSha']==head]
 active=[r for r in runs if r['status']!='completed']
 if matching:
  newest=matching[0];rid=newest['databaseId']
  if newest['status']=='completed' and rid not in seen:
   seen.add(rid);detail=api(f'repos/{repo}/actions/runs/{rid}/jobs')
   entry={**newest,'jobs':[{'name':j['name'],'conclusion':j['conclusion']}for j in detail['jobs']]}
   try:
    with urllib.request.urlopen('https://xianghui.github.io/daily-app2/20261111-7/',timeout=30)as r:entry['publicHTTP']=r.status
   except urllib.error.HTTPError as e:entry['publicHTTP']=e.code
   try:entry['deployment']=api(f'repos/{repo}/pages/deployments/{head}')
   except subprocess.CalledProcessError:entry['deployment']='unavailable'
   report['attempts'].append(entry);Path('hosting-attempts.json').write_text(json.dumps(report,indent=2));print('SETTLED',rid,newest['conclusion'],flush=True)
   if newest['conclusion']=='success':print('PAGES_SUCCESS',flush=True);break
   log=call(['run','view',str(rid),'--repo',repo,'--log-failed']);Path(f'hosting-attempt-{len(report["attempts"])}.log').write_text(log)
   if len(report['attempts'])>=3:print('PAGES_BLOCKED_AFTER_THREE',flush=True);break
   # A completed failed run is not active. Never rebuild alongside an actual queued/running workflow.
   if not active:
    print('REQUEST_REBUILD after completed failure, no active workflows',flush=True)
    call(['api','--method','POST',f'repos/{repo}/pages/builds']);time.sleep(20)
 if time.time()-last>55:
  print('WAIT',matching[0]if matching else 'No matching workflow yet',flush=True);last=time.time()
 time.sleep(15)
else:print('MONITOR_BUDGET_EXHAUSTED',flush=True)
