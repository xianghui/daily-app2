import json
from fractions import Fraction
from pathlib import Path
cases=json.loads(Path('core-cases.json').read_text())
for c in cases:
 t=int(c['total']);w=list(map(int,c['weights']));s=sum(w);exact=[Fraction(t*x,s) for x in w];floor=[x.numerator//x.denominator for x in exact];n=t-sum(floor)
 order=sorted(range(len(w)),key=lambda i:(-(exact[i]-floor[i]),i))
 for i in order[:n]:floor[i]+=1
 assert floor==list(map(int,c['actual']))
Path('independent-core-validation.json').write_text(json.dumps({'exactFractionCases':len(cases),'allMatched':True},indent=2))
print('PASS independent',len(cases))
