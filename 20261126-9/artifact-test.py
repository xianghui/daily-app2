import csv,json,sys,glob
from fractions import Fraction as F
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';count=0;files=[]
def check(v):
 global count
 assert v
 count+=1
def f(v):return F(int(v['n']),int(v['d']))
def safe(v):
 s=str(v)
 return "'"+s if s and s[0]in'=+-@\t\r' else s
for path in glob.glob(prefix+'export-*.json'):
 d=json.load(open(path));check(d['schema']=='payment-cadence/v1');check(len(d['original']['requests'])==len(d['rows'])==len(d['review']));check(d['metrics']['contracts']==len(d['rows']))
 for i,r in enumerate(d['rows']):
  orig=d['original']['requests'][i];check(r['id']==orig['id']==r['review']['id']);check(r['note']==orig['note']);check(r['payment']==orig['payment']);check(r['periods']==orig['periods']);check(r['rateBps']==orig['rateBps']);check(r['review']==d['review'][i]);check(len(r['review']['candidates'])==len(d['original']['profiles']))
  if r['status']=='held':check(r['calculation']is None);continue
  for key,rule in [('calculation',r['rule']),('baseline','arrears')]:
   c=r[key];v=r['review'];payment=F(int(v['payment']));rate=F(v['rateBps'],10000);times=list(range(v['periods']))if rule=='advance'else list(range(1,v['periods']+1));pv=sum((payment/(1+rate)**t for t in times),F(0));check(f(c['pv'])==pv);check(f(c['immediatePayment'])==(payment if rule=='advance'else 0));check(f(c['afterImmediate'])==pv-f(c['immediatePayment']));check(f(c['totalPayments'])==payment*v['periods']);check(f(c['totalInterest'])+pv==payment*v['periods']);check(f(c['closing'])==0);check(c['reconciled']);check(len(c['rows'])==len(times));balance=pv
   for row,t in zip(c['rows'],times):
    check(row['at']==t);check(f(row['opening'])==balance);interest=0 if t==0 else balance*rate;check(f(row['interest'])==interest);check(f(row['payment'])==payment);balance+=interest-payment;check(f(row['closing'])==balance);check(f(row['discount'])==1/(1+rate)**t);check(f(row['presentValue'])==payment/(1+rate)**t)
 check(d['metrics']['ready']==sum(r['status']=='ready'for r in d['rows']));check(d['metrics']['held']==sum(r['status']=='held'for r in d['rows']));check(d['metrics']['timingDifferences']==sum(r['status']=='ready'and f(r['calculation']['pv'])!=f(r['baseline']['pv'])for r in d['rows']))
 stem=path[:-5];cp=Path(stem+'.csv')
 if cp.exists():
  rows=list(csv.DictReader(cp.open(newline='')));check(len(rows)==len(d['rows']))
  for got,r in zip(rows,d['rows']):
   for key,val in [('id',r['id']),('original_note',r['note']),('original_payment',r['payment']),('original_periods',r['periods']),('original_rate_bps',r['rateBps']),('profile',r['review']['profile']),('timing',r['rule']),('reviewed_payment',r['review']['payment']),('reviewed_periods',r['review']['periods']),('reviewed_rate_bps',r['review']['rateBps']),('decision',r['review']['decision']),('review_note',r['review']['note']),('status',r['status'])]:check(got[key]==safe(val))
   if r['calculation']:check(F(got['gross_pv_fraction'])==f(r['calculation']['pv']));check(F(got['after_immediate_fraction'])==f(r['calculation']['afterImmediate']));check(F(got['total_interest_fraction'])==f(r['calculation']['totalInterest']));check(F(got['arrears_baseline_pv_fraction'])==f(r['baseline']['pv']))
 wp=Path(stem+'-worksheet.csv')
 if wp.exists():
  rows=list(csv.DictReader(wp.open(newline='')));expected=[(r,row)for r in d['rows'] for row in (r['calculation']['rows']if r['calculation']else [None])];check(len(rows)==len(expected))
  for got,(r,row)in zip(rows,expected):
   check(got['id']==r['id']);check(got['status']==r['status'])
   if row:
    check(int(got['payment_at_period'])==row['at'])
    for col,key in [('opening_fraction','opening'),('interest_fraction','interest'),('payment_fraction','payment'),('closing_fraction','closing'),('discount_factor_fraction','discount'),('present_value_fraction','presentValue')]:check(F(got[col])==f(row[key]))
   else:check(got['payment_at_period']=='')
 mp=Path(stem+'.md')
 if mp.exists():
  md=mp.read_text();check(d['original']['title']in md)
  for r in d['rows']:check(r['note']in md);check(r['review']['note']in md);check('## '+r['id']+' — '+r['status']in md)
 files.append(path)
check(len(files)>=10)
json.dump({'artifacts':files,'independentAssertions':count,'parsers':'Python json/csv/Fraction; every original, review, rational balance and CSV payment witness checked'},open(prefix+'artifact-validation.json','w'),indent=2);print('PASS artifact assertions',count,len(files))
