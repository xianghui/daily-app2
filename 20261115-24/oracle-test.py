from pathlib import Path
import random,json,subprocess,math
from decimal import Decimal,getcontext
getcontext().prec=40
rng=random.Random(241115); cases=[]
for n in range(500):
 sd=Decimal(rng.choice(['0.1','0.2','0.5','1','2'])); mu=Decimal(rng.randrange(-50,51));k=Decimal(rng.choice(['0.25','0.5','1']));h=Decimal(rng.choice(['1','2','5','8']))
 vals=[mu+sd*Decimal(rng.randrange(-40,41))/10 for _ in range(rng.randrange(1,33))]
 jobs=[dict(id='r'+str(i),value=float(v),sequence=i+1) for i,v in enumerate(vals)];rng.shuffle(jobs)
 plus=minus=Decimal(0); points=[]
 for i,v in enumerate(vals):
  z=(v-mu)/sd;plus=max(Decimal(0),plus+z-k);minus=max(Decimal(0),minus-z-k)
  points.append(dict(id='r'+str(i),sequence=i+1,value=float(v),z=float(z),plus=float(plus),minus=float(minus),cusum=max(plus,minus)>=h,single=abs(z)>=3))
 cases.append(dict(jobs=jobs,p=dict(id='s',mean=float(mu),sd=float(sd)),k=float(k),h=float(h),expected=points))
Path('oracle-cases.json').write_text(json.dumps(cases))
subprocess.check_call(['node','--input-type=module','-e',"import {trace} from './src/core.js';import fs from 'node:fs';let cases=JSON.parse(fs.readFileSync('oracle-cases.json'));fs.writeFileSync('oracle-results.json',JSON.stringify(cases.map(c=>trace(c.jobs,c.p,c.k,c.h))));"])
actual=json.loads(Path('oracle-results.json').read_text())
for c,r in zip(cases,actual):
 assert len(r['points'])==len(c['expected'])
 for e,a in zip(c['expected'],r['points']):
  for key in ['id','sequence','cusum','single']:assert a[key]==e[key],(key,e,a)
  for key in ['value','z','plus','minus']: assert math.isclose(a[key],e[key],rel_tol=1e-10,abs_tol=1e-10)
 assert r['firstCusum']==next((e['sequence'] for e in c['expected'] if e['cusum']),None)
 assert r['firstSingle']==next((e['sequence'] for e in c['expected'] if e['single']),None)
Path('arithmetic-validation.json').write_text(json.dumps(dict(independentDecimalOracleCases=len(cases),points=sum(len(c['expected']) for c in cases),passed=True),indent=2))
print('PASS',len(cases),'independent Decimal cases')
