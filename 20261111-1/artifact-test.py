import json,csv,io
from pathlib import Path
x=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())));assert len(rows)==len(x['records'])
for c,r in zip(rows,x['records']):
 assert c['id']==r['id'] and c['source']==r['original']['text'] and int(c['quantity'])==r['quantity'] and c['decision']==r['decision']
 expected=r['note'];expected="'"+expected if expected[:1] in '=+-@\t\r' and expected else expected
 assert c['note']==expected
assert '=1+1, "review"\nnext line'==x['records'][0]['note']
md=Path('export-reviewed.md').read_text();assert all(r['id'] in md for r in x['records'])
for file in ['export-held.json','export-max.json','export-roundtrip.json']:
 a=json.loads(Path(file).read_text());assert len(a['records'])==len(a['originalInput']['observations'])
Path('artifact-validation.json').write_text(json.dumps({'allRowsPreserved':True,'CSVParsedIndependently':True,'formulaAndMultilineEscaping':True,'reviewedEditsAndHeldRecordsRetained':True,'markdownComplete':True},indent=2));print('PASS JSON/CSV/Markdown artifacts')
