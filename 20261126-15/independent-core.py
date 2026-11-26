import json,itertools
from fractions import Fraction
cases=json.load(open('core-cases.json'))
for c in cases:
 s=c['states'];r=c['result'];first=sum(all(v=='first' for v in s[i:i+2]) for i in (0,2));final=sum(all(v!='failed' for v in s[i:i+2]) for i in (0,2));ind=Fraction(sum(s[i]=='first' for i in (0,2)),2)*Fraction(sum(s[i]=='first' for i in (1,3)),2)
 assert r['summary']['first']==first and r['summary']['final']==final
 assert r['summary']['independenceEstimate']==float(ind)
 assert r['summary']['baselineOvercount']==final-first
 assert len(r['rows'])==4 and len(r['units'])==2
 for j,st in enumerate(r['stations']):
  assert st['first']+st['recovered']+st['failed']==2
  assert st['first']==sum(s[i]=='first' for i in (j,j+2))
json.dump({'exhaustiveTwoUnitTwoStationGrids':len(cases),'independentFractionArithmetic':True,'countsAndConservation':True},open('independent-core-validation.json','w'),indent=2)
print('PASS independent Python enumeration and Fraction arithmetic')
