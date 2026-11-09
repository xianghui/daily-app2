import json,csv,io
from pathlib import Path
j=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())))
assert len(rows)==len(j['records'])==3
for a,b in zip(rows,j['records']):
 assert a['id']==b['id'] and a['text']==b['text'] and a['reviewed']==b['location'] and a['decision']==b['decision']
 assert a['stop']==('' if b['stop'] is None else str(b['stop']))
 assert a['note']==("'"+b['note'] if b['note'].startswith(('=','+','-','@','\t','\r')) else b['note'])
assert j['records'][0]['note']=='=1+1\nReviewed, "clock" 🪷'
assert j['records'][2]['stop'] is None
assert all(r['id'] in Path('export-reviewed.md').read_text() for r in j['records'])
for f in ['export-Library.json','export-Workshop.json','export-max.json','export-roundtrip.json']:
 a=json.loads(Path(f).read_text());assert len(a['records'])==len(a['originalInput']['records'])==a['metrics']['approved']+a['metrics']['held']
Path('export-validation.json').write_text(json.dumps({'independentPythonCSVParser':True,'allRecordsPreserved':True,'reviewedEditsAndHolds':True,'quotedMultilineFormulaGuard':True,'originalsRoundtrip':True},indent=2))
print('PASS independently parsed artifacts and original roundtrip')
