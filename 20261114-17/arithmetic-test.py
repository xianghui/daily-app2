import json
from fractions import Fraction
cases=json.load(open('core-cases.json'))
for c in cases:
 a,b,m=c['na'],c['nb'],c['m']
 if not m: assert c['actual'] is None and c['unseen'] is None
 else:
  exact=Fraction((a+1)*(b+1),m+1)-1
  assert abs(c['actual']-float(exact))<1e-10
  assert abs(c['unseen']-float(exact-(a+b-m)))<1e-10
json.dump(dict(independentFractionCases=len(cases),allPassed=True),open('core-validation.json','w'),indent=2)
print('PASS independent Fraction checks',len(cases))
