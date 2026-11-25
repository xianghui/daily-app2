import json,csv,sqlite3,pathlib,os,re
prefix=os.getenv('PREFIX','');report=[]
for jp in sorted(pathlib.Path('.').glob(prefix+'export-*.json')):
 a=json.loads(jp.read_text());assert a['schema']=='peerframe-desk/v1';assert len(a['cases'])==len(a['original']['requests']);base=str(jp)[:-5];sp=pathlib.Path(base+'.sql');cp=pathlib.Path(base+'.csv')
 if sp.exists():
  # No semicolons are allowed in record IDs, partitions may contain them. Use SQLite complete_statement.
  sql=sp.read_text(); statements=[];chunk=''
  for line in sql.splitlines(True):
   chunk+=line
   if sqlite3.complete_statement(chunk):statements.append(chunk);chunk=''
  db=sqlite3.connect(':memory:');approved=[c for c in a['cases'] if c['decision']=='approve'];assert len(statements)==len(approved)
  for c,s in zip(approved,statements):
   out=db.execute(s).fetchall();expected=[(c['id'],r['id'],r['partition'],r['key'],r['value'],r['total']) for r in c['result']];assert out==expected,(jp,c['id'],out,expected)
 if cp.exists():
  with cp.open(newline='') as f: rows=list(csv.DictReader(f))
  assert len(rows)==sum(len(q['records']) for q in a['original']['requests'])
  for c in a['cases']:
   subset=[r for r in rows if r['request']==c['id']];assert len(subset)==len(c['source']);note=c['note'];safe="'"+note if note and note[0] in '=+-@\t\r' else note
   assert all(r['note']==safe for r in subset)
   for r in subset:
    src=next(x for x in c['source'] if x['id']==r['record']);part=src['partition'];safePart="'"+part if part and part[0] in '=+-@\t\r' else part;assert r['partition']==safePart;assert int(r['value'])==src['value'];assert int(r['key'])==src['key']
    if c['decision']=='approve':assert int(r['running_total'])==next(x['total'] for x in c['result'] if x['id']==r['record'])
 report.append({'file':str(jp),'requests':len(a['cases']),'records':sum(len(c['source']) for c in a['cases']),'SQLiteQueriesChecked':sp.exists(),'CSVParsed':cp.exists()})
# Independently execute supplied known-answer fixture SQL as well.
for jp in pathlib.Path('.').glob('core-*.json'):

 if not jp.with_suffix('.sql').exists():continue
 a=json.loads(jp.read_text());s=jp.with_suffix('.sql').read_text();db=sqlite3.connect(':memory:');chunk='';out=[]
 for line in s.splitlines(True):
  chunk+=line
  if sqlite3.complete_statement(chunk):out.append(db.execute(chunk).fetchall());chunk=''
 assert out==[[(c['id'],r['id'],r['partition'],r['key'],r['value'],r['total']) for r in c['result']] for c in a['cases']]
assert report,'No browser downloaded artifacts found'
json.dump(report,open(prefix+'artifact-validation.json','w'),indent=2);print('PASS independently parsed exports and SQLite window queries:',len(report))
