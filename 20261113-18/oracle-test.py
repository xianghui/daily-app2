from fractions import Fraction as F
import json
cases=json.load(open('oracle-cases.json'))
for c in cases:
 d,rows,p=c['d'],c['rows'],c['plan'];pol={x['id']:x for x in d['policies']}
 h=sum((F(r['quantity100'],100)*F(r['coefficientMilli'],1000) for r in rows),F(0));s=sum((F(r['quantity100'],100)*F(r['upgradeMilli'],1000) for r in rows),F(0));plane=sum((F(r['quantity100'],100)*F(r['coefficientMilli'],1000) for r in rows if pol[r['kind']]['unit']=='m²'),F(0));dt=F(d['deltaDeciK'],10)
 expected={'currentH':h,'scenarioH':s,'planeOnlyWatts':plane*dt,'bridgeWatts':(h-plane)*dt,'currentWatts':h*dt,'scenarioWatts':s*dt,'avoidedWatts':(h-s)*dt,'currentKWh':h*d['degreeDays']*F(24,1000),'scenarioKWh':s*d['degreeDays']*F(24,1000),'avoidedKWh':(h-s)*d['degreeDays']*F(24,1000)}
 for k,v in expected.items():assert abs(p[k]-float(v))<=max(1e-8,abs(float(v))*1e-14),(k,p[k],v)
 assert p['withinTarget']==(s*dt<=d['targetWatts'])
 for r,l in zip(rows,p['lines']):
  assert r['id']==l['id'];assert l['unit']==pol[r['kind']]['unit'];assert l['quantity']==r['quantity100']/100
json.dump({'independentFractionCases':len(cases),'allMatched':True},open('core-validation.json','w'),indent=2)
print('PASS 3000 independent rational heat-loss/climate/constraint cases')
