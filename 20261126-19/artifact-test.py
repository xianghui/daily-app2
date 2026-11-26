import json,csv,sys,datetime
from fractions import Fraction
from pathlib import Path
prefix=sys.argv[1]if len(sys.argv)>1 else 'local-';checks=0
roundhalf=lambda x:(2*x.numerator+x.denominator)//(2*x.denominator)
formula=lambda s:"'"+s if s.startswith(('=','+','-','@','\t','\r'))else s
files=list(Path('.').glob(prefix+'export-*.json'));assert files
for path in files:
 z=json.loads(path.read_text());d=z['original'];rows=z['rows'];assert len(rows)==len(d['records'])==len(z['review']);checks+=1
 for orig,rev,row in zip(d['records'],z['review'],rows):
  for k in ['id','note','due','exposure']:assert row[k]==orig[k];checks+=1
  assert row['profile']==rev['profile'];assert row['reviewedExposure']==rev['exposure'];assert row['reviewedDue']==rev['due'];checks+=3
 if z['summary']:
  nums=[];base=Fraction();scenario=[Fraction() for s in d['scenarios']]
  for row,w in zip(rows,z['worksheet']):
   age=max(0,(datetime.date.fromisoformat(d['cutoff'])-datetime.date.fromisoformat(row['reviewedDue'])).days);bucket=0 if age==0 else 1 if age<=30 else 2 if age<=90 else 3;p=next(p for p in d['profiles']if p['id']==row['profile']);ex=row['reviewedExposure'];loss=sum(Fraction(ex*s['weight']*p['rates'][j][bucket],100000000)for j,s in enumerate(d['scenarios']));nums.append(loss);base+=sum(Fraction(ex*s['weight']*p['rates'][j][0],100000000)for j,s in enumerate(d['scenarios']));
   for j in range(len(scenario)):scenario[j]+=Fraction(ex*p['rates'][j][bucket],10000)
   assert w['bucket']==bucket;assert w['daysOverdue']==age;assert Fraction(int(w['exactNumerator']),int(w['denominator']))==loss;assert w['netExposure']+w['allowance']==ex;checks+=4
  total=roundhalf(sum(nums));floors=[x.numerator//x.denominator for x in nums];order=sorted(range(len(nums)),key=lambda i:(-(nums[i]-floors[i]),i))
  for i in order[:total-sum(floors)]:floors[i]+=1
  assert [w['allowance']for w in z['worksheet']]==floors;assert z['summary']['allowance']==total;assert z['summary']['allCurrentBaseline']==roundhalf(base);assert z['summary']['totalExposure']==sum(r['reviewedExposure']for r in rows);assert [s['allowance']for s in z['scenarios']]==[roundhalf(s)for s in scenario];checks+=5
 else:assert z['status']=='blocked'and len(z['worksheet'])==0;checks+=1
 cp=path.with_suffix('.csv')
 if cp.exists():
  cr=list(csv.DictReader(cp.open(newline='')));assert len(cr)==len(rows);checks+=1
  for c,row in zip(cr,rows):
   assert c['id']==row['id'];assert c['original_note']==formula(row['note']);assert c['original_due']==row['due'];assert int(c['original_exposure_minor'])==row['exposure'];assert c['reviewed_profile']==row['profile'];assert c['reviewed_due']==row['reviewedDue'];assert int(c['reviewed_exposure_minor'])==row['reviewedExposure'];assert c['reviewer_note']==formula(row['reviewerNote']);expected=next((w['allowance'] for w in z['worksheet'] if w['id']==row['id']),None);assert c['allowance_minor']==(str(expected)if expected is not None else '');checks+=9
 wp=path.with_name(path.stem+'-worksheet.csv')
 if wp.exists():
  cr=list(csv.DictReader(wp.open(newline='')));assert len(cr)==len(z['worksheet']);checks+=1
  for c,w in zip(cr,z['worksheet']):
   for k,v in [('id',w['id']),('profile',w['profile']),('due',w['reviewedDue']),('exact_numerator',w['exactNumerator']),('exact_denominator',w['denominator']),('reviewer_note',formula(w['reviewerNote']))]:assert c[k]==v;checks+=1
   for k,v in [('exposure_minor',w['reviewedExposure']),('days_overdue',w['daysOverdue']),('allowance_minor',w['allowance']),('net_exposure_minor',w['netExposure'])]:assert int(c[k])==v;checks+=1
  assert sum(int(c['allowance_minor'])for c in cr)==z['summary']['allowance'];checks+=1
 mp=path.with_suffix('.md')
 if mp.exists():
  m=mp.read_text();assert all(row['note']in m and row['reviewerNote']in m for row in rows);checks+=1
 if 'reviewed'in path.name:assert z['review'][0]['note']=='=SUM(1,2)\nReviewed "exposure", <script> & 🌿';checks+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'files':len(files),'independentAssertions':checks,'parsers':'Python csv.DictReader, json, fractions, datetime'},indent=2));print('PASS artifacts',prefix,len(files),checks)
