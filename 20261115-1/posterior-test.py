import json,random,subprocess
from fractions import Fraction as F
from pathlib import Path
rng=random.Random(42);cases=[];expected=[]
for _ in range(2500):
 n=rng.randint(1,100000);s=rng.randint(0,n);aa=rng.randint(1,1000);bb=rng.randint(1,1000);v=rng.randint(1,10000);l=rng.randint(1,10000);c=F(rng.randint(0,10000),4)
 z=dict(priorAlpha=aa,priorBeta=bb,successValue=v,failureLoss=l,pilotCost=float(c));cases.append([s,n,z]);a=aa+s;b=bb+n-s;p=F(a,a+b);u=lambda q:q*v-(1-q)*l
 now=max(0,u(p));yes=max(0,u(F(a+1,a+b+1)));no=max(0,u(F(a,a+b+1)));evsi=p*yes+(1-p)*no-now
 assert evsi>=0 and evsi<=p*v-now
 net=evsi-c;expected.append([float(p),float(now),float(yes),float(no),float(evsi),float(net),'Run one pilot' if net>F(1,10**9) else 'Launch' if u(p)>0 else 'Skip'])
s="import {evaluate} from './src/core.js';const cs="+json.dumps(cases)+"; console.log(JSON.stringify(cs.map(([s,n,z])=>{const a=evaluate(s,n,z),p=a.posterior;return [p.mean,p.optimalValue,p.afterSuccess,p.afterFailure,p.evsi,p.netPilotValue,a.decision]})));"
p=Path('posterior-driver.mjs');p.write_text(s);actual=json.loads(subprocess.check_output(['node',str(p)]))
for a,e in zip(actual,expected):
 assert a[-1]==e[-1],(a,e)
 for x,y in zip(a[:-1],e[:-1]):assert abs(x-y)<=max(1,abs(y))*1e-9,(a,e)
Path('posterior-validation.json').write_text(json.dumps(dict(independentFractionCases=len(cases),posteriorBranchesAndEvsi=True,evsiWithinPerfectInformationBound=True,netDecisionChecks=True),indent=2));print('PASS 2500 independent exact-Fraction posterior/EVSI cases');p.unlink()
