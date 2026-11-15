import csv,json,pathlib
p=pathlib.Path('.')
reports=[]
for name in ['fixture0','fixture1','reviewed','max']:
 d=json.loads((p/f'export-{name}.json').read_text()); rows=list(csv.DictReader((p/f'export-{name}.csv').open(newline=''))); products=list(csv.DictReader((p/f'export-{name}-products.csv').open(newline='')))
 assert len(rows)==d['total'];assert len(products)==len(d['products']);assert [x['id']for x in rows]==[x['id']for x in d['originalInput']['records']]
 for x,r in zip(rows,d['reviews']):
  expected=r['reviewNote'];expected=("'"+expected)if expected.startswith(('=','+','-','@','\t','\r'))else expected
  assert x['reviewNote']==expected;assert x['description']==d['originalInput']['records'][rows.index(x)]['description'];assert int(x['quantity'])==r['quantity'];json.loads(x['consumedLayers'])
 for x,s in zip(products,d['products']):
  assert int(x['receivedCents'])==s['fifoIssuedCents']+s['fifoBalanceCents'];assert int(x['receivedCents'])==s['averageIssuedCents']+s['averageBalanceCents'];assert json.loads(x['layers'])==s['layers']
 reports.append({'artifactSet':name,'movementRows':len(rows),'productRows':len(products),'csvRoundTrip':True})
assert '=SUM(1,2)\n"quoted", verify receipt' in json.loads((p/'export-reviewed.json').read_text())['reviews'][0]['reviewNote']
assert '"quoted", verify receipt' in (p/'export-reviewed.md').read_text()
(p/'artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent Python JSON/CSV/Markdown artifact checks')
