import csv,json,sys,math
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0;files=0
for path in Path('.').glob(prefix+'*.json'):
 a=json.loads(path.read_text())
 if not isinstance(a,dict) or a.get('schema')!='focusfield-v1':continue
 files+=1
 assert len(a['original']['records'])==len(a['review'])==len(a['shots']);checks+=1
 for src,r,s in zip(a['original']['records'],a['review'],a['shots']):
  assert src['id']==r['id']==s['id'];checks+=1
  if s['status']=='feasible':
   assert r['open']<=s['aperture']<=a['original']['maxAperture'];checks+=1
   assert s['near']<=r['near']+1e-10 and (s['infinity'] or s['far']>=r['far']-1e-10);checks+=1
 assert a['summary']['shots']==len(a['shots']);checks+=1
 assert a['summary']['feasible']==sum(s['status']=='feasible' for s in a['shots']);checks+=1
 assert a['summary']['held']==sum(s['status']=='held' for s in a['shots']);checks+=1
 assert a['summary']['infeasible']==sum(s['status']=='infeasible' for s in a['shots']);checks+=1
 assert a['summary']['baselineDifferences']==sum(s.get('baseline') is not None and s['aperture']!=s['baseline']['aperture'] for s in a['shots']);checks+=1
 base=str(path)[:-5]
 if Path(base+'.audit.csv').exists():
  rows=list(csv.DictReader(open(base+'.audit.csv',newline='')))
  assert len(rows)==len(a['review']);checks+=1
  for row,src,r in zip(rows,a['original']['records'],a['review']):
   for k in ['profile','focal','coc','open','near','far','decision','reviewerNote']:
    expect=r[k]
    if isinstance(expect,(int,float)):assert float(row[k])==expect
    else:
     if expect and expect[0] in '=+-@\t\r':expect="'"+expect
     assert row[k]==expect
    checks+=1
   expected=src['note'];expected=("'"+expected) if expected and expected[0] in '=+-@\t\r' else expected
   assert row['source_note']==expected;checks+=1
 if Path(base+'.field.csv').exists():
  rows=list(csv.DictReader(open(base+'.field.csv',newline='')));valid=[s for s in a['shots'] if s['status']=='feasible'];assert len(rows)==len(valid);checks+=1
  for row,s in zip(rows,valid):
   assert row['id']==s['id'];checks+=1
   for k,j in [('focus_m','focus'),('f_number','aperture'),('near_limit_m','near')]:assert float(row[k])==s[j];checks+=1
   assert row['far_limit_m']==('Infinity' if s['infinity'] else str(s['far']));checks+=1
 if Path(base+'.md').exists():
  md=Path(base+'.md').read_text()
  for r in a['review']:assert r['id'] in md and r['reviewerNote'] in md;checks+=1
assert files>=10
report={'files':files,'assertions':checks,'parser':'Python csv.DictReader / json, current downloaded reviewed snapshots, all records and optical bounds'}
Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print(report)
