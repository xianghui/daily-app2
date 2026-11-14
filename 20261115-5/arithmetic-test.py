from scipy.special import gammainc,gamma
import json,subprocess,random,math
random.seed(315)
cases=[[a,k,l,30,300] for a in [1,10,200,10000] for k in [.5,1,2,8] for l in [1,10,10000]]
cases += [[10**random.uniform(0,4),random.uniform(.5,8),10**random.uniform(0,4),30,300] for _ in range(200)]
script="import {cycle} from './src/core.js';console.log(JSON.stringify("+json.dumps(cases)+".map(x=>cycle(...x))));"
actual=json.loads(subprocess.check_output(['node','--input-type=module','-e',script]));maxerr=0
for (a,k,l,p,f),z in zip(cases,actual):
 expected=l*gamma(1+1/k)*gammainc(1/k,(a/l)**k)
 err=abs(z['duration']/expected-1);maxerr=max(maxerr,err)
 assert err<1e-7,(a,k,l,z['duration'],expected,err)
 rate=(p*math.exp(-(a/l)**k)+f*(1-math.exp(-(a/l)**k)))/expected
 assert abs(z['rate']/rate-1)<1e-7
# Independently evaluate every grid point in both browser-exported fixtures.
for j in range(2):
 d=json.load(open(f'export-fixture{j}.json'))
 for r,z in zip(d['reviews'],d['calculations']):
  def rate(a):
   k,l=r['shape'],r['scale'];s=math.exp(-(a/l)**k);duration=l*gamma(1+1/k)*gammainc(1/k,(a/l)**k)
   return (r['plannedCost']*s+r['failureCost']*(1-s))/duration
  grid=[r['minAge']+i*r['step'] for i in range(math.floor((r['maxAge']-r['minAge'])/r['step'])+1)]
  assert z['best']['age']==min(grid,key=rate)
json.dump({'cases':len(cases),'reference':'SciPy lower regularized incomplete gamma integral; independent enumeration of six fixture grids','maximumRelativeDurationError':maxerr,'allGridOptimaMatch':True},open('arithmetic-validation.json','w'),indent=2)
print('PASS independent renewal arithmetic',len(cases),maxerr)
