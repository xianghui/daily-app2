from pathlib import Path
import subprocess,difflib
root=Path('..')
for name,beforefile in [('index.html','gallery-before.html'),('README.md','root-readme-before.txt')]:
 before=Path(beforefile).read_text();after=(root/name).read_text();patch=''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='a/'+name,tofile='b/'+name));subprocess.run(['git','apply','--cached','--unidiff-zero','-'],input=patch,text=True,cwd=root,check=True)
subprocess.run(['git','add','20261121-12','scripts/dedupe-runtime.py'],cwd=root,check=True)
