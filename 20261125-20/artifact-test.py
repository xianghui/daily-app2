import csv,json,sqlite3,glob,os
prefix=os.environ.get('PREFIX',''); report=[]
def safe(x):return "'"+x if isinstance(x,str) and x[:1] in '=+-@\t\r' and x else x
for f in glob.glob(prefix+'export-*.json'):
 d=json.load(open(f));db=sqlite3.connect(':memory:');total=0
 for q,c,r in zip(d['original']['requests'],d['cases'],d['review']):
  assert c['rows']==q['rows'] and c['reference']==q['reference'];total+=len(q['rows'])+len(q['reference'])
  if c['decision']=='hold':assert 'selected' not in c;continue
  db.executescript('DROP TABLE IF EXISTS l; DROP TABLE IF EXISTS r; CREATE TABLE l(id TEXT,k TEXT,label TEXT);CREATE TABLE r(id TEXT,k TEXT,label TEXT);')
  for table,field in [('l','rows'),('r','reference')]:db.executemany(f'INSERT INTO {table} VALUES(?,?,?)',[(x['id'],x['key'],x['label']) for x in q[field]])
  op='IS' if c['mode']=='nullsafe' else '=';exists='EXISTS' if c['mode']=='present' else 'NOT EXISTS'
  selected=[x[0] for x in db.execute(f'SELECT l.id FROM l WHERE {exists}(SELECT 1 FROM r WHERE l.k {op} r.k) ORDER BY l.rowid')]
  assert selected==[x['id'] for x in c['selected']],(f,c['id'],selected)
  bop='IN' if c['mode']=='present' else 'NOT IN'
  base=list(db.execute(f'SELECT l.id,l.k {bop}(SELECT k FROM r) FROM l ORDER BY rowid'))
  for w,(id,v) in zip(c['witnesses'],base):
   assert w['id']==id and w['baselineKeep']==(v==1)
   assert w['baselineTruth']==('UNKNOWN' if v is None else 'TRUE' if v==1 else 'FALSE')
   matches=[x[0] for x in db.execute(f'SELECT r.id FROM r WHERE ? {op} r.k ORDER BY rowid',(w['key'],))]; assert w['matches']==matches
  assert c['changed']==sum(w['keep']!=w['baselineKeep'] for w in c['witnesses'])
 assert total==d['metrics']['records']
 cf=f[:-5]+'.csv'
 if os.path.exists(cf):
  rows=list(csv.DictReader(open(cf,newline='')))
  for c in d['cases']:
   for kind,field in [('source','rows'),('reference','reference')]:
    rs=[x for x in rows if x['request']==c['id'] and x['kind']==kind];assert len(rs)==len(c[field])
    for got,original in zip(rs,c[field]):
     assert got['id']==original['id'] and json.loads(got['key_json'])==original['key'] and got['label']==safe(original['label'])
     assert got['note']==safe(c['note'])
 sf=f[:-5]+'.selected.csv'
 if os.path.exists(sf):
  got=list(csv.DictReader(open(sf,newline='')));expected=[(c['id'],r) for c in d['cases'] for r in c.get('selected',[])]
  assert len(got)==len(expected)
  for g,(cid,r) in zip(got,expected):assert g['request']==cid and g['id']==r['id'] and json.loads(g['key_json'])==r['key'] and g['label']==safe(r['label'])
 report.append({'file':f,'records':total,'sqliteChecks':True,'csv':os.path.exists(cf),'selectedCSV':os.path.exists(sf)})
assert report
json.dump(report,open(prefix+'artifact-validation.json','w'),indent=2);print('PASS independent SQLite / CSV artifacts',len(report))
