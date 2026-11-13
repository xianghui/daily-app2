import random,itertools,json
from fractions import Fraction as F
random.seed(1911);cases=[]
for k in range(1000):
 n=random.randint(2,5);pol=[dict(id=str(i),extraCost=random.randint(1,20),maxExtra=random.randint(0,3)) for i in range(n)];rows=[dict(id='r'+str(i),kind=str(i),successBp=random.randint(0,10000),owner='oracle') for i in range(n)];budget=random.randint(0,70);best=F(-1);cost=None;choices=None;count=0
 for extras in itertools.product(*(range(p['maxExtra']+1) for p in pol)):
  c=sum(p['extraCost']*e for p,e in zip(pol,extras))
  if c>budget:continue
  count+=1;q=F(1)
  for r,e in zip(rows,extras):q*=1-(1-F(r['successBp'],10000))**(1+e)
  if q>best or q==best and c<cost:best,cost,choices=q,c,extras
 cases.append(dict(d=dict(policies=pol,budget=budget),rows=rows,probability=float(best),baseline=float(__import__('functools').reduce(lambda a,r:a*F(r['successBp'],10000),rows,F(1))),cost=cost,considered=count))
open('oracle-cases.json','w').write(json.dumps(cases));print('Generated 1,000 independent rational exhaustive cases')
