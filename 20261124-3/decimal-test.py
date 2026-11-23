from decimal import Decimal,localcontext,ROUND_HALF_EVEN,ROUND_HALF_UP,ROUND_DOWN
import json
m={'half-even':ROUND_HALF_EVEN,'half-away':ROUND_HALF_UP,'truncate':ROUND_DOWN}
rows=json.load(open('arithmetic-corpus.json'))
with localcontext() as ctx:
 ctx.prec=80
 for r in rows:
  src=Decimal(r['raw']);out=src.quantize(Decimal('0.01'),rounding=m[r['mode']]);assert int(r['cents'])==int(out*100),r
  assert Decimal(r['amount'])==out
  assert Decimal(r['residual'])==out-src
json.dump({'independentDecimalCases':len(rows),'assertions':3*len(rows),'allPassed':True},open('decimal-validation.json','w'),indent=2)
print('PASS independent Decimal',len(rows))
