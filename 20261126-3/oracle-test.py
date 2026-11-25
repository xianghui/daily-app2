import json,subprocess,datetime,random
from fractions import Fraction
random.seed(26)
cases=[]
for i in range(1200):
 start=datetime.date(2000,1,1)+datetime.timedelta(days=random.randrange(35000));end=start+datetime.timedelta(days=random.randrange(800))
 if end.year>2099:end=start
 p=str(random.randrange(100000000000)/100);rate=f'{random.randrange(1000001)/10000:.4f}'
 cases.append(dict(start=str(start),end=str(end),principal=p,rate=rate))
# strings generated via floating conversion are bounded ordinary decimals here
js="import{calculate}from'./src/core.js';let s='';for await(const c of process.stdin)s+=c;console.log(JSON.stringify(JSON.parse(s).flatMap(r=>['ACT/360','ACT/365F','30E/360'].map(rule=>calculate(r,rule)))));"
r=json.loads(subprocess.run(['node','--input-type=module','-e',js],input=json.dumps(cases),text=True,capture_output=True,check=True).stdout)
assert len(r)==3600
for i,c in enumerate(cases):
 a=datetime.date.fromisoformat(c['start']);b=datetime.date.fromisoformat(c['end'])
 for j,rule in enumerate(['ACT/360','ACT/365F','30E/360']):
  days=(b-a).days if j<2 else 360*(b.year-a.year)+30*(b.month-a.month)+min(b.day,30)-min(a.day,30)
  denom=365 if j==1 else 360;x=Fraction(c['principal'])*Fraction(c['rate'])*days/denom
  cents=(2*x.numerator+x.denominator)//(2*x.denominator);o=r[3*i+j]
  assert o['days']==days and o['denominator']==denom and int(o['interestCents'])==cents
json.dump(dict(cases=1200,calculations=3600,assertions=10800,oracle='Python datetime and Fraction; independently computed half-up cents'),open('oracle-validation.json','w'),indent=2)
print('PASS independent 3600 calculations / 10800 assertions')
