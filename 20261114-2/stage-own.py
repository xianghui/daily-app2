import subprocess
from pathlib import Path
root=Path('..').resolve()
def git(*args,**kwargs):return subprocess.check_output(['git',*args],cwd=root,**kwargs)
assert git('branch','--show-current',text=True).strip()=='main'
entry=Path('root-own-entry.txt').read_text();section=Path('root-own-readme.txt').read_text()
for name in ['index.html','README.md']:
 s=git('show','HEAD:'+name,text=True)
 if name=='index.html':
  assert 'folder:"20261114-2"' not in s
  s=s.replace('const APPS=[\n','const APPS=[\n'+entry,1).replace('Identify, review, sequence and export','Reconcile, review, plan and export')
  assert s.count('folder:"20261114-2"')==1
 else:s+=section
 blob=git('hash-object','-w','--stdin',input=s,text=True).strip()
 subprocess.run(['git','update-index','--cacheinfo','100644',blob,name],cwd=root,check=True)
subprocess.run(['git','add','-A','--','20261114-2'],cwd=root,check=True)
print('Staged only this app and its root entry/tagline/README additions; unrelated pre-existing work remains unstaged.')
