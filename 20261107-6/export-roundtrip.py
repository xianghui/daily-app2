import json,csv,io
from pathlib import Path
checks=[]
for stem in ['edited','quoted']:
 a=json.loads(Path(f'export-{stem}.json').read_text())
 rows=list(csv.DictReader(io.StringIO(Path(f'export-{stem}.csv').read_text())))
 assert len(rows)==len(a['rows'])
 def safe(x):
  return "'"+x if x and x[0] in '=+-@\t\r' else x
 for original,out in zip(a['rows'],rows):
  for f in ['id','split','text','decision','note']:
   assert out[f]==safe(original[f]),(f,out[f],original[f])
  assert out['reviewed']==str(original['reviewed']).lower()
  if original['finding']:
   assert abs(float(out['similarity_not_confidence'])-original['finding']['score'])<1e-12
   assert out['closest_train_id']==safe(original['finding']['match'])
 keptfile='export-kept.csv' if stem=='edited' else 'export-quoted-kept.csv'
 kept=list(csv.DictReader(io.StringIO(Path(keptfile).read_text())))
 expected=[r for r in a['rows'] if r['decision']=='keep']
 assert len(kept)==len(expected)
 for r,o in zip(expected,kept):
  for f in ['id','split','text']:assert o[f]==safe(r[f])
 assert all(r['decision']=='keep' for r in a['rows'] if r['split']=='train')
 assert a['metrics']['keptEvaluation']+a['metrics']['quarantined']==a['metrics']['evaluationRows']
 checks.append({'fixture':stem,'auditRows':len(rows),'keptRows':len(kept),'allFieldsAndConservation':True})
Path('export-roundtrip-validation.json').write_text(json.dumps(checks,indent=2))
print('Independent Python JSON/CSV round trips passed:',checks)
