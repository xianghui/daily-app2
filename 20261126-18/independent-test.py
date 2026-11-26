import json
cases=json.load(open('core-cases.json'));count=0
for c in cases:
 d=c['source'];rs=c['review'];r=c['result'];bank=d['bankBalance'];book=d['bookBalance'];shortcut=book;trails={'bank':[],'book':[]};journal=[]
 for source,s,row in zip(d['records'],rs,r['rows']):
  kind=s['kind'];side='bank' if kind in ('transit','outstanding')else'book';sign=1 if kind in ('transit','receipt')else -1;adjustment=sign*s['amount'];shortcut+=adjustment
  if side=='bank':bank+=adjustment;balance=bank
  else:book+=adjustment;balance=book;journal.append(source['id'])
  trails[side].append({'id':source['id'],'adjustment':adjustment,'balance':balance})
  assert row['signedAdjustment']==adjustment and row['side']==side;assert row['note']==source['note'] and row['amount']==source['amount'];count+=2
 assert r['bankTrail']==trails['bank']and r['bookTrail']==trails['book'];assert r['summary']['bank']==bank and r['summary']['book']==book and r['summary']['gap']==bank-book;assert r['summary']['baselineGap']==d['bankBalance']-shortcut;assert r['summary']['misroutedItems']==len(trails['bank']);assert [x['id']for x in r['bookAdjustments']]==journal;assert r['status']==('balanced'if bank==book else'difference');count+=6
json.dump({'cases':len(cases),'assertions':count,'oracle':'Independent Python integer two-sided ledger and source-order trails'},open('independent-core-validation.json','w'),indent=2);print('PASS independent',len(cases),count)
