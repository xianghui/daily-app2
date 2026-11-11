import csv,json
from pathlib import Path
checks=[]
for name in ['reviewed','max']:
 a=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(Path('export-'+name+'.csv').open(newline='')))
 assert len(rows)==len(a['records'])
 for actual,expected in zip(rows,a['records']):
  assert actual['id']==expected['id'] and actual['cost']==str(expected['cost']) and actual['decision']==expected['decision']
  note=expected['note'];safe="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
  assert actual['note']==safe
 schedulefile='export-schedule.csv' if name=='reviewed' else 'export-max-schedule.csv'
 monthly=list(csv.DictReader(Path(schedulefile).open(newline='')))
 assert len(monthly)==sum(len(r['schedule']['entries']) for r in a['records'] if r['schedule'])
 for r in a['records']:
  entries=[e for e in monthly if e['asset']==r['id']]
  if r['schedule']:
   assert sum(int(e['depreciationCents']) for e in entries)==r['cost']-r['residual']
   assert int(entries[-1]['bookCents'])==r['residual']
   assert [e['month'] for e in entries]==[e['month'] for e in r['schedule']['entries']]
 checks.append({'name':name,'registerRows':len(rows),'scheduleRows':len(monthly),'independentCsvParse':True,'centConservation':True})
a=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text();assert all(json.dumps(r['id']) in md for r in a['records']);assert a['records'][0]['cost']==12001 and a['records'][0]['residual']==17
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS actual downloaded register/schedule CSV, JSON and Markdown')
