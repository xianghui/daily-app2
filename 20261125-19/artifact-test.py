import json,csv,sqlite3,glob,os
reports=[]
for f in glob.glob(os.environ.get('PREFIX','')+'export-*.json'):
 d=json.load(open(f)); db=sqlite3.connect(':memory:'); total=0
 for c in d['cases']:
  total+=len(c['rows'])
  original=next(q for q in d['original']['requests'] if q['id']==c['id'])
  assert c['rows']==original['rows']
  if c['decision']=='hold': assert 'groups' not in c; continue
  db.execute('DROP TABLE IF EXISTS src'); db.execute('CREATE TABLE src(id TEXT,a TEXT,b TEXT,amount INTEGER)');db.executemany('INSERT INTO src VALUES(?,?,?,?)',[(r['id'],r['a'],r['b'],r['amount']) for r in c['rows']])
  masks={'detail':[0],'rollup':[0,1,3],'cube':[0,1,2,3]}[c['mode']]
  actual=[]
  for mask in masks:
   cols=[x for bit,x in [(2,'a'),(1,'b')] if not mask&bit]
   query='SELECT '+('a' if not mask&2 else 'NULL')+','+('b' if not mask&1 else 'NULL')+', COALESCE(SUM(amount),0), GROUP_CONCAT(id) FROM src'+(' GROUP BY '+','.join(cols) if cols else '')
   rows=db.execute(query).fetchall()
   for a,b,s,ids in rows:actual.append((mask,a,b,s,sorted(ids.split(',')) if ids else []))
  key=lambda x:json.dumps(x,ensure_ascii=False,sort_keys=True)
  expected=[(g['mask'],g['a'],g['b'],g['sum'],sorted(g['sourceIds'])) for g in c['groups']]
  assert sorted(actual,key=key)==sorted(expected,key=key),(f,c['id'],actual,expected)
  for mask in masks:
   gs=[g for g in c['groups'] if g['mask']==mask]
   assert sorted(i for g in gs for i in g['sourceIds'])==sorted(r['id'] for r in c['rows'])
   assert sum(g['sum'] for g in gs)==sum(r['amount'] for r in c['rows'])
  assert c['changed']==len(c['groups'])-len(set(json.dumps([g['a'] if g['a'] is not None else 'ALL',g['b'] if g['b'] is not None else 'ALL']) for g in c['groups']))
 assert total==d['metrics']['records']
 cf=f[:-4]+'csv'
 if os.path.exists(cf):
  rs=list(csv.DictReader(open(cf,newline='')))
  assert sum(r['kind']=='source' for r in rs)==total
  assert sum(r['kind']=='summary' for r in rs)==sum(len(c.get('groups',[])) for c in d['cases'])
  for c in d['cases']:
   ss=[r for r in rs if r['kind']=='source' and r['request']==c['id']]
   assert [(r['id'],json.loads(r['a_json']),json.loads(r['b_json']),int(r['amount'])) for r in ss]==[(r['id'],r['a'],r['b'],r['amount']) for r in c['rows']]
   if c['note'].startswith('='):assert all(r['note']=="'"+c['note'] for r in ss)
   else:assert all(r['note']==c['note'] for r in ss)
 reports.append({'file':f,'records':total,'sqliteAllLevelsMatched':True,'csvParsed':os.path.exists(cf)})
assert reports
json.dump(reports,open(os.environ.get('PREFIX','')+'artifact-validation.json','w'),indent=2)
print('PASS artifacts / independent SQLite:',len(reports))
