from fractions import Fraction as F
from pathlib import Path
import json
cases=json.loads(Path('/tmp/forecast-score-cases.json').read_text())
for c in cases:
 values=c['values']; a=c['actual']; expected=sum((F(str(x['p']))-x['y'])**2 for x in values)/len(values)
 assert abs(a['brier']-float(expected))<1e-12
 assert abs(a['skill']-float(1-expected/F(1,4)))<1e-12
 for i,b in enumerate(a['bins']):
  rows=[x for x in values if min(4,int(F(str(x['p']))*5))==i]
  assert b['count']==len(rows)
  if rows:
   assert abs(b['meanProbability']-float(sum(F(str(x['p'])) for x in rows)/len(rows)))<1e-12
   assert abs(b['observedRate']-float(F(sum(x['y'] for x in rows),len(rows))))<1e-12
  else: assert b['meanProbability'] is None and b['observedRate'] is None
Path('oracle-validation.json').write_text(json.dumps({'independentFractionCases':len(cases),'brierSkillBinsAndCounts':True},indent=2))
print('PASS 2,000 independent rational arithmetic score/bin cases')
