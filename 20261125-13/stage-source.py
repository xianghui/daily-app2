"""Stage this builder's changes without taking unrelated existing work."""
from pathlib import Path
import subprocess,json,re,hashlib
root=Path(__file__).resolve().parent.parent
run=lambda args,**kw:subprocess.check_output(['git',*args],cwd=root,**kw)
app='20261125-13'
existing=run(['diff','--cached','--name-only']).decode().splitlines()
assert all(p.startswith(app+'/') or p in ['index.html','README.md'] for p in existing),'Unrelated staged changes; refusing to commit them'
current=(root/'index.html').read_text();line=next(l for l in current.splitlines() if 'folder:"'+app+'"' in l)
headIndex=run(['show','HEAD:index.html']).decode();assert 'folder:"'+app+'"' not in headIndex
index=headIndex.replace('const APPS=[\n','const APPS=[\n'+line+'\n',1)
readmeCurrent=(root/'README.md').read_text();marker='\n\n## Cursor Lantern — '+app+'\n';assert readmeCurrent.count(marker)==1
readme=run(['show','HEAD:README.md']).decode().rstrip()+marker+readmeCurrent.split(marker,1)[1]
for path,content in [('index.html',index),('README.md',readme)]:
 blob=run(['hash-object','-w','--stdin'],input=content.encode()).decode().strip()
 subprocess.run(['git','update-index','--add','--cacheinfo','100644,'+blob+','+path],cwd=root,check=True)
subprocess.run(['git','add','-A','--',app],cwd=root,check=True)
staged=run(['diff','--cached','--name-only']).decode().splitlines();assert all(p.startswith(app+'/') or p in ['index.html','README.md'] for p in staged)
(root/app/'source-stage-validation.json').write_text(json.dumps({'parentCommit':run(['rev-parse','HEAD']).decode().strip(),'stagedPaths':len(staged),'rootPaths':['README.md','index.html'],'unrelatedExistingWorkExcluded':True,'sourceGalleryOnlyOwnEntryAdded':True,'publishedGalleryPreservedPreexistingWorktreeAdditions':True},indent=2))
subprocess.run(['git','add',app+'/source-stage-validation.json'],cwd=root,check=True)
print('Staged own source only:',len(staged)+1,'paths')
