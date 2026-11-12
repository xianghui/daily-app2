import json
cases=json.load(open('water-oracle-cases.json'))
for case in cases:
 d=case['input'];rs=case['rows'];a=case['output'];co={x['id']:x['coefficient'] for x in d['catalog']}
 def balance(cap):
  end=0;served=0
  for i,rain in enumerate(d['rainfall']):
   available=end+sum(r['area']*rain*co[r['item']] for r in rs)
   used=min(available,d['demand'][i]*1000)
   end=min(cap*1000,available-used);served+=used
  return served,end
 found=None
 for cap in range(0,d['maxTank']+1,d['tankStep']):
  served,end=balance(cap)
  if served*100>=sum(d['demand'])*1000*d['targetPercent']:
   found=cap;break
 assert a['targetMet']==(found is not None)
 assert a['best']['capacityLiters']==(found if found is not None else d['maxTank'])
 assert balance(a['best']['capacityLiters'])==(a['best']['suppliedMl'],a['best']['endMl'])
json.dump({'independentPythonOracle':True,'cases':len(cases),'allMatched':True},open('water-oracle-validation.json','w'),indent=2)
print('PASS 100 independent water-balance and exhaustive sizing cases')
