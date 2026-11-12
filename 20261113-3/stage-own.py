from pathlib import Path
import subprocess
for target,baseline in [('index.html','gallery-baseline.html'),('README.md','root-readme-baseline.md')]:
 old=Path(baseline).read_text();new=(Path('..')/target).read_text()
 delta=subprocess.run(['git','diff','--no-index','--',baseline,'../'+target],capture_output=True,text=True).stdout
 lines=delta.splitlines(True)
 for i,line in enumerate(lines):
  if line.startswith('diff --git '):lines[i]=f'diff --git a/{target} b/{target}\n'
  elif line.startswith('--- '):lines[i]=f'--- a/{target}\n'
  elif line.startswith('+++ '):lines[i]=f'+++ b/{target}\n'
 patch=''.join(lines);Path('root-own-'+target.replace('.','-')+'.patch').write_text(patch)
 subprocess.run(['git','apply','--cached','-'],cwd='..',input=patch,text=True,check=True)
