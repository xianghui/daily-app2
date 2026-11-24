import json,fnmatch
from decimal import Decimal
from pathlib import Path
cases=json.loads(Path('negotiation-cases.json').read_text());count=0
for c in cases:
 ranges=[]
 for r in c['accept'].split(','):
  bits=r.strip().split(';q=');name=bits[0];q=int(Decimal(bits[1] if len(bits)>1 else '1')*1000);specificity=2-name.count('*');ranges.append((name,q,specificity))
 qualities=[]
 for offer in c['offered']:
  matches=[r for r in ranges if fnmatch.fnmatchcase(offer,r[0])]
  expected=max(matches,key=lambda r:r[2])[1] if matches else 0
  qualities.append(expected)
 best=max(qualities);selected=c['offered'][qualities.index(best)] if best>0 else None
 assert selected==c['result']['selected'],c
 assert qualities==[r['q'] for r in c['result']['candidates']]
 assert c['result']['statusCode']==(200 if selected else 406)
 assert c['result']['disagreement']==(selected!=c['offered'][0]);count+=4
Path('oracle-validation.json').write_text(json.dumps({'cases':len(cases),'assertions':count,'independentOracle':'Python Decimal quality, fnmatch ranges and max-specificity filtering'},indent=2));print('PASS independent oracle',count)
