"""Independent Python datetime/integer reconstruction of randomized JS plans."""
import json,subprocess,datetime,random
from pathlib import Path
random.seed(2773)
cases=[]
for c in range(300):
 profiles=[dict(id='p'+str(i),description='Synthetic crop '+str(i),propagationDays=random.randint(1,90),finishingDays=random.randint(1,90),propagationCells=random.randint(1,500),finishingCells=random.randint(1,500),successPermille=random.randint(1,1000)) for i in range(random.randint(2,8))]
 records=[];reviews=[]
 for i in range(random.randint(1,24)):
  r=dict(id='r'+str(i),note='Synthetic nursery order',plants=random.randint(1,100000),dispatch=(datetime.date(2027,8,1)+datetime.timedelta(days=random.randint(0,150))).isoformat());records.append(r);reviews.append(dict(r,profile=random.choice(profiles)['id'],decision='hold' if random.random()<.1 else 'approve',reviewerNote=''))
 cases.append(dict(d=dict(title='Synthetic randomized plan',asOf='2027-01-01',capacityTrays=random.randint(1,10000),profiles=profiles,records=records),rows=reviews))
js="import{calculate}from'./src/core.js';let s='';for await(const x of process.stdin)s+=x;process.stdout.write(JSON.stringify(JSON.parse(s).map(x=>calculate(x.d,x.rows))));"
out=json.loads(subprocess.run(['node','--input-type=module','-e',js],input=json.dumps(cases),text=True,capture_output=True,check=True).stdout)
checks=0
def check(x):
 global checks
 assert x;checks+=1
for c,result in zip(cases,out):
 d=c['d'];ws=[]
 for r in c['rows']:
  if r['decision']=='hold':continue
  p=next(p for p in d['profiles'] if p['id']==r['profile']);dispatch=datetime.date.fromisoformat(r['dispatch']);pot=dispatch-datetime.timedelta(days=p['finishingDays']);sow=pot-datetime.timedelta(days=p['propagationDays']);seeds=-(-r['plants']*1000//p['successPermille']);ws.append(dict(id=r['id'],seeds=seeds,sow=sow,pot=pot,dispatch=dispatch,early=-(-seeds//p['propagationCells']),late=-(-r['plants']//p['finishingCells']),baseline=-(-r['plants']//p['propagationCells'])))
 check(len(result['review'])==len(d['records']));check(len(result['worksheet'])==len(ws))
 for w,j in zip(ws,result['worksheet']):
  for k,v in [('seeds',w['seeds']),('sow',w['sow'].isoformat()),('potUp',w['pot'].isoformat()),('dispatch',w['dispatch'].isoformat()),('propagationTrays',w['early']),('finishingTrays',w['late']),('baselineTrays',w['baseline'])]:check(j[k]==v)
 peak=base=over=excess=traydays=0
 for x in result['daily']:
  t=datetime.date.fromisoformat(x['date']);active=[w for w in ws if w['sow']<=t<w['dispatch']];early=sum(w['early'] for w in active if t<w['pot']);late=sum(w['late'] for w in active if t>=w['pot']);baseline=sum(w['baseline'] for w in active);total=early+late;overby=max(0,total-d['capacityTrays']);check(x['propagationTrays']==early);check(x['finishingTrays']==late);check(x['baselineTrays']==baseline);check(x['trays']==total);check(x['overBy']==overby);check(x['orders']==[w['id'] for w in active]);peak=max(peak,total);base=max(base,baseline);over+=overby>0;excess+=overby;traydays+=total
 for k,v in [('peakTrays',peak),('baselinePeakTrays',base),('overloadedDays',over),('excessTrayDays',excess)]:check(result['summary'][k]==v)
 check(traydays==sum((w['pot']-w['sow']).days*w['early']+(w['dispatch']-w['pot']).days*w['late'] for w in ws))
Path('independent-validation.json').write_text(json.dumps(dict(cases=len(cases),assertions=checks,method='Independent Python integer rounding and calendar daily replay'),indent=2));print('PASS',len(cases),'cases',checks,'assertions')
