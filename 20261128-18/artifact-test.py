import csv,json,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0
for name in ['fixture0','fixture1','reviewed','max','hold']:
 s=json.loads(Path(prefix+name+'.json').read_text());d=s['source'];assert len(d['records'])==len(s['review'])==len(s['results']);checks+=1
 for original,r,v in zip(d['records'],s['review'],s['results']):
  assert original['id']==r['id']==v['id'];checks+=1
  options=[]
  for e in d['eyepieces']:
   m=d['telescope']['focalMm']/e['focalMm'];p=d['telescope']['apertureMm']/m;f=e['apparentDeg']/m
   if r['minMag']-1e-9<=m<=r['maxMag']+1e-9 and r['minPupil']-1e-9<=p<=r['maxPupil']+1e-9 and f>=r['angularDeg']*(1+r['marginPct']/100)-1e-9: options.append((m,e['id']))
  options.sort(key=lambda x:(-x[0],x[1]));assert (v['choice']['id'] if v['choice'] else None)==(options[0][1] if options else None);checks+=1
  assert v['ready']==bool(options);checks+=1
 for suffix in ['.csv','.worksheet.csv']:
  path=Path(prefix+name+suffix)
  if not path.exists():continue
  rows=list(csv.DictReader(path.open(newline='')));selected=s['review'] if suffix=='.csv' else [r for r in s['review'] if r['decision']=='approve'];assert len(rows)==len(selected);checks+=1
  for exported,r in zip(rows,selected):
   assert exported['id']==r['id'];checks+=1
   note=r['reviewerNote'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
   assert exported['reviewerNote']==expected;checks+=1
   assert exported['sourceNote']==next(x['note'] for x in d['records'] if x['id']==r['id']);checks+=1
   v=next(x for x in s['results'] if x['id']==r['id']);assert exported['eyepieceId']==(v['choice']['id'] if v['choice'] else '');checks+=1
 if name=='reviewed':
  assert s['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "geometry", approved';checks+=1
  assert s['review'][0]['reviewerNote'] in Path(prefix+name+'.md').read_text();checks+=1
 if name.startswith('fixture'):assert s['summary']['baselineMisses']==(1 if name=='fixture0' else 2) and s['summary']['correctedMisses']==0;checks+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentPythonCSVAndOpticalAssertions':checks,'sourceRowsConserved':True,'reviewedFieldsAndFormulaEscapingChecked':True},indent=2));print('PASS independent artifacts',checks)
