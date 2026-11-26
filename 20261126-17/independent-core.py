import json,random,subprocess,itertools
from fractions import Fraction as F
from pathlib import Path
rng=random.Random(617);cases=[]
for z in range(260):
 n=2+z%5;m=2+(z//5)%5
 support=[]
 for i in range(n):
  keys=['s'+str(j) for j in range(n) if j!=i]+['o'+str(j) for j in range(m)]
  cuts=sorted(rng.randrange(0,10000) for _ in range(len(keys)-1));weights=[b-a for a,b in zip([0]+cuts,cuts+[10000])]
  if sum(weights[-m:])==0:weights[0]-=1;weights[-1]+=1
  support.append(dict(id='s'+str(i),description='Support department '+str(i),shares=dict(zip(keys,weights))))
 records=[dict(id='r'+str(i),note='Synthetic expense '+str(i),amount=rng.randrange(0,100000001)) for i in range(1+z%24)]
 reviews=[dict(id=r['id'],department='s'+str(rng.randrange(n)),amount=r['amount'],decision='approve',note='')for r in records]
 cases.append(dict(data=dict(title='Synthetic case '+str(z),departments=support,outputs=[dict(id='o'+str(j),description='Output '+str(j))for j in range(m)],records=records),review=reviews))
# Near-closed cycles, zero costs, zero-share paths, and reserved object-property IDs.
for ids in [('s0','s1'),('constructor','toString'),('__proto__','hasOwnProperty')]:
 for amount in [0,1,100000000]:
  s,t=ids;d=dict(title='Boundary',departments=[dict(id=s,description='Support A',shares={t:9999,'o0':1}),dict(id=t,description='Support B',shares={s:9999,'o1':1})],outputs=[dict(id='o0',description='Output A'),dict(id='o1',description='Output B')],records=[dict(id='r',note='Synthetic expense',amount=amount)])
  cases.append(dict(data=d,review=[dict(id='r',department=s,amount=amount,decision='approve',note='')]))
Path('core-cases.json').write_text(json.dumps(cases));code="import fs from 'node:fs';import{apply}from'./src/core.js';console.log(JSON.stringify(JSON.parse(fs.readFileSync('core-cases.json')).map(c=>apply(c.data,c.review))))"
results=json.loads(subprocess.check_output(['node','--input-type=module','-e',code]));checks=0
# Independent permutation determinant / Cramer's rule, not app elimination.
def det(A):
 n=len(A);total=F(0)
 for p in itertools.permutations(range(n)):
  term=F((-1)**sum(p[i]>p[j] for i in range(n)for j in range(i+1,n)))
  for i,j in enumerate(p):term*=A[i][j]
  total+=term
 return total

def f(x):return F(int(x['n']),int(x['d']))
def rounded(v,total):
 out=[int(x)for x in v];order=sorted(range(len(v)),key=lambda i:(-(v[i]-out[i]),i))
 for i in order[:total-sum(out)]:out[i]+=1
 return out
for case,result in zip(cases,results):
 d=case['data'];S=d['departments'];O=d['outputs'];R=case['review'];direct=[sum(x['amount']for x in R if x['department']==s['id'])for s in S];A=[[F(i==j)-F(s['shares'].get(t['id'],0),10000)for j,s in enumerate(S)]for i,t in enumerate(S)];D=det(A);X=[]
 for j in range(len(S)):
  M=[row[:]for row in A]
  for i in range(len(S)):M[i][j]=F(direct[i])
  X.append(det(M)/D)
 rec=[sum(x*F(s['shares'].get(o['id'],0),10000)for x,s in zip(X,S))for o in O];base=[sum(F(c*s['shares'].get(o['id'],0),sum(s['shares'].get(t['id'],0)for t in O))for c,s in zip(direct,S))for o in O];total=sum(direct)
 assert sum(rec)==sum(base)==total;checks+=2
 assert [f(x['fullyLoaded'])for x in result['departments']]==X;checks+=len(S)
 assert [f(x['received'])for x in result['departments']]==[x-c for x,c in zip(X,direct)];checks+=len(S)
 assert [f(x['exact'])for x in result['outputs']]==rec;checks+=len(O)
 assert [f(x['baselineExact'])for x in result['outputs']]==base;checks+=len(O)
 assert [x['allocated']for x in result['outputs']]==rounded(rec,total);checks+=len(O)
 assert [x['baseline']for x in result['outputs']]==rounded(base,total);checks+=len(O)
 assert [x['difference']for x in result['outputs']]==[a-b for a,b in zip(rounded(rec,total),rounded(base,total))];checks+=len(O)
 assert result['summary']['allocated']==result['summary']['total']==result['summary']['baselineAllocated']==total;checks+=3
 assert len(result['rows'])==len(d['records']);checks+=1
Path('independent-core-validation.json').write_text(json.dumps(dict(cases=len(cases),assertions=checks,method='Independent Python Fraction permutation determinants / Cramers rule',allPassed=True),indent=2));print('PASS independent exact core',len(cases),checks)
