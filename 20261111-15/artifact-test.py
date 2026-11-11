import json,csv,io
from pathlib import Path
checks=[]
for file in ['reviewed','max','phone']:
 a=json.loads(Path('export-'+file+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+file+'.csv').read_text())));assert len(rows)==len(a['records'])
 for r,s in zip(rows,a['records']):
  assert r['id']==s['id'];assert r['originalText']==s['original']['text'];assert int(r['driver'])==s['driver'];assert r['product']==s['product'];assert r['decision']==s['decision'];assert r['note']==("'"+s['note'] if s['note'].startswith(('=','+','-','@','\t','\r')) else s['note']);assert r['allocatedCents']==('' if s['allocatedCents'] is None else str(s['allocatedCents']))
 assert sum(int(r['allocatedCents'] or 0) for r in rows)==a['metrics']['allocatedCents'];checks.append({'file':file,'records':len(rows),'allReviewedValuesPreserved':True})
a=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text();assert all(json.dumps(r['id']) in md for r in a['records']);assert json.dumps(a['records'][0]['note']) in md
products=list(csv.DictReader(io.StringIO(Path('export-products.csv').read_text())));assert len(products)==len(a['products'])
for r,s in zip(products,a['products']):
 for k in ['units','overheadCents','baselineCents','differenceCents']:assert int(r[k])==s[k]
assert sum(int(r['differenceCents']) for r in products)==0
Path('artifact-validation.json').write_text(json.dumps({'csvRoundTrips':checks,'productsCSVParsed':True,'quotedMultilineFormulaLikeNoteEscaped':True,'markdownCompleteAudit':True},indent=2));print('PASS independent JSON usage/product CSV MD artifact parsing')
