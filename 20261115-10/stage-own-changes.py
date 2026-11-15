from pathlib import Path
import difflib,subprocess
patch=''
for file,before in [('index.html','gallery-source-before.html'),('README.md','root-readme-before.md')]:
 old=Path(before).read_text().splitlines(True);new=Path('..',file).read_text().splitlines(True)
 patch+=''.join(difflib.unified_diff(old,new,fromfile='a/'+file,tofile='b/'+file,n=2))
Path('own-root-changes.patch').write_text(patch)
subprocess.run(['git','apply','--cached','--check','20261115-10/own-root-changes.patch'],cwd='..',check=True)
subprocess.run(['git','apply','--cached','20261115-10/own-root-changes.patch'],cwd='..',check=True)
subprocess.run(['git','add','-A','20261115-10'],cwd='..',check=True)
print('Staged only new app and root changes relative to initial working snapshots; unrelated changes preserved.')
