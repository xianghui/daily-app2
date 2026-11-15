from pathlib import Path
import subprocess
root=Path.cwd().parent
run=lambda *args,**kwargs:subprocess.check_output(args,cwd=root,**kwargs)
subprocess.check_call(['git','add','-A'],cwd=root)
subprocess.check_call(['git','restore','--staged','--','20261105-7','20261109-17'],cwd=root)
for name in ['README.md','index.html']:
 baseline=run('git','show','HEAD:'+name).decode()
 if name=='README.md':intended=baseline+(root/'20261115-21/root-readme-addition.txt').read_text()
 else:
  entry=(root/'20261115-21/gallery-entry.txt').read_text().rstrip()
  intended=baseline.replace('const APPS=[','const APPS=[\n'+entry,1).replace('Reconcile meaning, review cache traces and export usable work','Reconcile meaning, review return windows and export usable work')
 blob=run('git','hash-object','-w','--stdin',input=intended.encode()).decode().strip();subprocess.check_call(['git','update-index','--cacheinfo','100644',blob,name],cwd=root)
changed=run('git','diff','--cached','--name-only').decode().splitlines();assert all(x.startswith('20261115-21/') or x in ['README.md','index.html','scripts/dedupe-runtime.py'] for x in changed),changed
print('Only this run staged; unrelated work preserved.')
