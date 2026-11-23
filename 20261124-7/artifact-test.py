from pathlib import Path
import json,csv,os
from datetime import date
prefix=os.environ.get('PREFIX','');reports=[]
for file in Path('.').glob(prefix+'export-*.json'):
 if file.name.endswith('.release.json'):continue
 r=json.loads(file.read_text());assert len(r['checks'])==len(r['originalInput']['records'])
 for i,c in enumerate(r['checks']):
  if c['status']=='ready':
   raw=c['raw'];kind=c['kind'];y=int(raw[:4])
   expected=date.fromisocalendar(y,int(raw[4:6]),int(raw[6])) if kind=='iso-week' else date.fromordinal(date(y,1,1).toordinal()+int(raw[4:])-1) if kind=='ordinal' else date(y,int(raw[4:6]),int(raw[6:]))
   assert c['date']==expected.isoformat()
 rel=file.with_suffix('.release.json')
 if rel.exists():
  rr=json.loads(rel.read_text());assert [x['id'] for x in rr['records']]==[x['id'] for x in r['checks'] if x['status']=='ready']
  assert [x['date'] for x in rr['records']]==[x['date'] for x in r['checks'] if x['status']=='ready']
 cf=file.with_suffix('.csv')
 if cf.exists():
  rows=list(csv.DictReader(cf.open(newline='')));assert len(rows)==len(r['checks'])
  for i,row in enumerate(rows):
   s=r['reviews'][i]['note'];s="'"+s if s and s[0] in '=+-@\t\r' else s
   assert row['review_note']==s
   assert row['reviewed_date']==r['checks'][i]['raw']
 reports.append({'file':file.name,'records':len(r['checks']),'datesAndRecordsPreserved':True})
assert reports
Path(prefix+'artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent artifacts',len(reports))
