import json,csv
from pathlib import Path
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(a['records'])==4
for row,r in zip(rows,a['records']):
 assert row['id']==r['id'] and row['source']==r['original']['text']
 assert int(row['quantity'])==r['quantity'] and int(row['price_cents'])==r['price']
 assert row['product']==r['item'] and row['period']==r['period']
 assert row['note']==("'"+r['note'] if r['note'].startswith(('=','+','-','@','\t','\r')) else r['note'])
 assert r['id'] in Path('export-reviewed.md').read_text()
assert rows[0]['note']=="'=1+1, \"review\"\nnext line"
assert json.loads(Path('export-edit.json').read_text())['records'][0]['quantity']==99
assert not json.loads(Path('export-held.json').read_text())['ready']
assert json.loads(Path('export-max.json').read_text())['originalInput']==json.loads(Path('export-roundtrip.json').read_text())['originalInput']
for f in ['export-Workshop.json','export-Community.json','export-reviewed.json','export-phone.json','export-offline.json']:
 d=json.loads(Path(f).read_text());assert d['ready']
 for x in d['summaries']:
  q0,p0,q1,p1=(x[k] for k in ['q0','p0','q1','p1'])
  assert x['delta']==q1*p1-q0*p0
  assert x['volume2']+x['price2']==2*x['delta']
  assert x['baselineVolume']+x['baselinePrice']+x['baselineResidual']==x['delta']
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVAndJSONParse':True,'allOriginalRecords':True,'multilineFormulaEscaping':True,'editedCurrentValues':True,'heldAndUnconfirmedBlocked':True,'originalInputRoundtrip':True,'revenueBridgeConservation':True},indent=2))
print('PASS actual downloaded JSON/CSV/Markdown, edits, rows, escaping and bridge reconciliation')
