import sqlite3,json,random,subprocess
random.seed(22);db=sqlite3.connect(':memory:');db.executescript('CREATE TABLE supplier(id TEXT);CREATE TABLE req(id TEXT);CREATE TABLE evidence(supplier TEXT,cap TEXT);')
# Independent relational division oracle over random duplicate-bearing evidence sets.
cases=[]
for i in range(250):
 req=random.sample(['a','b','c','d'],random.randrange(5));ev=[(random.choice(['s1','s2','s3']),random.choice(['a','b','c','d'])) for _ in range(random.randrange(1,25))]
 db.executescript('DELETE FROM supplier;DELETE FROM req;DELETE FROM evidence;');db.executemany('INSERT INTO supplier VALUES (?)',[(s,) for s in ['s1','s2','s3']]);db.executemany('INSERT INTO req VALUES (?)',[(r,) for r in req]);db.executemany('INSERT INTO evidence VALUES (?,?)',ev)
 gold=[r[0] for r in db.execute('SELECT s.id FROM supplier s WHERE EXISTS(SELECT 1 FROM req) AND NOT EXISTS(SELECT 1 FROM req r WHERE NOT EXISTS(SELECT 1 FROM evidence e WHERE e.supplier=s.id AND e.cap=r.id)) ORDER BY s.id')]
 cases.append(dict(required=req,evidence=ev,expected=gold))
open('oracle-cases.json','w').write(json.dumps(cases))
js="""import fs from'node:fs';import{apply}from'./src/core.js';let cases=JSON.parse(fs.readFileSync('oracle-cases.json'));let out=cases.map(c=>{let d={title:'Oracle',suppliers:['s1','s2','s3'].map(id=>({id,name:id})),capabilities:['a','b','c','d'].map(id=>({id,description:id,required:true})),evidence:c.evidence.map(([supplier,capability],i)=>({id:'e'+i,supplier,context:'synthetic'}))};let r=c.evidence.map(([supplier,capability],i)=>({id:'e'+i,supplier,capability,decision:'approve',note:''}));return apply(d,r,c.required).suppliers.filter(s=>s.status==='covered').map(s=>s.id).sort()});process.stdout.write(JSON.stringify(out));"""
out=json.loads(subprocess.check_output(['node','--input-type=module','-e',js],text=True));assert all(o==c['expected'] for o,c in zip(out,cases));json.dump({'randomDuplicateBearingCases':len(cases),'matchedSQLiteRelationalDivision':len(out),'emptyRequirementGuard':True},open('oracle-validation.json','w'),indent=2);print('PASS SQLite oracle',len(out))
