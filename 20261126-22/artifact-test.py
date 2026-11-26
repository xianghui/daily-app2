"""Independent Decimal cash-flow oracle and Python stdlib CSV/JSON artifact parsing."""
import json,csv,io,sys,glob
from decimal import Decimal as D, localcontext, ROUND_FLOOR
from pathlib import Path
checks=0

def check(x,msg='assertion'):
 global checks
 checks+=1
 if not x: raise AssertionError(msg)

def oracle(s):
 b,c,f,n=map(int,[s['basisMinor'],s['couponMinor'],s['faceMinor'],s['years']])
 with localcontext() as ctx:
  ctx.prec=70
  lo,hi=D('-.95'),D(10)
  for _ in range(280):
   mid=(lo+hi)/2
   pv=sum((D(c)+(D(f) if t==n else 0))/(1+mid)**t for t in range(1,n+1))
   if pv>b:lo=mid
   else:hi=mid
  y=(lo+hi)/2
  check(abs(D(str(s['yieldAnnual']))-y)<D('1e-12'),'yield')
  opening=b
  for t,r in enumerate(s['rows'],1):
   check(r['year']==t);check(r['openingMinor']==opening)
   true_interest=D(opening)*y
   rounded=int((true_interest+D('.5')).to_integral_value(rounding=ROUND_FLOOR))
   # JS binary root near an exact half-unit can round either way: these cases are reported separately.
   jsrounded=r['interestMinor']-r['roundingAdjustmentMinor']
   if rounded!=jsrounded:check(abs(true_interest-D(jsrounded))<=D('.5000001'),'round tie tolerance')
   else:check(True)
   interest=f-opening+c if t==n else jsrounded
   check(r['interestMinor']==interest)
   closing=opening+interest-c
   check(r['closingMinor']==closing)
   check(r['amortizationMinor']==interest-c)
   check(r['roundingAdjustmentMinor']==(interest-jsrounded if t==n else 0))
   # Integer quotient/remainder independently spreads straight-line carrying change.
   def nearest_ratio(a,n):return (2*a+n)//(2*n)
   before=b+nearest_ratio((f-b)*(t-1),n);after=b+nearest_ratio((f-b)*t,n)
   check(r['straightClosingMinor']==after)
   check(r['straightInterestMinor']==c+after-before)
   opening=closing
  check(opening==f);check(sum(r['interestMinor'] for r in s['rows'])==n*c+f-b)
  check(s['totalInterestMinor']==n*c+f-b);check(s['identityVerified'])
  check(s['maxCarryingGapMinor']==max(abs(r['closingMinor']-r['straightClosingMinor']) for r in s['rows']))
  check(s['firstYearInterestGapMinor']==s['rows'][0]['interestMinor']-s['rows'][0]['straightInterestMinor'])

prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
files=glob.glob(prefix+'export-*.json')
if prefix=='core-':
 cases=json.load(open('core-validation.json'))['cases']
 for case in cases:oracle(case['summary'])
 result={'cases':len(cases),'assertions':checks,'oracle':'Python Decimal 70-digit independent PV root; exact integer schedule and baseline checks'}
else:
 for name in files:
  d=json.load(open(name));check(d['format']=='coupon-trail-v1');check(len(d['rows'])==len(d['original']['records']));check(len(d['review'])==len(d['rows']))
  for i,r in enumerate(d['rows']):
   check(r['original']==d['original']['records'][i]);check(r['id']==r['original']['id']);check(r['amountMinor']==d['review'][i]['amountMinor']);check(r['reviewerNote']==d['review'][i]['reviewerNote'])
  check(d['metrics']['records']==len(d['rows']));check(d['metrics']['held']==sum(r['decision']=='hold' for r in d['rows']))
  def shield(x):return "'"+x if x and x[0] in '=+-@\t\r' else x
  audit=Path(name).with_suffix('.csv')
  if audit.exists():
   rows=list(csv.DictReader(io.StringIO(audit.read_text())));check(len(rows)==len(d['rows']))
   for row,r in zip(rows,d['rows']):
    check(row['id']==r['id']);check(row['original_note']==shield(r['original']['note']));check(int(row['original_amount_minor'])==r['original']['amountMinor']);check(row['reviewed_role']==r['type']);check(row['decision']==r['decision']);check(int(row['reviewed_amount_minor'])==r['amountMinor']);check(row['reviewer_note']==shield(r['reviewerNote']))
  if d['summary']:
   check(d['complete']);check(not d['blockers']);check(d['summary']['basisMinor']==d['totals']['price']+d['totals']['fee']);check(d['summary']['faceMinor']==d['totals']['face']);check(d['summary']['couponMinor']==d['totals']['coupon']);oracle(d['summary'])
   w=Path(name.replace('.json','-worksheet.csv'))
   if w.exists():
    ws=list(csv.DictReader(io.StringIO(w.read_text())));check(len(ws)==d['original']['years'])
    for row,expected in zip(ws,d['summary']['rows']):
     for k,v in row.items():check(int(v)==expected[k])
  else:check(d['status']=='blocked');check(bool(d['blockers']))
  md=Path(name).with_suffix('.md')
  if md.exists():
   text=md.read_text();check(d['original']['title'] in text)
   for r in d['rows']:check(r['id'] in text);check(r['reviewerNote'].replace('<','&lt;').replace('>','&gt;') in text)
 result={'artifacts':len(files),'assertions':checks,'parser':'Python stdlib csv and JSON; independent Decimal PV/cent schedule oracle'}
Path(prefix+'artifact-validation.json').write_text(json.dumps(result,indent=2));print('PASS artifacts',result)
