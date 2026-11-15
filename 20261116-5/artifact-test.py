import csv,json,math
from pathlib import Path
checks=[]
for stem in ['export-fixture0','export-fixture1','export-reviewed','export-max']:
 r=json.loads(Path(stem+'.json').read_text());rows=list(csv.DictReader(Path(stem+'.csv').open(newline='')));budget=list(csv.DictReader(Path(stem+'-budget.csv').open(newline='')))
 assert len(rows)==len(r['reviews'])==r['total'];assert len(budget)==len(r['originalInput']['inputs'])
 for x,y,o in zip(rows,r['reviews'],r['originalInput']['observations']):
  assert x['id']==y['id']==o['id'];assert x['original_description']==o['description'];assert x['reviewed_input']==y['input'];assert float(x['value'])==y['value'];assert float(x['uncertainty'])==y['uncertainty'];assert x['kind']==y['kind'];assert x['decision']==y['decision'];assert x['review_note']==("'" if y['reviewNote'].startswith(('=','+','-','@','\t','\r')) else '')+y['reviewNote']
 for x,y in zip(budget,r['budget']):
  assert x['input']==y['id'];assert x['status']==y['status']
  if 'standard' in y:assert float(x['standard_uncertainty'])==y['standard']
 if stem!='export-max':
  md=Path(stem+'.md').read_text();assert all(o['description'] in md for o in r['originalInput']['observations']);assert all(x['reviewNote'] in md for x in r['reviews'])
 checks.append({'artifact':stem,'records':len(rows),'quantities':len(budget),'allFieldsPreserved':True})
assert json.loads(Path('export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independently parsed JSON CSV Markdown artifacts')
