from pathlib import Path
import json,subprocess
p=Path.cwd();root=p.parent
pages=json.loads((p/'pages-watch.json').read_text());assert pages['status']=='built' and pages['workflow']['conclusion']=='success'
for f in ['public-browser-validation.json','assembled-browser-validation.json']:
 d=json.loads((p/f).read_text());assert d['errors']==[] and sum(x['correct']for x in d['fixtures'])==6 and len(d['checks'])==4
note=f"\n\nPublic release verified: matching Pages `{pages['commit']}` and workflow `{pages['workflow']['databaseId']}` succeeded. Nine public gallery/app/runtime assets byte-match the assembled site. Both public real-AI fixtures (6/6 simple identities), complete reviewed/export/maximum-batch/offline/privacy suite, independently parsed artifacts and all 801 gallery cards passed. Combined size 999,588,409 bytes remains below the unchanged 1 GB guard. Source staging preserves and excludes unrelated recovery work. No digest sent.\n"
for f in [root/'README.md',Path('/tmp/filter-budget-README.md-release-source'),p/'VALIDATION.md']:
 if 'Public release verified: matching Pages `4cbe12'not in f.read_text():f.write_text(f.read_text()+note)
(p/'publication-status.json').write_text(json.dumps({'status':'published-verified','app':'Filter Budget','folder':p.name,'url':'https://xianghui.github.io/daily-app2/20261122-21/','ghPagesCommit':pages['commit'],'pagesWorkflow':pages['workflow']['databaseId'],'publicAssetByteMatches':9,'publicRealInferenceKnownAnswers':'6/6 simple identity suggestions; not a general accuracy claim','publicFullWorkflowSuite':True,'offlineScope':'Fresh-worker inference in already-open warmed page only','galleryApps':801,'siteBytes':999588409,'digestSent':False},indent=2))
subprocess.run(['git','add','-A','--','20261122-21'],cwd=root,check=True)
for name in ['index.html','README.md']:
 f=Path('/tmp/filter-budget-'+name+'-release-source');oid=subprocess.check_output(['git','hash-object','-w','--stdin'],input=f.read_bytes(),cwd=root).decode().strip();subprocess.run(['git','update-index','--add','--cacheinfo','100644',oid,name],cwd=root,check=True)
