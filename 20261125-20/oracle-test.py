import subprocess,json,sqlite3
js="""import{calculate}from'./src/core.js';const keys=[null,'','a','A','NULL','quoted,\\n🍏'];const candidates=keys.flatMap((key,i)=>[{id:'a'+i,key,label:'x'},{id:'b'+i,key,label:'duplicate'}]);const out=[];for(let mask=0;mask<64;mask++){const ref=keys.filter((_,i)=>mask&(1<<i)).flatMap((key,i)=>[{id:'r'+i,key,label:''},{id:'s'+i,key,label:''}]);for(const mode of ['absent','nullsafe','present'])out.push({rows:candidates,reference:ref,mode,...calculate(candidates,ref,mode)});}for(const mode of ['absent','nullsafe','present'])out.push({rows:[],reference:[],mode,...calculate([],[],mode)});process.stdout.write(JSON.stringify(out));"""
cases=json.loads(subprocess.check_output(['node','--input-type=module','-e',js]));db=sqlite3.connect(':memory:')
for c in cases:
 db.executescript('DROP TABLE IF EXISTS l;DROP TABLE IF EXISTS r;CREATE TABLE l(id TEXT,k TEXT);CREATE TABLE r(id TEXT,k TEXT);')
 db.executemany('INSERT INTO l VALUES(?,?)',[(x['id'],x['key']) for x in c['rows']]);db.executemany('INSERT INTO r VALUES(?,?)',[(x['id'],x['key']) for x in c['reference']])
 op='IS' if c['mode']=='nullsafe' else '=';e='EXISTS' if c['mode']=='present' else 'NOT EXISTS';expected=[x[0] for x in db.execute(f'SELECT id FROM l WHERE {e}(SELECT 1 FROM r WHERE l.k {op} r.k) ORDER BY l.rowid')]
 assert expected==[x['id'] for x in c['selected']]
 op='IN' if c['mode']=='present' else 'NOT IN';base=list(db.execute(f'SELECT id,k {op}(SELECT k FROM r) FROM l ORDER BY rowid'))
 assert [(w['id'],w['baselineKeep'],w['baselineTruth']) for w in c['witnesses']]==[(id,v==1,'UNKNOWN' if v is None else 'TRUE' if v else 'FALSE') for id,v in base]
json.dump({'sqliteCases':len(cases),'pass':True,'scope':'All 64 reference subsets of six nullable/empty/case-sensitive/Unicode keys, duplicate occurrences, three policies, plus empty candidates'},open('oracle-validation.json','w'),indent=2);print('PASS SQLite oracle',len(cases))
