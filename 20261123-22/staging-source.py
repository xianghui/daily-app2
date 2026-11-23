"""Stage this run only; preserve pre-existing working-tree recovery edits."""
from pathlib import Path
import subprocess,json
root=Path.cwd().parent

def git(*args,data=None):return subprocess.check_output(['git',*args],cwd=root,input=data)
assert not git('diff','--cached','--name-only').strip(),'Inspect unexpected staged work before continuing'
folder=Path.cwd().name
subprocess.check_call(['git','add','-A','--',folder],cwd=root)
entry=Path('gallery-entry.txt').read_text()
for file in ['index.html','README.md']:
 source=git('show','HEAD:'+file).decode()
 if file=='index.html':
  assert source.count('const APPS=[')==1
  source=source.replace('const APPS=[','const APPS=[\n  '+entry+',',1)
 else:source+=Path('root-readme-entry.md').read_text()
 sha=git('hash-object','-w','--stdin',data=source.encode()).decode().strip()
 git('update-index','--cacheinfo','100644,'+sha+','+file)
subprocess.check_call(['git','add','--','scripts/dedupe-runtime.py'],cwd=root)
print(git('diff','--cached','--stat').decode())
