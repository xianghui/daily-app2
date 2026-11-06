import csv,json
from pathlib import Path
for name in ['edited','quoted']:
 a=json.loads(Path(f'export-{name}.json').read_text())
 rows=list(csv.DictReader(Path(f'export-{name}.csv').open(newline='')))
 assert len(rows)==len(a['rows'])
 def safe(s):
  return "'"+s if s and s[0] in '=+-@\t\r' else s
 for c,j in zip(rows,a['rows']):
  assert c['id']==safe(j['id'])
  assert c['original_comment']==safe(j['source']['comment'])
  assert c['reviewed_lens']==j['lens']
  assert c['action']==j['action']
  assert c['owner']==safe(j['owner'])
  assert c['review_note']==safe(j['note'])
  assert c['human_reviewed']==str(j['reviewed']).lower()
 print(name,'CSV/JSON roundtrip passed:',len(rows),'rows')
