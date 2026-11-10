import json,csv
from pathlib import Path
checks=[]
for stem in ['reviewed','max']:
 a=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(Path('export-'+stem+'.csv').open(newline='')))
 assert len(rows)==len(a['originalInput']['records'])==len(a['records'])
 for row,r in zip(rows,a['records']):
  expected=r['note'];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected
  assert row['id']==r['id'] and row['source']==r['original']['text']
  assert row['note']==expected and row['stratum']==r['stratum'] and row['decision']==r['decision']
  assert (row['selected']=='true')==r['selected']
  assert row['seed']==a['settings']['seed']
 assert sum(r['selected'] for r in a['records'])==a['settings']['sampleSize']==len(a['sample'])
 checks.append({'artifact':stem,'records':len(rows),'selected':len(a['sample']),'allReviewedFieldsPreserved':True})
assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput']
assert '\nnext line' in json.loads(Path('export-reviewed.json').read_text())['records'][0]['note']
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent Python CSV/JSON parsing, multiline escaping and roundtrip',checks)
