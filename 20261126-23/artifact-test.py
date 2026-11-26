import json,csv,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0

def check(r):
 global checks
 original=r['original'];rows=r['rows'];assert len(rows)==len(original['records']);assert [x['id'] for x in rows]==[x['id']for x in original['records']];checks+=2
 for x,o in zip(rows,original['records']):assert x['original']==o;checks+=1
 if r['summary']:
  s=r['summary'];tot={k:sum(x['amountMinor'] for x in rows if x['type']==k)for k in ['capital','expense','proceeds']}
  expected={'assetBasisMinor':tot['capital'],'expenseMinor':tot['expense'],'proceedsMinor':tot['proceeds'],'grossOutflowMinor':tot['capital']+tot['expense'],'netCashMinor':tot['capital']+tot['expense']-tot['proceeds'],'naiveBasisMinor':tot['capital']+tot['expense']-tot['proceeds'],'basisGapMinor':tot['proceeds']-tot['expense']}
  for k,v in expected.items():assert s[k]==v,(k,s[k],v);checks+=1
  assert all(x['date']<=original['readyDate'] for x in rows if x['type']=='capital');checks+=1
  assert len(s['rows'])==len(rows);checks+=1
 else: assert r['status']=='blocked' and r['blockers'];checks+=1

if prefix=='core-':
 cases=json.loads(Path('core-cases.json').read_text())
 for r in cases:check(r)
else:
 files=list(Path('.').glob(prefix+'export-*.json'));assert files
 for f in files:
  r=json.loads(f.read_text());check(r)
  cf=f.with_suffix('.csv')
  if cf.exists():
   with cf.open(newline='')as h: rows=list(csv.DictReader(h))
   assert len(rows)==len(r['rows']);checks+=1
   for x,y in zip(rows,r['rows']):
    for ck,yk in [('id','id'),('reviewed_type','type'),('decision','decision'),('reviewed_date','date'),('reviewer_note','reviewerNote')]:
     expected=str(y[yk]);expected="'"+expected if expected and expected[0] in '=+-@\t\r'else expected
     assert x[ck]==expected,(f,ck,x[ck],expected);checks+=1
    assert int(x['reviewed_amount_minor'])==y['amountMinor'];assert x['original_note']==y['original']['note'];checks+=2
  wf=f.with_name(f.stem+'-worksheet.csv')
  if wf.exists():
   with wf.open(newline='')as h: lines=list(csv.DictReader(h))
   assert len(lines)==len(r['summary']['rows']);checks+=1
   for x,y in zip(lines,r['summary']['rows']):
    for k,v in y.items():assert x[k]==str(v);checks+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentlyParsedAssertions':checks,'passed':True},indent=2));print('PASS independent artifacts',prefix,checks)
