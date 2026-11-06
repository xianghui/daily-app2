import json,csv
from pathlib import Path
for name in ['edited','quoted']:
 a=json.loads(Path(f'export-{name}.json').read_text())
 with open(f'export-{name}.csv',newline='') as f: rows=list(csv.DictReader(f))
 assert len(rows)==len(a['rows'])
 def safe(x):return "'"+x if x and x[0] in '=+-@\t\r' else x
 for r,j in zip(rows,a['rows']):
  assert r['id']==safe(j['id'])
  assert r['source']==safe(j['original']['source'])
  assert r['original']==safe(j['original']['text'])
  assert r['excerpt']==safe(j['excerpt'])
  assert r['note']==safe(j['note'])
  assert r['include']==str(j['include']).lower()
 selected=[j['similarity'] for j in a['rows'] if j['include']]
 assert abs(a['metrics']['reviewMeanSimilarity']-(sum(selected)/len(selected) if selected else 0))<1e-10
 baseline=[j['similarity'] for j in a['rows'] if j['id'] in a['metrics']['baselineLeadingIds']]
 assert abs(a['metrics']['baselineMeanSimilarity']-(sum(baseline)/len(baseline) if baseline else 0))<1e-10
 assert a['metrics']['selectedWords']==sum(len(j['excerpt'].split()) for j in a['rows'] if j['include'])<=a['budget']
print('Actual downloaded CSV/JSON records, edited quotations, formula safety, quoted commas/newlines and budgets round-trip correctly.')
