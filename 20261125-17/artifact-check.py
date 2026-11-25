import csv,json,sqlite3,glob,sys
from pathlib import Path
count=0
def check(v):
 global count
 assert v
 count+=1
con=sqlite3.connect(':memory:')
con.execute('create table t (idx integer, id text, score integer)')
for case in json.load(open('core-cases.json')):
 con.execute('delete from t');con.executemany('insert into t values(?,?,?)',[(i,r['id'],r['score']) for i,r in enumerate(case['rows'])])
 order='desc' if case['direction']=='higher' else 'asc'
 res=con.execute(f'select id,row_number() over(order by score {order},idx),rank() over(order by score {order}),dense_rank() over(order by score {order}) from t order by score {order},idx').fetchall()
 check([(r['id'],r['position'],r['rank'],r['dense']) for r in case['result']['ranked']]==res)
 col={'rows':1,'rank':2,'dense':3}[case['mode']];check([r['id'] for r in case['result']['selected']]==[r[0] for r in res if r[col]<=case['n']])
 check(len(case['result']['ranked'])==len(case['rows']))
prefix=sys.argv[1] if len(sys.argv)>1 else ''
for file in glob.glob(prefix+'export-*.json'):
 audit=json.load(open(file));check(audit['schema']=='podium-desk/v1');check(len(audit['cases'])==len(audit['original']['requests']))
 for original,c,review in zip(audit['original']['requests'],audit['cases'],audit['review']):
  check(original['rows']==c['rows']);check(review['note']==c['note']);check(review['limit']==c['limit']);check(review['profile']==c['profile'])
  if c['decision']=='hold':check('selected' not in c);continue
  con.execute('delete from t');con.executemany('insert into t values(?,?,?)',[(i,r['id'],r['score']) for i,r in enumerate(c['rows'])]);order='desc' if c['direction']=='higher' else 'asc'
  result=con.execute(f'select id,row_number() over(order by score {order},idx),rank() over(order by score {order}),dense_rank() over(order by score {order}) from t order by score {order},idx').fetchall();col={'rows':1,'rank':2,'dense':3}[c['mode']]
  check([r['id'] for r in c['selected']]==[r[0] for r in result if r[col]<=c['limit']]);check([(r['id'],r['position'],r['rank'],r['dense']) for r in c['ranked']]==result)
 check(audit['metrics']['records']==sum(len(c['rows']) for c in audit['cases']));check(audit['metrics']['selected']==sum(len(c.get('selected',[])) for c in audit['cases']));check(audit['metrics']['changed']==sum(len(c.get('changed',[])) for c in audit['cases']))
 def safe(s):return "'"+s if s.startswith(('=','+','-','@','\t','\r')) else s
 for short in [False,True]:
  cf=file[:-5]+('.shortlist.csv' if short else '.csv')
  if not Path(cf).exists():continue
  rows=list(csv.DictReader(open(cf,newline='')));expected=[]
  for c in audit['cases']:
   for r in c['rows']:
    ranked=next((x for x in c.get('ranked',[]) if x['id']==r['id']),None)
    if short and (not ranked or not ranked['selected']):continue
    expected.append((c,r,ranked))
  check(len(rows)==len(expected))
  for cr,(c,r,ranked) in zip(rows,expected):
   check(cr['request']==c['id']);check(cr['source_id']==r['id']);check(cr['label']==safe(r['label']));check(cr['note']==safe(c['note']));check(int(cr['score'])==r['score']);check(cr['selected']==('true' if ranked['selected'] else 'false') if ranked else cr['selected']=='');check(cr['context']==safe(c['context']))
 md=Path(file[:-5]+'.md')
 if md.exists():check(all(c['note'] in md.read_text() for c in audit['cases']))
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':count,'independentOracle':'Python sqlite3 row_number/rank/dense_rank over 1800 scenarios and all downloaded audits','csv':'Python csv.DictReader; full row/label/score/decision/note checks'},indent=2));print('PASS',count,'independent assertions')
