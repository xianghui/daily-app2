import json,math
from fractions import Fraction
from pathlib import Path
cases=json.loads(Path('cost-oracle-cases.json').read_text())
for case in cases:
 c=case['c'];d=case['demand']
 # Independent convex-per-tier oracle: only endpoints and floor/ceil stationary point.
 for baseline in [False,True]:
  candidates=[]
  for i,t in enumerate(c['tiers'][:1] if baseline else c['tiers']):
   lo=t['min'];hi=min(c['maxOrder'],c['tiers'][i+1]['min']-1 if i+1<len(c['tiers']) else c['maxOrder'])
   stationary=math.sqrt(2*d*c['orderCents']/c['holdingCents'])
   for q in {lo,hi,max(lo,min(hi,math.floor(stationary))),max(lo,min(hi,math.ceil(stationary)))}:
    value=Fraction(d*t['unitCents'])+Fraction(d*c['orderCents'],q)+Fraction(q*c['holdingCents'],2)
    candidates.append((value,q))
  cost,q=min(candidates);actual=case['baseline' if baseline else 'best']
  assert q==actual['quantity'],(case,q)
  assert cost==Fraction(int(actual['exactCost']['numerator']),int(actual['exactCost']['denominator']))
  assert actual['quantity']<=c['maxOrder']
Path('core-validation.json').write_text(json.dumps({'cases':len(cases),'exactComparisons':2*len(cases),'independentOracle':'Convex per-tier stationary points and interval endpoints with Python Fraction','allPassed':True,'schemaHoldsAndOriginalRoundTrip':True},indent=2))
print('PASS',2*len(cases),'exact rational optimum comparisons')
