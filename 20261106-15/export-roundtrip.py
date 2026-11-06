import csv,json
from pathlib import Path
j=json.loads(Path('export-test.json').read_text())
with open('export-test.csv',newline='') as f:r=list(csv.DictReader(f))
assert len(r)==len(j['records'])==6
for a,b in zip(r,j['records']):
 assert int(a['id'])==b['id'] and a['original_feedback']==b['text'] and a['theme']==b['theme'] and int(a['theme_id'])==b['group']
assert '"blocked"' in r[0]['theme'] and ',' in r[0]['theme']
print('PASS downloaded CSV parsed against downloaded JSON; all six originals and reviewed theme names preserved')
