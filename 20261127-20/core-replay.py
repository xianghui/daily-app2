import json,decimal
from decimal import Decimal as D
decimal.getcontext().prec=50
cases=json.load(open('core-cases.json'));n=0
for c in cases:
 r={k:D(str(v)) for k,v in c['r'].items() if k!='id'};j=c['j']
 expected=r['testSeconds']*((r['negativeWidth']+r['targetWidth'])/(r['negativeWidth']+r['testWidth']))**2*(r['targetAperture']/r['testAperture'])**2*r['speedFactor']
 baseline=r['testSeconds']*(r['targetWidth']/r['testWidth'])**2*(r['targetAperture']/r['testAperture'])**2*r['speedFactor']
 for key,val in [('seconds',expected),('baselineSeconds',baseline)]:assert abs(D(str(j[key]))-val)<=max(D('1e-8'),abs(val)*D('1e-12'));n+=1
 assert (j['status']=='ready')==(expected<=r['maxSeconds']);n+=1
json.dump({'independentDecimalCases':len(cases),'assertions':n,'precision':50},open('core-replay.json','w'),indent=2);print('PASS Decimal replay',len(cases),n)
