from pathlib import Path
import subprocess
root=Path(__file__).resolve().parent.parent
run=lambda *args,**kwargs:subprocess.check_output(args,cwd=root,**kwargs)
# Respect unrelated changes that were already present when this job began.
subprocess.check_call(['git','add','-A'],cwd=root)
subprocess.check_call(['git','restore','--staged','--','20261105-7','20261109-17'],cwd=root)
for name in ['README.md','index.html']:
 baseline=run('git','show','HEAD:'+name).decode()
 if name=='README.md':intended=baseline+(root/'20261115-16/root-readme-addition.txt').read_text()
 else:
  entry=(root/'20261115-16/gallery-entry.txt').read_text()
  intended=baseline.replace('const APPS=[','const APPS=[\n'+entry,1).replace('Local AI workflow utilities · Match meaning, verify constraints and export reviewed work · Earlier maker apps preserved','Local AI workflow utilities · Reconcile meaning, shape better processes and export reviewed work · Earlier maker apps preserved')
 blob=run('git','hash-object','-w','--stdin',input=intended.encode()).decode().strip()
 subprocess.check_call(['git','update-index','--cacheinfo','100644',blob,name],cwd=root)
changed=run('git','diff','--cached','--name-only').decode().splitlines()
assert all(x.startswith('20261115-16/') or x in ['README.md','index.html','scripts/dedupe-runtime.py'] for x in changed),changed
print('Only this run staged; pre-existing root edits and untracked projects preserved.')
