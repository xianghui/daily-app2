from pathlib import Path
import csv,json
p=Path('.')
a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed.csv').open(newline='')))
assert len(rows)==len(a['records'])
for r,s in zip(rows,a['records']):
 assert r['id']==s['id'] and r['source']==s['text'] and int(r['kg'])==s['kg'] and int(r['centsPerKg'])==s['centsPerKg']
 assert r['grade']==s['grade'] and r['decision']==s['decision']
 assert r['note']==("'"+s['note'] if s['note'].startswith(('=','+','-','@','\t','\r')) else s['note'])
 assert int(r['allocatedKg'])==next(x['kg'] for x in a['optimized']['allocations'] if x['id']==s['id'])
assert len(list(csv.DictReader((p/'export-max.csv').open(newline=''))))==12
(p/'artifact-validation.json').write_text(json.dumps({'scope':'Actual public-browser downloads','independentPythonCSVParser':True,'allRowsPreserved':True,'editedStockAndPricePreserved':True,'formulaMultilineEscaping':True,'allocationMatchesReviewedJSON':True,'maxBatchRecords':12},indent=2))
print('PASS independent public CSV parse and JSON reconciliation')
