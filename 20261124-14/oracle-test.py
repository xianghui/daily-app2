import json,random,subprocess
from pathlib import Path
random.seed(42);cases=[]
for i in range(1200):
 req=random.randrange(2000000000-10000);delay=random.randrange(500);res=req+delay;resident=random.randrange(5000);now=res+resident;date=max(0,res+random.randrange(-5000,1000));age=random.randrange(6000);life=random.randrange(86401);nc=bool(i%4==0)
 cases.append({'input':dict(requestTime=req,responseTime=res,date=date,now=now,age=age),'plan':dict(id='test',description='Synthetic',maxAge=life,noCache=nc)})
Path('age-cases.json').write_text(json.dumps(cases))
js="import fs from 'node:fs';import {inspect} from './src/core.js';console.log(JSON.stringify(JSON.parse(fs.readFileSync('age-cases.json')).map(c=>inspect(JSON.stringify(c.input),c.plan))))"
out=json.loads(subprocess.check_output(['node','--input-type=module','-e',js]))
for c,r in zip(cases,out):
 t=c['input'];p=c['plan'];age=max(t['responseTime']-t['date'],0,t['age']+t['responseTime']-t['requestTime'])+t['now']-t['responseTime']
 assert r['currentAge']==age
 assert r['selected']==('fresh' if not p['noCache'] and age<p['maxAge'] else 'revalidate')
 assert r['remaining']==max(0,p['maxAge']-age)
Path('oracle-validation.json').write_text(json.dumps({'cases':len(cases),'passed':True,'oracle':'Independent Python RFC 9111 corrected age arithmetic'}))
print('PASS independent oracle',len(cases))
