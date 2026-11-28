import csv,json,math,sys
from pathlib import Path
from decimal import Decimal as D
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0

def check(c):
 global checks
 assert c
 checks+=1

def near(a,b):check(math.isclose(float(a),float(b),rel_tol=1e-9,abs_tol=1e-9))
def calc(d,r,n,stock):
 lo=max(D(0),D(str(d['supply']['minV']))-n*D(str(r['vfMax']))) / (D(str(stock['ohms']))*(1+D(str(d['tolerance']))))*1000
 head=max(D(0),D(str(d['supply']['maxV']))-n*D(str(r['vfMin'])))
 hi=head/(D(str(stock['ohms']))*(1-D(str(d['tolerance']))))*1000
 power=head*head/(D(str(stock['ohms']))*(1-D(str(d['tolerance']))))
 limit=D(str(stock['watts']))*D(str(d['derating']))
 ok=lo>0 and lo>=D(str(r['minMa']))-D('1e-9') and hi<=D(str(r['maxMa']))+D('1e-9') and power<=limit+D('1e-9')
 return dict(n=n,branches=r['quantity']//n,ohms=stock['ohms'],watts=stock['watts'],lowMa=lo,highMa=hi,powerW=power,limitW=limit,totalHighMa=hi*(r['quantity']//n),feasible=ok)
for path in sorted(Path('.').glob(prefix+'*.json')):
 try:s=json.loads(path.read_text())
 except:continue
 if not isinstance(s,dict) or s.get('format')!='strandlight-bench-v1':continue
 d=s['source'];review=s['review'];result=s['result'];check(len(review)==len(d['records']));check([r['id'] for r in review]==[r['id'] for r in d['records']]);check(result['approved']==sum(r['decision']=='approve' for r in review));check(result['held']==sum(r['decision']=='hold' for r in review))
 branch_total=0;current_total=D(0);fails=0
 for item in result['items']:
  r=next(r for r in review if r['id']==item['id']);options=[calc(d,r,n,stock) for n in range(1,min(12,r['quantity'])+1) if r['quantity']%n==0 for stock in d['resistors']];valid=sorted([o for o in options if o['feasible']],key=lambda o:(o['branches'],o['totalHighMa'],o['watts'],o['ohms']));check(item['candidateCount']==len(options));check(item['feasibleCount']==len(valid));check(bool(item['chosen'])==bool(valid))
  if valid:
   for k,v in valid[0].items():
    if k=='feasible':check(item['chosen'][k]==v)
    else:near(item['chosen'][k],v)
   check(valid[0]['branches']*valid[0]['n']==r['quantity']);branch_total+=valid[0]['branches'];current_total+=valid[0]['totalHighMa']
  ideal=(D(str(d['supply']['minV']))+D(str(d['supply']['maxV']))-D(str(r['vfMin']))-D(str(r['vfMax'])))*1000/(D(str(r['minMa']))+D(str(r['maxMa'])))
  stock=sorted(d['resistors'],key=lambda stock:(abs(D(str(stock['ohms']))-ideal),stock['watts']))[0];base=calc(d,r,1,stock);check(base['ohms']==item['baseline']['ohms']);check(base['feasible']==item['baseline']['feasible']);fails+=not base['feasible']
 near(result['totalHighMa'],current_total);check(result['branches']==branch_total);check(result['baselineFailedLots']==fails);check(result['baselineBranches']==sum(r['quantity'] for r in review if r['decision']=='approve'))
 csvpath=path.with_suffix('.csv')
 if csvpath.exists():
  data=list(csv.DictReader(csvpath.open(newline='')));check(len(data)==len(review))
  for orig,r,out in zip(d['records'],review,data):
   check(out['id']==orig['id']);check(out['sourceNote']==orig['note']);check(int(out['reviewedQuantity'])==r['quantity']);check(out['decision']==r['decision']);note=r['reviewerNote'];escaped="'"+note if note.startswith(('=','+','-','@','\t','\r','\n')) else note;check(out['reviewerNote']==escaped)
 sheet=path.with_suffix('.worksheet.csv')
 if sheet.exists():
  data=list(csv.DictReader(sheet.open(newline='')));check(result['ready']);check(len(data)==result['approved'])
  for out,item in zip(data,result['items']):
   check(out['lot']==item['id']);check(int(out['LEDs_per_series_string'])*int(out['parallel_strings'])==item['quantity']);near(out['max_current_mA'],item['chosen']['highMa']);near(out['worst_resistor_W'],item['chosen']['powerW'])
report=dict(assertions=checks,independent='Python Decimal bounds, exhaustive option search, baseline recomputation and csv.DictReader artifacts',scope=prefix);Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS',checks,'independent artifact checks')
