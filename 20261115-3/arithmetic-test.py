import random,json,subprocess
from fractions import Fraction as F
random.seed(718)
cases=[]
for _ in range(1000):
 n=random.randint(1,4); m=random.randint(1,2); counts=[[random.randint(0,15) for j in range(n+m)] for i in range(n)]
 for row in counts:row[n]+=1
 p=[[F(v,sum(row)) for v in row] for row in counts]
 a=[[F(i==j)-p[i][j] for j in range(n)]+p[i][n:]+[F(1)] for i in range(n)]
 for j in range(n):
  pivot=next(i for i in range(j,n) if a[i][j]);a[j],a[pivot]=a[pivot],a[j];v=a[j][j];a[j]=[x/v for x in a[j]]
  for i in range(n):
   if i!=j:
    v=a[i][j];a[i]=[x-v*y for x,y in zip(a[i],a[j])]
 rules=[dict(id=str(i),terminal=i>=n,label=str(i)) for i in range(n+m)]
 rows=[dict(from_=str(i),to=str(j),count=c) for i,row in enumerate(counts) for j,c in enumerate(row) if c]
 rows=[{'from':r['from_'],'to':r['to'],'count':r['count']} for r in rows]
 cases.append(dict(rules=rules,rows=rows,expected=[[float(x) for x in row[n:]] for row in a]))
script="""import {chain} from './src/core.js';import fs from 'node:fs';const cases=JSON.parse(fs.readFileSync(0));let max=0;for(const c of cases){const r=chain(c.rules,c.rows);r.stages.forEach((z,i)=>{const v=[...z.outcomes.map(t=>t.eventual),z.expectedTransitions];v.forEach((x,j)=>{const error=Math.abs(x-c.expected[i][j]);max=Math.max(max,error);if(error>1e-8)throw Error('Mismatch '+error)});});}console.log(JSON.stringify({cases:cases.length,maxAbsoluteError:max,reference:'Independent exact Fraction Gauss-Jordan on seeded random absorbing chains'}));"""
r=subprocess.run(['node','--input-type=module','-e',script],input=json.dumps(cases),text=True,capture_output=True);assert r.returncode==0,r.stderr
open('arithmetic-validation.json','w').write(r.stdout);print(r.stdout)
