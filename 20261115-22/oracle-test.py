import random,json,itertools
random.seed(91);cases=[]
for _ in range(300):
 n=random.randint(1,8);tasks=[dict(id='t'+str(i),label='Task '+str(i),description='Synthetic task '+str(i),after=['t'+str(j) for j in range(i) if random.random()<.25]) for i in range(n)]
 records=[dict(id='r'+str(i),text=t['description'],low=random.randint(0,5),high=random.randint(6,12),pHigh=random.choice([0,.2,.5,.8,1])) for i,t in enumerate(tasks)];deadline=random.randint(0,30);dist={};means={t['id']:r['low']*(1-r['pHigh'])+r['high']*r['pHigh'] for t,r in zip(tasks,records)}
 # Independent path enumeration, not app's earliest-finish recurrence.
 def paths(i):
  return [[i]+p for pred in tasks[i]['after'] for p in paths(int(pred[1:]))] if tasks[i]['after'] else [[i]]
 allpaths=[p for i in range(n) for p in paths(i)]
 for bits in itertools.product([0,1],repeat=n):
  dur=[r['high'] if bit else r['low'] for r,bit in zip(records,bits)];prob=1
  for r,bit in zip(records,bits):prob*=r['pHigh'] if bit else 1-r['pHigh']
  finish=max(sum(dur[i] for i in path) for path in allpaths);dist[finish]=dist.get(finish,0)+prob
 baseline=max(sum(means['t'+str(i)] for i in path) for path in allpaths)
 random.shuffle(tasks)
 cases.append(dict(data=dict(tasks=tasks,records=records,deadline=deadline),expected=dict(onTime=sum(p for t,p in dist.items() if t<=deadline),expected=sum(t*p for t,p in dist.items()),meanBaseline=baseline)))
open('oracle-cases.json','w').write(json.dumps(cases))
