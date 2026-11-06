import csv,json
from pathlib import Path
for name in ['edited','quoted']:
 a=json.loads(Path(f'export-{name}.json').read_text());rows=list(csv.DictReader(Path(f'export-{name}.csv').open(newline='')))
 assert len(rows)==len(a['rows'])
 def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
 for r,j in zip(rows,a['rows']):
  assert r['id']==safe(j['id'])
  assert r['original_english']==safe(j['source']['english'])
  assert r['ai_french_draft']==safe(j['suggested'])
  assert r['reviewed_french']==('' if j['status']=='rejected' else safe(j['french']))
  assert r['review_note']==safe(j['note'])
  assert r['status']==j['status']
 print(name,len(rows),'rows, originals, decisions and reviewed text round-trip with formula safety')
