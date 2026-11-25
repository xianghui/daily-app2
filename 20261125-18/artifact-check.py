import json,csv,sqlite3,glob,sys
from pathlib import Path
checks=0
def eq(x,y):
 global checks
 assert x==y,(x,y)
 checks+=1
def typed(x):
 return ('null' if x is None else 'boolean' if isinstance(x,bool) else 'number' if isinstance(x,int) else 'string',json.dumps(x,ensure_ascii=False))
def expected(rows,mode):
 values=[r['value'] for r in rows]
 if mode=='rows':return len(rows)
 if mode=='present':return sum(v is not None for v in values)
 return len({typed(v) for v in values if v is not None})
def queries(src):
 conn=sqlite3.connect(':memory:');buf='';ans=[]
 for line in src.splitlines(True):
  buf+=line
  if sqlite3.complete_statement(buf):
   ans.append(conn.execute(buf).fetchone());buf=''
 eq(buf.strip(),'')
 conn.close();return ans
for x in json.load(open('core-cases.json')):
 counts=[]
 for i,q in enumerate(x['original']['requests']):
  mode=x['original']['profiles'][i]['mode'];n=expected(q['rows'],mode);eq(x['counts'][i],n);eq(x['baseline'][i],sum(bool(r['value']) for r in q['rows']));counts.append(n)
 eq(queries(x['sql']),[(n,n) for n in counts])
prefix=sys.argv[1] if len(sys.argv)>1 else ''
for fn in glob.glob(prefix+'export-*.json'):
 d=json.load(open(fn));eq(d['schema'],'count-orchard/v1');eq(len(d['cases']),len(d['original']['requests']));eq(d['metrics']['records'],sum(len(q['rows']) for q in d['original']['requests']));approved=[]
 for q,c in zip(d['original']['requests'],d['cases']):
  eq(c['rows'],q['rows'])
  if c['decision']=='approve':
   eq(c['count'],expected(q['rows'],c['mode']));eq(sum(w['included'] for w in c['witnesses']),c['count']);eq(c['changed'],sum(w['included']!=w['baseline'] for w in c['witnesses']));approved.append(c['count'])
 sf=Path(fn).with_suffix('.sql')
 if sf.exists():eq(queries(sf.read_text()),[(n,n) for n in approved])
 cf=Path(fn).with_suffix('.csv')
 if cf.exists():
  rows=list(csv.DictReader(cf.open(newline='')));eq(len(rows),sum(max(1,len(q['rows'])) for q in d['original']['requests']));at=0
  for c in d['cases']:
   for r in c['rows']:
    row=rows[at];at+=1;eq(row['request'],c['id']);eq(row['row_id'],r['id']);eq(typed(json.loads(row['value_json'])),typed(r['value']));eq(row['reviewer_note'],("'" if c['note'].startswith(('=','+','-','@','\t','\r')) else '')+c['note'])
   if not c['rows']:eq(rows[at]['reason'],'Empty source group');at+=1
out={'checks':checks,'independentSQLiteQueries':900,'generatedFixtures':300,'downloadedAudits':len(glob.glob(prefix+'export-*.json'))};Path(prefix+'artifact-validation.json').write_text(json.dumps(out,indent=2));print('PASS',out)
