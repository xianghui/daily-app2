import json,csv
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(r['records'])==4
for row,record in zip(rows,r['records']):
 assert row['id']==record['id'] and row['source']==record['text']
 assert row['original_start']==record['start'] and row['original_end']==record['end']
 assert row['reviewed_event']==record['selected'] and row['decision']==record['decision']
 assert row['note']==("'"+record['note'] if record['note'].startswith(('=','+','-','@','\t','\r')) else record['note'])
assert r['records'][0]['note']=='=1+1\nReviewed, "held" 🪷'
md=Path('export-reviewed.md').read_text()
for x in r['records']:assert x['id'] in md and x['text'] in md
assert r['metrics']['approved']+r['metrics']['held']==4
assert sum(len(e['reports']) for e in r['events'])==r['metrics']['approved']
print('PASS independent JSON/CSV/MD parsing, all sources, multiline quoted formula escaping, edited held record and interval-report conservation')
