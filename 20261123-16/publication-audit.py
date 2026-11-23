import json,subprocess,pathlib
p=pathlib.Path('.')
sha=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True).split()[0]
b=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest'],text=True))
assert b['commit']==sha and b['status']=='built'
r=json.loads((p/'public-browser-validation.json').read_text());assert all(x['actual']==x['expected']for x in r['fixtures'])
a=json.loads((p/'public-asset-audit.json').read_text());assert len(a['byteMatches'])==7
legacy=json.loads((p/'public-legacy-validation.json').read_text());assert legacy['realSharedWasmWorker']
g=json.loads((p/'public-gallery-browser-validation.json').read_text());assert g['cards']==821
size=json.loads((p/'../deploy/runtime-deduplication.json').read_text())['afterBytes'];assert size<1000000000
result={'status':'published-verified','url':'https://xianghui.github.io/daily-app2/20261123-16/','pagesCommit':sha,'pagesStatus':b['status'],'realAiFixtures':2,'knownAnswersCorrect':6,'publicAssetByteMatches':7,'galleryCards':821,'siteBytes':size,'offlineScope':'fresh worker in already-open warmed page','legacyImportExportRegression':True,'digestSent':False}
(p/'publication-status.json').write_text(json.dumps(result,indent=2));print(json.dumps(result))
