from pathlib import Path
import json,csv,io
p=Path(__file__).resolve().parent
report=[]
for f in sorted(p.glob('export-*.json')):
 r=json.loads(f.read_text());assert r['schema']=='bundle-orchard/v1'
 assert len(r['reviews'])==len(r['originalInput']['records'])==r['total']
 assert [x['id']for x in r['reviews']]==[x['id']for x in r['originalInput']['records']]
 assert r['subtotalCents']==sum(x['priceCents']for x in r['reviews'])
 assert r['payableCents']==r['subtotalCents']-r['optimal']['savingsCents']>=0
 for key in ['optimal','greedy']:
  plan=r[key];ids=[i for a in plan['applications']for i in a['items']];assert len(ids)==len(set(ids))
  assert plan['savingsCents']==sum(a['discountCents']for a in plan['applications'])
  assert len(plan['applications'])==len(set(a['promotion']for a in plan['applications']))
  for a in plan['applications']:
   rows=[x for x in r['reviews']if x['id']in a['items']];assert all(x['decision']=='approve' for x in rows)
   rule=next(x for x in r['originalInput']['promotions']if x['id']==a['promotion'])
   assert sorted(x['category']for x in rows)==sorted(rule['requires'])
   assert sum(x['priceCents']for x in rows)>=a['discountCents']==rule['discountCents']
 c=f.with_suffix('.csv')
 if c.exists():
  rows=list(csv.DictReader(io.StringIO(c.open(newline='').read())));assert len(rows)==r['total']
  for x,y in zip(rows,r['reviews']):
   assert x['id']==y['id'];assert int(x['reviewed_price_cents'])==y['priceCents'];note=y['reviewNote'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r'))else note;assert x['review_note']==expected
 c=f.with_name(f.stem+'-receipt.csv')
 if c.exists():
  rows=list(csv.DictReader(io.StringIO(c.open(newline='').read())));items=[x for x in rows if x['kind']=='item'];discounts=[x for x in rows if x['kind']=='discount'];total=[x for x in rows if x['kind']=='total'];assert len(items)==r['total'];assert len(total)==1;assert sum(int(x['amount_cents'])for x in items+discounts)==int(total[0]['amount_cents'])==r['payableCents'];assert [x['id']for x in items]==[x['id']for x in r['reviews']]
 report.append({'artifact':f.name,'units':r['total'],'payableCents':r['payableCents'],'parsedAuditsAndReceipt':True})
assert len(report)==11
for j in range(2):
 r=json.loads((p/f'export-fixture{j}.json').read_text());m=(p/f'export-fixture{j}.md').read_text();assert all(x['text']in m for x in r['originalInput']['records']);assert str(r['payableCents'])in m
(p/'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent artifact checks:',len(report))
