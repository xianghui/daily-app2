from fractions import Fraction
from pathlib import Path
import json,random,subprocess
rng=random.Random(211113)
cases=[]
for i in range(3000):
 n=rng.randint(1,40);k=rng.randint(2,6)
 d=dict(project='Synthetic oracle',targetPct=rng.randint(0,100),baselineCentsPerKg=rng.randint(0,100000),policies=[dict(id=str(j),label='Material '+str(j),description='Synthetic material '+str(j),centsPerKg=rng.randint(0,100000)) for j in range(k)],records=[])
 rows=[dict(id=str(j),kind=str(rng.randrange(k)),units=rng.randint(1,100000),grams=rng.randint(1,10000),recycledPct=rng.randint(0,100),owner='Synthetic') for j in range(n)]
 cases.append(dict(d=d,rows=rows))
Path('oracle-cases.json').write_text(json.dumps(cases))
js="import fs from 'node:fs';import {calculate} from './src/core.js';const c=JSON.parse(fs.readFileSync('oracle-cases.json'));fs.writeFileSync('oracle-outputs.json',JSON.stringify(c.map(x=>calculate(x.d,x.rows))));"
subprocess.run(['node','--input-type=module','-e',js],check=True)
outs=json.loads(Path('oracle-outputs.json').read_text())
def halfup(x): return (2*x.numerator+x.denominator)//(2*x.denominator)
for c,q in zip(cases,outs):
 d,rows=c['d'],c['rows'];mass=sum(r['units']*r['grams'] for r in rows);numer=sum(r['units']*r['grams']*r['recycledPct'] for r in rows)
 assert q['totalGrams']==mass and q['recycledGramPct']==numer
 fees=0
 for p in d['policies']:
  gm=sum(r['units']*r['grams'] for r in rows if r['kind']==p['id'])
  m=next(m for m in q['materials'] if m['id']==p['id']);f=halfup(Fraction(gm*p['centsPerKg'],1000));assert m['grams']==gm and m['feeCents']==f;fees+=f
 assert q['feeCents']==fees and q['baselineCents']==halfup(Fraction(mass*d['baselineCentsPerKg'],1000))
 gap=max(0,mass*d['targetPct']-numer);assert q['gapGramPct']==gap and q['replacementGrams']==(gap+99)//100
 assert abs(q['weightedPct']-float(Fraction(numer,mass)))<1e-12
Path('core-validation.json').write_text(json.dumps(dict(independentFractionCases=len(cases),massConservation=True,recycledMassConservation=True,perMaterialHalfUpCents=True,targetGapCeiling=True)))
Path('oracle-outputs.json').unlink();Path('oracle-cases.json').unlink()
print('PASS 3000 independent Fraction cases')
