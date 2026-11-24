import csv,json,sqlite3,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else ''
db=sqlite3.connect(':memory:');count=0
for c in json.loads(Path('oracle-cases.json').read_text()):
 p,ck,wh=db.execute('SELECT p, p IS NOT FALSE, p IS TRUE FROM (SELECT '+c['sqlExpression']+' AS p)').fetchone()
 assert p==c['value'] and bool(ck)==c['checkPass'] and bool(wh)==c['wherePass'],c
 count+=1
reports=[]
for f in Path('.').glob(prefix+'export-*.json'):
 r=json.loads(f.read_text());assert len(r['checks'])==len(r['reviews'])==len(r['originalInput']['records'])
 sqlcount=0
 for fmt in ['csv','md','sql']:
  ff=f.with_suffix('.'+fmt)
  if not ff.exists():continue
  if fmt=='csv':
   rows=list(csv.DictReader(ff.open(newline='')));assert len(rows)==len(r['checks'])
   def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
   for i,row in enumerate(rows):
    assert row['id']==safe(r['checks'][i]['id'])
    assert row['source_context']==safe(r['originalInput']['records'][i]['context'])
    assert row['original_bindings']==r['originalInput']['records'][i]['raw']
    assert row['review_note']==safe(r['reviews'][i]['note'])
    assert row['reviewed_bindings']==r['reviews'][i]['raw']
  if fmt=='md':assert json.dumps(r['originalInput'],ensure_ascii=False,separators=(',',':')) in ff.read_text()
  if fmt=='sql':
   statements=[];s=''
   for ch in ff.read_text():
    s+=ch
    if ch==';' and sqlite3.complete_statement(s):statements.append(s);s=''
   ready=[x for x in r['checks'] if x['status']=='ready'];assert len(ready)==len(statements);sqlcount=len(statements)
   for c,statement in zip(ready,statements):
    result=db.execute(statement).fetchone();assert result==(c['id'],c['value'],int(c['checkPass']),int(c['wherePass'])),(c,result)
 reports.append({'file':f.name,'records':len(r['checks']),'sqlCasesExecuted':sqlcount})
if prefix or list(Path('.').glob('export-*.json')):assert reports
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentSQLiteOracleCases':count,'artifacts':reports},indent=2));print('PASS independent SQLite',count,'and',len(reports),'audit artifacts')
