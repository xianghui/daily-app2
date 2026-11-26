import json,csv,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0
files=list(Path('.').glob(prefix+'export-*.json'));assert files
for f in files:
 r=json.loads(f.read_text());rows=r['rows'];assert len(rows)==len(r['original']['records']);assert [x['id']for x in rows]==[x['id']for x in r['original']['records']];checks+=2
 for x,o in zip(rows,r['original']['records']):assert x['original']==o;checks+=1
 if r['summary']:
  s=r['summary'];assert s['carryingMinor']==sum(x['amountMinor']for x in rows if x['type']!='outside');assert s['lossMinor']==max(0,s['carryingMinor']-r['recoverableMinor']);assert sum(x['lossMinor']for x in s['rows'])+s['unallocatedMinor']==s['lossMinor'];checks+=3
  for x in s['rows']:
   assert x['carryingMinor']-x['lossMinor']==x['endingMinor'];assert x['lossMinor']>=0;assert x['type']=='outside' and x['lossMinor']==0 or x['endingMinor']>=x['floorMinor'];checks+=3
 else:assert r['status']=='blocked';checks+=1
 cf=f.with_suffix('.csv')
 if cf.exists():
  with cf.open(newline='')as h:parsed=list(csv.DictReader(h))
  assert len(parsed)==len(rows);checks+=1
  for x,y in zip(parsed,rows):
   for ck,yk in [('id','id'),('reviewed_type','type'),('decision','decision'),('reviewer_note','reviewerNote')]:
    expected=str(y[yk]);expected="'"+expected if expected and expected[0]in '=+-@\t\r'else expected
    assert x[ck]==expected,(f,ck);checks+=1
   assert int(x['reviewed_carrying_minor'])==y['amountMinor'];assert int(x['reviewed_floor_minor'])==y['floorMinor'];assert x['original_note']==y['original']['note'];checks+=3
 wf=f.with_name(f.stem+'-worksheet.csv')
 if wf.exists():
  with wf.open(newline='')as h:parsed=list(csv.DictReader(h))
  assert len(parsed)==len(r['summary']['rows']);checks+=1
  for x,y in zip(parsed,r['summary']['rows']):
   for k,v in y.items():assert x[k]==str(v);checks+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'passed':True,'jsonFiles':len(files),'independentlyParsedAssertions':checks},indent=2));print('PASS independent JSON/CSV artifacts',checks)
