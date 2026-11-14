from fractions import Fraction
from itertools import permutations
from pathlib import Path
import json,math
cases=json.loads(Path('oracle-cases.json').read_text())
for c in cases:
 n=len(c['q']);s=[0]*n
 def price(q):
  if q==0:return 0
  return next(t['cents'] for t in c['tiers'] if q<=t['upTo'])
 for order in permutations(range(n)):
  q=0
  for i in order:
   s[i]+=price(q+c['q'][i])-price(q);q+=c['q'][i]
 exact=[Fraction(x,math.factorial(n)) for x in s]; shares=[x.numerator//x.denominator for x in exact];rem=price(sum(c['q']))-sum(shares)
 order=sorted(range(n),key=lambda i:(-(exact[i]-shares[i]),i))
 for i in order[:rem]:shares[i]+=1
 for i,a in enumerate(c['result']['allocations']):
  assert exact[i]==Fraction(int(a['exactNumerator']),int(c['result']['denominator']))
  assert a['cents']==shares[i]
 assert sum(shares)==c['result']['totalCents']
Path('oracle-validation.json').write_text(json.dumps(dict(cases=len(cases),independentMethod='all team permutations, Python Fraction arithmetic',exactAndRoundedSharesMatch=True),indent=2));print('PASS independent permutation/Fraction oracle:',len(cases),'cases')
