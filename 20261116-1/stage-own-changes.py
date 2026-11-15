from pathlib import Path
import subprocess
app=Path.cwd();root=app.parent
run=lambda *args,**kw:subprocess.check_output(args,cwd=root,**kw)
subprocess.check_call(['git','add','-A'],cwd=root)
subprocess.check_call(['git','restore','--staged','--','20261105-7','20261109-17'],cwd=root)
for name in ['README.md','index.html']:
 baseline=run('git','show','HEAD:'+name).decode()
 if name=='README.md':
  assert '\n\n## Quote Crossings — 20261116-1' not in baseline
  intended=baseline+(app/'root-readme-addition.txt').read_text()
 else:
  assert 'folder:"20261116-1"' not in baseline
  entry=(app/'gallery-entry.txt').read_text().rstrip();intended=baseline.replace('const APPS=[','const APPS=[\n  '+entry,1).replace('Match meaning locally, review evidence and export usable work','Reconcile meaning locally, review decisions and export usable worksheets')
 blob=run('git','hash-object','-w','--stdin',input=intended.encode()).decode().strip();subprocess.check_call(['git','update-index','--cacheinfo','100644',blob,name],cwd=root)
changed=run('git','diff','--cached','--name-only').decode().splitlines();assert all(x.startswith('20261116-1/') or x in ['README.md','index.html','scripts/dedupe-runtime.py'] for x in changed),changed
print('Only this run staged; unrelated pre-existing work preserved.')
