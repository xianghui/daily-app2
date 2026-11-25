import datetime as dt,json,random,subprocess
random.seed(261126)
cases=[]
for i in range(1200):
 date=dt.date(2025,1,1)+dt.timedelta(days=random.randrange(1500));weekend=random.sample(range(7),random.randrange(1,7));holidays=sorted({str(date+dt.timedelta(days=random.randrange(-8,9))) for _ in range(10)});rule=random.choice(['following','modified-following','preceding']);cases.append(dict(date=str(date),rule=rule,calendar=dict(weekend=weekend,holidays=holidays)))
program="import fs from 'node:fs';import{adjust}from'./src/core.js';const a=JSON.parse(fs.readFileSync(0,'utf8'));process.stdout.write(JSON.stringify(a.map(x=>adjust(x.date,x.rule,x.calendar))));"
actual=json.loads(subprocess.check_output(['node','--input-type=module','-e',program],input=json.dumps(cases).encode()))
assertions=0
for c,r in zip(cases,actual):
 start=dt.date.fromisoformat(c['date']);cal=c['calendar']
 def closed(x):return (x.weekday()+1)%7 in cal['weekend'] or str(x) in cal['holidays']
 def walk(direction):
  x=start
  while closed(x):x+=dt.timedelta(days=direction)
  return x
 result=walk(-1 if c['rule']=='preceding' else 1)
 if c['rule']=='modified-following' and result.month!=start.month:result=walk(-1)
 assert str(result)==r['date'];assert not closed(result);assert r['shiftDays']==(result-start).days
 assert r['witness'][-1]['closed'] is False
 assertions+=4
json.dump(dict(cases=len(cases),assertions=assertions,oracle='Independent Python datetime date rolling'),open('oracle-validation.json','w'),indent=2)
print('PASS oracle',assertions)
