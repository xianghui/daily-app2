import json,random,subprocess
from fractions import Fraction as Q
from pathlib import Path
random.seed(644);cases=[]
for _ in range(400):
 rows=[{'id':str(i),'day':random.randrange(9),'rule':random.choice(['failure','retirement','censored']),'hold':random.random()<.15} for i in range(random.randint(1,24))];cases.append({'rows':rows,'horizon':random.randrange(11)})
script="""import {curve} from './src/core.js';let s='';for await(const c of process.stdin)s+=c;console.log(JSON.stringify(JSON.parse(s).map(c=>curve(c.rows.map(r=>({...r,review:{day:String(r.day),decision:r.hold?'hold':'approve'}})),c.horizon))));"""
actual=json.loads(subprocess.check_output(['node','--input-type=module','-e',script],input=json.dumps(cases).encode()));checks=0
for case,out in zip(cases,actual):
 rows=[r for r in case['rows'] if not r['hold']];n=len(rows);s=Q(1);f=Q(0);r=Q(0);km=Q(1);steps=[]
 for t in sorted(set(x['day'] for x in rows)):
  risk=[x for x in rows if x['day']>=t];now=[x for x in rows if x['day']==t];d=sum(x['rule']=='failure' for x in now);e=sum(x['rule']=='retirement' for x in now);c=len(now)-d-e
  f+=s*Q(d,len(risk));r+=s*Q(e,len(risk));s*=1-Q(d+e,len(risk));km*=1-Q(d,len(risk));steps.append((f,r,s,1-km,risk,now))
 assert len(steps)==len(out['steps']);checks+=1
 for expected,observed in zip(steps,out['steps']):
  for key,val in zip(['failureIncidence','retirementIncidence','eventFree','naiveFailure'],expected[:4]):assert Q(observed[key]['exact'])==val;checks+=1
  assert sum(expected[:3])==1;assert observed['atRisk']==len(expected[4]);assert observed['remaining']==len(expected[4])-len(expected[5]);assert set(observed['atRiskIds'])==set(x['id'] for x in expected[4]);assert expected[0]<=expected[3];checks+=5
 supported=bool(rows) and case['horizon']<=max(x['day'] for x in rows);assert out['supported']==supported;checks+=1
 if supported:
  eligible=[(x,y) for x,y in zip(out['steps'],steps) if x['day']<=case['horizon']];f=eligible[-1][1][0] if eligible else Q(0);assert Q(out['atHorizon']['failureIncidence']['exact'])==f;checks+=1
Path('oracle-validation.json').write_text(json.dumps({'randomCases':len(cases),'independentFractionAssertions':checks,'includes':'ties, zero-day events, all-censored, all-held, no-retirement, horizons beyond support'},indent=2));print('PASS independent Fraction oracle',checks)
