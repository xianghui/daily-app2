import csv,json,io
from pathlib import Path
checks=[]
for stem in ['export-reviewed','export-max','export-edge']:
 a=json.loads(Path(stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(stem+'.csv').read_text())))
 assert len(rows)==len(a['reviews'])
 for x,r in zip(rows,a['reviews']):
  assert x['id']==r['id'] and x['product']==r['item'] and int(x['qty_packs'])==r['qty'] and int(x['expiry_day_inclusive'])==r['expiryDay']
  for key,jkey in [('original','text'),('note','note')]:
   expected=r[jkey];expected=("'"+expected) if expected and expected[0] in '=+-@\t\r' else expected
   assert x[key]==expected
 checks.append(dict(file=stem,records=len(rows),roundTrip=True))
for stem,picks in [('export-reviewed','export-picks.csv'),('export-edge','export-edge.picks.csv')]:
 a=json.loads(Path(stem+'.json').read_text());rows=list(csv.DictReader(open(picks,newline='')))
 for day in a['fefo']['days']:
  cells=[r for r in rows if int(r['day'])==day['day'] and r['product']==day['item']]
  assert cells
  assert sum(int(r['picked_packs']) for r in cells)+sum(int(r['unmet_packs']) for r in cells)==day['demand']
  assert [(r['lot'],int(r['picked_packs'])) for r in cells if r['lot']]==[(p['id'],p['qty']) for p in day['picks']]
 checks.append(dict(file=picks,allProductDaysAndPicksPreserved=True))
a=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text();assert '17 packs' in md and all(r['id'] in md for r in a['reviews'])
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(open('export-rescue.csv',newline='')))
for day in a['rescue']['days']:
 cells=[r for r in rows if int(r['day'])==day['day']];assert cells
 assert sum(int(r['rescued_packs']) for r in cells)<=day['capacity']
 assert [(r['lot'],r['product'],int(r['rescued_packs'])) for r in cells if r['lot']]==[(p['id'],p['item'],p['qty']) for p in day['picks']]
assert sum(int(r['rescued_packs']) for r in rows)==a['rescue']['rescued']
assert all(l['used']+l['rescued']+l['unrescuedExpiry']+l['left']==l['qty'] for l in a['rescue']['lots'])
checks.append(dict(file='export-rescue.csv',allDaysAndReviewedRescuePicksPreserved=True,protectedDemandAndSharedCapsConserved=True))
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independently parsed JSON/CSV/Markdown downloads, escaping, every lot and daily pick')
