import random,json,subprocess
from pathlib import Path
from fractions import Fraction
random.seed(1120);cases=[]
for n in range(3000):
 d=dict(energyCentsPerKWh=random.randint(0,10000),demandCentsPerKW=random.randint(0,100000),peakLimitW=random.randint(0,6000000))
 rows=[dict(id=str(i),kind=str(random.randrange(6)),startSlot=(s:=random.randrange(96)),slots=random.randint(1,96-s),watts=random.randint(0,1000000),owner='Synthetic') for i in range(random.randint(1,40))]
 timeline=[sum(r['watts'] for r in rows if r['startSlot']<=t<r['startSlot']+r['slots']) for t in range(96)]
 energy=sum(Fraction(r['watts']*r['slots'],4000) for r in rows)
 peak=max(timeline);baseline=sum(max(r['watts'] for r in rows if r['kind']==k) for k in set(r['kind'] for r in rows))
 rnd=lambda x:(2*x.numerator+x.denominator)//(2*x.denominator)
 cases.append(dict(d=d,rows=rows,expected=dict(watts=timeline,quarterWh=int(energy*4000),peakW=peak,baselineW=baseline,energyCents=rnd(energy*d['energyCentsPerKWh']),demandCents=rnd(Fraction(peak*d['demandCentsPerKW'],1000)),baselineDemandCents=rnd(Fraction(baseline*d['demandCentsPerKW'],1000)),overTargetW=max(0,peak-d['peakLimitW']))))
Path('oracle-cases.json').write_text(json.dumps(cases))
subprocess.run(['node','core-test.mjs'],check=True)
