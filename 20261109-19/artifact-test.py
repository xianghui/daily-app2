import csv,json
from pathlib import Path
for fixture in ['Cafe','Bakery','max','roundtrip','offline','phone','reviewed','challenge']:
 a=json.loads(Path('export-'+fixture+'.json').read_text());d=a['originalInput']
 assert len(a['records'])==len(d['requests']) and len(a['lots'])==len(d['lots'])
 for orig,row in zip(d['requests'],a['records']):
  for k,v in orig.items(): assert row[k]==v
  assert row['grams']==row['allocatedGrams']+row['shortageGrams']+row['heldGrams']
  for use in row['allocations']:
   l=next(l for l in d['lots'] if l['id']==use['lot']);assert l['item']==row['selected'] and l['expires']>=row['date'];assert use['grams']>0
 for l in a['lots']:
  assert l['grams']==l['reservedGrams']+l['remainingGrams'] and l['remainingGrams']>=0
  assert l['reservedGrams']==sum(u['grams'] for r in a['records'] for u in r['allocations'] if u['lot']==l['id'])
 m=a['metrics']; assert m['requestedGrams']==m['reservedGrams']+m['shortageGrams']+m['heldGrams']
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open()))
assert len(rows)==len(a['records'])+len(a['lots'])
for r,original in zip(rows,a['records']):
 assert int(r['grams'])==original['grams'] and r['description']==original['text']
 assert int(r['held_grams'])==original['heldGrams'] and json.loads(r['allocations'])==original['allocations']
for r,original in zip(rows[len(a['records']):],a['lots']):
 assert r['id']==original['id'];assert int(r['remaining_grams'])==original['remainingGrams']
assert rows[0]['note']=="'=1+1\nReviewed, \"held\" 🪷"
assert a['reviews'][0]['note']=='=1+1\nReviewed, "held" 🪷'
for row in a['records']+a['lots']:assert row['id'] in Path('export-reviewed.md').read_text()
print('PASS independent JSON/CSV/Markdown parsing: all requests/lots, splits, conservation, inclusive cutoffs, multiline Unicode review and formula protection')
