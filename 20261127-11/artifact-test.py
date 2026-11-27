import json,csv,io,math,sys
from pathlib import Path
from decimal import Decimal as D
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';count=0
near=lambda x,y: (x is None and y is None) or (x is not None and y is not None and math.isclose(x,float(y),rel_tol=1e-10,abs_tol=1e-10))
def safe(x):return "'"+x if x and x[0] in '=+-@\t\r' else x
for name in ['fixture0','fixture1','reviewed','held','max']:
 p=Path(prefix+name+'.json');a=json.loads(p.read_text());d=a['original'];r=a['review'];S=sum(D(str(x['area'])) for x in r);vol=D(str(d['length']))*D(str(d['width']))*D(str(d['height']));env=2*(D(str(d['length']))*D(str(d['width']))+D(str(d['length']))*D(str(d['height']))+D(str(d['width']))*D(str(d['height'])))
 assert a['schema']=='quietform-v1';assert len(r)==len(d['records']);assert [x['id'] for x in r]==[x['id'] for x in d['records']];assert near(a['summary']['volume'],vol);assert near(a['summary']['surveyArea'],S);assert near(a['summary']['envelopeArea'],env);count+=6
 rows=list(csv.DictReader(io.StringIO(Path(prefix+name+'.audit.csv').read_text())));assert len(rows)==len(r);count+=1
 for x,y,source in zip(r,rows,d['records']):
  assert y['surface_id']==safe(x['id']);assert y['source_note']==safe(source['note']);count+=2
  for k in ['profile','area','alpha500','alpha1000','decision','reviewerNote']:
   if isinstance(x[k],str):assert y[k]==safe(x[k])
   else:assert D(y[k])==D(str(x[k]))
   count+=1
 md=Path(prefix+name+'.md').read_text();assert d['title'] in md
 for x in r:assert x['reviewerNote'] in md;assert x['id'] in md;count+=2
 bands=list(csv.DictReader(io.StringIO(Path(prefix+name+'.bands.csv').read_text())));assert len(bands)==len(a['trace']);count+=1
 blocked=any(x['decision']=='hold' for x in r) or abs(S-env)>D('.001')
 assert bool(a['trace'])!=blocked;count+=1
 if blocked:assert a['summary']['panels'] is None and not a['summary']['feasible'];count+=1
 else:
  surface=next(x for x in r if x['id']==d['retrofitId']);pa=D(str(d['panelArea']));cap=min(d['maxPanels'],int(D(str(surface['area']))//pa));assert a['summary']['capacity']==cap;count+=1
  values=[]
  for t,b in zip(a['trace'],bands):
   key='alpha'+str(t['band']);absorb=sum(D(str(x['area']))*D(str(x[key])) for x in r);base=S*sum(D(str(x[key])) for x in r)/len(r);gain=pa*(D(str(d['panel'+str(t['band'])]))-D(str(surface[key])));values.append((absorb,gain))
   for k,w in [('absorptionArea',absorb),('currentSeconds',D('.161')*vol/absorb if absorb else None),('baselineSeconds',D('.161')*vol/base if base else None),('perPanelGain',gain)]:
    assert near(t[k],w),(name,k,t[k],w);assert (b[k]=='' and t[k] is None) or near(float(b[k]),t[k]);count+=2
   assert b['retrofit_id']==safe(d['retrofitId']);count+=1
  valid=[n for n in range(cap+1) if all(A+n*g>0 and D('.161')*vol/(A+n*g)<=D(str(d['targetSeconds']))+D('1e-12') for A,g in values)]
  assert a['summary']['panels']==(min(valid) if valid else None);count+=1
  for t,(A,g),b in zip(a['trace'],values,bands):
   want=D('.161')*vol/(A+min(valid)*g) if valid else None
   assert near(t['plannedSeconds'],want);assert (b['plannedSeconds']=='' and want is None) or near(float(b['plannedSeconds']),want);count+=2
reviewed=json.loads(Path(prefix+'reviewed.json').read_text());assert reviewed['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "finish", approved';count+=1
json.dump({'independentAssertions':count,'files':'Browser-downloaded JSON/CSV/Markdown; Python csv, JSON and Decimal replay','prefix':prefix},open(prefix+'artifact-validation.json','w'),indent=2)
print('PASS independently parsed artifacts',count)
