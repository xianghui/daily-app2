import csv,json,os
from pathlib import Path
from decimal import Decimal, ROUND_FLOOR
prefix=os.environ.get('PREFIX','local-'); checks=0

def eq(a,b):
 global checks
 assert a==b,(a,b)
 checks+=1

def replay(a):
 d=a['original'];rs=a['review']
 if not a['releaseReady']:
  eq(a['trace'],[]);eq(a['minimumCapacity'],None);return
 flow=[]
 for day in d['days']:
  total=0
  for r in rs:
   total+=int((Decimal(r['areaM2'])*max(0,day['rainMm']-r['firstFlushMm'])*Decimal(r['runoffPermille'])/1000).to_integral_value(rounding=ROUND_FLOOR))
  flow.append(total)
 def run(cap,verify=False):
  storage=0;unmet=0
  for i,day in enumerate(d['days']):
   collected=storage+flow[i];spill=max(0,collected-cap);available=collected-spill;delivered=min(day['demandLiters'],available);end=available-delivered
   if verify:
    t=a['trace'][i]
    for k,v in dict(start=storage,inflow=flow[i],spill=spill,delivered=delivered,unmet=day['demandLiters']-delivered,end=end).items():eq(t[k],v)
    eq(storage+flow[i],spill+delivered+end);eq(day['demandLiters'],delivered+t['unmet']);assert 0<=end<=cap
   storage=end;unmet+=day['demandLiters']-delivered
  return unmet
 eq(run(d['capacityLiters'],True),a['summary']['unmet']);eq(sum(flow),a['summary']['inflow']);eq(sum(x['demandLiters'] for x in d['days']),a['summary']['demand'])
 for k in ['delivered','spill','unmet']:eq(a['summary'][k],sum(x[k] for x in a['trace']))
 eq(a['summary']['end'],a['trace'][-1]['end']);eq(a['summary']['daysFullyMet'],sum(x['unmet']==0 for x in a['trace']))
 eq(a['summary']['aggregateOverstatement'],min(sum(flow),a['summary']['demand'])-a['summary']['delivered'])
 if d['maxCapacityLiters']<=250:
  best=next((x for x in range(1,d['maxCapacityLiters']+1) if run(x)==0),None);eq(a['minimumCapacity'],best)
 elif a['minimumCapacity'] is not None:
  eq(run(a['minimumCapacity']),0)
  if a['minimumCapacity']>1:assert run(a['minimumCapacity']-1)>0
 else:assert run(d['maxCapacityLiters'])>0

files=list(Path('.').glob(prefix+'*.json'));artifacts=0
for f in files:
 a=json.loads(f.read_text())
 if not isinstance(a,dict) or a.get('schema')!='rainstore-v1':continue
 replay(a);eq(len(a['original']['records']),len(a['review']));eq([r['id'] for r in a['original']['records']],[r['id'] for r in a['review']]);artifacts+=1
 stem=str(f)[:-5]
 if Path(stem+'.audit.csv').exists():
  rows=list(csv.DictReader(open(stem+'.audit.csv',newline='')));eq(len(rows),len(a['review']))
  for i,r in enumerate(rows):
   eq(r['roof_id'],a['review'][i]['id']);eq(r['source_note'],a['original']['records'][i]['note']);eq(r['profile'],a['review'][i]['profile']);eq(r['decision'],a['review'][i]['decision'])
   note=a['review'][i]['reviewerNote'];eq(r['reviewerNote'],("'" if note[:1] in '=+-@\t\r' and note else '')+note)
   for k in ['areaM2','runoffPermille','firstFlushMm']:eq(int(r[k]),a['review'][i][k])
 if Path(stem+'.daily.csv').exists():
  rows=list(csv.DictReader(open(stem+'.daily.csv',newline='')));eq(len(rows),len(a['trace']))
  for i,r in enumerate(rows):
   for k,v in r.items():eq(v,str(a['trace'][i][k]))
 if Path(stem+'.md').exists():
  md=Path(stem+'.md').read_text()
  for r in a['review']:assert r['id'] in md and r['reviewerNote'] in md
core=[]
if prefix=='local-':
 core=json.load(open('/tmp/rainstore-core-cases.json'))
 for a in core:replay(a)
report=dict(artifactFiles=artifacts,independentCoreCases=len(core),assertions=checks,method='Python Decimal floor replay, conservation, exhaustive integer capacities up to 250 L; CSV parsed independently with standard csv')
Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print(report)
