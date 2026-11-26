import json,csv,sys,pathlib
prefix=sys.argv[1]if len(sys.argv)>1 else 'local-';checks=0
for p in pathlib.Path('.').glob(prefix+'export-*.json'):
 r=json.load(open(p));d=r['original'];rows=r['rows'];assert len(rows)==len(d['records']);assert len(r['review'])==len(rows);checks+=2
 for source,review,row in zip(d['records'],r['review'],rows):
  for k in ('id','note','amount'):assert row[k]==source[k];checks+=1
  assert row['reviewedAmount']==review['amount']and row['kind']==review['kind'];checks+=1
 if r['summary']:
  bank=d['bankBalance'];book=d['bookBalance'];baseline=book
  for row in rows:
   sign=1 if row['kind']in('transit','receipt')else -1;amount=sign*row['reviewedAmount'];assert amount==row['signedAdjustment'];checks+=1;baseline+=amount
   if row['kind']in('transit','outstanding'):bank+=amount
   else:book+=amount
  assert r['summary']['bank']==bank and r['summary']['book']==book and r['summary']['gap']==bank-book;assert r['summary']['baselineGap']==d['bankBalance']-baseline;checks+=2
 else:assert r['status']=='blocked'and not r['bookAdjustments'];checks+=1
 cp=p.with_suffix('.csv')
 if cp.exists():
  cr=list(csv.DictReader(open(cp,newline='')));assert len(cr)==len(rows);checks+=1
  for c,row in zip(cr,rows):
   assert c['id']==row['id'];assert int(c['reviewed_amount_minor'])==row['reviewedAmount'];assert int(c['signed_adjustment_minor'])==row['signedAdjustment'];expected=row['reviewerNote'];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r'))else expected;assert c['reviewer_note']==expected;assert c['original_note']==row['note'];checks+=5
 bp=p.with_name(p.stem+'-book.csv')
 if bp.exists():
  cr=list(csv.DictReader(open(bp,newline='')));assert len(cr)==len(r['bookAdjustments']);checks+=1
  for c,row in zip(cr,r['bookAdjustments']):assert c['source_id']==row['id']and int(c['book_adjustment_minor'])==row['amount'];checks+=1
 mp=p.with_suffix('.md')
 if mp.exists():
  md=mp.read_text();assert r['original']['title']in md;checks+=1
  for row in rows:assert row['id']in md and row['note']in md and row['reviewerNote']in md;checks+=1
assert checks>300
json.dump({'assertions':checks,'independentParsers':'Python csv/json, independent signed two-sided arithmetic'},open(prefix+'artifact-validation.json','w'),indent=2);print('PASS artifacts',prefix,checks)
