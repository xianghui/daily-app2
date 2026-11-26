from fractions import Fraction
import json
cases=json.load(open('core-cases.json')); assertions=0
for case in cases:
 v=case['input'];c,e,p,k=v['completed'],v['ending'],v['percent'],int(v['cost']);f=100 if v['profile']=='start' else (100 if p==100 else 0) if v['profile']=='end' else p
 eu=Fraction(c)+Fraction(e*f,100)
 if not eu and k:
  assert 'error'in case;assertions+=1;continue
 o=case['output'];share=Fraction(k*c,1)/eu if eu else Fraction(0)
 rounded=(share+Fraction(1,2)).numerator//(share+Fraction(1,2)).denominator
 base=Fraction(k*c,c+e);baseline=(base+Fraction(1,2)).numerator//(base+Fraction(1,2)).denominator
 for key,wanted in [('equivalentUnitsNumerator',int(eu*100)),('completedMinor',rounded),('endingMinor',k-rounded),('baselineCompletedMinor',baseline),('baselineEndingMinor',k-baseline),('endingDifferenceMinor',baseline-rounded)]:
  assert int(o[key])==wanted,(v,key,o[key],wanted);assertions+=1
 assert int(o['completedMinor'])+int(o['endingMinor'])==k;assertions+=1
json.dump({'cases':len(cases),'independentFractionAssertions':assertions,'allPassed':True},open('independent-core-validation.json','w'),indent=2);print('PASS independent exact fractions',len(cases),assertions)
