import csv,json,math,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0
for name in ['fixture0','fixture1','reviewed','max','hold']:
 s=json.loads(Path(prefix+name+'.json').read_text())
 assert len(s['source']['records'])==len(s['review'])==len(s['results']);checks+=1
 for original,r,v in zip(s['source']['records'],s['review'],s['results']):
  assert original['id']==r['id']==v['id'];checks+=1
  ratio=1+r['offsetMm']*math.cos(math.radians(r['angleDeg']))/r['lengthMm']
  assert abs(v['ratio']-ratio)<1e-10;checks+=1
  assert abs(v['baselineNm']-r['targetNm']*ratio)<1e-8;checks+=1
  choices=[k*r['stepNm'] for k in range(math.ceil(r['minNm']/r['stepNm']),math.floor(r['maxNm']/r['stepNm'])+1)]
  if choices:
   expected=min(choices,key=lambda n:(abs(n*ratio-r['targetNm']),n))
   assert abs(expected-v['settingNm'])<1e-8;checks+=1
   assert abs(v['deliveredNm']-expected*ratio)<1e-8;checks+=1
   assert v['ready']==(abs(expected*ratio/r['targetNm']-1)*100<=r['tolerancePct']+1e-9);checks+=1
  else:
   assert not v['ready'] and v['settingNm'] is None;checks+=1
 for suffix in ['.csv','.worksheet.csv']:
  path=Path(prefix+name+suffix)
  if not path.exists():continue
  rows=list(csv.DictReader(path.open(newline='')))
  selected=s['review'] if suffix=='.csv' else [r for r in s['review'] if r['decision']=='approve']
  assert len(rows)==len(selected);checks+=1
  for exported,r in zip(rows,selected):
   assert exported['id']==r['id'];checks+=1
   note=r['reviewerNote'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
   assert exported['reviewerNote']==expected;checks+=1
   assert exported['sourceNote']==next(x['note'] for x in s['source']['records'] if x['id']==r['id']);checks+=1
 if name=='reviewed':
  assert s['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "geometry", approved';checks+=1
  assert s['review'][0]['reviewerNote'] in Path(prefix+name+'.md').read_text();checks+=1
 if name.startswith('fixture'):
  assert s['summary']['baselineMisses']==1 and s['summary']['correctedMisses']==0;checks+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentPythonCSVAndPhysicsAssertions':checks,'sourceRowsConserved':True,'allReviewedFieldsAndFormulaEscapingChecked':True},indent=2))
print('PASS independent artifacts',checks)
