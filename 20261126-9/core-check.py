import json
from fractions import Fraction as F
cases=json.load(open('core-cases.json'));assertions=0
for c in cases:
 v=c['input'];r=c['actual'];p=F(int(v['payment']));rate=F(v['rateBps'],10000);n=v['periods'];times=range(n)if c['rule']=='advance'else range(1,n+1)
 def check(a,b):
  global assertions
  assert F(int(a['n']),int(a['d']))==b,(v,c['rule'],a,b)
  assertions+=1
 pv=sum((p/(1+rate)**t for t in times),F(0));check(r['pv'],pv);check(r['immediatePayment'],p if c['rule']=='advance'else 0);check(r['afterImmediate'],pv-(p if c['rule']=='advance'else 0));check(r['totalPayments'],p*n);check(r['totalInterest'],p*n-pv);check(r['closing'],0)
 balance=pv
 for row,t in zip(r['rows'],times):
  assert row['at']==t;assertions+=1
  interest=0 if t==0 else balance*rate
  check(row['opening'],balance);check(row['interest'],interest);check(row['payment'],p);balance+=interest-p;check(row['closing'],balance);check(row['discount'],1/(1+rate)**t);check(row['presentValue'],p/(1+rate)**t)
 assert balance==0 and len(r['rows'])==n;assertions+=1
json.dump({'cases':len(cases),'independentFractionAssertions':assertions,'method':'Python Fraction independently discounts each payment and rolls all balances; boundary 0/50% periodic rates, 1/60 payments, 0/max payment'},open('core-validation.json','w'),indent=2)
print('PASS independent schedules',len(cases),assertions)
