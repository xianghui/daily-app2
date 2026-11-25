"""Stage only this job's root additions while preserving unrelated recovery work."""
import subprocess
from pathlib import Path
r=Path(__file__).resolve().parents[1];p=r/'20261125-9'
def git(*args,input=None):return subprocess.check_output(['git',*args],cwd=r,input=input)
# This app is entirely new. Dist, node_modules and deploy remain ignored.
subprocess.run(['git','add','-A','--','20261125-9'],cwd=r,check=True)
for name in ['index.html','README.md']:
 base=git('show','HEAD:'+name).decode()
 if name=='index.html':
  entry=(p/'gallery-entry.txt').read_text().strip()
  updated=base.replace('const APPS=[','const APPS=[\n  '+entry,1).replace('Local-first AI workflow utilities · Reconcile handoffs, verify changes, export usable results · Earlier maker apps preserved','Local-first AI workflow utilities · Review decisions, plan work, export usable results · Earlier maker apps preserved')
  assert updated.count('folder:"20261125-9"')==1
 else:updated=base+(p/'root-readme-addition.md').read_text()
 blob=git('hash-object','-w','--stdin',input=updated.encode()).decode().strip()
 subprocess.run(['git','update-index','--cacheinfo','100644',blob,name],cwd=r,check=True)
