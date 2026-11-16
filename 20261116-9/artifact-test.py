import csv,json,pathlib,math
checks=[]
for f in pathlib.Path('.').glob('export-*.json'):
 r=json.loads(f.read_text());assert len(r['reviews'])==len(r['originalInput']['observations']);assert [x['id'] for x in r['reviews']]==[x['id'] for x in r['originalInput']['observations']]
 c=f.with_suffix('.csv')
 if c.exists():
  rows=list(csv.DictReader(c.open(newline='')));assert len(rows)==r['total']
  for x,y,o in zip(rows,r['reviews'],r['originalInput']['observations']):
   assert x['id']==y['id'];assert int(x['original_price_cents'])==o['priceCents'];assert int(x['original_quantity'])==o['quantity'];assert int(x['reviewed_price_cents'])==y['priceCents'];assert int(x['reviewed_quantity'])==y['quantity'];assert x['reviewed_product']==y['item'];assert x['reviewed_period']==y['period'];assert x['review_note']==("'" if y['reviewNote'].startswith(('=','+','-','@','\t','\r')) else '')+y['reviewNote'];assert x['original_description']==o['description']
 if r['status']=='ready':
  assert sum(x['p0']*x['q0'] for x in r['basket'])==r['baseSpend'];assert sum(x['p1']*x['q1'] for x in r['basket'])==r['currentSpend'];assert math.isclose(r['fisherPrice']*r['fisherQuantity'],r['valueRatio'],rel_tol=1e-12)
  bc=f.with_name(f.stem+'-basket.csv')
  if bc.exists():
   rows=list(csv.DictReader(bc.open(newline='')));assert sum(int(x['base_spend_cents']) for x in rows)==r['baseSpend'];assert sum(int(x['current_spend_cents']) for x in rows)==r['currentSpend'];assert len(rows)==len(r['basket'])
 md=f.with_suffix('.md')
 if md.exists():
  s=md.read_text();assert all(x['id']+': '+o['description'] in s for x,o in zip(r['reviews'],r['originalInput']['observations']));assert all(x['reviewNote'] in s for x in r['reviews'])
 checks.append(f.name)
assert len(checks)>=10
assert json.loads(pathlib.Path('export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
pathlib.Path('artifact-validation.json').write_text(json.dumps({'parsedExports':checks,'independentPythonCSVParser':True,'allRecordsAndReviewedFieldsPreserved':True,'multilineFormulaSafetyVerified':True,'allBasketTotalsAndFactorizationVerified':True},indent=2));print('PASS',len(checks),'JSON and available CSV/basket/Markdown artifact round trips')
