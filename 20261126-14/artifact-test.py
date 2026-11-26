from pathlib import Path
import json,csv,sys
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=[]
for name in ['fixture0','fixture1','reviewed','max','held']:
 a=json.loads(Path(prefix+'export-'+name+'.json').read_text());rows=list(csv.reader(Path(prefix+'export-'+name+'.csv').open(newline='')));header=rows.pop(0)
 assert len(header)==18 and all(len(r)==18 for r in rows)
 assert len(rows)==len(a['rows'])+len(a['original']['products'])
 costs=[dict(zip(header,r))for r in rows if r[0]=='cost'];products=[dict(zip(header,r))for r in rows if r[0]=='product']
 for x,y in zip(a['rows'],costs):
  for k,v in [('id',x['id']),('label_or_original_note',x['note']),('original_cost_or_sales',x['cost']),('review_role',x['review']['profile']),('review_cost_or_sales',x['review']['cost']),('review_note',x['review']['note'])]:
   expected="'"+v if v and v[0] in '=+-@\t\r' else v
   assert y[k]==expected,(name,k,y[k],expected)
 for x,y in zip(a['original']['products'],products):
  assert y['id']==x['id'];v=next((p for p in a['products'] if p['id']==x['id']),None)
  if a['status']=='ready':
   assert y['joint_allocated_minor']==v['jointAllocatedMinor'];assert y['joint_difference_minor']==v['jointDifferenceMinor']
 if a['totals']:
  assert sum(int(p['jointAllocatedMinor'])for p in a['products'])==int(a['totals']['jointMinor'])
  assert sum(int(p['totalProductionMinor'])for p in a['products'])==int(a['totals']['productionMinor'])
  assert sum(int(r['review']['cost'])for r in a['rows'])==int(a['totals']['allCostMinor'])
  assert sum(int(p['jointDifferenceMinor'])for p in a['products'])==0
 if name!='held':
  md=Path(prefix+'export-'+name+'.md').read_text()
  assert all(x['id'] in md for x in a['rows'])
  if name=='reviewed':assert a['review'][0]['note'] in md
 if a['status']=='ready':
  costs_by_product={p['id']:sum(int(r['review']['cost'])for r in a['rows'] if r['review']['profile']=='separable' and r['review']['product']==p['id'])for p in a['products']}
  for p in a['products']:
   assert int(p['separableMinor'])==costs_by_product[p['id']]
   assert int(p['nrvMinor'])==int(p['reviewSales'])-costs_by_product[p['id']]
   assert int(p['totalProductionMinor'])==int(p['jointAllocatedMinor'])+costs_by_product[p['id']]
  assert a['metrics']['baselineDisagreements']==sum(p['jointAllocatedMinor']!=p['baselineJointMinor']for p in a['products'])
 checks.append(name)
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentCsvJsonMarkdownParsers':True,'passed':checks},indent=2));print('PASS artifacts',prefix)
