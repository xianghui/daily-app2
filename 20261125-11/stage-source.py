from pathlib import Path
import subprocess
root=Path('..');entry=next(x for x in root.joinpath('index.html').read_text().splitlines() if 'folder:"20261125-11"' in x)
for path in ['index.html','README.md']:
 base=subprocess.check_output(['git','show','HEAD:'+path],cwd=root).decode()
 if path=='index.html':
  pos=base.index('{folder:');base=base[:pos]+entry.strip()+'\n  '+base[pos:]
 else:base+=Path('root-readme-addition.md').read_text()
 oid=subprocess.check_output(['git','hash-object','-w','--stdin'],cwd=root,input=base.encode()).decode().strip();subprocess.run(['git','update-index','--cacheinfo','100644',oid,path],cwd=root,check=True)
subprocess.run(['git','add','-A','--','20261125-11'],cwd=root,check=True)
