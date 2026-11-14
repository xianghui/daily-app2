import json,math
from fractions import Fraction as F
cases=json.load(open('core-cases.json'))
for case in cases:
 r=case['rows'];a=case['actual'];parts=list(dict.fromkeys(x['part'] for x in r));ops=list(dict.fromkeys(x['operator'] for x in r));p=len(parts);o=len(ops);n=len(r)//p//o
 avg=lambda a:sum(a,F(0))/len(a)
 g=avg([F(x['value']) for x in r]);pm={i:avg([F(x['value']) for x in r if x['part']==i])for i in parts};om={j:avg([F(x['value'])for x in r if x['operator']==j])for j in ops}
 cell={(i,j):avg([F(x['value'])for x in r if x['part']==i and x['operator']==j])for i in parts for j in ops}
 ssp=o*n*sum((v-g)**2 for v in pm.values());sso=p*n*sum((v-g)**2 for v in om.values());ssi=n*sum((v-pm[i]-om[j]+g)**2 for(i,j),v in cell.items());sse=sum((F(x['value'])-cell[x['part'],x['operator']])**2 for x in r)
 msp=ssp/(p-1);mso=sso/(o-1);msi=ssi/((p-1)*(o-1));mse=sse/(p*o*(n-1));raw=dict(part=(msp-msi)/(o*n),operator=(mso-msi)/(p*n),interaction=(msi-mse)/n,repeat=mse)
 for k,v in raw.items():assert math.isclose(a['raw'][k],float(v),abs_tol=1e-8,rel_tol=1e-10),(k,v,a)
 grr=math.sqrt(sum(max(F(0),raw[k])for k in['operator','interaction','repeat']));assert math.isclose(a['grrSD'],grr,abs_tol=1e-8)
 assert math.isclose(float(ssp+sso+ssi+sse),sum((x['value']-float(g))**2 for x in r),abs_tol=1e-7)
json.dump(dict(independentFractionCases=len(cases),componentsAndVarianceDecomposition=True),open('core-validation.json','w'),indent=2)
print('PASS',len(cases),'independent Fraction ANOVA decompositions/components')
