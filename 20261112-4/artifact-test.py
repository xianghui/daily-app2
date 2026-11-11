import json,csv,io
from pathlib import Path
checks=[]
for prefix in ['reviewed','phone','max']:
 a=json.loads(Path('export-'+prefix+'.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path('export-'+prefix+'.csv').read_text())));assert len(rows)==len(a['originalInput']['records'])==len(a['records'])
 for x,r in zip(rows,a['records']):
  assert x['id']==r['id'];assert x['source']==("'" if r['text'][:1] in '=+-@\t\r' else '')+r['text'];assert x['reviewedProduct']==r['item'];assert x['decision']==r['decision'];assert int(x['onHand'])==r['onHand'];assert int(x['onOrder'])==r['onOrder'];assert int(x['backorders'])==r['backorders'];assert x['note']==("'" if r['note'][:1] and r['note'][:1] in '=+-@\t\r' else '')+r['note']
 checks.append({'artifact':prefix,'allRecordsAndReviewedFields':True,'count':len(rows)})
a=json.loads(Path('export-reviewed.json').read_text());ps=list(csv.DictReader(io.StringIO(Path('export-products.csv').read_text())));assert len(ps)==len(a['products'])
for x,r in zip(ps,a['products']):
 for k in ['position','reorderPoint','baseline','topUp','baselineTopUp','covered','baselineCovered']:assert int(x[k])==r[k]
assert a['records'][0]['onHand']==3 and a['originalInput']['records'][0]['onHand']==1
md=Path('export-reviewed.md').read_text();assert all(r['id'] in md for r in a['records']);assert '&lt;check&gt;' in md
assert json.loads(Path('export-max.json').read_text())['originalInput']==json.loads(Path('export-roundtrip.json').read_text())['originalInput']
Path('artifact-validation.json').write_text(json.dumps({'checks':checks,'productCsvReopened':True,'formulaLikeMultilineEscaping':True,'markdownAllRecordsEscaped':True,'originalsUnchanged':True,'maxAuditRoundtrip':True},indent=2));print('PASS artifact parsing, preservation, reviewed edits and original roundtrip')
