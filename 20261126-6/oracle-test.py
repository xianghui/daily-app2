import json
cases=json.load(open('oracle-cases.json'))
for c in cases:
 d=c['input']; a=int(d['openingAvailable']); r=int(d['openingReserved']); sums={k:0 for k in ['sale','refund','fee','payout','reserve','release']}; profiles={p['id']:p['rule'] for p in d['profiles']}
 for row,review,step in zip(d['requests'],c['review'],c['output']['steps']):
  k=profiles[review['profile']];v=int(review['amount']);assert int(step['availableBefore'])==a and int(step['reservedBefore'])==r
  da,dr={'sale':(v,0),'refund':(-v,0),'fee':(-v,0),'payout':(-v,0),'reserve':(-v,v),'release':(v,-v)}[k];a+=da;r+=dr;sums[k]+=v
  assert int(step['availableAfter'])==a and int(step['reservedAfter'])==r
 assert str(a)==d['closingAvailable'] and str(r)==d['closingReserved']
 assert {k:str(v) for k,v in sums.items()}==c['output']['totals']
json.dump({'trails':len(cases),'checkedEvents':sum(len(c['review']) for c in cases),'independentPythonBalanceOracle':'passed'},open('oracle-validation.json','w'),indent=2)
print('PASS Python independent event/balance oracle')
