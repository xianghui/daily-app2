import json,random,subprocess,math
from fractions import Fraction as F
from pathlib import Path
rng=random.Random(1745)
cases=[(rng.randrange(0,2401)/20,rng.randrange(1,101),rng.choice([.001,.01,.05,.1,.2])) for i in range(1500)]+[(0,1,.01),(1,1,.1),(2,4,.05),(1000,200,.01)]
script="import {blocking,size} from './src/core.js';const cases="+json.dumps(cases)+";console.log(JSON.stringify(cases.map(([l,c,t])=>[blocking(l,c),size(l,t,c)])));"
actual=json.loads(subprocess.check_output(['node','--input-type=module','-e',script],text=True))
worst=0
for (load,c,t),(b,n) in zip(cases,actual):
 A=F(str(load));term=F(1);den=F(1);expected=None
 for k in range(1,c+1):
  term*=A/k;den+=term
  if expected is None and term/den<=F(str(t)):expected=k
 ref=float(term/den);worst=max(worst,abs(b-ref));assert abs(b-ref)<1e-12,(load,c,b,ref)
 assert expected==n,(load,c,t,expected,n)
Path('arithmetic-validation.json').write_text(json.dumps(dict(cases=len(cases),reference='Independent exact Fraction factorial-series probabilities and integer scan',maxAbsoluteError=worst,allPassed=True),indent=2));print('PASS',len(cases),'independent arithmetic cases')
