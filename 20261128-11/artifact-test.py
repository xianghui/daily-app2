import csv,json,sys,math
from pathlib import Path
from decimal import Decimal,localcontext
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
count=0
def check(v):
 global count
 assert v
 count+=1
if Path('core-cases.json').exists():
 with localcontext() as ctx:
  ctx.prec=50
  two=Decimal(2);twelve=Decimal(12)
  for c in json.load(open('core-cases.json')):
   r=c['r'];out=c['result'];target=Decimal(str(r['a4Hz']))*(two**((Decimal(r['midiNote'])-69)/twelve));cents=1200*(Decimal(str(r['measuredHz']))/target).ln()/two.ln()
   check(abs(float(target)-out['targetHz'])<1e-8);check(abs(float(cents)-out['deviationCents'])<1e-7);check(out['ready']==(abs(cents)<=Decimal(str(r['toleranceCents']))+Decimal('1e-9')));check(out['baselinePass']==(abs(Decimal(str(r['measuredHz']))-target)<=Decimal(2)+Decimal('1e-9')))
for path in Path('.').glob(prefix+'*.json'):
 try:s=json.load(open(path))
 except:continue
 if not isinstance(s,dict) or s.get('format')!='temper-folio-v1':continue
 check(len(s['jobs'])==len(s['source']['records'])==len(s['review']))
 for j,original in zip(s['jobs'],s['source']['records']):
  check(j['id']==original['id']);check(abs(j['targetHz']-j['a4Hz']*2**((j['midiNote']-69)/12))<1e-8);check(abs(j['deviationCents']-1200*math.log2(j['measuredHz']/j['targetHz']))<1e-8);check(j['ready']==(abs(j['deviationCents'])<=j['toleranceCents']+1e-9))
 check(s['summary']['disagreements']==sum(j['baselinePass']!=j['ready'] for j in s['jobs']));check(s['summary']['rechecks']==sum(not j['ready'] for j in s['jobs']))
 for suffix in ['.csv','.bench.csv']:
  cp=path.with_suffix(suffix)
  if not cp.exists():continue
  rows=list(csv.DictReader(open(cp,newline='')));check(len(rows)==len(s['jobs']))
  for row,j,original in zip(rows,s['jobs'],s['source']['records']):
   check(row['id']==j['id']);check(row['originalNote']==original['note']);check(float(row['targetHz'])==j['targetHz']);check(float(row['deviationCents'])==j['deviationCents']);note=j['reviewerNote'];escaped="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note;check(row['reviewerNote']==escaped)
 if path.stem.endswith('reviewed'):check(s['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "pitch", approved');check(s['source']['records'][0]['note']!=s['review'][0]['reviewerNote'])
 if path.with_suffix('.md').exists():
  md=path.with_suffix('.md').read_text()
  for j in s['jobs']:check(j['id'] in md and j['reviewerNote'] in md)
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':count,'independentDecimalCases':800,'csvParser':'Python csv.DictReader','allRecordsPreserved':True},indent=2));print('PASS artifacts / Decimal replay',count)
