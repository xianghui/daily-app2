import json,csv,io,math
from pathlib import Path
j=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())))
assert len(rows)==len(j['records'])==4
for a,b in zip(rows,j['records']):
 assert a['id']==b['id'] and a['source']==b['text']
 assert float(a['sourceValue'])==b['value'] and a['sourceUnit']==b['unit']
 assert a['reviewedMetric']==b['metric'] and a['decision']==b['decision']
 assert a['normalizedValue']=='' if b['normalizedValue'] is None else math.isclose(float(a['normalizedValue']),b['normalizedValue'])
 assert a['note']==("'" if b['note'].startswith(('=','+','-','@','\t','\r')) else '')+b['note']
assert rows[0]['note']=='\'=1+1\nReviewed, "dimension" 🪷'
assert j['records'][3]['normalizedValue'] is None
assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput']
Path('export-validation.json').write_text(json.dumps({'csvIndependentParse':True,'allRowsAndOriginalValuesRetained':True,'editedMultilineFormulaGuard':True,'heldIsNullNotZero':True,'jsonAuditInputRoundtrip':True},indent=2))
print('PASS independent CSV/JSON artifact roundtrips')
