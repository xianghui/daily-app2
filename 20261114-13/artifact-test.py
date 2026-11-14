import json,csv,io,math
from pathlib import Path
checks=[]
for name in ['fixture0','fixture1','reviewed','held','undo','max','challenge']:
 r=json.load(open('export-'+name+'.json'));assert r['total']==len(r['originalInput']['records'])==len(r['reviews']);assert r['total']==r['approved']+r['held'];assert sum(f['n'] for f in r['features'])==r['approved']
 assert [x['id'] for x in r['reviews']]==[x['id'] for x in r['originalInput']['records']]
 if name in ['fixture0','fixture1','reviewed','max']:
  rows=list(csv.DictReader(open('export-'+name+'.csv',newline='')));assert len(rows)==r['total']
  for x,y in zip(rows,r['reviews']):
   assert x['id']==y['id'];assert float(x['reference_A'])==y['a'];assert float(x['alternative_B'])==y['b']
   for field,key in [('sample','sample'),('reviewer','owner'),('review_note','reviewNote')]:
    expected=y[key];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected
    assert x[field]==expected,(field,x[field],expected)
 if name=='reviewed':
  assert r['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify units';assert r['reviews'][0]['owner']=='=Owner\n"second", line'
  summaries=list(csv.DictReader(open('export-reviewed.summary.csv',newline='')));assert len(summaries)==len(r['features'])
  for x,y in zip(summaries,r['features']):assert math.isclose(float(x['bias']),y['bias'])
  md=Path('export-reviewed.md').read_text();assert 'quoted' in md and 'B minus A' in md
 checks.append(name)
json.dump({'independentlyParsedAuditExports':checks,'allSourceRecordsAndEditedNewlinesSurvive':True,'formulaProtectedCSV':True,'summaryMatchesReviewed':True},open('artifact-validation.json','w'),indent=2)
print('PASS independent JSON/CSV/Markdown conservation and reviewed newline/escaping checks')
