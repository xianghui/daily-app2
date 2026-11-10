import subprocess,json,sys
from pathlib import Path
run=int(sys.argv[1]);commit=sys.argv[2]
r=json.loads(subprocess.check_output(['gh','run','view',str(run),'--repo','xianghui/daily-app2','--json','status,conclusion,jobs'],text=True))
p=Path('hosting-attempts.json');data=json.loads(p.read_text()) if p.exists() else {'attempts':[]};item={'ghPagesCommit':commit,'runId':run,'state':r}
for i,old in enumerate(data['attempts']):
 if old['runId']==run:data['attempts'][i]=item;break
else:data['attempts'].append(item)
p.write_text(json.dumps(data,indent=2));print(r['status'],r['conclusion'])
for j in r['jobs']:print(j['name'],j['status'],j['conclusion'])
