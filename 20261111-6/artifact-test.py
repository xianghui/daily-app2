import json,csv,math
from pathlib import Path
checks=[]
for stem in ['reviewed','max']:
 a=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(Path('export-'+stem+'.csv').open(newline='')))
 assert len(rows)==len(a['originalInput']['requests'])==len(a['records'])
 for row,r in zip(rows,a['records']):
  assert row['id']==r['id'] and row['source']==r['original']['text']
  expected=r['note'];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected
  assert row['note']==expected
  p=next(p for p in a['preparations'] if p['id']==r['id']);assert math.isclose(float(row['stock_mL']),p['stockVolume']);assert math.isclose(float(row['diluent_mL']),p['diluent'])
 assert math.isclose(a['totals']['final'],a['totals']['stock']+a['totals']['diluent']);checks.append({'artifact':stem,'records':len(rows),'allReviewedFieldsAndVolumeConserved':True})
assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput']
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent Python CSV/JSON parsing and roundtrip',checks)
