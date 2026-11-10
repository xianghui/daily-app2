import json,csv
from pathlib import Path
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(a['records'])==6
for row,r in zip(rows,a['records']):
 assert row['id']==r['id'] and row['source']==r['original']['text']
 assert int(row['reviewed_units'])==r['quantity']
 assert row['product']==r['item'] and row['site']==r['site']
 assert row['note']==("'"+r['note'] if r['note'].startswith(('=','+','-','@','\t','\r')) else r['note'])
 assert r['id'] in Path('export-reviewed.md').read_text()
assert rows[0]['note']=="'=1+1, \"review\"\nnext line"
assert json.loads(Path('export-edit.json').read_text())['records'][0]['quantity']==99
assert not json.loads(Path('export-held.json').read_text())['ready']
assert json.loads(Path('export-max.json').read_text())['originalInput']==json.loads(Path('export-roundtrip.json').read_text())['originalInput']
for f in ['export-Workshop.json','export-Community.json','export-reviewed.json','export-phone.json','export-offline.json']:
 d=json.loads(Path(f).read_text());assert d['ready']
 for x in d['summaries']:
  assert sum(b['before'] for b in x['balances'])==sum(b['after'] for b in x['balances'])
  assert x['beforeDeficit']-x['afterDeficit']==x['moved']
  assert x['cost']==sum(t['units']*t['unitCost'] for t in x['transfers'])
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVAndJSONParse':True,'allOriginalRecords':True,'multilineFormulaEscaping':True,'editedCurrentValues':True,'heldAndUnconfirmedBlocked':True,'originalInputRoundtrip':True,'unitAndCostConservation':True},indent=2))
print('PASS actual browser downloads parsed independently; edited values, all rows, escaping, costs and unit conservation')
