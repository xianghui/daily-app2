import json,csv,os
from pathlib import Path
prefix=os.environ.get('PREFIX','');report=[]
for name,n in [('fixture0',3),('fixture1',3),('reviewed',3),('max',24)]:
 base=prefix+'export-'+name;r=json.loads(Path(base+'.json').read_text());rows=list(csv.DictReader(open(base+'.csv',newline='')));rel=json.loads(Path(base+'.release.json').read_text())
 assert len(rows)==n==len(r['checks'])==len(r['originalInput']['records'])==len(r['reviews'])
 assert len(rel['records'])==r['metrics']['ready']
 for i,row in enumerate(rows):
  for k,v in [('id',r['checks'][i]['id']),('original_items',r['originalInput']['records'][i]['raw']),('reviewed_items',r['reviews'][i]['raw']),('review_note',r['reviews'][i]['note'])]:
   expected=("'"+v if v and v[0] in '=+-@\t\r' else v);assert row[k]==expected,(name,i,k)
  check=r['checks'][i];assert row['status']==check['status']
  if check['status']=='ready':
   ordered=check['ordered'];assert json.loads(row['ordered'])==ordered
   original=json.loads(check['raw']);baseline=sorted(range(len(original)),key=lambda i:(original[i].encode('utf-16-be'),i));position={x['index']:i for i,x in enumerate(ordered)};inversions=sum(position[baseline[i]]>position[baseline[j]] for i in range(len(baseline)) for j in range(i+1,len(baseline)));assert inversions==check['inversions'];assert sorted(x['index'] for x in ordered)==list(range(len(original)))
   assert all(x['label']==original[x['index']] for x in ordered)
 for record in rel['records']:
  check=next(c for c in r['checks'] if c['id']==record['id']);assert check['ordered']==record['ordered'] and check['resolved']==record['resolved']
 if name=='reviewed':
  assert json.loads(r['reviews'][0]['raw'])==['B','A, "quoted"','A\nnext','B'];assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "order", exactly.'
 assert 'Computed counts' in Path(base+'.md').read_text()
 report.append({'artifact':name,'auditRows':len(rows),'releaseRows':len(rel['records']),'allOccurrencesAndReviewedFieldsPreserved':True})
Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent Python CSV/JSON parsers',report)
