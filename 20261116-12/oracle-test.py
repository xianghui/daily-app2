import json,subprocess,random
from fractions import Fraction
from pathlib import Path
rng=random.Random(710);cases=[]
for _ in range(1000):
 rows=[{'id':'x'+str(i),'amountCents':rng.randint(1,100000000),'tier':rng.randint(1,4)} for i in range(rng.randint(1,24))]
 cases.append({'rows':rows,'budget':rng.randint(0,100000000)})
cases.extend([{'rows':[{'id':x,'amountCents':1,'tier':1}for x in ['z','B','a','A']],'budget':3},{'rows':[],'budget':9}])
script="import {allocate,prorata} from './src/core.js';let s='';for await(const x of process.stdin)s+=x;console.log(JSON.stringify(JSON.parse(s).map(c=>({allocation:allocate(c.rows,c.budget),baseline:prorata(c.rows,c.budget)}))));"
out=json.loads(subprocess.run(['node','--input-type=module','-e',script],input=json.dumps(cases),text=True,capture_output=True,check=True).stdout)
def pro(rows,budget):
 total=sum(x['amountCents']for x in rows);b=min(total,budget)
 values={x['id']:Fraction(x['amountCents']*b,total)for x in rows}if total else {}
 pays={k:v.numerator//v.denominator for k,v in values.items()}
 ranked=sorted(values,key=lambda k:(-(values[k]-pays[k]),k))
 for k in ranked[:b-sum(pays.values())]:pays[k]+=1
 return pays
for c,actual in zip(cases,out):
 remaining=c['budget'];expected={}
 for tier in range(1,5):
  group=[x for x in c['rows']if x['tier']==tier];p=pro(group,remaining);expected.update(p);remaining-=sum(p.values())
 assert actual['baseline']==pro(c['rows'],c['budget'])
 assert {r['id']:r['paidCents']for r in actual['allocation']['payouts']}==expected
 assert actual['allocation']['remainingCents']==remaining
 assert sum(expected.values())+remaining==c['budget']
 for x in actual['allocation']['payouts']:
  assert x['unpaidCents']+x['paidCents']==x['amountCents']
  if x['paidCents']:assert all(expected[r['id']]==r['amountCents']for r in c['rows']if r['tier']<x['tier'])
Path('core-validation.json').write_text(json.dumps({'independentPythonFractionCases':len(cases),'allocationAndBaselineExact':True,'conservationAndPriority':True,'seed':710},indent=2));print('PASS',len(cases),'independent Fraction allocation cases')
