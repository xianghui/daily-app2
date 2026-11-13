import json,subprocess
from pathlib import Path
required=['browser-validation.json','combined-browser-validation.json','defensive-validation.json','model-cancel-validation.json','oracle-validation.json','artifact-validation.json','asset-validation.json','gallery-validation.json','gallery-ui-validation.json','combined-gallery-ui-validation.json','combined-assembly-validation.json','public-browser-validation.json','public-gallery-ui-validation.json','public-asset-validation.json']
reports={p:json.loads(Path(p).read_text()) for p in required}
assert len(reports['browser-validation.json']['fixtures'])==2
assert sum(x['correct'] for x in reports['browser-validation.json']['fixtures'])==8
assert reports['oracle-validation.json']['independentFractionCases']==500
assert len(reports['defensive-validation.json'])==6
assert reports['gallery-validation.json']['entries']==647
assert reports['asset-validation.json']['hits']==[]
assert reports['public-asset-validation.json']['galleryByteMatched']
for p in ['public-browser-validation.json','combined-browser-validation.json']:
 assert sum(x['correct'] for x in reports[p]['fixtures'])==8
 assert len(reports[p]['checks'])==9
status=json.loads(Path('publication-status.json').read_text());assert status['status']=='published-verified'
Path('final-audit.json').write_text(json.dumps({'allRequiredReports':list(reports),'twoFixturesKnownAnswerMatches':8,'independentFormulaCases':500,'galleryEntries':647,'publicPagesCommit':status['pagesCommit'],'status':'all checks passed; physical mobile/other browsers and cold offline startup untested'},indent=2));print('PASS final local/combined/public report audit')
