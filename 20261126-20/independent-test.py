import json,datetime,calendar
from fractions import Fraction as F
checks=0
for case in json.load(open('core-cases.json')):
 d,r,out=case['d'],case['review'],case['result']['summary']; start=datetime.date(d['year'],1,1);end=datetime.date(d['year']+1,1,1);events={datetime.date.fromisoformat(e['date']):e for e in r};count=d['opening'];total=F(0)
 for n in range((end-start).days):
  day=start+datetime.timedelta(days=n)
  if day in events:
   e=events[day]
   count=F(count*e['numerator'],e['denominator']) if e['type']=='bonus' else count+e['quantity']*(1 if e['type']=='issue' else -1)
  v=F(count)
  for dt,e in events.items():
   if dt>day and e['type']=='bonus':v*=F(e['numerator'],e['denominator'])
  total+=v;checks+=1
 total/= (end-start).days
 def fraction(v):return F(int(v['numerator']),int(v['denominator']))
 assert total==fraction(out['weightedShares']);assert int(count)==int(out['closingShares']);assert total-count==fraction(out['closingDifference']);assert F(d['profitMinor'],100)/total==fraction(out['eps']);assert F(d['profitMinor'],100)/count==fraction(out['closingEPS']);assert sum(w['days'] for w in out['intervals'])==(end-start).days;assert sum((fraction(w['weightedContribution']) for w in out['intervals']),F(0))==total;checks+=7
json.dump({'cases':len(json.load(open('core-cases.json'))),'assertions_and_daily_steps':checks,'oracle':'Python datetime daily replay + Fraction, independent of JS interval method'},open('independent-validation.json','w'),indent=2)
print('PASS independent',checks)
