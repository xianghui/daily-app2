import csv,json,math,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
report=[]
for name in ['fixture0','fixture1','reviewed','max','held']:
 p=Path(prefix+name);r=json.loads(p.with_suffix('.json').read_text());assert r['schema']=='rootwater-v1'
 with open(str(p)+'.audit.csv',newline='') as f: rows=list(csv.DictReader(f))
 assert len(rows)==len(r['original']['records'])==len(r['review'])
 for a,v,o in zip(rows,r['review'],r['original']['records']):
  assert a['id']==v['id']==o['id'];assert a['originalNote']==o['note'];assert a['profile']==v['profile'];assert a['decision']==v['decision']
  note=v['reviewerNote'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
  assert a['reviewerNote']==expected
  for k in ['areaM2','capacityMm','startMm']:assert float(a[k])==v[k]
 if r['complete']:
  with open(str(p)+'.watering.csv',newline='') as f: ws=list(csv.DictReader(f))
  assert len(ws)==len(r['review'])*len(r['original']['days'])==len(r['worksheet'])
  for a,v in zip(ws,r['worksheet']):
   for k in a:
    if k=='triggered':assert a[k]==str(v[k]).lower()
    elif isinstance(v[k],(int,float)):assert math.isclose(float(a[k]),v[k],abs_tol=1e-8)
    else:assert a[k]==v[k]
  assert len({(a['id'],a['date']) for a in ws})==len(ws)
  # Independent daily recomputation from the reviewed JSON, not JS helpers.
  total=0
  for v in r['review']:
   water=v['startMm'];kc=next(p['kc'] for p in r['original']['profiles'] if p['id']==v['profile']);x=r['original']
   for d in x['days']:
    rain=d['rainMm']*x['rainCapture'];drain=max(0,water+rain-v['capacityMm']);water=min(v['capacityMm'],water+rain)
    demand=d['et0Mm']*kc;actual=min(water,demand);water-=actual;dep=v['capacityMm']-water
    gross=min(x['maxGrossMm'],dep/x['efficiency']) if dep+1e-9>=v['capacityMm']*x['trigger'] else 0
    water=min(v['capacityMm'],water+gross*x['efficiency']);total+=gross*v['areaM2']
    observed=next(z for z in r['worksheet'] if z['id']==v['id'] and z['date']==d['date'])
    assert math.isclose(water,observed['endMm'],abs_tol=1e-8)
    assert math.isclose(max(0,demand-actual),observed['unmetETMm'],abs_tol=1e-8)
  assert math.isclose(total,r['summary']['liters'],abs_tol=1e-8)
  md=p.with_suffix('.md').read_text()
  for v in r['review']:assert v['id'] in md;assert v['reviewerNote'] in md
 report.append({'artifact':name,'sourceRecords':len(rows),'worksheetRows':len(r['worksheet']),'complete':r['complete'],'csvIndependentRoundTrip':True})
Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent CSV/JSON/Markdown round trips and water recomputation',report)
