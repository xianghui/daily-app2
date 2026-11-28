import csv,json,sys,math
from pathlib import Path
from decimal import Decimal,getcontext
getcontext().prec=45
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0
def check(v):
 global checks
 assert v
 checks+=1
for path in Path('.').glob(prefix+'*.json'):
 try:s=json.loads(path.read_text())
 except:continue
 if not isinstance(s,dict) or s.get('format')!='closefield-notebook-v1':continue
 assert len(s['jobs'])==len(s['source']['records'])
 for i,j in enumerate(s['jobs']):
  check(j['id']==s['source']['records'][i]['id'])
  f=1+Decimal(str(j['magnification']))/Decimal(str(j['pupilRatio']))
  required=Decimal(str(j['meteredSeconds']))*(1 if j['meterMode']=='ttl' else f*f)
  check(abs(float(required)-j['requiredSeconds'])<1e-7)
  check(abs(float(Decimal(str(j['nominalF']))*f)-j['effectiveF'])<1e-7)
  if j['selectedSeconds'] is not None:
   check(j['selectedSeconds']+1e-9>=float(required));check(j['selectedSeconds']<=j['maxSeconds']+1e-9)
 for ext in ['csv','capture.csv']:
  other=path.with_suffix('.'+ext)
  if not other.exists():continue
  with other.open(newline='')as f:rows=list(csv.DictReader(f))
  check(len(rows)==len(s['jobs']))
  for i,r in enumerate(rows):
   j=s['jobs'][i];check(r['id']==j['id']);check(r['originalNote']==s['source']['records'][i]['note']);check(r['profileId']==j['profileId']);check(abs(float(r['requiredSeconds'])-j['requiredSeconds'])<1e-8)
   note=j['reviewerNote'];safe="'"+note if note and note[0] in '=+-@\t\r' else note
   check(r['reviewerNote']==safe)
 if path.with_suffix('.md').exists():
  md=path.with_suffix('.md').read_text()
  for j in s['jobs']:check(j['reviewerNote'] in md);check('## '+j['id']+' — '+j['decision'] in md)
for case in json.loads(Path('core-cases.json').read_text()):
 r,c=case['r'],case['result'];factor=(1+Decimal(str(r['magnification']))/Decimal(str(r['pupilRatio'])))**2
 required=Decimal(str(r['meteredSeconds']))*(factor if r['meterMode']=='external' else 1)
 check(abs(c['extensionFactor']-float(factor))<1e-8);check(abs(c['requiredSeconds']-float(required))<1e-6)
 feasible=[2**(k/3) for k in range(-30,34) if 2**(k/3)+1e-10>=float(required) and 2**(k/3)<=r['maxSeconds']+1e-10]
 check(c['selectedSeconds']==(min(feasible) if feasible else None))
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':checks,'decimalReplays':1000,'downloadedArtifactsIndependentlyParsed':True},indent=2))
print('PASS independent artifacts / Decimal',checks)
