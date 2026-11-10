import json,csv
from pathlib import Path
j=json.loads(Path('export-reviewed.json').read_text())
with Path('export-reviewed.csv').open(newline='') as f: rows=list(csv.DictReader(f))
assert len(rows)==len(j['originalInput']['notes'])==len(j['records'])
keys={'id':'id','asset':'asset','source':'source','proposed':'proposed','reviewedService':'selected','decision':'decision','annotation':'note'}
for r,original in zip(rows,j['records']):
 for k,v in keys.items():
  value=str(original[v])
  if value and value[0] in '=+-@\t\r':value="'"+value
  assert r[k]==value,(k,r[k],value)
assert rows[0]['annotation'].startswith("'=1+1\nReviewed,")
assert j['metrics']['duplicateNotes']==1 and j['metrics']['held']==1
assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput']
assert 'Complete source audit' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCsvParsing':True,'allRecordsPreserved':len(rows),'held':1,'duplicateNotesConsolidated':1,'multilineQuoteUnicodeFormulaEscaping':True,'originalInputRoundtrip':True},indent=2))
print('PASS independent downloaded JSON/CSV/Markdown parsing, escaping and roundtrip')
