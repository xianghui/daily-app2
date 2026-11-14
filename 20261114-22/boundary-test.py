import random,json,subprocess
from fractions import Fraction
from pathlib import Path
rng=random.Random(2244);cases=[]
for i in range(500):
 cases.append({'g':{'underage':rng.randint(900000,1000000),'overage':rng.randint(900000,1000000),'cap':rng.randint(0,80)},'rows':[{'id':str(j),'demand':rng.randint(0,10000),'weight':rng.randint(900000,1000000)} for j in range(rng.randint(1,32))]})
program="import {plan} from './src/core.js';let s='';for await(const b of process.stdin)s+=b;console.log(JSON.stringify(JSON.parse(s).map(x=>plan(x.g,x.rows))));"
actual=json.loads(subprocess.run(['node','--input-type=module','-e',program],input=json.dumps(cases),capture_output=True,text=True,check=True).stdout)
for x,r in zip(cases,actual):
 g,rows=x['g'],x['rows']; W=sum(v['weight'] for v in rows)
 def loss(q):return sum(v['weight']*(g['underage']*max(0,v['demand']-q)+g['overage']*max(0,q-v['demand'])) for v in rows)
 q=min(range(g['cap']+1),key=lambda q:loss(q));assert q==r['quantity'];assert abs(float(Fraction(loss(q),W))-r['cost'])<1e-5
Path('boundary-validation.json').write_text(json.dumps({'independentPythonIntegerFractionCases':len(cases),'largeWeightedNumeratorsBeyondSafeInteger':True},indent=2));print('PASS 500 Python exact-integer boundary cases')
