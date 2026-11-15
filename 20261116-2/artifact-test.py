import json,csv,io
from pathlib import Path
report=[]
def safe(v):
 s=str(v)
 return "'"+s if s and s[0] in '=+-@\t\r' else s
for p in sorted(Path('.').glob('export-*.json')):
 r=json.loads(p.read_text()); assert len(r['reviews'])==len(r['originalInput']['observations'])==r['total']
 assert r['approved']+r['held']==r['total']; assert r['best']['calls']<=r['budget']; assert r['finalSuccess']+r['remainingFailures']==r['initial']
 csvfile=p.with_suffix('.csv');policy=p.with_name(p.stem+'-policy.csv');md=p.with_suffix('.md')
 if csvfile.exists():
  rows=list(csv.DictReader(io.StringIO(csvfile.read_text(),newline='')));assert len(rows)==r['total']
  for i,(x,y) in enumerate(zip(rows,r['reviews'])):
   o=r['originalInput']['observations'][i]
   assert x['id']==y['id'];assert x['original_description']==safe(o['description']);assert x['reviewed_operation']==y['operation'];assert x['decision']==y['decision'];assert x['review_note']==safe(y['reviewNote'])
   for k in ['attempt','reached','succeeded']:assert int(x['original_'+k])==o[k];assert int(x['reviewed_'+k])==y[k]
 if policy.exists():
  rows=list(csv.DictReader(io.StringIO(policy.read_text(),newline='')));assert len(rows)==len(r['originalInput']['operations'])
  for x,o in zip(rows,r['originalInput']['operations']):
   assert x['operation']==o['id'];choice=next((x for x in r['best']['choices']if x['operation']==o['id']),None)
   if choice:assert int(x['retry_cap'])==choice['cap'];assert int(x['extra_calls'])==choice['calls'];assert int(x['additional_successes'])==choice['recovered']
   else:assert x['retry_cap']=='';assert x['status']=='excluded - no approved chain'
 if md.exists():
  s=md.read_text();assert all(x['id']+':' in s for x in r['reviews']);assert all(x['reviewNote'] in s for x in r['reviews']);assert 'recovered '+str(r['best']['recovered']) in s
 report.append({'file':p.name,'records':r['total'],'csvParsed':csvfile.exists(),'policyCsvParsed':policy.exists(),'markdownChecked':md.exists()})
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS',len(report),'downloaded audit envelopes, CSV and policy CSV parsing, multiline edits and formulas')
