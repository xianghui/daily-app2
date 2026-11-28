import csv,json,sys,math
from pathlib import Path
from decimal import Decimal,getcontext
getcontext().prec=45
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0;artifacts=0
def check(v):
 global checks
 assert v
 checks+=1
for path in Path('.').glob(prefix+'*.json'):
 try:s=json.loads(path.read_text())
 except:continue
 if not isinstance(s,dict) or s.get('format')!='spinfield-ledger-v1':continue
 artifacts+=1;check(len(s['jobs'])==len(s['source']['records']))
 for i,j in enumerate(s['jobs']):
  check(j['id']==s['source']['records'][i]['id'])
  if j['selectedRPM'] is not None:
   g=float(Decimal('0.00001118')*Decimal(str(j['radiusCM']))*Decimal(j['selectedRPM'])**2)
   check(abs(g-j['selectedG'])<1e-7);check(j['targetMin']-1e-9<=g<=j['targetMax']+1e-9);check(j['selectedRPM']<=j['maxRPM'])
 for ext in ['csv','bench.csv']:
  other=path.with_suffix('.'+ext)
  if not other.exists():continue
  with other.open(newline='')as f:rows=list(csv.DictReader(f))
  check(len(rows)==len(s['jobs']))
  for i,r in enumerate(rows):
   j=s['jobs'][i];check(r['id']==j['id']);check(r['originalNote']==s['source']['records'][i]['note']);check(r['profileId']==j['profileId']);check(r['selectedRPM']==('' if j['selectedRPM'] is None else str(j['selectedRPM'])))
   note=j['reviewerNote'];safe="'"+note if note and note[0] in '=+-@\t\r' else note;check(r['reviewerNote']==safe)
 if path.with_suffix('.md').exists():
  md=path.with_suffix('.md').read_text()
  for j in s['jobs']:check(j['reviewerNote'] in md);check('## '+j['id']+' — '+j['decision'] in md)
for case in json.loads(Path('core-cases.json').read_text()):
 r,c=case['r'],case['result'];best=None
 # Independent analytic candidate neighborhood plus feasible integer-speed boundaries, not JS loop.
 coefficient=Decimal('0.00001118')*Decimal(str(r['radiusCM']))
 lo=max(10,math.ceil(float((Decimal(r['targetMin'])/coefficient).sqrt())/10)*10)
 hi=min(r['maxRPM'],math.floor(float((Decimal(r['targetMax'])/coefficient).sqrt())/10)*10)
 if lo<=hi:
  ideal=float((Decimal(r['preferredG'])/coefficient).sqrt());candidates={lo,hi,max(lo,min(hi,math.floor(ideal/10)*10)),max(lo,min(hi,math.ceil(ideal/10)*10))}
  best=min(candidates,key=lambda rpm:(abs(coefficient*rpm*rpm-r['preferredG']),rpm))
 check(c['selectedRPM']==best)
check(artifacts>=9)
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':checks,'analyticDecimalReplays':800,'auditFiles':artifacts,'downloadedArtifactsIndependentlyParsed':True},indent=2))
print('PASS independent artifacts',checks,artifacts)
