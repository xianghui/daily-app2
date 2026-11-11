import json,csv,math
from pathlib import Path
reports=[]
for stem in ['reviewed','max']:
 a=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(Path('export-'+stem+'.csv').open(newline='')))
 assert len(rows)==len(a['records'])
 for r,s in zip(rows,a['records']):
  assert r['id']==s['id'] and r['source']==s['original']['text']
  assert float(r['observed'])==s['observed'] and r['instrument']==s['instrument']
  assert float(r['source_observed'])==s['original']['observed']
  assert r['role']==s['role'] and r['decision']==s['decision']
  if s['corrected'] is not None:assert math.isclose(float(r['corrected']),s['corrected'])
  else:assert r['corrected']==''
  assert r['note']==("'"+s['note'] if s['note'].startswith(('=','+','-','@','\t','\r')) else s['note'])
 reports.append({'artifact':stem,'retained':len(rows),'reviewFieldsAndNumericValuesPreserved':True,'spreadsheetFormulaEscaping':True})
md=Path('export-reviewed.md').read_text();a=json.loads(Path('export-reviewed.json').read_text())
assert all(r['id'] in md for r in a['records']);assert '6.7' in md
Path('artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent Python CSV/JSON/Markdown parsing and all-record conservation')
