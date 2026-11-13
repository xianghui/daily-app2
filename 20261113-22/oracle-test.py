import json,math
from fractions import Fraction
from pathlib import Path
cases=json.loads(Path('oracle-cases.json').read_text())
for c in cases:
 d,rows,got=c['d'],c['rows'],c['actual'];assert got['pairedCount']==len(rows)
 for dim in got['dimensions']:
  rs=[r for r in rows if r['kind']==dim['id']];assert dim['n']==len(rs)
  if not rs:assert dim['quadrant']=='No evidence';continue
  n=len(rs);si=sum(r['importance'] for r in rs);sp=sum(r['performance'] for r in rs)
  expected={'importance':Fraction(si,n),'performance':Fraction(sp,n),'gap':Fraction(si-sp,n),'shortfall':Fraction(sum(max(0,d['performanceTarget']-r['performance']) for r in rs),n),'weightedShortfall':Fraction(sum(r['importance']*max(0,d['performanceTarget']-r['performance']) for r in rs),si)}
  for k,v in expected.items():assert math.isclose(dim[k],float(v),abs_tol=1e-12),(k,dim[k],v)
  q=('Focus first' if expected['performance']<d['performanceTarget'] else 'Maintain strength') if expected['importance']>=d['importanceCutoff'] else ('Monitor' if expected['performance']<d['performanceTarget'] else 'Lower priority')
  assert dim['quadrant']==q;assert dim['belowTarget']==sum(r['performance']<d['performanceTarget'] for r in rs)
  assert -4<=dim['gap']<=4
 assert got['baselineOrder']==[x['id'] for x in sorted([x for x in got['dimensions'] if x['n']],key=lambda x:(x['performance'],x['id']))]
 assert got['weightedOrder']==[x['id'] for x in sorted([x for x in got['dimensions'] if x['n']],key=lambda x:(-x['weightedShortfall'],x['id']))]
Path('oracle-validation.json').write_text(json.dumps({'independentFractionCases':len(cases),'formulasQuadrantsCountsAndOrders':True}));print('PASS 500 independent Fraction formula, boundary, count and ranking cases')
