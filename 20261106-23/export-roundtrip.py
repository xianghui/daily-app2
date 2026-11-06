import csv,json
from pathlib import Path
for stem in ['test','quoted']:
 a=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(Path('export-'+stem+'.csv').open(newline='')))
 # test JSON is overwritten by later snapshots; use the edited artifact captured in browser report.
 if stem=='test':a=json.loads(Path('browser-validation.json').read_text())['edited']
 assert len(rows)==len(a['original'])==len(a['participants'])
 for row,p in zip(rows,a['participants']):
  for key,val in p.items():
   expected="'"+val if val and val[0] in '=+-@\t\r' else val
   assert row[key]==expected,(key,row[key],expected)
 assert {p['id'] for p in rows}=={p['id'] for p in a['original']}
 for p in a['participants']:
  if p['partner']:assert next(q for q in a['participants'] if q['id']==p['partner'])['partner']==p['id']
print('CSV parsed independently: all records, reviewed partners/notes, escaping and mutual pairing preserved.')
