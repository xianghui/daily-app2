from pathlib import Path
import json,csv,io,sys
from fractions import Fraction as F
prefix=sys.argv[1]if len(sys.argv)>1 else 'local-';checks=0
for path in Path('.').glob(prefix+'export-*.json'):
 r=json.loads(path.read_text());d=r['original'];rows=r['rows'];assert len(rows)==len(d['records'])==len(r['review']);checks+=3
 for i,(row,orig,review)in enumerate(zip(rows,d['records'],r['review'])):
  for k in ['id','note','amount']:assert row[k]==orig[k];checks+=1
  assert row['department']==review['department'];assert row['reviewedAmount']==review['amount'];assert row['reviewerNote']==review['note'];checks+=3
 if r['summary']:
  S=d['departments'];O=d['outputs'];loaded={x['id']:F(int(x['fullyLoaded']['n']),int(x['fullyLoaded']['d']))for x in r['departments']};total=sum(row['reviewedAmount']for row in rows);assert r['summary']['total']==r['summary']['allocated']==total;checks+=2
  for s in S:
   direct=sum(x['reviewedAmount']for x in rows if x['department']==s['id']);assert loaded[s['id']]==direct+sum(loaded[t['id']]*F(t['shares'].get(s['id'],0),10000)for t in S);checks+=1
  exact=[]
  for out in r['outputs']:
   expected=sum(loaded[s['id']]*F(s['shares'].get(out['id'],0),10000)for s in S);assert F(int(out['exact']['n']),int(out['exact']['d']))==expected;exact.append(expected);checks+=1
   assert out['difference']==out['allocated']-out['baseline'];checks+=1
  assert sum(exact)==sum(x['allocated']for x in r['outputs'])==sum(x['baseline']for x in r['outputs'])==total;checks+=3
 else:assert r['status']=='blocked'and not r['outputs']and r['metrics']['held']>0;checks+=1
 cp=path.with_suffix('.csv')
 if cp.exists():
  table=list(csv.DictReader(io.StringIO(cp.read_text())));src=[x for x in table if x['kind']=='source'];out=[x for x in table if x['kind']=='output'];assert len(src)==len(rows);assert len(out)==len(r['outputs']);checks+=2
  for record,row in zip(src,rows):
   for key,expected in [('id',row['id']),('original_note',row['note']),('original_amount',str(row['amount'])),('reviewed_amount',str(row['reviewedAmount'])),('department',row['department']),('decision',row['decision']),('reviewer_note',row['reviewerNote'])]:
    if expected.startswith(('=','+','-','@','\t','\r'))and key in ['id','original_note','department','decision','reviewer_note']:expected="'"+expected
    assert record[key]==expected,(cp,key,record[key],expected);checks+=1
  for record,row in zip(out,r['outputs']):
   for key,k in [('reciprocal_minor','allocated'),('direct_only_minor','baseline'),('difference_minor','difference')]:assert int(record[key])==row[k];checks+=1
 mp=path.with_suffix('.md')
 if mp.exists():
  md=mp.read_text()
  for row in rows:assert row['note']in md and row['reviewerNote']in md;checks+=2
json.dump(dict(assertions=checks,independentCsvParser=True,allPassed=True),open(prefix+'artifact-validation.json','w'),indent=2);print('PASS artifacts',prefix,checks)
