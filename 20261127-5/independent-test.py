"""Independent recursive set-partition oracle, not the app's subset DP."""
import random,json,subprocess
from pathlib import Path
rng=random.Random(271105)
def fits(group,cap):
 return sum(r['kg'] for r in group)<=cap and max(r['p']['minC'] for r in group)<=min(r['p']['maxC'] for r in group) and max(r['p']['minRH'] for r in group)<=min(r['p']['maxRH'] for r in group) and not ({'producer','sensitive'} <= {r['p']['ethylene'] for r in group})
def optimum(items,cap):
 if any(not fits([r],cap) for r in items):return None
 best=len(items)
 def search(i,bins):
  nonlocal best
  if i==len(items):best=min(best,len(bins));return
  if len(bins)>=best:return
  r=items[i]
  for g in bins:
   if fits(g+[r],cap):g.append(r);search(i+1,bins);g.pop()
  bins.append([r]);search(i+1,bins);bins.pop()
 search(0,[])
 return best
cases=[]
for k in range(240):
 ps=[]
 for j in range(rng.randint(2,5)):
  lo=rng.randint(0,10);rh=rng.randint(60,90)
  ps.append(dict(id='p'+str(j),description='Synthetic storage reference '+str(j),minC=lo,maxC=lo+rng.randint(0,8),minRH=rh,maxRH=rh+rng.randint(0,10),ethylene=rng.choice(['neutral','sensitive','producer'])))
 # Some cases allow broad compatibility to stress capacities and first-fit.
 if k%3==0:
  for p in ps:p.update(minC=0,maxC=20,minRH=50,maxRH=100,ethylene='neutral')
 n=rng.randint(1,8); records=[dict(id='r'+str(i),note='Synthetic lot '+str(i),kg=rng.randint(1,12)) for i in range(n)]
 source=dict(title='Oracle case '+str(k),capacityKg=rng.randint(5,24),availableRooms=rng.randint(1,8),profiles=ps,records=records)
 review=[dict(id=r['id'],profile=rng.choice(ps)['id'],kg=r['kg'],decision='hold' if k%13==0 and i==0 else 'approve',reviewerNote='') for i,r in enumerate(records)]
 cases.append(dict(source=source,review=review))
Path('oracle-cases.json').write_text(json.dumps(cases))
js="import fs from 'node:fs';import {calculate} from './src/core.js';const cases=JSON.parse(fs.readFileSync('oracle-cases.json'));fs.writeFileSync('oracle-results.json',JSON.stringify(cases.map(c=>calculate(c.source,c.review))));"
subprocess.run(['node','--input-type=module','-e',js],check=True)
results=json.loads(Path('oracle-results.json').read_text());assertions=0
for c,a in zip(cases,results):
 d=c['source'];items=[dict(**r,p=next(p for p in d['profiles'] if p['id']==r['profile'])) for r in c['review'] if r['decision']=='approve'];cap=d['capacityKg'];expected=optimum(items,cap)
 assert a['minimumRooms']==expected,(d,a,expected);assertions+=1
 bins=[]
 if expected is not None:
  for r in items:
   for group in bins:
    if fits(group+[r],cap):group.append(r);break
   else:bins.append([r])
  assert len(bins)==a['firstFitRooms'];assertions+=1
  ids=[]
  for g in a['rooms']:
   rows=[next(r for r in items if r['id']==i) for i in g['ids']];ids+=g['ids'];assert fits(rows,cap);assert g['kg']==sum(r['kg'] for r in rows);assert g['minC']==max(r['p']['minC'] for r in rows);assert g['maxC']==min(r['p']['maxC'] for r in rows);assert g['minRH']==max(r['p']['minRH'] for r in rows);assert g['maxRH']==min(r['p']['maxRH'] for r in rows);assertions+=6
  assert sorted(ids)==sorted(r['id'] for r in items);assertions+=1
 else:assert not a['rooms'];assertions+=1
 assert a['summary']['totalKg']==sum(r['kg'] for r in items);assert a['releaseReady']==(len(items)==len(d['records']) and expected is not None and expected<=d['availableRooms']);assert a['original']==d;assert a['review']==c['review'];assertions+=4
Path('independent-validation.json').write_text(json.dumps(dict(cases=len(cases),assertions=assertions,oracle='Python recursive enumeration with independently computed range/role/capacity constraints'),indent=2));print('PASS independent',len(cases),assertions)
