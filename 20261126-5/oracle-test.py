import json,random,subprocess
from fractions import Fraction as Q
from pathlib import Path
random.seed(265);cases=[]
for _ in range(400):
 opening=random.randint(10000,1000000);capital=opening;rows=[];day=0
 for i in range(random.randint(1,7)):
  day+=random.randint(1,50);value=random.randint(1,max(1,capital*3));rows.append({'id':f'm{i}','day':str(day),'amount':str(value),'rule':'valuation'});capital=value
  kind=random.choice(['none','contribution','withdrawal'])
  if kind!='none' and (kind!='withdrawal' or capital>1):
   amount=random.randint(1,capital-1) if kind=='withdrawal' else random.randint(1,1000000)
   rows.append({'id':f'f{i}','day':str(day),'amount':str(amount),'rule':kind});capital+=amount if kind=='contribution' else -amount
 day+=1;rows.append({'id':'close','day':str(day),'amount':str(random.randint(1,max(1,capital*2))),'rule':'valuation'})
 cases.append({'opening':str(opening),'rows':rows})
script="""import {worksheet} from './src/core.js';let s='';for await(const c of process.stdin)s+=c;console.log(JSON.stringify(JSON.parse(s).map(c=>worksheet(c.rows.map(r=>({...r,review:{day:r.day,amount:r.amount,decision:'approve'}})),c.opening))));"""
actual=json.loads(subprocess.check_output(['node','--input-type=module','-e',script],input=json.dumps(cases).encode()));checks=0
for case,out in zip(cases,actual):
 opening=int(case['opening']);capital=opening;factor=Q(1);adds=takes=0
 assert out['status']=='ready';assert len(case['rows'])==len(out['steps']);checks+=2
 for r,s in zip(case['rows'],out['steps']):
  v=int(r['amount']);assert int(s['capitalBefore'])==capital;assert s['id']==r['id'];checks+=2
  if r['rule']=='valuation':
   f=Q(v,capital);factor*=f;capital=v;assert Q(s['periodFactor']['exact'])==f;checks+=1
  elif r['rule']=='contribution':adds+=v;capital+=v;assert s['periodFactor'] is None;checks+=1
  else:takes+=v;capital-=v;assert s['periodFactor'] is None;checks+=1
  assert int(s['capitalAfter'])==capital;assert Q(s['cumulativeFactor']['exact'])==factor;checks+=2
 profit=capital-opening-adds+takes
 for k,v in [('closing',capital),('contributions',adds),('withdrawals',takes),('netGain',profit)]:assert int(out[k])==v;checks+=1
 assert Q(out['timeWeightedReturn']['exact'])==factor-1;assert Q(out['naiveNetGainReturn']['exact'])==Q(profit,opening);assert opening+adds-takes+profit==capital;checks+=3
report={'independentEngine':'Python fractions.Fraction, independently constructed accounting paths','cases':len(cases),'assertions':checks};Path('oracle-validation.json').write_text(json.dumps(report,indent=2));print(report)
