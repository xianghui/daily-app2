import json,csv,io
from pathlib import Path
checks=[]
for label in ['fixture0','fixture1','reviewed','max']:
 d=json.loads(Path('export-'+label+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+label+'.csv').read_text())))
 assert set(x['id'] for x in rows)==set(x['id'] for x in d['reviews'])
 for r in d['reviews']:
  rr=[x for x in rows if x['id']==r['id']];p=next((p for p in d['plans'] if p['id']==r['id']),None)
  assert len(rr)==(len(p['annual']) if p else 1)
  for x in rr:
   expected=r['reviewNote'];expected=("'"+expected) if expected.startswith(('=','+','-','@','\t','\r')) else expected
   assert x['review_note']==expected
  if p:
   assert sum(int(x['charge']) for x in rr)==r['cost']-r['residual']
   assert int(rr[-1]['closing'])==r['residual']
 assert d['firstYear']==sum(p['annual'][0]['charge'] for p in d['plans'])
 assert d['baselineFirstYear']==sum(p['baseline'][0]['charge'] for p in d['plans'])
 checks.append({'artifact':label,'assets':d['total'],'csvRows':len(rows),'firstYear':d['firstYear'],'baselineFirstYear':d['baselineFirstYear']})
assert '\n"quoted", verify 🌿' in json.loads(Path('export-reviewed.json').read_text())['reviews'][0]['reviewNote']
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent CSV/JSON conservation and reviewed multiline artifacts')
