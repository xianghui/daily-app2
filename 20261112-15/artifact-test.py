import json,csv,io,math
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())));assert len(rows)==len(r['reviews'])
for row,review in zip(rows,r['reviews']):
 assert row['id']==review['id'] and row['original']==review['text'] and row['task']==review['item'];assert int(row['batch_units'])==review['units'];assert row['note']==("'" if review['note'].startswith(('=','+','-','@','\t','\r')) else '')+review['note']
b=list(csv.DictReader(io.StringIO(Path('export-batches.csv').read_text())));assert len(b)==4
assert math.isclose(sum(float(x['estimated_minutes']) for x in b),r['minutes'])
assert '17 new units' in Path('export-reviewed.md').read_text()
mx=json.loads(Path('export-max.json').read_text());assert len(mx['reviews'])==24;assert len(list(csv.DictReader(io.StringIO(Path('export-max.csv').read_text()))))==24
assert json.loads(Path('export-held.json').read_text())['minutes'] is None
Path('artifact-validation.json').write_text(json.dumps({'allRecordsPreserved':True,'reviewedEditSurvives':True,'csvQuotesNewlineAndFormulaPrefix':True,'batchTotalsReconciled':True,'maximumBatchRows':24,'heldTotalsBlocked':True},indent=2));print('PASS actual browser-downloaded JSON/CSV/Markdown independently reopened')
