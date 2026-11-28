import json,csv,math,sys,glob
from decimal import Decimal,getcontext
getcontext().prec=45
D=lambda x:Decimal(str(x))
PI=Decimal('3.141592653589793238462643383279502884197169399')
def T(j,d):return (2*D(j['lengthMM'])/1000*D(j['frequencyHZ']))**2*D(j['densityKGm3'])*PI*(D(d)/1000)**2/4
checks=0
for case in json.load(open('core-cases.json')):
 j=case['r'];got=case['result'];p=next(p for p in case['source']['profiles'] if p['id']==j['profileId'])
 valid=[(abs(T(j,d)-D(j['preferredN'])),d,T(j,d)) for d in p['gaugesMM'] if D(j['targetMin'])<=T(j,d)<=D(j['targetMax'])]
 want=min(valid) if valid else None
 assert got['selectedMM']==(want[1] if want else None)
 if want:assert abs(D(got['selectedN'])-want[2])<Decimal('1e-8')
 checks+=1
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
files=glob.glob(prefix+'*.json');audits=0
for f in files:
 s=json.load(open(f))
 if not isinstance(s,dict) or s.get('format')!='stringscale-desk-v1':continue
 audits+=1;assert len(s['source']['records'])==len(s['review'])==len(s['jobs']);total=Decimal(0);complete=True
 for src,j,r in zip(s['source']['records'],s['jobs'],s['review']):
  assert src['id']==j['id']==r['id'];p=next(p for p in s['source']['profiles'] if p['id']==j['profileId'])
  valid=[(abs(T(j,d)-D(j['preferredN'])),d,T(j,d)) for d in p['gaugesMM'] if D(j['targetMin'])<=T(j,d)<=D(j['targetMax'])]
  want=min(valid) if valid else None;assert j['selectedMM']==(want[1] if want else None)
  if want:assert abs(D(j['selectedN'])-want[2])<Decimal('1e-8');total+=want[2]
  else:complete=False
  assert abs(D(j['baselineN'])-T(j,j['currentMM']))<Decimal('1e-8');checks+=3
 if complete:assert abs(D(s['summary']['totalSelectedN'])-total)<Decimal('1e-7')
 else:assert s['summary']['totalSelectedN'] is None
 assert s['summary']['loadFits']==bool(complete and total<=D(s['source']['totalCapN']))
 assert s['summary']['planReady']==bool(s['summary']['loadFits'] and all(j['decision']=='approve' and j['ready'] for j in s['jobs']))
 for ext in ['.csv','.gauge.csv']:
  fn=f[:-5]+ext
  if not glob.glob(fn):continue
  with open(fn,newline='') as h:rows=list(csv.DictReader(h))
  assert len(rows)==len(s['jobs'])
  for row,j,src in zip(rows,s['jobs'],s['source']['records']):
   for key,want in [('id',j['id']),('originalNote',src['note']),('reviewerNote',j['reviewerNote'])]:
    if want and want[0] in '=+-@\t\r':want="'"+want
    assert row[key]==want,(fn,key,row[key],want)
   if j['selectedN'] is not None:assert math.isclose(float(row['selectedN']),j['selectedN'])
   checks+=4
 if f.endswith('reviewed.json'):assert s['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "pitch", approved'
assert audits>=8, audits
json.dump({'independentChecks':checks,'downloadedAudits':audits,'decimalGaugeOptimaAndTotals':True,'csvIndependentParser':True},open(prefix+'artifact-validation.json','w'),indent=2)
print('PASS independent Decimal/artifacts',checks,'checks;',audits,'audits')
