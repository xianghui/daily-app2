import csv,json,io
from pathlib import Path
checks=[]
for tag in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+tag+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+tag+'.csv').read_text())))
 assert len(rows)==len(r['reviews'])
 for row,x in zip(rows,r['reviews']):
  assert row['id']==x['id']
  assert int(row['units'])==x['units']
  assert float(row['days'])==x['days']
  assert int(row['price_cents'])==x['priceCents']
  assert row['product']==x['kind']
  for key,col in [('owner','owner'),('reviewNote','review_note')]:
   expected=x[key]
   if expected and expected[0] in '=+-@\t\r': expected="'"+expected
   assert row[col]==expected,(row[col],expected)
 assert sum(int(x['units']) for x in rows)==r['reviewedUnits']
 checks.append({'artifact':tag,'parsedRecords':len(rows),'allFieldsMatched':True})
r=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text();assert r['reviews'][0]['owner'] in md;assert r['reviews'][0]['reviewNote'] in md
assert '\n' in r['reviews'][0]['owner'] and '\n' in r['reviews'][0]['reviewNote']
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent CSV/JSON/Markdown parse, review edits, multiline escaping and units conservation')
