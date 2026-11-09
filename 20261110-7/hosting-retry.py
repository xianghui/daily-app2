import subprocess,json,time,sys
from pathlib import Path
repo='xianghui/daily-app2';commit='bbcbef5e0a6117f3a92c26471e3e64bc778f5c46';first=42710458211;attempts=[]
def gh(*args):return json.loads(subprocess.check_output(['gh',*args],text=True))
def save():Path('hosting-attempts.json').write_text(json.dumps({'ghPagesCommit':commit,'attempts':attempts},indent=2))
run=first
for attempt in range(1,4):
 print('Watching attempt',attempt,'run',run,flush=True);deadline=time.monotonic()+1000
 while True:
  state=gh('run','view',str(run),'--repo',repo,'--json','status,conclusion,jobs')
  if state['status']=='completed':break
  if time.monotonic()>deadline:
   attempts.append({'runId':run,'attempt':attempt,'status':'still_active_after_watch_budget','state':state});save();print('BLOCKED: matching workflow remains active; no duplicate rebuild triggered',flush=True);sys.exit(2)
  time.sleep(30)
 jobs=[{'name':j['name'],'conclusion':j['conclusion']}for j in state['jobs']]
 record={'runId':run,'attempt':attempt,'status':state['status'],'conclusion':state['conclusion'],'jobs':jobs};attempts.append(record)
 if state['conclusion']=='success':save();print('PAGES_WORKFLOW_SUCCEEDED',flush=True);sys.exit(0)
 log=subprocess.run(['gh','run','view',str(run),'--repo',repo,'--log-failed'],text=True,capture_output=True);Path(f'pages-attempt-{attempt}-failure.log').write_text(log.stdout+log.stderr)
 try:record['deploymentStatus']=gh('api',f'repos/{repo}/pages/deployments/{commit}')
 except Exception as e:record['deploymentLookupError']=str(e)
 save();print('Attempt failed:',record,flush=True)
 if attempt==3:break
 # Inspect matching activity BEFORE any write; never overlap a genuinely active deployment.
 runs=gh('run','list','--repo',repo,'--limit','15','--json','databaseId,headSha,status,conclusion')
 active=[r for r in runs if r['headSha']==commit and r['status']!='completed']
 if active:print('BLOCKED: matching workflow active, no rebuild requested',active,flush=True);sys.exit(2)
 response=gh('api','--method','POST',f'repos/{repo}/pages/builds');Path(f'pages-rebuild-{attempt+1}.json').write_text(json.dumps(response,indent=2));print('Requested existing legacy Pages rebuild',flush=True)
 deadline=time.monotonic()+180
 while True:
  time.sleep(15);runs=gh('run','list','--repo',repo,'--limit','15','--json','databaseId,headSha,status,conclusion')
  new=[r for r in runs if r['headSha']==commit and r['databaseId'] not in [a['runId']for a in attempts]]
  if new:run=new[0]['databaseId'];break
  if time.monotonic()>deadline:print('BLOCKED: rebuild request produced no workflow; refusing duplicate requests',flush=True);sys.exit(2)
print('PAGES_FAILED_AFTER_THREE_ATTEMPTS',flush=True);sys.exit(1)
