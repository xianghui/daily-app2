import json,csv
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text()); rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
expected=[(b,c,j) for b in r['records'] for j,c in enumerate(b['choices'])]
assert len(rows)==len(expected)==8
for row,(b,c,j) in zip(rows,expected):
 assert row['ballot']==b['id'] and int(row['rank'])==j+1
 assert row['source']==c['text'] and row['reviewed_option']==c['selected'] and row['decision']==b['decision']
 assert row['note']==("'"+b['note'] if b['note'].startswith(('=','+','-','@','\t','\r')) else b['note'])
assert r['records'][0]['note']=='=1+1\nReviewed, "held" 🪷'
md=Path('export-reviewed.md').read_text()
for b in r['records']:
 assert b['id'] in md
 for c in b['choices']:assert c['text'] in md
assert r['metrics']['approved']+r['metrics']['held']==len(r['records'])
for x in r['tally']['rounds']:assert sum(x['counts'].values())+x['exhausted']==r['metrics']['approved']
print('PASS JSON/CSV/Markdown independent parse: all eight ranks, edits, held rows, UTF-8, quoted multiline formula escaping and tally conservation')
