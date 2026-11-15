from pathlib import Path
import subprocess
root=Path(__file__).resolve().parent.parent
run=lambda *args,**kwargs:subprocess.check_output(args,cwd=root,**kwargs)
# Preserve unrelated pre-existing working-tree files and root edits.
subprocess.check_call(['git','add','-A'],cwd=root)
subprocess.check_call(['git','restore','--staged','--','20261105-7','20261109-17'],cwd=root)
for name in ['README.md','index.html']:
 baseline=run('git','show','HEAD:'+name).decode()
 if name=='README.md':intended=baseline+(root/'20261115-14/root-readme-addition.txt').read_text()
 else:
  current=(root/name).read_text();entry=next(line for line in current.splitlines() if line.startswith('{folder:"20261115-14"'))
  intended=baseline.replace('const APPS=[','const APPS=[\n'+entry,1).replace('Local AI workflow utilities · Match, verify and turn recurring inputs into usable outputs · Earlier maker apps preserved','Local AI workflow utilities · Reconcile meaning, review evidence and export usable results · Earlier maker apps preserved')
 blob=run('git','hash-object','-w','--stdin',input=intended.encode()).decode().strip()
 subprocess.check_call(['git','update-index','--cacheinfo','100644',blob,name],cwd=root)
changed=run('git','diff','--cached','--name-only').decode().splitlines()
assert all(x.startswith('20261115-14/') or x in ['README.md','index.html'] for x in changed),changed
print('Only this run staged; unrelated pre-existing changes untouched.')
