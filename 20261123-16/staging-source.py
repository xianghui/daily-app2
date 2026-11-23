from pathlib import Path
import subprocess,re
root=Path('..').resolve()
def git(*args,**kw):return subprocess.check_output(['git',*args],cwd=root,**kw)
entry=Path('gallery-entry.txt').read_text().strip()
base=git('show','HEAD:index.html').decode();base,n=re.subn(r'(const APPS\s*=\s*\[)',lambda m:m[1]+'\n  '+entry,base,count=1);assert n==1
readme=git('show','HEAD:README.md').decode()+Path('root-readme-entry.md').read_text()
for name,data in [('index.html',base),('README.md',readme)]:
 sha=git('hash-object','-w','--stdin',input=data.encode()).decode().strip();git('update-index','--add','--cacheinfo','100644,'+sha+','+name)
git('add','-A','--','20261123-16','scripts/dedupe-runtime.py')
print(git('diff','--cached','--stat').decode())
print('Staging only this release; pre-existing root edits and three untracked recovery directories preserved.')
