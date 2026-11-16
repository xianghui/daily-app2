import random,json,subprocess
from decimal import Decimal,getcontext
from pathlib import Path
getcontext().prec=50
rng=random.Random(1931);cases=[]
for _ in range(1000):
 b=[dict(p0=rng.randint(1,10000000),p1=rng.randint(1,10000000),q0=rng.randint(0,1000000),q1=rng.randint(0,1000000)) for _ in range(rng.randint(2,8))];cases.append(b)
js="import{indices}from './src/core.js';let s='';for await(const c of process.stdin)s+=c;process.stdout.write(JSON.stringify(JSON.parse(s).map(indices)))"
res=subprocess.run(['node','--input-type=module','-e',js],input=json.dumps(cases),capture_output=True,text=True,check=True)
for b,r in zip(cases,json.loads(res.stdout)):
 sums=[sum(Decimal(x[p])*x[q] for x in b) for p,q in [('p0','q0'),('p1','q1'),('p1','q0'),('p0','q1')]]
 s00,s11,s10,s01=sums
 for k,n in zip(['baseSpend','currentSpend','currentPricesBaseQty','basePricesCurrentQty'],sums):assert r[k]==int(n)
 expected={'laspeyres':s10/s00,'paasche':s11/s01,'fisherPrice':(s10*s11/(s00*s01)).sqrt(),'fisherQuantity':(s01*s11/(s00*s10)).sqrt(),'valueRatio':s11/s00,'meanRelative':sum(Decimal(x['p1'])/x['p0'] for x in b)/len(b)}
 for k,v in expected.items():assert abs(Decimal(str(r[k]))-v)<=abs(v)*Decimal('1e-12'),(k,r[k],v)
 assert r['factorizationError']<max(1,r['valueRatio'])*1e-12
Path('oracle-validation.json').write_text(json.dumps({'independentDecimalCases':len(cases),'exactCrossBasketTotals':True,'allIndicesAndFactorizationChecked':True,'seed':1931},indent=2));print('PASS 1,000 independent Decimal index cases')
