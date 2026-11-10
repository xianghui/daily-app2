import csv,json
from pathlib import Path
p=Path('.');a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed.csv').open(newline='')))
assert len(rows)==len(a['records'])
for r,x in zip(rows,a['records']):
 assert r['id']==x['id'] and r['source']==x['source'] and r['decision']==x['decision']
 assert int(r['rpn'])==x['rpn'] and int(r['projectedRpn'])==x['projectedRpn']
 assert r['action']==("'" if x['action'].startswith(('=','+','-','@','\t','\r')) else '')+x['action']
 assert r['owner']==x['owner']
assert rows[0]['action'].startswith("'=1+1")
md=(p/'export-reviewed.md').read_text()
assert all(r['id'] in md and r['modeTitle'] in md for r in a['records'])
assert json.loads((p/'export-max.json').read_text())['originalInput']==json.loads((p/'export-roundtrip.json').read_text())['originalInput']
(p/'artifact-validation.json').write_text(json.dumps({'csvParsedRows':len(rows),'allSourcesRatingsActionsPreserved':True,'spreadsheetFormulaGuard':True,'markdownCompleteAudit':True,'jsonOriginalRoundTrip':True},indent=2))
print('PASS independent CSV/JSON/Markdown artifact checks')
