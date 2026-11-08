import json,csv
from pathlib import Path
checks=[]
for stem in ['reviewed','boundary']:
 a=json.loads(Path('export-'+stem+'.json').read_text()); rows=list(csv.DictReader(Path('export-'+stem+'.csv').open(newline='')))
 assert len(rows)==len(a['reports'])
 for row,r in zip(rows,a['reports']):
  assert row['id']==r['id']
  for k,rk in [('text','text'),('note','note'),('verification','check')]:
   expected=r[rk]; expected="'"+expected if expected and expected[0] in '=+-@\t\r' else expected
   assert row[k]==expected,(k,row[k],expected)
  assert row['reviewedRemedy']==r['remedy'];assert row['state']==r['state'];assert int(row['reviewedImpact'])==r['impact']
 checks.append(stem+' JSON/CSV fields roundtrip including quoted commas/newlines and formula escaping')
a=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text();assert all(r['text'] in md and r['id'] in md for r in a['reports']);assert a['reports'][0]['note'] in md
assert a['originalInput']['budget']==7 and a['input']['budget']==4
Path('artifact-validation.json').write_text(json.dumps({'checks':checks,'markdownAllRecords':True,'originalSettingsPreserved':True},indent=2));print('PASS artifacts: all source and edited records survive actual downloads')
