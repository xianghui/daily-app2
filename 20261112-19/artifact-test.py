import csv,json,io
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())));assert len(rows)==len(r['reviews'])==8
for out,review in zip(rows,r['reviews']):
 assert out['id']==review['id'] and out['original']==review['text'] and out['stream']==review['item']
 assert float(out['value'])==review['value'] and int(out['sequence'])==review['order']
 note=review['note'];assert out['note']==("'"+note if note.startswith(('=','+','-','@','\t','\r')) else note)
assert rows[0]['value']=='-17'
chart=list(csv.DictReader(io.StringIO(Path('export-chart.csv').read_text())));assert len(chart)==8
assert {x['id'] for x in chart}=={x['id'] for x in r['reviews']}
for c in r['charts']:
 for p in c['points']:
  out=next(x for x in chart if x['id']==p['id']);assert float(out['value'])==p['value'];assert out['signals']=='; '.join(p['reasons'])
maxr=json.loads(Path('export-max.json').read_text());maxcsv=list(csv.DictReader(io.StringIO(Path('export-max.csv').read_text())));maxchart=list(csv.DictReader(io.StringIO(Path('export-max-chart.csv').read_text())));assert len(maxr['reviews'])==len(maxcsv)==len(maxchart)==24
md=Path('export-reviewed.md').read_text();assert all(x['id'] in md for x in r['reviews']);assert 'value -17' in md
Path('artifact-validation.json').write_text(json.dumps(dict(independentPythonCSVParser=True,reviewedRecords=8,maxRecords=24,allRowsAndEditedFieldsPreserved=True,formulaLikeMultilineNoteEscaped=True,signedNumericUnchanged=True,chartCSVComplete=True,markdownCurrent=True),indent=2));print('PASS independent CSV/JSON/Markdown artifact validation')
