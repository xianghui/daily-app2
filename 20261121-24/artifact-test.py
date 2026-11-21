import csv,json,math
from pathlib import Path
checks=[]
for i in range(2):
 r=json.loads(Path(f'export-fixture{i}.json').read_text())
 for suffix in ['audit','forecast']:
  rows=list(csv.DictReader(Path(f'export-fixture{i}-{suffix}-csv.csv').open(newline='')))
  assert len(rows)==7
  if suffix=='audit':assert [x['id'] for x in rows]==[x['id'] for x in r['reviews']]
  else:
   for x,y in zip(rows,r['analysis']['table']):assert math.isclose(float(x['reconciled_forecast']),y['reconciled'],abs_tol=1e-9)
 assert all(x['value']==y['value'] for x,y in zip(r['reviews'],r['originalInput']['estimates']))
 a=r['analysis'];assert a['weightedLoss']<=a['bottomUpLoss'];assert a['coherentResidual']<1e-8
 for n in a['table']:
  children=[x for x in a['table'] if x['parent']==n['id']]
  if children:assert math.isclose(n['reconciled'],sum(x['reconciled'] for x in children),abs_tol=1e-8)
  assert n['reconciled']>=0
 checks.append(f'fixture {i}: JSON/CSV 7 records, exact numeric round trip, nonnegative coherent sums and loss comparison')
r=json.loads(Path('export-reviewed-json.json').read_text());assert r['reviews'][0]['value']==110;assert r['originalInput']['estimates'][0]['value']==100
note='=SUM(1,2)\nReviewed "source", preserved.';assert r['reviews'][0]['note']==note
rows=list(csv.DictReader(Path('export-reviewed-audit-csv.csv').open(newline='')));assert rows[0]['note']=="'"+note;assert rows[0]['value']=='110'
assert note in Path('export-reviewed-markdown.md').read_text();assert json.loads(Path('export-held.json').read_text())['analysis'] is None
r=json.loads(Path('export-max.json').read_text());assert len(r['reviews'])==32 and len(r['originalInput']['nodes'])==12
checks.append('reviewed value and multiline quote/comma/formula note survive downloads; original preserved; holds and max batch conserved')
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'checks':checks},indent=2));print('PASS independent Python CSV/JSON artifact parsing')
