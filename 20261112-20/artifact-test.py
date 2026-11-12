import csv,json,io
from pathlib import Path
r=json.load(open('export-reviewed.json'));rows=list(csv.DictReader(open('export-reviewed.csv',newline='')));p=list(csv.DictReader(open('export-priority.csv',newline='')))
assert len(rows)==len(r['reviews'])==len(p)==8
for actual,review in zip(rows,r['reviews']):
 assert actual['id']==review['id'] and actual['original']==review['text']
 assert int(actual['assessor_a'])==review['a'] and int(actual['assessor_b'])==review['b']
 assert actual['note']==("'"+review['note'] if review['note'].startswith(('=','+','-','@','\t','\r')) else review['note'])
assert rows[0]['note']=="'=SUM(1,2)\n\"quoted\", note"
assert {x['id'] for x in p}=={x['id'] for x in rows}
m=json.load(open('export-max.json'));assert len(list(csv.DictReader(open('export-max.csv',newline=''))))==len(m['reviews'])==24
assert all(sum(map(sum,c['matrix']))==c['n'] for c in m['criteria'])
assert 'A 2 / B 1' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps(dict(reviewedPairs=8,maxPairs=24,allRecordsPreserved=True,editedRatingPreserved=True,multilineCSVAndFormulaEscaping=True,prioritiesComplete=True,markdownMatches=True),indent=2));print('PASS independent CSV/JSON/Markdown parsing and conservation')
