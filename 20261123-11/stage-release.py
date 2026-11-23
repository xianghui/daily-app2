from pathlib import Path
import subprocess
root=Path(__file__).resolve().parent.parent;p=root/'20261123-11'
subprocess.run(['git','add','-A','--','20261123-11'],cwd=root,check=True)
entry=(p/'gallery-entry.txt').read_text()
head=subprocess.check_output(['git','show','HEAD:index.html'],cwd=root).decode();assert entry not in head
staged=head.replace('const APPS=[','const APPS=[\n  '+entry+',',1)
readme=subprocess.check_output(['git','show','HEAD:README.md'],cwd=root).decode()+(p/'root-readme-addition.txt').read_text()
for name,text in [('index.html',staged),('README.md',readme)]:
 sha=subprocess.check_output(['git','hash-object','-w','--stdin'],input=text.encode(),cwd=root).decode().strip()
 subprocess.run(['git','update-index','--add','--cacheinfo','100644,'+sha+','+name],cwd=root,check=True)
print('Staged only this app and its own gallery/README addition; unrelated work preserved unstaged.')
