from pathlib import Path
import json,csv,io,re,subprocess
reports=[]
for f in Path('.').glob('export-*-json.json'):
 r=json.loads(f.read_text());d=r['originalInput'];rs=r['reviews'];a=r['analysis'];assert len(rs)==len(d['operations']);assert [x['id']for x in rs]==[x['id']for x in d['operations']]
 prefix=f.name.removesuffix('-json.json');cf=Path(prefix+'-csv.csv')
 if cf.exists():
  rows=list(csv.DictReader(io.StringIO(cf.open(newline='').read())));assert len(rows)==len(rs)
  safe=lambda s: "'"+s if s and s[0] in '=+-@\t\r' else s
  for i,x in enumerate(rows):
   assert x['id']==safe(rs[i]['id']);assert x['original_resource_note']==safe(d['operations'][i]['resourceNote']);assert x['reviewed_resource']==safe(rs[i]['resource']);assert x['reviewer_note']==safe(rs[i]['note']);assert x['reviewed_mode']==rs[i]['mode'];assert x['reviewed_transaction']==safe(rs[i]['transaction'])
 pf=Path(prefix+'-plan-csv.csv')
 if pf.exists():
  plan=list(csv.DictReader(io.StringIO(pf.open(newline='').read())));assert a['serializable'];assert len(plan)==len(rs);assert [x['id']for x in plan]==[safe(x['id'])for x in a['serialOperations']]
  pos={x['id']:i for i,x in enumerate(a['serialOperations'])}
  for c in a['conflicts']:assert pos[c['before']]<pos[c['after']]
  for t in d['transactions']:assert[x['id']for x in a['serialOperations']if x['transaction']==t]==[x['id']for x in rs if x['transaction']==t]
 md=Path(prefix+'-markdown.md')
 if md.exists():
  assert json.loads(md.read_text().split('## Complete source-linked audit\n\n')[1])==r
 dot=Path(prefix+'-dot.dot')
 if dot.exists():
  s=dot.read_text();assert s.startswith('digraph reviewed');assert s.count(' -> ')==len(a['edges']);assert all(json.dumps(t)in s for t in d['transactions'])
 if 'reviewed' in prefix:assert rs[0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
 if a['status']=='ready' and not a['serializable']:
  cyc=a['cycle'];assert cyc
  for i,e in enumerate(cyc):
   assert e['to']==cyc[(i+1)%len(cyc)]['from']
   for w in e['witnesses']:
    l=rs[w['beforeIndex']];right=rs[w['afterIndex']];assert l['id']==w['before'] and right['id']==w['after'];assert l['resource']==right['resource'];assert 'W'in [l['mode'],right['mode']];assert l['transaction']!=right['transaction']
 reports.append({'file':f.name,'records':len(rs),'status':a['status'],'serializable':a.get('serializable'),'csvParsed':cf.exists(),'planParsed':pf.exists(),'markdownJSONReopened':md.exists(),'dotInspected':dot.exists()})
assert len(reports)>=8
Path('artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS',len(reports),'independently parsed downloaded audit sets')
