import json,math
from decimal import Decimal,localcontext
D=lambda x:Decimal(str(x))
count=0
with localcontext() as ctx:
 ctx.prec=45
 for c in json.load(open('oracle-cases.json')):
  d,r,a=c['input'],c['review'],c['actual'];v=D(d['length'])*D(d['width'])*D(d['height']);S=sum(D(x['area']) for x in r);surface=next(x for x in r if x['id']==d['retrofitId']);cap=min(d['maxPanels'],int(D(surface['area'])//D(d['panelArea'])));assert a['summary']['capacity']==cap;count+=1
  values=[]
  for i,band in enumerate([500,1000]):
   key='alpha'+str(band);A=sum(D(x['area'])*D(x[key]) for x in r);baseline=S*sum(D(x[key]) for x in r)/len(r);gain=D(d['panelArea'])*(D(d['panel'+str(band)])-D(surface[key]));values.append((A,gain));t=a['trace'][i]
   for k,want in [('absorptionArea',A),('perPanelGain',gain),('currentSeconds',D('.161')*v/A if A else None),('baselineSeconds',D('.161')*v/baseline if baseline else None)]:
    assert (t[k] is None and want is None) or (want is not None and math.isclose(t[k],float(want),rel_tol=1e-11,abs_tol=1e-11)),(k,t[k],want);count+=1
  valid=[]
  for n in range(cap+1):
   if all(A+n*g>0 and D('.161')*v/(A+n*g)<=D(d['targetSeconds']) for A,g in values):valid.append(n)
  want=min(valid) if valid else None
  assert a['summary']['panels']==want;(count:=count+1)
  assert a['summary']['feasible']==bool(valid);count+=1
  if valid:
   assert D(want)*D(d['panelArea'])<=D(surface['area']);count+=1
   for i,(A,g) in enumerate(values):
    assert math.isclose(a['trace'][i]['plannedSeconds'],float(D('.161')*v/(A+want*g)),rel_tol=1e-11,abs_tol=1e-11);count+=1
print('PASS Decimal independent oracle',count,'assertions / 400 cases')
json.dump({'cases':400,'assertions':count,'method':'45-digit Decimal area, gain, Sabine, all counts enumerated independently'},open('oracle-validation.json','w'),indent=2)
