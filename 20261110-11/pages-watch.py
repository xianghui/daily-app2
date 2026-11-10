import subprocess,json,time,sys
from pathlib import Path
run=sys.argv[1];commit=sys.argv[2];path=Path('hosting-attempts.json')
for attempt in range(40):
 r=json.loads(subprocess.check_output(['gh','run','view',run,'--repo','xianghui/daily-app2','--json','status,conclusion,jobs'],text=True))
 old=json.loads(path.read_text()) if path.exists() else {'attempts':[]}
 item={'ghPagesCommit':commit,'runId':int(run),'state':r}
 if old['attempts'] and old['attempts'][-1]['runId']==int(run):old['attempts'][-1]=item
 else:old['attempts'].append(item)
 path.write_text(json.dumps(old,indent=2));print(r['status'],r['conclusion'],flush=True)
 if r['status']=='completed':sys.exit(0 if r['conclusion']=='success' else 1)
 time.sleep(30)
sys.exit(2)
