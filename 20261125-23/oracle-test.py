import json,math
cases=json.load(open('oracle-cases.json'))
for c in cases:
 s=sorted(c['values']); p=c['percentile']/100; n=len(s)
 # Independent weighted order-statistic calculation, not app inverse.
 h=(n-1)*p; lo=math.floor(h); hi=math.ceil(h)
 expected=(1-(h-lo))*s[lo]+(h-lo)*s[hi]
 assert math.isclose(c['linear']['value'],expected,abs_tol=1e-9)
 assert c['rank']['value']==s[max(0,math.ceil(n*p)-1)]
 assert sorted(c['linear']['sorted'])==s
json.dump({'cases':len(cases),'methods':2,'passed':True},open('oracle-validation.json','w'),indent=2)
print('PASS independent Python order-statistic oracle',len(cases))
