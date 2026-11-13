import json
from fractions import Fraction
from pathlib import Path
cases=json.loads(Path('core-cases.json').read_text())
for c in cases:
 s,o,v,r=(c[x] for x in ['s','o','v','result']);w=sum(x['weight'] for x in s);ev=[sum(Fraction(y*s[j]['weight'],w) for j,y in enumerate(row)) for row in v];reg=[max(max(z[j] for z in v)-y for j,y in enumerate(row)) for row in v];perfect=sum(Fraction(max(row[j] for row in v)*x['weight'],w) for j,x in enumerate(s));best=[max(row) for row in v]
 assert r['expectedChoice']==[x['id'] for i,x in enumerate(o) if ev[i]==max(ev)]
 assert r['regretChoice']==[x['id'] for i,x in enumerate(o) if reg[i]==min(reg)]
 assert r['optimisticChoice']==[x['id'] for i,x in enumerate(o) if best[i]==max(best)]
 assert Fraction(r['expectedNumerator'],r['weight'])==max(ev)
 assert Fraction(r['evpiNumerator'],r['weight'])==perfect-max(ev)>=0
 assert Fraction(r['optimisticEVNumerator'],r['weight'])==max(ev[i] for i in range(len(o)) if best[i]==max(best))
 for i,x in enumerate(r['scores']):
  assert x['maxRegretCents']==reg[i]
  assert x['worstCaseCents']==min(v[i])
  assert x['regrets']==[max(row[j] for row in v)-y for j,y in enumerate(v[i])]
Path('core-validation.json').write_text(json.dumps({'independentFractionCases':len(cases),'allExactArithmeticAndTiesPassed':True},indent=2));print('PASS',len(cases),'independent rational expected-value, regret and information-ceiling cases')
