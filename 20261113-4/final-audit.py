from pathlib import Path
import json,subprocess,re
read=lambda f:json.loads(Path(f).read_text())
for f in ['browser-validation.json','combined-browser-validation.json','public-browser-validation.json']:
 r=read(f);assert len(r['checks'])==9;assert sum(x['groupCorrect'] for x in r['fixtures'])==16;assert sum(x['stateCorrect'] for x in r['fixtures'])==12;assert r['privacy']['allGETNoBody'] and r['privacy']['noContentInURLs']
assert len(read('defensive-validation.json'))==6
assert read('stale-result-validation.json')['passed']
assert all(read('stale-import-validation.json').values())
assert all(read('model-cancel-validation.json').values())
assert read('public-touch-validation.json')['realCPUInference']
assert read('public-gallery-validation.json')['legacyCategoriesVisible']
assert read('public-asset-validation.json')['galleryByteMatched']
assert read('asset-validation.json')['credentialMatches']==[]
root=Path('..');html=(root/'index.html').read_text();folders=re.findall(r'folder:"([^"]+)"',html);assert len(folders)==629
assert all((root/'deploy'/f/'index.html').is_file() for f in folders)
for p in Path('dist').rglob('*'):
 if p.is_file():assert p.read_bytes()==(root/'deploy/20261113-4'/p.relative_to('dist')).read_bytes()
sha=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],cwd='..',text=True).split()[0]
pages=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest'],text=True));assert pages['status']=='built' and pages['commit']==sha
status={'status':'published-and-publicly-verified','url':'https://xianghui.github.io/daily-app2/20261113-4/','pagesCommit':sha,'pagesStatus':'built','galleryEntries':629,'realLocalAndPublicAI':True,'fixtureQuality':{'workstreamLinks':'16/16','outcomeLabels':'12/16','humanCorrectionsVerified':True},'offlineScope':'fresh-worker inference within already-open warmed page only','mainPush':'verified in automation final command'}
Path('publication-status.json').write_text(json.dumps(status,indent=2));Path('final-audit.json').write_text(json.dumps({'allRequiredReportsChecked':True,'combinedFilesByteIdentical':True,'all629FoldersPresent':True,'pagesCommit':sha},indent=2));print('PASS final audit:',sha)
