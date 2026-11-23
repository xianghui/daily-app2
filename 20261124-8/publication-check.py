from pathlib import Path
import json,subprocess,hashlib
root=Path('..'); remote=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],cwd=root).decode().split()[0]
status=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest'],cwd=root))
assert status['commit']==remote and status['status']=='built',status
run=json.loads(subprocess.check_output(['gh','run','view','45286230849','--repo','xianghui/daily-app2','--json','status,conclusion,headSha'],cwd=root));assert run['headSha']==remote and run['conclusion']=='success'
for name in ['public-asset-validation.json','public-browser-validation.json','public-artifact-validation.json','public-gallery-browser-validation.json','public-legacy-runtime-validation.json']:
 assert Path(name).exists(),name
assets=json.loads(Path('public-asset-validation.json').read_text());browser=json.loads(Path('public-browser-validation.json').read_text());gallery=json.loads(Path('public-gallery-browser-validation.json').read_text());legacy=json.loads(Path('public-legacy-runtime-validation.json').read_text())
assert len(assets['assets'])==9 and assets['combinedSiteBytes']<1000000000
assert len(browser['fixtures'])==2 and all(x['actual']==x['expected'] for x in browser['fixtures']) and not browser['errors']
assert gallery['cards']==837 and legacy['restoredDesignVerified']
Path('pages-build-status.json').write_text(json.dumps({'commit':remote,'status':status['status'],'error':status['error'],'workflow':run},indent=2))
Path('publication-status.json').write_text(json.dumps({'app':'License Fork','folder':'20261124-8','url':'https://xianghui.github.io/daily-app2/20261124-8/','status':'publicly-verified','pagesCommit':remote,'workflowId':45286230849,'publicAssetByteMatches':len(assets['assets']),'galleryCards':gallery['cards'],'realDefaultModelFixtures':'6/6 simple policy links; negation challenge misrouted and documented','reviewedArtifactsParsed':True,'offlineScope':'fresh worker in already-open warmed page only','legacyGeometryRegression':'real worker, PNG/STL imports, binary STL export and saved design reopen passed','combinedSiteBytes':assets['combinedSiteBytes'],'noDigestSent':True},indent=2));print('PASS publication and matching Pages revision',remote)
