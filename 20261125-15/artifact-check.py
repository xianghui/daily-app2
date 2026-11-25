import json,csv,sqlite3,glob,pathlib
reports=[]
for f in glob.glob('*export-*.json'):
 p=pathlib.Path(f);d=json.loads(p.read_text());assert d['schema']=='literal-loom/v1';assert len(d['cases'])==len(d['original']['requests']);assert sum(len(c['source'])for c in d['cases'])==d['metrics']['records'];assert [c['source']for c in d['cases']]==[q['records']for q in d['original']['requests']]
 cp=p.with_suffix('.csv');sp=p.with_suffix('.sql')
 def safe(s):return "'"+s if isinstance(s,str)and s.startswith(('=','+','-','@','\t','\r'))else str(s)
 if cp.exists():
  rows=list(csv.DictReader(cp.open(newline='')));expected=[]
  for c in d['cases']:
   for r in c.get('result',c['source']):expected.append((c,r))
  assert len(rows)==len(expected)
  for row,(c,r)in zip(rows,expected):
   assert row['record']==r['id'];assert row['value']==safe(r['value']);assert row['term']==safe(c['term']);assert row['note']==safe(c['note']);assert row['context']==safe(c['context']);assert row['literal_match']==(str(int(r['match']))if 'match'in r else '')
 if sp.exists():
  conn=sqlite3.connect(':memory:');queries=[];pending=''
  for line in sp.read_text().splitlines(True):
   pending+=line
   if sqlite3.complete_statement(pending):queries.append(pending);pending=''
  assert not pending.strip() or pending.lstrip().startswith('--')
  got=[]
  for q in queries:
   result=conn.execute(q).fetchall();got+=result
  expect=sorted((c['id'],r['id'],r['value'],int(r['match']),int(r['baseline']))for c in d['cases']if c['decision']=='approve'for r in c['result'])
  assert sorted(got)==expect,(str(p),'SQL mismatch')
 # Execute the exported bindable query with SQLite independently too.
 for c in d['cases']:
  if c['decision']!='approve':continue
  conn=sqlite3.connect(':memory:');conn.execute('CREATE TABLE records(id TEXT,value TEXT)');conn.executemany('INSERT INTO records VALUES(?,?)',[(r['id'],r['value'])for r in c['source']]);actual=conn.execute(c['query'],c['bindings']).fetchall();expected=sorted((r['id'],r['value'])for r in c['result']if r['match']);assert actual==expected
 reports.append({'artifact':f,'records':d['metrics']['records'],'csvParsed':cp.exists(),'sqlExecuted':sp.exists(),'parameterizedQueriesChecked':d['metrics']['approved']})
pathlib.Path('artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent CSV/JSON/SQLite validation',len(reports))
