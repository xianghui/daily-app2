import json,csv,sqlite3,glob,os,io
reports=[]
for f in glob.glob('*export-*.json'):
 a=json.load(open(f)); assert a['schema']=='multiplicity-desk/v1'; assert len(a['cases'])==len(a['original']['requests'])
 total=sum(len(c['left'])+len(c['right']) for c in a['cases']);assert total==a['metrics']['records']
 assert sum(len(c.get('output',[])) for c in a['cases'])==a['metrics']['outputRows']
 baseline_total=0
 for c in a['cases']:
  if c['decision']=='hold':continue
  l={r['value'] for r in c['left']};r={r['value'] for r in c['right']};b=l|r if c['operation']=='combine' else l&r if c['operation']=='overlap' else l-r
  assert set(c['baseline'])==b and len(c['baseline'])==len(b);baseline_total+=len(b)
 assert baseline_total==a['metrics']['baselineRows']
 assert a['metrics']['lostByDistinct']==a['metrics']['outputRows']-baseline_total
 for c,q in zip(a['cases'],a['original']['requests']):
  assert c['left']==q['left'] and c['right']==q['right']
  if c['decision']=='hold': assert 'output' not in c;continue
  vals={x['value'] for x in c['left']+c['right']}
  for v in vals:
   l=sum(r['value']==v for r in c['left']);r=sum(r['value']==v for r in c['right']);o=sum(r['value']==v for r in c['output']);assert o==({'combine':l+r,'overlap':min(l,r),'subtract':max(0,l-r)}[c['operation']])
 cf=f[:-5]+'.csv'
 if os.path.exists(cf):
  rows=list(csv.DictReader(open(cf,newline='')));assert len(rows)==total
  def safe(v):return "'"+v if v and v[0] in '=+-@\t\r' else v
  expected=[]
  for c in a['cases']:
   for side in ['left','right']:
    for r in c[side]:
     out=next((i+1 for i,x in enumerate(c.get('output',[])) if x['id']==r['id'] and x['side']==side),'')
     expected.append((c['id'],side,r['id'],safe(r['value']),safe(c['note']),str(out)))
  assert [(r['request'],r['side'],r['source_id'],r['value'],r['note'],r['output_index']) for r in rows]==expected
 sf=f[:-5]+'.sql'
 if os.path.exists(sf):
  conn=sqlite3.connect(':memory:');actual=[];statement=''
  for line in open(sf):
   statement+=line
   if sqlite3.complete_statement(statement):actual+=conn.execute(statement).fetchall();statement=''
  expected=[(c['id'],r['side'],r['id'],r['value']) for c in a['cases'] for r in c.get('output',[])];assert actual==expected,(f,actual,expected)
 reports.append({'artifact':f,'sourceRecords':total,'sql':os.path.exists(sf),'csv':os.path.exists(cf)})
assert reports
json.dump(reports,open('artifact-validation.json','w'),indent=2);print('PASS independent JSON/CSV/SQLite',len(reports))
