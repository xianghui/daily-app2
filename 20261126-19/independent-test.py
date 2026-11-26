import json,datetime
from fractions import Fraction
from pathlib import Path
cases=json.loads(Path('core-cases.json').read_text());checks=0
def rounded(x):return (x.numerator*2+x.denominator)//(2*x.denominator)
for case in cases:
 d,r,z=case['d'],case['r'],case['result'];cut=datetime.date.fromisoformat(d['cutoff']);nums=[];baseline=Fraction();scenario=[Fraction() for s in d['scenarios']]
 for i,(orig,rev,w) in enumerate(zip(d['records'],r,z['worksheet'])):
  age=max(0,(cut-datetime.date.fromisoformat(rev['due'])).days);bucket=0 if age==0 else 1 if age<=30 else 2 if age<=90 else 3;p=next(p for p in d['profiles'] if p['id']==rev['profile']);loss=sum(Fraction(rev['exposure']*s['weight']*p['rates'][j][bucket],100000000) for j,s in enumerate(d['scenarios']));nums.append(loss);baseline+=sum(Fraction(rev['exposure']*s['weight']*p['rates'][j][0],100000000) for j,s in enumerate(d['scenarios']));
  for j,s in enumerate(scenario):scenario[j]+=Fraction(rev['exposure']*p['rates'][j][bucket],10000)
  assert w['bucket']==bucket;assert w['daysOverdue']==age;assert Fraction(int(w['exactNumerator']),int(w['denominator']))==loss;checks+=3
 total=rounded(sum(nums));floor=[v.numerator//v.denominator for v in nums];order=sorted(range(len(nums)),key=lambda i:(-(nums[i]-floor[i]),i));
 for i in order[:total-sum(floor)]:floor[i]+=1
 assert [w['allowance'] for w in z['worksheet']]==floor;assert z['summary']['allowance']==total;assert z['summary']['allCurrentBaseline']==rounded(baseline);assert z['summary']['agingDifference']==total-rounded(baseline);assert z['summary']['independentlyRounded']==sum(rounded(v) for v in nums);assert z['summary']['roundingDifference']==total-sum(rounded(v) for v in nums);assert [s['allowance'] for s in z['scenarios']]==[rounded(v) for v in scenario];assert sum(w['netExposure'] for w in z['worksheet'])==z['summary']['netExposure'];checks+=8
Path('independent-core-validation.json').write_text(json.dumps({'cases':len(cases),'independentFractionAssertions':checks,'method':'Python fractions + datetime, independent aggregate half-up and largest-remainder allocation'},indent=2));print('PASS independent',checks)
