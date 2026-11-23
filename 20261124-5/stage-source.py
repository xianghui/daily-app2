"""Stage this app only, preserving pre-existing unrelated recovery work."""
from pathlib import Path
import subprocess
root=Path(__file__).resolve().parent.parent
run=lambda *args,**kw:subprocess.check_output(args,cwd=root,**kw)
assert not run('git','diff','--cached','--name-only',text=True).strip(),'Existing staged work must not be overwritten.'
current=(root/'index.html').read_text();entry=next(line for line in current.splitlines() if 'folder:"20261124-5"' in line)
old=run('git','show','HEAD:index.html',text=True);assert '20261124-5' not in old
new=old.replace('const APPS=[','const APPS=[\n'+entry).replace('Local-first AI workflow utilities · Review source-aware decisions & export usable work · Earlier maker apps preserved','Local-first AI workflow utilities · Reconcile context, review decisions & export usable work · Earlier maker apps preserved')
readme=run('git','show','HEAD:README.md',text=True)+(root/'20261124-5/root-readme-append.txt').read_text()
for path,s in [('index.html',new),('README.md',readme)]:
 blob=run('git','hash-object','-w','--stdin',input=s.encode()).decode().strip();run('git','update-index','--add','--cacheinfo','100644',blob,path)
run('git','add','-A','--','20261124-5')
print(run('git','diff','--cached','--stat',text=True))
