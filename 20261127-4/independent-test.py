"""Independent Decimal implementation, compared to JS core (not AI mocks)."""
from decimal import Decimal as D
from datetime import date,timedelta
import random,json,subprocess
rng=random.Random(271104);cases=[]
for n in range(300):
 base=rng.randrange(-50,301)/10;cap=rng.randrange(max(1,round(base*10)+1),501)/10
 weather=[]
 for i in range(rng.randrange(1,91)):
  a=rng.randrange(-300,601);b=rng.randrange(a,601)
  weather.append(dict(date=str(date(2027,4,1)+timedelta(days=i)),minC=a/10,maxC=b/10))
 start=rng.randrange(len(weather));stages=[dict(name='stage'+str(i),targetGDD=t,baselineDays=rng.randrange(1,367)) for i,t in enumerate(sorted(rng.sample(range(1,3001),4)))];profile=dict(id='crop',description='Synthetic crop reference',baseC=base,capC=cap,stages=stages)
 d=dict(title='Decimal case',profiles=[profile,dict(profile,id='other')],records=[dict(id='f',note='Synthetic field',start=weather[start]['date'])],weather=weather)
 cases.append(d)
js="import {calculate} from './src/core.js';let s='';for await(const c of process.stdin)s+=c;console.log(JSON.stringify(JSON.parse(s).map(d=>calculate(d,d.records.map(r=>({...r,profile:'crop',decision:'approve',reviewerNote:''}))))));"
p=subprocess.run(['node','--input-type=module','-e',js],input=json.dumps(cases),text=True,capture_output=True,check=True);outputs=json.loads(p.stdout);checks=0
for d,out in zip(cases,outputs):
 p=d['profiles'][0];acc=D(0);trail=[]
 for w in d['weather']:
  if w['date']<d['records'][0]['start']:continue
  clamp=lambda v:max(D(str(p['baseC'])),min(D(str(p['capC'])),D(str(v))))
  g=(clamp(w['minC'])+clamp(w['maxC']))/2-D(str(p['baseC']));acc+=g;trail.append((w['date'],g,acc,w['minC']<0))
 assert len(trail)==len(out['daily']);checks+=1
 for ref,actual in zip(trail,out['daily']):
  assert (ref[0],ref[1],ref[2],ref[3])==(actual['date'],D(str(actual['gdd'])),D(str(actual['cumulativeGDD'])),actual['frost']);checks+=4
 for s,t in zip(p['stages'],out['worksheet'][0]['stages']):
  crossing=next((x[0] for x in trail if x[2]>=s['targetGDD']),None);base=str(date.fromisoformat(d['records'][0]['start'])+timedelta(days=s['baselineDays']-1))
  assert t['date']==crossing;assert t['baselineDate']==base;assert D(str(t['remainingGDD']))==max(D(0),D(s['targetGDD'])-acc);assert t['differenceDays']==((date.fromisoformat(crossing)-date.fromisoformat(base)).days if crossing else None);checks+=4
 assert D(str(out['worksheet'][0]['totalGDD']))==acc;checks+=1
json.dump(dict(cases=len(cases),assertions=checks,method='Independent Python Decimal/clamped temperatures/date replay',passed=True),open('independent-validation.json','w'),indent=2);print('PASS',len(cases),checks)
