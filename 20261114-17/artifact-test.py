import csv,json,io
from pathlib import Path
checks=[]
for p in Path('.').glob('export-*.json'):
 r=json.loads(p.read_text());assert len(r['reviews'])==len(r['originalInput']['records']);assert [x['id'] for x in r['reviews']]==[x['id'] for x in r['originalInput']['records']]
 c=p.with_suffix('.csv')
 if c.exists():
  rows=list(csv.DictReader(io.StringIO(c.read_text())));assert len(rows)==len(r['reviews'])
  for got,want,original in zip(rows,r['reviews'],r['originalInput']['records']):
   assert json.loads(got['original'])==original
   for column,key in [('id','id'),('category','kind'),('pass','pass'),('issue','entity'),('owner','owner'),('review_note','reviewNote'),('decision','decision')]:
    value=str(want[key]);expected="'"+value if value and value[0] in '=+-@\t\r' else value
    assert got[column]==expected,(column,got[column],expected)
  checks.append({'file':str(c),'rows':len(rows),'originalsAndReviewsPreserved':True})
r=json.load(open('export-reviewed.json'));assert '\n' in r['reviews'][0]['reviewNote'] and '\n' in r['reviews'][0]['owner'];assert 'quoted' in Path('export-reviewed.md').read_text();assert '\n' in json.load(open('export-max.json'))['reviews'][-1]['reviewNote']
json.dump(dict(parsedCsvChecks=checks,multilineAndFormulaEscaping=True,allJsonConserved=True),open('artifact-validation.json','w'),indent=2)
print('PASS independent CSV/JSON artifact round trips')
