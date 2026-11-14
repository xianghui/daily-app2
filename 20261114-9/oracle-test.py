import json
from pathlib import Path
from fractions import Fraction as F
cases=json.loads(Path('core-cases.json').read_text())
for c in cases:
 r=c['r'];s=F(c['rate']);aq=F(r['actualQty']);sq=F(r['allowedQty']);pq=F(r['plannedQty']);ac=F(r['actualCostCents']);g=c['got']
 expected={'planned':pq*s,'flexible':sq*s,'actual':ac,'price':ac-aq*s,'usage':(aq-sq)*s,'volume':(sq-pq)*s,'controllable':ac-sq*s,'total':ac-pq*s}
 assert expected==g,(c,expected)
 assert g['price']+g['usage']+g['volume']==g['total']
Path('core-validation.json').write_text(json.dumps({'independentFractionCases':len(cases),'allExactIdentities':True},indent=2))
print('PASS',len(cases),'independent rational bridge cases')
