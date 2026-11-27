from decimal import Decimal as D, getcontext
import random,json,subprocess,math
from pathlib import Path
getcontext().prec=50
rng=random.Random(112712)
cases=[]
for i in range(500):
 a=round(rng.uniform(.5,100),3);b=round(a+rng.uniform(.001,150),3)
 cases.append(dict(id=str(i),near=a,far=b,focal=rng.choice([8,24,35,50,100,200,300]),coc=rng.choice([.005,.02,.03,.05]),open=rng.choice([1.4,2.8,4,8]),decision='approve'))
script="import{plan}from'./src/core.js';let s='';for await(const x of process.stdin)s+=x;console.log(JSON.stringify(JSON.parse(s).map(r=>plan(r,22))))"
actual=json.loads(subprocess.check_output(['node','--input-type=module','-e',script],input=json.dumps(cases).encode()))
checks=0
for r,p in zip(cases,actual):
 a,b,f,c=map(lambda x:D(str(x)),[r['near']*1000,r['far']*1000,r['focal'],r['coc']]);s=2*a*b/(a+b)
 stops=[D(str(n)) for n in [1.4,2,2.8,4,5.6,8,11,16,22] if n>=r['open']]
 def bounds(s,N):
  q=N*c*(s-f);return s*f*f/(f*f+q)/1000, None if f*f-q<=0 else s*f*f/(f*f-q)/1000
 def choose(s):
  for N in stops:
   near,far=bounds(s,N)
   if near<=a/1000 and (far is None or far>=b/1000):return N,near,far
  return None
 expected=choose(s);base=choose((a+b)/2)
 assert math.isclose(p['focus'],float(s/1000),rel_tol=1e-12);checks+=1
 assert p['aperture']==(float(expected[0]) if expected else None);checks+=1
 assert p['baseline']['aperture']==(float(base[0]) if base else None);checks+=1
 if expected:
  assert math.isclose(p['near'],float(expected[1]),rel_tol=1e-11);checks+=1
  assert p['infinity']==(expected[2] is None);checks+=1
  if expected[2] is not None:assert math.isclose(p['far'],float(expected[2]),rel_tol=1e-11);checks+=1
  # Every smaller candidate fails at least one bound; selected focus is within the band.
  assert a<=s<=b;checks+=1
  assert not base or expected[0]<=base[0];checks+=1
report={'cases':len(cases),'assertions':checks,'oracle':'Independent 50-digit Decimal optical bounds and discrete-stop search','seed':112712}
Path('oracle-validation.json').write_text(json.dumps(report,indent=2));print(report)
