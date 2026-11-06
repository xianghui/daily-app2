import csv,json
from pathlib import Path
for tag in ['edited','quoted']:
 a=json.loads(Path(f'export-{tag}.json').read_text()); rows=list(csv.DictReader(Path(f'export-{tag}.csv').open(newline='')))
 assert len(rows)==len(a['rows'])==len(a['queries'])*len(a['documents'])
 def safe(v): return "'"+v if v and v[0] in '=+-@\t\r' else v
 for x,r in zip(rows,a['rows']):
  for k in ['queryId','docId','grade','note']:assert x[k]==safe(r[k]),(k,x[k],r[k])
  d=next(d for d in a['documents'] if d['id']==r['docId']);q=next(q for q in a['queries'] if q['id']==r['queryId'])
  for k in ['title','text']:assert x[k]==safe(d[k])
  assert x['query']==safe(q['text']);assert float(x['score'])==r['score'];assert int(x['rank'])==r['rank']
print('PASS independently parsed every exported pair, original, judgment, note, score and rank; multiline/quoted/formula-like fields preserved with documented CSV prefix.')
qrels=Path('export.qrels').read_text().strip().splitlines();assert qrels==['Q1 0 D1 1'];print('PASS qrels round trip')
