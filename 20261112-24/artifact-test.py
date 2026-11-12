import csv,json
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text()); rows=list(csv.DictReader(open('export-reviewed.csv')))
assert len(rows)==len(r['reviews'])==6
for x,y in zip(rows,r['reviews']):
 assert x['id']==y['id'] and x['original']==y['text'] and x['meter']==y['item'] and int(x['counter'])==y['value']
 assert x['note']==("'"+y['note'] if y['note'].startswith('=') else y['note'])
assert rows[0]['note']=='\'=SUM(1,2)\n"quoted", note'
intervals=list(csv.DictReader(open('export-interval.csv')));assert len(intervals)==4
for m in r['meters']:
 assert abs(sum(float(x['usage']) for x in intervals if x['meter']==m['id'])-m['usage'])<1e-9
assert 'counter 985' in Path('export-reviewed.md').read_text()
mx=json.loads(Path('export-max.json').read_text());assert len(list(csv.DictReader(open('export-max.csv'))))==len(mx['reviews'])==24
Path('artifact-validation.json').write_text(json.dumps(dict(reviewedRows=6,maxRows=24,intervalRows=4,quotedMultilineFormulaEscaped=True,allRecordsAndEditsPreserved=True,intervalTotalsReconciled=True),indent=2));print('PASS independently parsed downloaded JSON/CSV/Markdown')
