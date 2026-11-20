from pathlib import Path
import subprocess
root=Path(__file__).resolve().parent.parent;p=root/'20261120-17'
assert not subprocess.check_output(['git','diff','--cached','--name-only'],cwd=root,text=True).strip(),'Preserve existing staging'
# Merge only this task into the index; retain unrelated working-tree edits/drafts.
for name in ['index.html','README.md']:
 s=subprocess.check_output(['git','show','HEAD:'+name],cwd=root,text=True)
 if name=='index.html':
  entry=(p/'gallery-entry.txt').read_text().strip();assert 'folder:"20261120-17"' not in s
  s=s.replace('const APPS=[','const APPS=[\n  '+entry+',').replace('Reconcile rough inputs, verify AI suggestions and export actionable workflows','Review local-AI evidence, reconcile rough inputs and export usable workflows')
 else:s+=(p/'root-readme-section.md').read_text()
 blob=subprocess.check_output(['git','hash-object','-w','--stdin'],cwd=root,input=s,text=True).strip()
 subprocess.run(['git','update-index','--add','--cacheinfo','100644,'+blob+','+name],cwd=root,check=True)
subprocess.run(['git','add','-A','--','20261120-17','scripts/dedupe-runtime.py'],cwd=root,check=True)
