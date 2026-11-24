import json
cases=json.load(open('range-cases.json'))
for c in cases:
 n=c['length'];picked=set()
 for part in c['range'][6:].split(','):
  lo,hi=part.strip().split('-')
  if lo:
   start=int(lo);stop=int(hi)+1 if hi else n
  else:
   start=max(0,n-int(hi));stop=n
  picked.update(i for i in range(n) if start<=i<stop)
 observed=set()
 for a,b in c['intervals']:
  assert 0<=a<=b<n
  observed.update(range(a,b+1))
 assert observed==picked,c
 assert c['payloadBytes']==len(picked),c
 assert c['status']==(206 if picked else 416),c
json.dump({'independentEnumeratedByteCases':len(cases),'passed':True},open('oracle-validation.json','w'),indent=2)
print('PASS independent byte-set oracle',len(cases))
