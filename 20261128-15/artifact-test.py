import csv,json,sys,math
from pathlib import Path
from decimal import Decimal as D,getcontext
getcontext().prec=40
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0

def check(cond):
 global checks
 assert cond
 checks+=1

def calc(r,t,b):
 # Independent node conductance equation, rather than the app's parallel-resistance equation.
 vin,load,t,b=map(lambda x:D(str(x)),(r['vin'],r['loadOHM'],t,b))
 v=(vin/t)/(1/t+1/b+1/load)
 return dict(top=float(t),bottom=float(b),voltage=float(v),currentMA=float((vin-v)/t*1000),topPowerMW=float((vin-v)**2/t*1000),bottomPowerMW=float(v*v/b*1000),unloadedV=float(vin*b/(t+b)))
def fits(r,o):
 return abs(o['voltage']-r['target'])<=r['target']*r['tolerance']/100+1e-10 and o['currentMA']<=r['currentCapMA']+1e-10 and max(o['topPowerMW'],o['bottomPowerMW'])<=r['powerCapMW']+1e-10

def replay(source,r,result):
 candidates=[calc(r,t,b) for t in sorted(source['resistors']) for b in sorted(source['resistors'])]
 valid=[o for o in candidates if fits(r,o)]
 best=min(valid,key=lambda o:(o['currentMA'],abs(o['voltage']-r['target']),o['top'],o['bottom'])) if valid else None
 check(result['feasible']==len(valid));check(result['ready']==bool(best));check(bool(result['selected'])==bool(best))
 if best:
  check(result['selected']['top']==best['top']);check(result['selected']['bottom']==best['bottom'])
  for k in best:check(math.isclose(result['selected'][k],best[k],rel_tol=1e-10,abs_tol=1e-10))
 old=calc(r,r['oldTop'],r['oldBottom']);check(result['baselineFits']==fits(r,old))
 check(result['falsePass']==(abs(old['unloadedV']-r['target'])<=r['target']*r['tolerance']/100+1e-10 and not fits(r,old)))

for case in json.loads(Path('core-cases.json').read_text()):replay(case['source'],case['r'],case['result'])
for stem in ['fixture0','fixture1','reviewed','max','base','undo','hold','unhold','relink','blocked']:
 doc=json.loads(Path(prefix+stem+'.json').read_text());check(len(doc['jobs'])==len(doc['source']['records']));check([j['id'] for j in doc['jobs']]==[j['id'] for j in doc['source']['records']]);
 for r in doc['jobs']:replay(doc['source'],r,r)
 check(doc['summary']['baselineFailures']==sum(not r['baselineFits'] for r in doc['jobs']));check(doc['summary']['unloadedFalsePasses']==sum(r['falsePass'] for r in doc['jobs']));check(doc['summary']['planReady']==all(r['decision']=='approve' and r['ready'] for r in doc['jobs']))
 path=Path(prefix+stem+'.csv')
 if path.exists():
  with path.open(newline='') as f:rows=list(csv.DictReader(f))
  check(len(rows)==len(doc['jobs']));check([r['id'] for r in rows]==[j['id'] for j in doc['jobs']])
  for row,job,original in zip(rows,doc['jobs'],doc['source']['records']):
   check(row['originalNote']==original['note']);check(row['reviewerNote']==("'" if job['reviewerNote'].startswith(('=','+','-','@','\t','\r')) else '')+job['reviewerNote']);check(row['profileId']==job['profileId'])
   if job['selected']:check(math.isclose(float(row['loadedV']),job['selected']['voltage']))
 bench=Path(prefix+stem+'.bench.csv')
 if bench.exists():
  with bench.open(newline='') as f:plan=list(csv.DictReader(f))
  check(doc['summary']['planReady']);check(len(plan)==len(doc['jobs']))
 md=Path(prefix+stem+'.md')
 if md.exists():
  text=md.read_text();check(all(r['id'] in text and r['reviewerNote'] in text for r in doc['review']))
review=json.loads(Path(prefix+'reviewed.json').read_text());check(review['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "load", approved');check(json.loads(Path(prefix+'undo.json').read_text())['review'][0]['reviewerNote']=='')
Path(prefix+'artifact-validation.json').write_text(json.dumps(dict(checks=checks,status='passed',method='Python csv + Decimal conductance equations, full candidate enumeration and JSON/Markdown inspection'),indent=2));print('PASS',checks,'independent assertions')
