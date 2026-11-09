import json,csv
from pathlib import Path
j=json.loads(Path('export-reviewed.json').read_text())
with Path('export-reviewed.csv').open(newline='') as f: rows=list(csv.DictReader(f))
assert len(rows)==len(j['originalInput']['notes'])==len(j['records'])
for r,original in zip(rows,j['records']):
 for k in ['id','source','proposed','selected','decision','date','pct','note']:
  value=str(original[k])
  if value and value[0] in '=+-@\t\r':value="'"+value
  assert r[k]==value,(k,r[k],value)
assert rows[0]['note'].startswith("'=1+1\nReviewed,")
assert j['metrics']['cpi'] is None
assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput']
assert 'Complete source audit' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCsvParsing':True,'everyReportPreserved':len(rows),'editedPercent':rows[0]['pct'],'heldReports':j['metrics']['held'],'multilineQuoteUnicodeFormulaEscaping':True,'originalInputRoundtrip':True},indent=2))
print('PASS downloaded CSV/JSON/Markdown independent round-trip')
