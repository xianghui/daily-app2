from pathlib import Path
import subprocess
root=Path(__file__).resolve().parent.parent
# Preserve unrelated working-tree edits and drafts; stage only this run's root changes.
assert not subprocess.check_output(['git','diff','--cached','--name-only'],cwd=root,text=True).strip(),'Review existing staged changes before staging this run'
for name in ['index.html','README.md']:
 s=subprocess.check_output(['git','show','HEAD:'+name],cwd=root,text=True)
 if name=='index.html':
  entry=(root/'20261120-14/gallery-entry.txt').read_text().strip()
  assert 'folder:"20261120-14"' not in s
  s=s.replace('const APPS=[','const APPS=[\n  '+entry+',')
  s=s.replace('Reconcile rough inputs, review evidence and export actionable worksheets','Reconcile rough inputs, verify independent records and export reviewed workflows')
 else:s+=(root/'20261120-14/root-readme-section.md').read_text()
 blob=subprocess.check_output(['git','hash-object','-w','--stdin'],cwd=root,input=s,text=True).strip()
 subprocess.run(['git','update-index','--add','--cacheinfo','100644,'+blob+','+name],cwd=root,check=True)
subprocess.run(['git','add','-A','--','20261120-14'],cwd=root,check=True)
