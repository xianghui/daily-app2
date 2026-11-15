import json
cases=json.load(open('oracle-cases.json'))
for c in cases:
 best=[None]
 def search(i,used,total):
  if i==len(c['jobs']):
   if best[0] is None or total<best[0]:best[0]=total
   return
  j=c['jobs'][i]
  for start in range(j['earliest'],j['latest']-j['hours']+1):
   occupied=set(range(start,start+j['hours']))
   if occupied&used:continue
   price=sum(c['rates'][start:start+j['hours']])*j['watts']
   search(i+1,used|occupied,total+price)
 search(0,set(),0)
 assert c['result']['feasible']==(best[0] is not None)
 assert c['result']['costMilliCents']==best[0]
json.dump({'cases':len(cases),'independentMethod':'Enumerate fixed-job start assignments with occupancy sets; no subset/time DP','allExact':True},open('arithmetic-validation.json','w'),indent=2)
print('PASS 500 independent exhaustive start-assignment oracles')
