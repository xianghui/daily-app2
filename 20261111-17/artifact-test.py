from pathlib import Path
import csv,json
p=Path('.')
a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed.csv').open(newline='')))
assert len(rows)==len(a['records'])
for i,(r,s) in enumerate(zip(rows,a['records'])):
 assert r['id']==s['id'] and r['source']==s['text'] and int(r['quantity'])==s['quantity'] and int(r['gramsEach'])==s['grams']
 assert [int(r[k]) for k in ['lengthCm','widthCm','heightCm']]==s['dims']
 assert r['product']==s['product'] and r['decision']==s['decision']
 assert r['note']==("'"+s['note'] if s['note'].startswith(('=','+','-','@','\t','\r')) else s['note'])
 choice=a['shipments'][i]['selected']
 assert r['carton']==(choice['carton'] if choice else '')
 if choice: assert int(r['costCents'])==choice['costCents'] and int(r['billableKg'])==choice['billableKg']
assert len(list(csv.DictReader((p/'export-max.csv').open(newline=''))))==12
assert json.loads((p/'export-roundtrip.json').read_text())['originalInput']==json.loads((p/'export-max.json').read_text())['originalInput']
assert '700 g each' in (p/'export-reviewed.md').read_text()
(p/'artifact-validation.json').write_text(json.dumps({'independentPythonCSVParser':True,'allRowsPreserved':True,'editedQuantityAndWeightPreserved':True,'formulaMultilineEscaping':True,'cartonChoicesAndChargesMatchReviewedJSON':True,'JSONOriginalsRoundTrip':True,'MDReflectsReview':True,'maxBatchRecords':12},indent=2))
print('PASS actual CSV JSON Markdown artifact parse/reconciliation')
