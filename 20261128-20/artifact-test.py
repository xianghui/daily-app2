import csv,json,math,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0

def check(v):
 global checks
 assert v
 checks+=1

def close(x,y):check(math.isclose(x,y,rel_tol=1e-9,abs_tol=1e-10))
for name in ['fixture0','fixture1','reviewed','undo','hold','blocked','max']:
 s=json.loads(Path(prefix+name+'.json').read_text());review=s['review'];results=s['results'];src=s['source'];check(len(review)==len(src['records'])==len(results));check([r['id'] for r in review]==[r['id'] for r in src['records']]);base_miss=0;correct_miss=0;approved=0
 for r,v in zip(review,results):
  # Independent formula evaluation, no app calculations imported.
  coeff=[]
  for i in range(r['steps']+1):
   angle=math.pi*i/(2*r['steps']);a=math.cos(angle);b=math.sin(angle);den=math.sqrt(1+2*r['rho']*a*b);coeff.append((a/(r['rmsA']*den),b/(r['rmsB']*den)))
  maxg=max(max(a,b) for a,b in coeff);maxp=max(a*r['peakA']+b*r['peakB'] for a,b in coeff);target=min(r['targetRms'],r['maxGain']/maxg,r['peakCap']/maxp);close(v['achievedRms'],target);miss=False
  for i,(n,(a,b)) in enumerate(zip(v['nodes'],coeff)):
   close(n['timeMs'],i*r['durationMs']/r['steps']);close(n['gainA'],a*target);close(n['gainB'],b*target);close(n['expectedRms'],target);check(max(n['gainA'],n['gainB'])<=r['maxGain']+1e-9);check(n['peakBound']<=r['peakCap']+1e-9)
   angle=math.pi*i/(2*r['steps']);ba=math.cos(angle)*target/r['rmsA'];bb=math.sin(angle)*target/r['rmsB'];p=(ba*r['rmsA'])**2+(bb*r['rmsB'])**2+2*r['rho']*ba*bb*r['rmsA']*r['rmsB'];brms=math.sqrt(p);close(n['baselineRms'],brms)
   miss |= abs(20*math.log10(brms/target))>.1 or max(ba,bb)>r['maxGain']+1e-9 or ba*r['peakA']+bb*r['peakB']>r['peakCap']+1e-9
  ready=target>=r['minRms']-1e-12;check(v['ready']==ready);check(v['baselineMiss']==miss)
  if r['decision']=='approve':approved+=1;base_miss+=int(miss);correct_miss+=int(not ready)
 check(s['summary']['approved']==approved);check(s['summary']['baselineMisses']==base_miss);check(s['summary']['correctedMisses']==correct_miss)
 f=Path(prefix+name+'.csv')
 if f.exists():
  rows=list(csv.DictReader(f.open(newline='')));check(len(rows)==len(review))
  for row,r,o in zip(rows,review,src['records']):
   check(row['id']==r['id']);check(row['pairId']==r['setupId']);note=r['reviewerNote'];escaped="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note;check(row['reviewerNote']==escaped);check(row['sourceNote']==o['note'])
 f=Path(prefix+name+'.envelope.csv')
 if f.exists():
  rows=list(csv.DictReader(f.open(newline='')));expected=[(r,n) for r,v in zip(review,results) if r['decision']=='approve' for n in v['nodes']];check(len(rows)==len(expected))
  for row,(r,n) in zip(rows,expected):
   check(row['id']==r['id']);check(row['pairId']==r['setupId']);close(float(row['timeMs']),n['timeMs']);close(float(row['gainA']),n['gainA']);close(float(row['gainB']),n['gainB']);close(float(row['expectedRms']),n['expectedRms']);close(float(row['conservativePeakBound']),n['peakBound'])
 if name=='reviewed':check(review[0]['reviewerNote']=='=SUM(1,2)\nCheck "geometry", approved');check(review[0]['reviewerNote'] in Path(prefix+name+'.md').read_text())
 if name=='undo':check(review[0]['reviewerNote']=='')
 if name=='max':check(len(review)==8)
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentAssertions':checks,'scope':'Python math recomputation of gain/peak bound maximal target, both power laws and baseline metrics; standard csv parser checks all exported control points/record identities; multiline and escaping verified.'},indent=2))
print('PASS independent artifact checks',checks)
