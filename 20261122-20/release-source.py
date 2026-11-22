from pathlib import Path
import subprocess,json
p=Path.cwd();root=p.parent
entry='  {folder:"20261122-20",name:"Causal Lantern",area:"ai-utility",desc:"Reconcile distributed incident service notes with real local MiniLM inference. Review local order and message pairs, distinguish logical happens-before from concurrency with vector clocks and source-linked witnesses, compare pasted-order assumptions and export complete JSON/CSV/Markdown without uploads or server actions."},\n'
addition='''\n\n## Causal Lantern — 20261122-20

Local MiniLM reconciles informal distributed-event service notes before mandatory event/message review. Exact logical clocks expose happens-before paths and concurrent pairs beyond pasted-order assumptions; complete JSON/CSV/Markdown and pair witnesses preserve every event. Two small fixtures matched 12/12 simple service labels; unknown/negated notes still need holds. Logical concurrency is not simultaneous wall time and missing dependencies can hide real ordering. No service access or incident actions. Shared worker/factory from `20261115-6` and WASM from `20261107-2` must remain published. Offline scope is fresh-worker inference in an already-open warmed page. Existing sharing rules and 1 GB guard unchanged. See [workflow/privacy](20261122-20/README.md) and [observed validation](20261122-20/VALIDATION.md). No digest sent.\n'''
for name in ['index.html','README.md']:
 working=(root/name).read_text();head=subprocess.check_output(['git','show','HEAD:'+name],cwd=root,text=True);Path('/tmp/causal-lantern-'+name+'-working-before').write_text(working)
 if name=='index.html':
  own=head if 'folder:"20261122-20"' in head else head.replace('const APPS=[','const APPS=[\n'+entry,1)
  working=working if 'folder:"20261122-20"'in working else working.replace('const APPS=[','const APPS=[\n'+entry,1)
 else:
  own=head if '## Causal Lantern — 20261122-20'in head else head+addition
  working=working if '## Causal Lantern — 20261122-20'in working else working+addition
 Path('/tmp/causal-lantern-'+name+'-release-source').write_text(own);(root/name).write_text(working)
Path('published-gallery-before.html').write_bytes(subprocess.check_output(['git','show','HEAD:index.html'],cwd=root))
Path('source-ownership.json').write_text(json.dumps({'ownedFolder':'20261122-20','rootChanges':'New APPS entry and appended Causal Lantern README section only','preexistingPreserved':['README.md recovery edits','index.html Receipt Current recovery entry','20261105-7/','20261109-17/','20261116-13/'],'publicationSource':'HEAD published gallery plus new entry; unrelated unverified recovery excluded','stageMethod':'Scoped git add -A for owned folder; exact owned root blobs'},indent=2))
