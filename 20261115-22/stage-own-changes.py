from pathlib import Path
import subprocess
root=Path.cwd().parent
run=lambda *args,**kwargs:subprocess.check_output(args,cwd=root,**kwargs)
subprocess.check_call(['git','add','-A'],cwd=root)
subprocess.check_call(['git','restore','--staged','--','20261105-7','20261109-17'],cwd=root)
for name in ['README.md','index.html']:
 baseline=run('git','show','HEAD:'+name).decode()
 if name=='README.md':
  marker='\n\n## Deadline Prism — 20261115-22'
  intended=baseline.split(marker)[0]+(root/'20261115-22/root-readme-addition.txt').read_text()
 else:
  entry=(root/'20261115-22/gallery-entry.txt').read_text().rstrip()
  intended=(baseline if 'folder:"20261115-22"' in baseline else baseline.replace('const APPS=[','const APPS=[\n'+entry,1)).replace('Reconcile meaning, review return windows and export usable work','Reconcile meaning, review uncertainty and export usable work')
 blob=run('git','hash-object','-w','--stdin',input=intended.encode()).decode().strip();subprocess.check_call(['git','update-index','--cacheinfo','100644',blob,name],cwd=root)
changed=run('git','diff','--cached','--name-only').decode().splitlines();assert all(x.startswith('20261115-22/') or x in ['README.md','index.html'] for x in changed),changed
print('Only this run staged; unrelated work preserved.')
