import json,math
from fractions import Fraction as F
cases=json.load(open('oracle-cases.json'))
for c in cases:
 d=[F(p['b'])-F(p['a']) for p in c['pairs']];n=len(d);bias=sum(d)/n;var=sum((x-bias)**2 for x in d)/(n-1);sd=math.sqrt(float(var));out=c['out'];lo=float(bias)-1.96*sd;hi=float(bias)+1.96*sd
 for key,val in [('bias',float(bias)),('sd',sd),('lower',lo),('upper',hi)]:assert math.isclose(out[key],val,abs_tol=1e-9,rel_tol=1e-10),(key,out[key],val)
 assert out['biasOnlyWithin']==(abs(bias)<=c['tolerance'])
 assert out['envelopeWithin']==(lo>=-c['tolerance'] and hi<=c['tolerance'])
 assert out['observedWithin']==sum(abs(x)<=c['tolerance'] for x in d)
 assert len(out['points'])==n
json.dump({'independentFractionCases':len(cases),'allPassed':True},open('oracle-validation.json','w'),indent=2)
print('PASS 1500 independent Fraction mean/variance, limits and tolerance comparisons')
