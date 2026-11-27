from fractions import Fraction as F
import json,math
cases=json.load(open('core-cases.json'));checks=0
for case in cases:
 r,j=case['input'],case['output']; g=F(str(r['stitchGauge']));rg=F(str(r['rowGauge']));w=F(str(r['width']));h=F(str(r['height']));
 options=[n for n in range(1,2001) if n>r['edgeStitches'] and (n-r['edgeStitches'])%r['repeatStitches']==0]
 rows=[n for n in range(1,2001) if n%r['repeatRows']==0]
 s=min(options,key=lambda n:(abs(F(10*n)/g-w),n));n=min(rows,key=lambda n:(abs(F(10*n)/rg-h),n));assert (j['castOn'],j['rows'])==(s,n);checks+=1
 ww=F(10*s)/g;hh=F(10*n)/rg
 for k,v in [('width',ww),('height',hh),('widthError',ww-w),('heightError',hh-h)]:assert math.isclose(j[k],float(v),abs_tol=1e-9);checks+=1
 mass=ww*hh*F(str(r['mass']))/100*(1+F(str(r['extraPct']))/100);assert j['yarn']==math.ceil(mass);checks+=1
 assert j['gap']==max(0,j['yarn']-r['stock']);checks+=1
 fits=abs(ww-w)<=F(str(r['tolerance'])) and abs(hh-h)<=F(str(r['tolerance']));expected='infeasible' if not fits else 'shortfall' if j['gap']>0 else 'ready';assert j['status']==expected;checks+=1
 assert j['stitchCells']==s*n;checks+=1
json.dump({'cases':len(cases),'independentFractionAssertions':checks,'method':'Exact rational replay scans all integer counts, checks minimal dimension errors, repeat congruences, cap, yarn ceiling, stock gap and feasibility.'},open('core-validation.json','w'),indent=2);print('PASS exact rational',len(cases),checks)
