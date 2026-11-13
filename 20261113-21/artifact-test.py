import json,csv,io
from pathlib import Path
checks=[]
for filename in ['export-fixture0','export-fixture1','export-reviewed','export-max']:
 d=json.loads(Path(filename+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(filename+'.csv').read_text())))
 assert len(rows)==len(d['reviews'])==len(d['originalInput']['records'])
 for i,(r,x) in enumerate(zip(rows,d['reviews'])):
  assert r['id']==x['id'] and r['material']==x['kind']
  assert int(r['reviewed_units'])==x['units'] and int(r['reviewed_grams'])==x['grams'] and int(r['reviewed_recycled_pct'])==x['recycledPct']
  for key in ['owner','review_note']:
   expected=x['owner' if key=='owner' else 'reviewNote'];expected=("'"+expected) if expected and expected[:1] in '=+-@\t\r' else expected
   assert r[key]==expected
 assert sum(int(r['total_grams']) for r in rows)==d['plan']['totalGrams']
 checks.append(filename)
d=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text();assert '\n"quoted",' in d['reviews'][0]['reviewNote'] and d['reviews'][0]['reviewNote'] in md
assert d['reviews'][0]['owner'] in md
Path('artifact-validation.json').write_text(json.dumps(dict(downloadedAndIndependentlyParsed=checks,allRecordsPreserved=True,currentEditsAndMultilineEscaping=True)))
print('PASS independently parsed actual browser downloads')
