import subprocess,json,time,sys
from pathlib import Path
commit='8a52c79eab50f0b20f19e8c830924625049b8bbd'
for attempt in range(30):
 r=json.loads(subprocess.check_output(['gh','run','view','42729062133','--repo','xianghui/daily-app2','--json','status,conclusion,jobs'],text=True))
 Path('hosting-attempts.json').write_text(json.dumps({'ghPagesCommit':commit,'runId':42729062133,'state':r},indent=2));print(r['status'],r['conclusion'],flush=True)
 if r['status']=='completed':sys.exit(0 if r['conclusion']=='success' else 1)
 time.sleep(30)
sys.exit(2)
