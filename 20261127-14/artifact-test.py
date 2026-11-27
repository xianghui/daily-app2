import json,csv,glob,xml.etree.ElementTree as E,sys
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0
def ck(x):
 global checks
 assert x
 checks+=1
for path in glob.glob(prefix+'*.json'):
 a=json.load(open(path))
 if not isinstance(a,dict) or a.get('schema')!='grainline-v1':continue
 n=len(a['original']['records']);ck(len(a['review'])==n==len(a['jobs']))
 ck([r['id'] for r in a['review']]==[r['id'] for r in a['original']['records']])
 for r,j in zip(a['review'],a['jobs']):
  ck(r['id']==j['id'])
  if j['status']=='held':ck(j['layout']==None);continue
  l=j['layout'];p=next(p for p in a['original']['profiles'] if p['id']==r['profile']);g=a['original']['gap'];m=a['original']['margin']
  ck(sum(b['count'] for b in l['bands'])==l['yield'])
  if not l['yield']:ck(j['status']=='infeasible');continue
  ck(j['sheets']==(r['quantity']+l['yield']-1)//l['yield']);ck(j['sheets']*l['yield']-r['quantity']==j['spare'])
  for b in l['bands']:
   ck((b['w'],b['h'])==((r['height'],r['width']) if b['rotated'] else (r['width'],r['height'])))
   if r['grain']!='any':ck((('height' if r['grain']=='width' else 'width') if b['rotated'] else r['grain'])==p['grain'])
   if l['axis']=='horizontal':ck(b['count']*b['w']+(b['count']-1)*g<=p['width']-2*m);ck(b['offset']+b['h']<=p['height']-m)
   else:ck(b['count']*b['h']+(b['count']-1)*g<=p['height']-2*m);ck(b['offset']+b['w']<=p['width']-m)
 for stock in a['stocks']:
  required=sum(j.get('sheets') or 0 for r,j in zip(a['review'],a['jobs']) if r['profile']==stock['id']);ck(stock['required']==required);ck(stock['shortage']==max(0,required-stock['available']))
 ck(a['summary']['manifestReady']==(not a['summary']['held'] and not a['summary']['infeasible'] and not a['summary']['shortage']))
 stem=path[:-5]
 if glob.glob(stem+'.audit.csv'):
  rows=list(csv.DictReader(open(stem+'.audit.csv',newline='')));ck(len(rows)==n)
  for row,r,src in zip(rows,a['review'],a['original']['records']):
   for k,val in [('job_id',r['id']),('source_note',src['note']),('stock',r['profile']),('reviewer_note',r['reviewerNote'])]:
    expected="'"+val if val.startswith(('=','+','-','@','\t','\r')) else val;ck(row[k]==expected)
 if glob.glob(stem+'.cut.csv'):
  rows=list(csv.DictReader(open(stem+'.cut.csv',newline='')));ck(a['summary']['manifestReady']);ck(len(rows)==sum(len(j['layout']['bands']) for j in a['jobs']))
  for r,j in zip(a['review'],a['jobs']):ck(sum(int(x['blanks_in_band']) for x in rows if x['job_id']==r['id'])==j['layout']['yield'])
 if glob.glob(stem+'.svg'):
  root=E.parse(stem+'.svg').getroot();ck(root.tag=='{http://www.w3.org/2000/svg}svg');ck(len(root.findall('{http://www.w3.org/2000/svg}rect'))==a['jobs'][0]['layout']['yield']+1)
 if 'reviewed' in stem:
  ck(a['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "grain", approved')
 if glob.glob(stem+'.md'):
  md=open(stem+'.md').read();ck(all(r['reviewerNote'] in md and r['id'] in md for r in a['review']))
json.dump({'assertions':checks,'independentParsers':'Python JSON/CSV/XML; every job, stock ledger, grain, layout and current review checked'},open(prefix+'artifact-validation.json','w'),indent=2)
print('PASS artifact',checks)
