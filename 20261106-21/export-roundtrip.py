import csv,json
from pathlib import Path
for name in ['test','quoted']:
 a=json.loads(Path(f'export-{name}.json').read_text())
 with open(f'export-{name}.csv',newline='') as f: rows=list(csv.DictReader(f))
 assert len(rows)==len(a['tests'])
 assert len(a['original']['tests'])==len(a['tests'])
 assert len(a['summary']['changes'])==len(a['original']['changes'])
 for row,t in zip(rows,a['tests']):
  assert row['id']==t['id']
  def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
  assert row['description']==safe(t['description'])
  assert row['review_note']==safe(t['note'])
  assert int(row['minutes'])==t['minutes']
  assert row['selected']==('yes' if t['selected'] else 'no')
  assert row['covered_change_ids']==';'.join(m['changeId'] for m in t['matches'] if m['score']>=a['threshold'])
 assert a['summary']['minutes']==sum(t['minutes'] for t in a['tests'] if t['selected'])<=a['budget']
 assert a['summary']['covered']==sum(c['covered'] for c in a['summary']['changes'])
print('Independent CSV/JSON round trip: every reviewed test, selection, estimate, quoted field and note retained; source counts and budget reconcile.')
