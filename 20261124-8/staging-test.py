from pathlib import Path
import subprocess,json
root=Path.cwd().parent
# The index is curated from HEAD + this run only; unrelated working-tree edits remain untouched.
for name in ['index.html','README.md']:
 baseline=subprocess.check_output(['git','show','HEAD:'+name],cwd=root).decode()
 if name=='index.html':
  entry=Path('gallery-entry.txt').read_text()
  expected=baseline.replace('const APPS=[','const APPS=[\n'+entry).replace('Reconcile handoffs, review evidence & export usable work','Review release choices, reconcile handoffs & export usable work')
 else:expected=baseline+Path('root-readme-append.txt').read_text()
 blob=subprocess.check_output(['git','hash-object','-w','--stdin'],input=expected.encode(),cwd=root).decode().strip()
 subprocess.run(['git','update-index','--add','--cacheinfo','100644,'+blob+','+name],cwd=root,check=True)
 Path('/tmp/license-staged-'+name.replace('.','-')).write_text(expected)
paths=subprocess.check_output(['git','diff','--cached','--name-only'],cwd=root).decode().splitlines()
assert all(x.startswith('20261124-8/') or x in ['README.md','index.html','scripts/dedupe-runtime.py'] for x in paths),paths
for name in ['README.md','index.html']:
 actual=subprocess.check_output(['git','show',':'+name],cwd=root).decode();assert actual==Path('/tmp/license-staged-'+name.replace('.','-')).read_text()
Path('staged-source-validation.json').write_text(json.dumps({'allowedStagedRoots':['20261124-8','README.md own append only','index.html own entry/tagline only','scripts/dedupe-runtime.py'],'unrelatedWorkExcluded':True,'stagedFileCount':len(paths)},indent=2));print('PASS scoped staged source',len(paths))
