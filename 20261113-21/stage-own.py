import subprocess
from pathlib import Path
root=Path('..').resolve()
def git(*args,**kwargs):return subprocess.check_output(['git',*args],cwd=root,**kwargs)
assert git('branch','--show-current',text=True).strip()=='main'
entry=Path('root-own-entry.txt').read_text();section=Path('root-own-readme.txt').read_text()
for name in ['index.html','README.md']:
 s=git('show','HEAD:'+name,text=True)
 if name=='index.html':
  assert 'folder:"20261113-21"' not in s
  s=s.replace('const APPS=[\n','const APPS=[\n'+entry,1).replace('Local AI workflow utilities · Match, verify, reconcile and export · Earlier maker apps preserved','Local AI workflow utilities · Match, review, measure and export · Earlier maker apps preserved')
 else:s+=section
 if name=='index.html':
  assert s.count('folder:"20261113-21"')==1
 blob=git('hash-object','-w','--stdin',input=s,text=True).strip()
 subprocess.run(['git','update-index','--cacheinfo','100644',blob,name],cwd=root,check=True)
subprocess.run(['git','add','-A','--','20261113-21'],cwd=root,check=True)
print('Staged only this app and its root entry/tagline/README additions. Pre-existing unrelated working changes preserved unstaged.')
