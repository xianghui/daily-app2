from pathlib import Path
import subprocess,json
root=Path(__file__).resolve().parent.parent
run=lambda args,**kw:subprocess.run(args,cwd=root,check=True,**kw)
# Preserve unrelated pre-existing recovery work; equivalent to add -A scoped to this run.
run(['git','add','-A','--','20261122-1','scripts/dedupe-runtime.py'])
for name in ['index.html','README.md']:
 head=subprocess.check_output(['git','show','HEAD:'+name],cwd=root).decode()
 if name=='index.html':
  entry=next(line for line in(root/name).read_text().splitlines()if 'folder:"20261122-1"'in line)
  assert 'folder:"20261122-1"' not in head
  staged=head.replace('const APPS=[','const APPS=[\n'+entry,1)
  change=json.loads((Path(__file__).parent/'tagline-change.json').read_text());assert change['before']in staged;staged=staged.replace(change['before'],change['after'])
 else:staged=head+(Path(__file__).parent/'root-readme-addition.txt').read_text()
 blob=subprocess.check_output(['git','hash-object','-w','--stdin'],cwd=root,input=staged.encode()).decode().strip()
 run(['git','update-index','--cacheinfo','100644',blob,name])
print('Staged only this run; pre-existing root edits and recovery drafts remain excluded.')
