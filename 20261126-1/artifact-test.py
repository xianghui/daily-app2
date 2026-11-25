import json,csv,glob,os,sys
prefix=os.environ.get('PREFIX','');checks=0;files=[]
for path in sorted(glob.glob(prefix+'export-*.json')):
 a=json.load(open(path));files.append(path)
 assert a['schema']=='variant-grove/v1';checks+=1
 assert len(a['rows'])==len(a['original']['listings']);checks+=1
 assert [r['id'] for r in a['rows']]==[r['id'] for r in a['original']['listings']];checks+=1
 for row,orig in zip(a['rows'],a['original']['listings']):
  assert row['description']==orig['description'] and row['originalUnits']==orig['units'];checks+=1
 approved=[r for r in a['rows'] if r['decision']=='approve'];held=[r for r in a['rows'] if r['decision']=='hold']
 assert len(approved)==a['metrics']['approved'] and len(held)==a['metrics']['held'];checks+=1
 assert len(a['matrix'])==len(a['original']['axes'][0]['values'])*len(a['original']['axes'][1]['values']);checks+=1
 assert sorted(i for c in a['matrix'] for i in c['sourceIds'])==sorted(r['id'] for r in approved);checks+=1
 assert sum(c['units'] for c in a['matrix'])==sum(r['units'] for r in approved)==a['metrics']['approvedUnits'];checks+=1
 for cell in a['matrix']:
  rows=[r for r in approved if r['values']==cell['values']]
  assert cell['sourceIds']==[r['id'] for r in rows];assert cell['listingCount']==len(rows);assert cell['units']==sum(r['units'] for r in rows);checks+=3
  assert cell['status']==('missing' if not rows else 'duplicate' if len(rows)>1 else 'listed');checks+=1
 cp=path[:-5]+'.csv'
 if os.path.exists(cp):
  records=list(csv.DictReader(open(cp,newline='')));files.append(cp);assert len(records)==len(a['rows']);checks+=1
  for r,row in zip(records,a['rows']):
   assert r['id']==row['id'];assert r['original_description']==("'" if row['description'] and row['description'][0] in '=+-@\t\r' else '')+row['description'];assert int(r['original_units'])==row['originalUnits'];assert int(r['reviewed_units'])==row['units'];assert r['decision']==row['decision'];assert [r['axis_1_value'],r['axis_2_value']]==row['values'];assert r['reviewer_note']==("'" if row['note'] and row['note'][0] in '=+-@\t\r' else '')+row['note'];checks+=7
 mp=path[:-5]+'.matrix.csv'
 if os.path.exists(mp):
  records=list(csv.DictReader(open(mp,newline='')));files.append(mp);assert len(records)==len(a['matrix']);checks+=1
  for r,cell in zip(records,a['matrix']):
   assert [r['axis_1_value'],r['axis_2_value']]==cell['values'];assert json.loads(r['source_ids_json'])==cell['sourceIds'];assert r['status']==cell['status'];assert int(r['reviewed_units'])==cell['units'];checks+=4
 md=path[:-5]+'.md'
 if os.path.exists(md):
  s=open(md).read();files.append(md)
  for r in a['rows']:assert r['description'] in s and r['note'] in s;checks+=1
assert files,'No downloaded artifacts found'
json.dump({'parsedArtifacts':files,'independentAssertions':checks,'parsers':'Python json and csv, explicit source/matrix invariants'},open(prefix+'artifact-validation.json','w'),indent=2)
print('PASS independent artifacts',len(files),checks)
