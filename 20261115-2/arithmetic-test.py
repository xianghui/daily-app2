import json,random,subprocess,math
from fractions import Fraction as F
random.seed(15112)
cases=[]
for i in range(1200):
 rows=[dict(id=str(j),effect=random.randint(-1000,1000)/10,se=random.randint(1,100)/10) for j in range(random.randint(1,32))]
 cases.append(rows)
Path=__import__('pathlib').Path
Path('/tmp/evidence-cases.json').write_text(json.dumps(cases))
s="import fs from 'node:fs';import {pool} from './src/core.js';console.log(JSON.stringify(JSON.parse(fs.readFileSync('/tmp/evidence-cases.json')).map(pool)));"
r=subprocess.run(['node','--input-type=module','-e',s],capture_output=True,text=True,check=True);actual=json.loads(r.stdout)
for rows,a in zip(cases,actual):
 ys=[F(str(z['effect'])) for z in rows];ws=[1/F(str(z['se']))**2 for z in rows];sw=sum(ws);mean=sum(w*y for w,y in zip(ws,ys))/sw;q=sum(w*(y-mean)**2 for w,y in zip(ws,ys));df=len(rows)-1
 expect=dict(mean=float(mean),se=math.sqrt(float(1/sw)),q=float(q),baseline=float(sum(ys)/len(ys)),i2=float(max(F(0),(q-df)/q)) if q and df else (0 if df else None))
 expect.update(lower=expect['mean']-1.96*expect['se'],upper=expect['mean']+1.96*expect['se'])
 for k,v in expect.items():
  if v is None:assert a[k] is None
  else: assert math.isclose(a[k],v,rel_tol=1e-10,abs_tol=1e-9),(k,a[k],v)
 assert math.isclose(sum(w['share'] for w in a['weights']),1,abs_tol=1e-12)
Path('arithmetic-validation.json').write_text(json.dumps(dict(independentFractionCases=len(cases),checks=['weighted mean','standard error','normal interval','unweighted mean','Q','I2','weight conservation']),indent=2));print('PASS 1200 independent Fraction pooling cases')
