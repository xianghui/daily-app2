import json, subprocess, random
from scipy.optimize import linprog
rng=random.Random(271127)
cases=[]
for i in range(320):
 profiles=[dict(id='a',description='Grass clippings',carbonDry=.45,nitrogenDry=.03),dict(id='b',description='Wood shavings',carbonDry=.5,nitrogenDry=.001)]
 x=dict(title='Independent synthetic LP '+str(i),minCN=rng.uniform(12,30),maxCN=rng.uniform(35,70),minMoisture=rng.uniform(.25,.45),maxMoisture=rng.uniform(.55,.8),profiles=profiles,records=[dict(id='r',note='Synthetic intake',wetKg=rng.uniform(.1,40),moisture=rng.uniform(.05,.95))],amendments=[dict(id='x'+str(j),description='Synthetic amendment',moisture=rng.uniform(.02,.95),carbonDry=rng.uniform(.2,.55),nitrogenDry=rng.uniform(.001,.06),maxKg=rng.choice([0,1,10,100])) for j in range(2)])
 cases.append(x)
js="import {calculate} from './src/core.js';let s='';for await(const c of process.stdin)s+=c;console.log(JSON.stringify(JSON.parse(s).map(x=>calculate(x,x.records.map(r=>({...r,profile:'a',decision:'approve',reviewerNote:''}))))))"
results=json.loads(subprocess.run(['node','--input-type=module','-e',js],input=json.dumps(cases),text=True,capture_output=True,check=True).stdout)
checks=0;feasible=0
for x,r in zip(cases,results):
 # Independently derive each inequality in wet mass coordinates.
 def terms(kg,moisture,c,n):return [kg,kg*moisture,kg*(1-moisture)*c,kg*(1-moisture)*n]
 base=terms(x['records'][0]['wetKg'],x['records'][0]['moisture'],.45,.03)
 amendments=[terms(1,p['moisture'],p['carbonDry'],p['nitrogenDry']) for p in x['amendments']]
 funcs=[lambda t:x['minCN']*t[3]-t[2],lambda t:t[2]-x['maxCN']*t[3],lambda t:x['minMoisture']*t[0]-t[1],lambda t:t[1]-x['maxMoisture']*t[0]]
 optimum=linprog([1,1],A_ub=[[f(t) for t in amendments] for f in funcs],b_ub=[-f(base) for f in funcs],bounds=[(0,p['maxKg']) for p in x['amendments']],method='highs')
 assert r['recipe']['feasible']==optimum.success,(x,r,optimum.message);checks+=1
 if optimum.success:
  feasible+=1;assert abs(r['recipe']['addedKg']-optimum.fun)<1e-6;checks+=1
  for j,p in enumerate(r['recipe']['additions']):assert -1e-8<=p['kg']<=x['amendments'][j]['maxKg']+1e-8;checks+=1
  total=[base[k]+sum(optimum.x[j]*amendments[j][k] for j in range(2)) for k in range(4)]
  for key,val in zip(['wetKg','waterKg','carbonKg','nitrogenKg'],total):assert abs(r['recipe']['total'][key]-val)<1e-6;checks+=1
json.dump(dict(cases=len(cases),feasible=feasible,infeasible=len(cases)-feasible,assertions=checks,oracle='SciPy HiGHS independent linear-program solver'),open('independent-validation.json','w'),indent=2)
print('PASS independent LP',len(cases),checks)
