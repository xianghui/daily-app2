import subprocess,json,time,sys
from pathlib import Path
commit='e5084d1a35b9a7552ed6fbe3d909f97f883d924b'
for attempt in range(30):
 r=json.loads(subprocess.check_output(['gh','run','view','42717896139','--repo','xianghui/daily-app2','--json','status,conclusion,jobs'],text=True))
 Path('hosting-attempts.json').write_text(json.dumps({'ghPagesCommit':commit,'runId':42717896139,'state':r},indent=2));print(r['status'],r['conclusion'],flush=True)
 if r['status']=='completed':sys.exit(0 if r['conclusion']=='success' else 1)
 time.sleep(30)
sys.exit(2)
