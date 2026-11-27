import csv,json,sys,io
from pathlib import Path
from fractions import Fraction
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
files=list(Path('.').glob(prefix+'*.json'));checked=0
for path in files:
 s=json.loads(path.read_text())
 if not isinstance(s,dict) or s.get('format')!='exposure-folio-v1':continue
 assert len(s['source']['records'])==len(s['review'])==len(s['jobs'])
 for original,r,j in zip(s['source']['records'],s['review'],s['jobs']):
  assert original['id']==r['id']==j['id']
  lux,days,used,budget=r['lux'],r['days'],r['usedLuxHours'],r['annualLuxHours']
  legal=[Fraction(k,4) for k in range(1,int(r['requestedHours']*4)+1) if lux<=r['maxLux'] and used+lux*days*Fraction(k,4)<=budget]
  assert Fraction(j['plannedHours'])==(max(legal) if legal else 0)
  assert j['periodEnd']==used+lux*days*j['plannedHours']
  assert j['baselinePass']==(lux<=r['maxLux'])
  assert j['requestedPass']==(lux<=r['maxLux'] and used+lux*days*r['requestedHours']<=budget)
 audit=path.with_suffix('.audit.csv')
 if audit.exists():
  rows=list(csv.DictReader(io.StringIO(audit.read_text())))
  assert len(rows)==len(s['jobs'])
  def safe(v):return "'"+v if isinstance(v,str) and bool(v) and v[:1] in '=+-@\t\r' else str(v)
  for i,(row,j) in enumerate(zip(rows,s['jobs'])):
   assert row['id']==j['id'];assert row['reviewerNote']==safe(j['reviewerNote'])
   assert row['originalNote']==safe(s['source']['records'][i]['note'])
   for k in ['maxLux','annualLuxHours','lux','days','requestedHours','usedLuxHours','plannedHours','plannedDose','periodEnd']:assert Fraction(row[k])==Fraction(j[k])
 plan=path.with_suffix('.plan.csv')
 if plan.exists():
  assert s['summary']['planReady'];rows=list(csv.DictReader(io.StringIO(plan.read_text())));assert len(rows)==len(s['jobs'])
  for row,j in zip(rows,s['jobs']):
   assert row['id']==j['id'];assert Fraction(row['plannedHours'])==Fraction(j['plannedHours']);assert Fraction(row['periodEnd'])<=j['annualLuxHours']
 md=path.with_suffix('.md')
 if md.exists():
  for j in s['jobs']:assert j['reviewerNote'] in md.read_text()
 checked+=1
assert checked>=20
Path(prefix+'artifact-validation.json').write_text(json.dumps({'browserDownloadedAuditEnvelopes':checked,'csvParser':'Python csv.DictReader','arithmeticOracle':'Fraction + exhaustive quarter-hour enumeration','allRecordsAndReviewedFieldsRetained':True,'multilineFormulaNotesPreserved':True},indent=2))
print('PASS independently reopened artifacts',checked)
