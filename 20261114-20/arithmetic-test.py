import json
from fractions import Fraction as F
cases=json.load(open('arithmetic-cases.json'))
for c in cases:
 r=c['result']; den=sum(x['weight'] for x in c['rules']); expected={}
 for g in ['A','B']:
  rows=[x for x in c['rows'] if x['group']==g];pooled=F(sum(x['successes'] for x in rows),sum(x['total'] for x in rows));adjusted=F(0)
  for s in c['rules']:
   cells=[x for x in rows if x['kind']==s['id']];adjusted+=F(s['weight'],den)*F(sum(x['successes'] for x in cells),sum(x['total'] for x in cells))
  assert abs(r['groups'][g]['pooled']-float(pooled))<1e-12
  assert abs(r['groups'][g]['standardized']-float(adjusted))<1e-12
  expected[g]=(pooled,adjusted)
 pd=expected['A'][0]-expected['B'][0];ad=expected['A'][1]-expected['B'][1]
 assert abs(r['pooledDifference']-float(pd))<1e-12
 assert abs(r['adjustedDifference']-float(ad))<1e-12
 assert r['reversal']==(pd*ad<0)
json.dump({'cases':len(cases),'independent_reference':'Python Fraction aggregation and weighted rates','passed':True},open('arithmetic-validation.json','w'),indent=2)
print('PASS 2000 independent Fraction cases')
for c in cases:
 r=c['result']; ss=r['sensitivity']; gaps=[s['A']['rate']-s['B']['rate'] for s in r['strata']]
 assert abs(ss['minGap']-min(gaps))<1e-12 and abs(ss['maxGap']-max(gaps))<1e-12
 assert abs(sum(x['contribution'] for x in ss['gaps'])-r['adjustedDifference'])<1e-12
 if ss['crossover']:
  w=ss['crossover']['firstShare'];assert 0<=w<=1 and abs(w*gaps[0]+(1-w)*gaps[1])<1e-12
print('PASS all sensitivity envelopes, contributions and crossover roots')
