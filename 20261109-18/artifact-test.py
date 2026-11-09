import csv,json
from pathlib import Path
for fixture in ['Treasury','Community','max','roundtrip','offline','phone','reviewed','challenge']:
 a=json.loads(Path('export-'+fixture+'.json').read_text())
 assert len(a['records'])==len(a['originalInput']['transactions'])
 for orig,row in zip(a['originalInput']['transactions'],a['records']):
  for k,v in orig.items():assert row[k]==v
 assert a['metrics']['netCents']==a['metrics']['remainingNetCents']
 pairs=a['pairs']; assert len(set(p['credit'] for p in pairs))==len(pairs)
 assert 2*len(pairs)+a['metrics']['unpaired']==len(a['records'])
 for p in pairs:
  x=next(t for t in a['records'] if t['id']==p['debit']);y=next(t for t in a['records'] if t['id']==p['credit'])
  assert x['cents']+y['cents']==0 and x['account']!=y['account']
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open()))
assert len(rows)==len(a['records'])
for r,original in zip(rows,a['records']):
 assert int(r['cents'])==original['cents']
 assert r['memo']==original['text']
 assert r['paired_with']==original['pairedWith']
assert rows[0]['note']=="'=1+1\nReviewed, \"held\" 🪷"
assert a['reviews'][0]['note']=='=1+1\nReviewed, "held" 🪷'
assert 'D1' in Path('export-reviewed.md').read_text() and 'C3' in Path('export-reviewed.md').read_text()
print('PASS independent JSON/CSV/Markdown artifact parsing; all rows, signed cents, edited Unicode multiline note and spreadsheet formula protection')
