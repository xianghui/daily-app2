from pathlib import Path
import subprocess,json
p=Path.cwd();root=p.parent
entry='  {folder:"20261122-19",name:"Restore Trail",area:"ai-utility",desc:"Reconcile rough backup archive notes with real local MiniLM system inference. Review exact snapshot dependencies and sizes, compare minimum-transfer full-plus-delta chains with newest-file-only gaps, and export complete JSON/CSV/Markdown plus ordered manifests without uploads or storage changes."},\n'
addition='''\n\n## Restore Trail — 20261122-19

Local MiniLM reconciles informal backup archive descriptions before mandatory system/dependency review. Exact forward-version paths expose missing bases and minimum-transfer full-plus-delta chains beyond newest-file-only selection; complete JSON/CSV/Markdown and ordered manifests retain every archive. Both tiny fixtures matched 12/12 simple system notes; unknown/negated descriptions still need holds. Metadata paths do not prove actual restorability. No storage access or restores. Shared worker/factory from `20261115-6` and WASM from `20261107-2` must remain published. Offline scope is fresh-worker inference in an already-open warmed page. Existing deployment sharing rules and 1 GB guard unchanged. See [workflow/privacy](20261122-19/README.md) and [observed validation](20261122-19/VALIDATION.md). No digest sent.\n'''
for name in ['index.html','README.md']:
 working=(root/name).read_text();head=subprocess.check_output(['git','show','HEAD:'+name],cwd=root,text=True);Path('/tmp/restore-trail-'+name+'-working-before').write_text(working)
 if name=='index.html':
  own=head if 'folder:"20261122-19"' in head else head.replace('const APPS=[','const APPS=[\n'+entry,1);working=working if 'folder:"20261122-19"' in working else working.replace('const APPS=[','const APPS=[\n'+entry,1)
 else:
  own=head if '## Restore Trail — 20261122-19' in head else head+addition
  working=working if '## Restore Trail — 20261122-19' in working else working+addition
 Path('/tmp/restore-trail-'+name+'-release-source').write_text(own);(root/name).write_text(working)
# Record originality against complete parsed gallery rather than only names.
Path('originality-audit.json').write_text(json.dumps({'galleryEntriesInspected':799,'aiUtilitiesInspected':317,'closestPrior':'Restore Harbor: RPO/RTO evidence age and drill duration, no snapshot dependency or transfer-path analysis','newObjective':'Exact-base archive-chain completeness and minimum additive transfer manifest','input':'Systems/targets plus rough archive notes and explicit bases/destinations/sizes','aiTask':'Local neural system matching','deterministicMethod':'Minimum-cost paths in a forward-version DAG with exact target/continuity checks','export':'Complete review audit and ordered chain/gap manifest','nameCollision':False},indent=2))
