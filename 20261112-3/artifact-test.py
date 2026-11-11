import csv,json,io
from pathlib import Path
checks=[]
for name in ['reviewed','max','phone']:
 a=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())));assert len(rows)==len(a['records'])
 for r,o in zip(rows,a['records']):
  assert r['id']==o['id'] and r['source']==o['text'] and r['reviewedProduct']==o['item']
  assert int(r['annualUnits'])==o['annualUnits'] and int(r['unitCents'])==o['unitCents'] and int(r['annualCents'])==o['annualCents']
  expected=o['note'];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected
  assert r['note']==expected
 checks.append(name+' all-record audit CSV roundtrip')
a=json.loads(Path('export-reviewed.json').read_text());ps=list(csv.DictReader(io.StringIO(Path('export-products.csv').read_text())));assert len(ps)==len(a['products'])
for r,o in zip(ps,a['products']):
 assert r['product']==o['id'] and int(r['annualCents'])==o['annualCents'] and r['class']==o['class'] and int(r['countsPerYear'])==o['countsPerYear']
assert sum(int(p['annualCents']) for p in ps)==a['metrics']['totalAnnualCents'];md=Path('export-reviewed.md').read_text();assert all(r['id'] in md for r in a['records']);assert 'second line' in md and '&lt;check&gt;' in md
assert json.loads(Path('export-max.json').read_text())['originalInput']==json.loads(Path('export-roundtrip.json').read_text())['originalInput']
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'checks':checks+['product CSV totals/classes/count frequency','Markdown all source IDs and escaped multiline notes','maximum audit import originals preserved']},indent=2));print('PASS independent CSV/JSON/Markdown artifact checks')
