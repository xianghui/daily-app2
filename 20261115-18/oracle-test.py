import json,itertools,random,subprocess
from pathlib import Path
rng=random.Random(18);cases=[]
for z in range(240):
 n=rng.randint(2,4);k=rng.randint(2,6);m=[[rng.randint(0,100) for j in range(k)] for i in range(n)];cases.append(m)
js="""import {analyze} from './src/core.js';let s='';for await(const c of process.stdin)s+=c;console.log(JSON.stringify(JSON.parse(s).map(m=>{const d={cards:m[0].map((_,j)=>({id:'i'+j,label:'Item',description:'Object'})),people:m.map((_,i)=>({id:'p'+i,name:'Person'})),records:m.flatMap((v,i)=>v.map((value,j)=>({id:'r'+i+'_'+j,person:'p'+i,text:'object',value})))};const rows=d.records.map((r,k)=>({...r,item:'i'+k%m[0].length,decision:'approve',reviewNote:''}));return analyze(d,rows)})))"""
actual=json.loads(subprocess.check_output(['node','--input-type=module','-e',js],input=json.dumps(cases).encode()))
for m,r in zip(cases,actual):
 totals=list(map(sum,m));n=len(m);k=len(m[0]);best=(-1,-1)
 for assignment in itertools.product(range(n),repeat=k):
  fractions=[sum(m[i][j] for j in range(k) if assignment[j]==i)/totals[i] for i in range(n)];q=(min(fractions),sum(fractions))
  if q[0]>best[0]+1e-12 or abs(q[0]-best[0])<1e-12 and q[1]>best[1]+1e-12:best=q
 assert abs(r['optimized']['min']-best[0])<1e-10
 assert abs(sum(b['fraction'] for b in r['optimized']['bundles'])-best[1])<1e-10
 assert sorted(x for b in r['optimized']['bundles'] for x in b['items'])==['i'+str(j) for j in range(k)]
 for key in ['optimized','baseline']:
  bs=r[key]['bundles']; ef1=True;envies=0
  for i in range(n):
   own=bs[i]['utility']
   for j in range(n):
    vals=[m[i][int(x[1:])] for x in bs[j]['items']];other=sum(vals)
    if other>own:envies+=1
    if other-max(vals,default=0)>own:ef1=False
  assert len(r[key]['envy'])==envies and r[key]['ef1']==ef1
Path('arithmetic-validation.json').write_text(json.dumps({'randomIndependentExhaustiveCases':len(cases),'exactMaximinAndTieObjective':True,'allItemsAssignedOnce':True,'independentEnvyAndEF1':True},indent=2));print('PASS 240 independent allocation oracles')
