from pathlib import Path
import csv,json,io
j=json.loads(Path('export-reviewed.json').read_text());c=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())));assert len(c)==len(j['records'])==4
for a,b in zip(c,j['records']):
 for k in ['id','period','text','decision']:assert a[k]==b[k]
 assert a['reviewedTopic']==b['topic'];assert a['note']==("'"+b['note'] if b['note'].startswith(('=','+','-','@','\t','\r')) else b['note'])
md=Path('export-reviewed.md').read_text();assert all(r['id']+' / '+r['period'] in md for r in j['records']);assert '50.0' not in md # held food changes denominator: all included become noise
assert json.loads(Path('export-roundtrip.json').read_text())['input']==json.loads(Path('export-max.json').read_text())['input']
Path('artifact-validation.json').write_text(json.dumps({'rows':4,'CSVEscaping':True,'MarkdownAllRecords':True,'JSONOriginalRoundtrip':True}));print('PASS independent CSV, Markdown and JSON artifacts')
