from pathlib import Path
import subprocess
root=Path(__file__).resolve().parent.parent
run=lambda args,**kw:subprocess.run(args,cwd=root,check=True,**kw)
# Stage just this app and its deployment-sharing rule. Recovery drafts/edits predate this run.
run(['git','add','--','20261121-16','scripts/dedupe-runtime.py'])
for name in ['index.html','README.md']:
 head=subprocess.check_output(['git','show','HEAD:'+name],cwd=root).decode()
 if name=='index.html':
  entry=next(line for line in(root/name).read_text().splitlines()if 'folder:"20261121-16"'in line)
  assert 'folder:"20261121-16"' not in head
  staged=head.replace('const APPS=[','const APPS=[\n'+entry,1)
 else:staged=head+(Path(__file__).parent/'root-readme-addition.txt').read_text()
 blob=subprocess.check_output(['git','hash-object','-w','--stdin'],cwd=root,input=staged.encode()).decode().strip()
 run(['git','update-index','--cacheinfo','100644',blob,name])
print('Staged owned changes only; existing recovery drafts/root edits preserved and excluded.')
