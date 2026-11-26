from fractions import Fraction
import json
cases=json.load(open('core-cases.json'))
def f(x):return Fraction(int(x['n']),int(x['d']))
for c in cases:
 d,review,r=c['d'],c['review'],c['r'];S=sum(m['perOutput'] for m in d['materials']);T=sum(s['quantity'] for s in review);mix=Fraction();yld=Fraction();consumed=0;allowed=0
 for m in d['materials']:
  q=sum(s['quantity'] for s in review if s['material']==m['id']);rsq=Fraction(T*m['perOutput'],S);sq=d['actualOutput']*m['perOutput'];v_mix=(q-rsq)*m['price'];v_yield=(rsq-sq)*m['price'];v_usage=(q-sq)*m['price'];o=next(x for x in r['materials'] if x['id']==m['id']);assert f(o['revisedStandardQuantity'])==rsq;assert f(o['mixVariance'])==v_mix;assert f(o['yieldVariance'])==v_yield;assert f(o['usageVariance'])==v_usage;assert v_mix+v_yield==v_usage;mix+=v_mix;yld+=v_yield;consumed+=q*m['price'];allowed+=sq*m['price']
 s=r['summary'];assert f(s['mixVariance'])==mix;assert f(s['yieldVariance'])==yld;assert f(s['usageVariance'])==mix+yld==consumed-allowed;assert f(s['consumedAtStandard'])==consumed;assert f(s['allowedAtStandard'])==allowed;assert s['totalQuantity']==T;assert s['allowedQuantity']==d['actualOutput']*S
json.dump({'cases':len(cases),'nonIntegerMixCases':sum(f(c['r']['summary']['mixVariance']).denominator!=1 for c in cases),'result':'Independent Python Fraction oracle agrees on all per-material and aggregate exact quantities/variances; mix plus yield equals usage in every case.'},open('independent-core-validation.json','w'),indent=2)
print('PASS independent rational oracle',len(cases))
