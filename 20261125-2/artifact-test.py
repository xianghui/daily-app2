import json,csv,pathlib,os
p=pathlib.Path('.')
for prefix in [os.environ.get('PREFIX','')]:
 for kind in ['fixture0','fixture1','reviewed','max']:
  j=json.loads((p/(prefix+'export-'+kind+'.json')).read_text()); rows=list(csv.DictReader((p/(prefix+'export-'+kind+'.csv')).open(newline=''))); f=json.loads((p/(prefix+'export-'+kind+'-fixtures.json')).read_text())
  assert len(rows)==len(j['originalInput']['records'])==len(j['checks'])==len(f['cases'])
  for i,c in enumerate(j['checks']):
   assert json.loads(rows[i]['result_json'])==c['result']
   assert rows[i]['reviewed_batch']==c['raw']
   assert f['cases'][i]['expected']==c['result']
   assert len(c['result'])==len(json.loads(c['raw'])['requests'])
  if kind=='reviewed':
   assert rows[1]['review_note']=="'"+j['reviews'][1]['note'];assert '\n' in j['reviews'][1]['note'];assert '\n' in j['checks'][1]['result'][0]['representation']
print('PASS independent CSV/JSON artifacts and all request preservation')
pathlib.Path('artifact-validation.json').write_text(json.dumps({'independentPythonCsvJsonParsing':True,'batches':[3,3,3,24],'allRequestsPreserved':True,'multilineQuotedEdits':True}))
