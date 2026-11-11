import json,csv,io,math
from pathlib import Path
checks=[]
for name in ['reviewed','max','phone']:
 a=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())))
 assert len(rows)==len(a['records'])==len(a['originalInput']['records'])
 for r,x in zip(rows,a['records']):
  assert r['id']==x['id'];assert r['source']==x['text'];assert r['reviewedItem']==x['item'];assert int(r['annualUnits'])==x['annualUnits'];assert r['note']==("'" if x['note'].startswith(('=','+','-','@','\t','\r')) else '')+x['note']
 assert sum(int(r['annualUnits']) for r in rows)==a['metrics']['annualUnits']
 checks.append({'artifact':name,'records':len(rows),'everyEditedFieldAndOriginalPreserved':True})
a=json.loads(Path('export-reviewed.json').read_text());assert a['records'][0]['annualUnits']==600;assert a['records'][0]['note']=='=1+1, "review"\nsecond line';assert '600 units/year' in Path('export-reviewed.md').read_text()
for path in ['export-Office.json','export-Art.json','export-max.json']:
 a=json.loads(Path(path).read_text())
 for p in a['plans']:
  if not p['selected']:continue
  c=next(c for c in a['originalInput']['catalog'] if c['id']==p['item']);d=p['annualUnits']; feasible=[q for q in range(1,c['capacity']+1) if q%c['pack']==0 and q>=c['minimum']]
  cost=lambda q:d/q*c['orderCost']+q/2*c['holdingCost']
  assert math.isclose(p['selected']['total'],min(map(cost,feasible)),abs_tol=1e-8)
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'artifacts':checks,'independentCostOptimality':True,'markdownReviewedUnits':True},indent=2));print('PASS independent CSV/JSON/Markdown parsing, edits, conservation and cost optimum')
