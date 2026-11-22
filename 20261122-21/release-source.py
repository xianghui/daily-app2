from pathlib import Path
import subprocess,json
p=Path.cwd();root=p.parent
entry='  {folder:"20261122-21",name:"Filter Budget",area:"ai-utility",desc:"Reconcile rough workload notes with real local MiniLM filter inference. Review disjoint key counts and absent queries, allocate fixed memory and hash counts against equal-memory estimates, and export complete JSON/CSV/Markdown plus sizing plans without uploads or configuration changes."},\n'
addition='''\n\n## Filter Budget — 20261122-21

Local MiniLM matches informal workload notes to Bloom-filter inventories before mandatory identity/count review. Exact block allocation minimizes analytical unnecessary-backend-work estimates against equal-memory sizing; complete JSON/CSV/Markdown and sizing plans preserve originals. Two synthetic fixtures matched 6/6 simple labels, not general accuracy. Uniform-hash approximation only, not a constructed filter, benchmark or configuration tool; disjoint key counts and truly absent queries are required. Shared worker/factory from `20261115-6` and WASM from `20261107-2` must remain published. Offline scope is fresh-worker inference in an already-open warmed page. Existing sharing rules and 1 GB guard unchanged. See [workflow/privacy](20261122-21/README.md) and [observed checks](20261122-21/VALIDATION.md). No digest sent.\n'''
for name in ['index.html','README.md']:
 working=(root/name).read_text();head=subprocess.check_output(['git','show','HEAD:'+name],cwd=root,text=True);Path('/tmp/filter-budget-'+name+'-working-before').write_text(working)
 if name=='index.html':
  own=head.replace('const APPS=[','const APPS=[\n'+entry,1);working=working.replace('const APPS=[','const APPS=[\n'+entry,1)
 else:own=head+addition;working+=addition
 Path('/tmp/filter-budget-'+name+'-release-source').write_text(own);(root/name).write_text(working)
Path('published-gallery-before.html').write_bytes(subprocess.check_output(['git','show','HEAD:index.html'],cwd=root))
Path('source-ownership.json').write_text(json.dumps({'ownedFolder':p.name,'rootChanges':'Only new gallery entry and appended README section','preexistingPreserved':['README.md recovery edits','index.html Receipt Current recovery entry','20261105-7/','20261109-17/','20261116-13/'],'publicationSource':'HEAD published gallery plus new entry, pending unverified recovery excluded','stageMethod':'Scoped git add -A owned folder and exact owned root blobs'},indent=2))
