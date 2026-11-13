import json
from fractions import Fraction
from pathlib import Path
cases=json.loads(Path('core-cases.json').read_text())
for c in cases:
 n,r,b=c['cents'],c['bps'],c['basis'];den=10000+r if b=='inclusive' else 10000
 raw=Fraction(n*r,den);tax=(raw+Fraction(1,2)).numerator//(raw+Fraction(1,2)).denominator
 net=n-tax if b=='inclusive' else n
 assert c['result']==dict(netCents=net,taxCents=tax,grossCents=net+tax),c
Path('core-validation.json').write_text(json.dumps({'independentFractionCases':len(cases),'allPassed':True,'formula':'tax= floor(exact rational tax + 1/2), independently checked; net+tax=gross'},indent=2))
print('PASS',len(cases),'independent Fraction cases')
