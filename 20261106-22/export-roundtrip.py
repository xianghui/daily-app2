import csv,json
from pathlib import Path
for stem in ['test','quoted']:
 a=json.loads(Path('export-'+stem+'.json').read_text()); rows=list(csv.DictReader(Path('export-'+stem+'.csv').open(newline='')))
 assert len(rows)==len(a['articles'])
 for r,s in zip(rows,a['articles']):
  assert r['id']==s['id']
  for k in ['description','owner','action','suggested','review_note']:
   value=s['note' if k=='review_note' else k]
   expected="'"+value if value and value[0] in '=+-@\t\r' else value
   assert r[k]==expected,(k,r[k],expected)
  assert r['linked_change_ids']==';'.join(m['changeId'] for m in s['matches'] if m['score']>=a['threshold'])
 assert len(a['original']['articles'])==len(rows)
print('JSON/CSV preserve all IDs, reviewed fields, links and formula-safe multiline quoted values.')
