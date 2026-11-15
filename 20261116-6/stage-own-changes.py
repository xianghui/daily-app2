from pathlib import Path
import subprocess
app=Path.cwd();root=app.parent
run=lambda *args,**kw:subprocess.check_output(args,cwd=root,**kw)
subprocess.check_call(['git','add','-A'],cwd=root)
subprocess.check_call(['git','restore','--staged','--','20261105-7','20261109-17'],cwd=root)
for name in ['README.md','index.html']:
 baseline=run('git','show','HEAD:'+name).decode()
 if name=='README.md':
  assert '\n\n## Prefix Press — 20261116-6' not in baseline
  intended=baseline+(app/'root-readme-addition.txt').read_text()
 else:
  assert 'folder:"20261116-6"' not in baseline
  entry=(app/'gallery-entry.txt').read_text().rstrip();intended=baseline.replace('const APPS=[','const APPS=[\n  '+entry+',',1)
 blob=run('git','hash-object','-w','--stdin',input=intended.encode()).decode().strip();subprocess.check_call(['git','update-index','--cacheinfo','100644',blob,name],cwd=root)
changed=run('git','diff','--cached','--name-only').decode().splitlines();assert all(x.startswith('20261116-6/') or x in ['README.md','index.html'] for x in changed),changed
print('Only this run staged; unrelated pre-existing work preserved.')
