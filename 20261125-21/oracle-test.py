import random,json,subprocess,datetime
random.seed(2101)
cases=[]
base=datetime.date(2026,1,1)
for i in range(700):
 versions=[]
 for j in range(random.randint(1,16)):
  a=random.randrange(0,100);b=random.randrange(a+1,120)
  versions.append(dict(id='v'+str(j),**{'from':str(base+datetime.timedelta(a))},until=None if random.randrange(8)==0 else str(base+datetime.timedelta(b)),cents=random.randrange(1000001)))
 cases.append(dict(book=dict(id='test',description='Test',versions=versions),date=str(base+datetime.timedelta(random.randrange(130))),quantity=random.randrange(1,10001)))
js="import{calculate}from'./src/core.js';let s='';for await(const c of process.stdin)s+=c;console.log(JSON.stringify(JSON.parse(s).map(c=>calculate(c.book,c.date,c.quantity))))"
out=json.loads(subprocess.check_output(['node','--input-type=module','-e',js],input=json.dumps(cases).encode()))
checks=0
for c,r in zip(cases,out):
 vs=c['book']['versions'];ds=datetime.date.fromisoformat(c['date']);matches=[v for v in vs if datetime.date.fromisoformat(v['from'])<=ds and (v['until'] is None or ds<datetime.date.fromisoformat(v['until']))];latest=[v for v in vs if v['from']==max(x['from'] for x in vs)]
 expected=dict(status='ready' if len(matches)==1 else 'overlap' if matches else 'gap',matches=[v['id'] for v in matches],version=matches[0]['id'] if len(matches)==1 else None,rate=matches[0]['cents'] if len(matches)==1 else None,total=matches[0]['cents']*c['quantity'] if len(matches)==1 else None,baseline=latest[0]['cents']*c['quantity'] if len(latest)==1 else None,baselineVersions=[v['id'] for v in latest]);expected['difference']=expected['total']-expected['baseline'] if expected['total'] is not None and expected['baseline'] is not None else None
 assert r==expected,(c,r,expected);checks+=len(expected)
json.dump(dict(fixtures=len(cases),assertions=checks,method='Independent Python datetime interval enumeration and integer cents'),open('oracle-validation.json','w'),indent=2)
print('PASS',checks,'oracle assertions')
