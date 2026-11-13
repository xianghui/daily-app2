import json,csv
from pathlib import Path
count=0
for p in Path('.').glob('export-*.json'):
 d=json.loads(p.read_text()); assert d['total']==len(d['reviews'])==len(d['originalInput']['records']);assert d['total']==d['approved']+d['held']
 if d['plan']:
  assert sum(b['gross'] for b in d['plan'])==sum(r['grams'] for r in d['reviews'])
 for csvpath in [p.with_suffix('.csv')]:
  if not csvpath.exists():continue
  rows=list(csv.DictReader(csvpath.open(newline='')));assert len(rows)==d['total']
  for r,x in zip(rows,d['reviews']):
   assert r['id']==x['id'];assert int(r['grams'])==x['grams'];assert r['material']==x['kind']
   for field in ['owner','review_note']:
    v=x['reviewNote' if field=='review_note' else field];expected="'"+v if v and v[0] in '=+-@\t\r' else v;assert r[field]==expected
  count+=len(rows)
r=json.loads(Path('export-reviewed.json').read_text());assert '\n' in r['reviews'][0]['reviewNote'];assert r['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps({'jsonEnvelopes':len(list(Path('.').glob('export-*.json'))),'csvRowsParsed':count,'allRecordsMassesAndMultilineEditsPreserved':True,'formulaLikeTextEscaped':True}))
print('PASS artifact roundtrips',count,'CSV rows')
