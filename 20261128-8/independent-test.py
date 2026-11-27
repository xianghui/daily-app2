import json
from fractions import Fraction as F
cases=json.load(open('core-cases.json')); assertions=0
for case in cases:
 h,r,c=case['h'],case['r'],case['result']; feasible=[]
 for fs in h['rates']:
  for n in h['sizes']:
   spacing=F(fs,n);time=F(1000*n,fs);bytes_=n*r['channels']*r['bytesPerSample']
   valid=F(fs)>=F(str(h['guardFactor']))*r['bandMaxHz'] and spacing<=F(str(r['spacingMaxHz'])) and time<=r['maxWindowMs'] and bytes_<=r['bufferCapBytes']
   actual=next(o for o in c['options'] if o['rate']==fs and o['n']==n)
   assert actual['feasible']==valid; assertions+=1
   assert abs(actual['spacingHz']-float(spacing))<1e-8; assertions+=1
   assert abs(actual['windowMs']-float(time))<1e-8; assertions+=1
   assert actual['bufferBytes']==bytes_;assertions+=1
   if valid:feasible.append((bytes_,time,fs,n))
 feasible.sort()
 assert c['feasibleCount']==len(feasible);assertions+=1
 if feasible:assert (c['chosen']['bufferBytes'],F(1000*c['chosen']['n'],c['chosen']['rate']),c['chosen']['rate'],c['chosen']['n'])==feasible[0]
 else:assert c['chosen'] is None
 assertions+=1
json.dump({'cases':len(cases),'assertions':assertions,'method':'Independent Python Fraction exhaustive 40-pair replay; exact decimal guard and bin caps'},open('independent-validation.json','w'),indent=2)
print('PASS independent exact-rational',len(cases),'cases',assertions,'assertions')
