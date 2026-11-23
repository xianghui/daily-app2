import json,csv,os
from pathlib import Path
prefix=os.environ.get('PREFIX','')
report=[]
for name,n in [('fixture0',3),('fixture1',3),('reviewed',3),('max',24)]:
 base=prefix+'export-'+name
 r=json.loads(Path(base+'.json').read_text()); rows=list(csv.DictReader(open(base+'.csv',newline=''))); rel=json.loads(Path(base+'.release.json').read_text());md=Path(base+'.md').read_text()
 assert len(rows)==n==len(r['checks'])==len(r['originalInput']['records'])==len(r['reviews'])
 assert len(rel['records'])==r['metrics']['ready']
 for i,row in enumerate(rows):
  for k,v in [('id',r['checks'][i]['id']),('original_expression',r['originalInput']['records'][i]['raw']),('reviewed_expression',r['reviews'][i]['raw']),('review_note',r['reviews'][i]['note'])]:
   expected=("'"+v if v and v[0] in '=+-@\t\r' else v);assert row[k]==expected,(name,i,k,row[k],expected)
  assert row['status']==r['checks'][i]['status']
  if r['checks'][i]['status']=='ready':
   selected=r['checks'][i]['selected'];assert json.loads(row['selected'])==selected
   assert all(x in next(p for p in r['originalInput']['plans'] if p['id']==r['checks'][i]['system'])['allowed'] for x in selected)
 for record in rel['records']:
  c=next(c for c in r['checks'] if c['id']==record['id']);assert c['selected']==record['selected'] and c['checklist']==record['checklist'] and c['status']=='ready'
 if name=='reviewed':
  assert r['reviews'][0]['raw']=='MIT\nOR Apache-2.0';assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "choice", exactly.'
 assert 'Computed counts' in md
 report.append({'artifact':name,'auditRows':len(rows),'releaseRows':len(rel['records']),'independentPythonCsvJsonParsers':True,'allOriginalsAndReviewedFieldsPreserved':True})
Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS artifact parse',report)
