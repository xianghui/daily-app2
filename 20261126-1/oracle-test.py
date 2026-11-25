import json,sqlite3
cases=json.load(open('oracle-cases.json'));checks=0
for case in cases:
 db=sqlite3.connect(':memory:');db.executescript('CREATE TABLE a(id TEXT);CREATE TABLE b(id TEXT);CREATE TABLE r(id TEXT,a TEXT,b TEXT,units INTEGER,decision TEXT);')
 db.executemany('INSERT INTO a VALUES(?)',[(v['id'],) for v in case['source']['axes'][0]['values']]);db.executemany('INSERT INTO b VALUES(?)',[(v['id'],) for v in case['source']['axes'][1]['values']]);db.executemany('INSERT INTO r VALUES(?,?,?,?,?)',[(r['id'],*r['values'],r['units'],r['decision']) for r in case['review']])
 cells=db.execute('SELECT a.id,b.id,count(r.id),coalesce(sum(r.units),0) FROM a CROSS JOIN b LEFT JOIN r ON r.a=a.id AND r.b=b.id AND r.decision="approve" GROUP BY a.id,b.id ORDER BY a.id,b.id').fetchall();actual=sorted(case['result']['matrix'],key=lambda c:c['values'])
 assert len(cells)==len(actual);checks+=1
 for expected,cell in zip(cells,actual):
  aa,bb,n,u=expected
  assert cell['values']==[aa,bb] and cell['listingCount']==n and cell['units']==u; checks+=3
  ids=[r[0] for r in db.execute('SELECT id FROM r WHERE a=? AND b=? AND decision="approve" ORDER BY rowid',(aa,bb))]
  assert cell['sourceIds']==ids;assert cell['status']==('missing' if n==0 else 'duplicate' if n>1 else 'listed');checks+=2
 approved=db.execute('SELECT count(*),coalesce(sum(units),0) FROM r WHERE decision="approve"').fetchone()
 assert case['result']['metrics']['approved']==approved[0] and case['result']['metrics']['approvedUnits']==approved[1];checks+=2
 assert len(case['result']['rows'])==len(case['source']['listings']);checks+=1
 db.close()
json.dump({'cases':len(cases),'independentSQLiteAssertions':checks,'oracle':'CROSS JOIN required grid; LEFT JOIN approved reviewed listings; GROUP BY exact pair'},open('oracle-validation.json','w'),indent=2)
print('PASS independent SQLite',checks)
