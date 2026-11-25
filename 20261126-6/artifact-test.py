import csv,json,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';checks=0;files=[]
def escaped(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
for f in sorted(Path('.').glob(prefix+'export-*.json')):
 a=json.loads(f.read_text());files.append(str(f));d=a['original'];rows=a['rows'];reviews=a['review'];w=a['worksheet'];assert len(rows)==len(d['requests'])==len(reviews)==len(w['steps']);checks+=1
 av=int(w['balances']['openingAvailable']);rv=int(w['balances']['openingReserved']);sums={k:0 for k in ['sale','refund','fee','payout','reserve','release']}
 for original,r,v,s in zip(d['requests'],rows,reviews,w['steps']):
  assert all(r[k]==val for k,val in original.items());assert r['review']==v;assert r['id']==s['id'];checks+=3
  if v['decision']=='hold':assert s['status']=='held' and s['amount'] is None;checks+=1;continue
  assert s['status']=='approved';assert int(s['availableBefore'])==av;assert int(s['reservedBefore'])==rv;checks+=3
  amount=int(v['amount']);k=r['rule'];da,dr={'sale':(amount,0),'refund':(-amount,0),'fee':(-amount,0),'payout':(-amount,0),'reserve':(-amount,amount),'release':(amount,-amount)}[k];av+=da;rv+=dr;sums[k]+=amount
  assert int(s['availableAfter'])==av;assert int(s['reservedAfter'])==rv;checks+=2
 assert str(av)==w['computedAvailable'];assert str(rv)==w['computedReserved'];assert int(w['availableDifference'])==av-int(w['balances']['closingAvailable']);assert int(w['reservedDifference'])==rv-int(w['balances']['closingReserved']);assert w['totals']=={k:str(v)for k,v in sums.items()};assert int(w['baselineSalesLessRefunds'])==sums['sale']-sums['refund'];assert int(w['baselineMinusActualPayout'])==sums['sale']-sums['refund']-sums['payout'];checks+=7
 if w['status']=='ready':assert not w['errors'] and av>=0 and rv>=0 and w['availableDifference']==w['reservedDifference']=='0';checks+=1
 else:assert w['errors'];checks+=1
 cf=f.with_suffix('.csv')
 if cf.exists():
  data=list(csv.DictReader(cf.open(newline='')));assert len(data)==len(rows);checks+=1
  for row,r in zip(data,rows):
   for key,value in [('id',r['id']),('original_note',r['note']),('original_minor_units',r['amount']),('profile',r['review']['profile']),('rule',r['rule']),('reviewed_minor_units',r['review']['amount']),('decision',r['review']['decision']),('review_note',r['review']['note'])]:assert row[key]==escaped(value),(f,key,row[key],value);checks+=1
 sf=f.with_name(f.stem+'-steps.csv')
 if sf.exists():
  data=list(csv.DictReader(sf.open(newline='')));assert len(data)==len(w['steps']);checks+=1
  for row,s in zip(data,w['steps']):
   assert row['id']==s['id'];assert row['reconciliation_status']==w['status'];checks+=2
   for key,field in [('amount_minor_units','amount'),('available_before','availableBefore'),('available_after','availableAfter'),('reserved_before','reservedBefore'),('reserved_after','reservedAfter')]:assert row[key]==escaped(s[field] or '');checks+=1
 mf=f.with_suffix('.md')
 if mf.exists():
  md=mf.read_text();assert all(r['note'] in md and r['review']['note'] in md for r in rows);assert w['status'].upper() in md;checks+=2
for tag in ['reviewed','held']:
 a=json.loads(Path(prefix+'export-'+tag+'.json').read_text());assert a['review'][0]['note']=='=SUM(1,2)\nReviewed "reserve", <script> & 🧾';checks+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'jsonArtifacts':files,'independentParsers':'Python csv/json and integer balance oracle','assertions':checks},indent=2));print('PASS artifacts',prefix,checks)
