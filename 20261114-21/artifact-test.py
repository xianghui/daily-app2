import json,csv
from pathlib import Path
checked=[]
for p in Path('.').glob('export-*.json'):
 d=json.loads(p.read_text());assert len(d['reviews'])==len(d['originalInput']['records'])==d['total'];assert d['approved']+d['held']==d['total'];assert [x['id'] for x in d['reviews']]==[x['id'] for x in d['originalInput']['records']];checked.append(p.name)
for n in ['fixture0','fixture1','reviewed','max']:
 d=json.load(open('export-'+n+'.json'));rows=list(csv.DictReader(open('export-'+n+'.csv',newline='')));assert len(rows)==d['total']
 for row,r in zip(rows,d['reviews']):
  assert row['id']==r['id'] and row['functional_group']==r['kind'];assert float(row['availability'])==r['availability'];assert row['decision']==r['decision'];assert json.loads(row['original'])==d['originalInput']['records'][d['reviews'].index(r)]
  for field,key in [('review_note','reviewNote'),('owner','owner')]:
   expected=r[key];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected;assert row[field]==expected
r=json.load(open('export-reviewed.json'));assert '\n' in r['reviews'][0]['reviewNote'] and '\n' in r['reviews'][0]['owner'];md=Path('export-reviewed.md').read_text();assert md.startswith('# Uptime Orchard') and len(md.splitlines())>8 and 'quoted' in md
json.dump({'jsonFiles':checked,'csvRoundTrips':4,'formulaAndMultilinePreserved':True,'markdownReopened':True},open('artifact-validation.json','w'),indent=2)
print('PASS independent Python JSON/CSV/Markdown round-trips')
