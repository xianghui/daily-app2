import json,random,itertools,subprocess
from pathlib import Path
rng=random.Random(2411);cases=[]
for _ in range(360):
 n=rng.randint(2,4);k=rng.randint(2,3);people=[{'id':'p'+str(i),'name':'Person '+str(i)}for i in range(n)];cards=[]
 for j in range(k):
  priority=rng.sample([p['id']for p in people],rng.randint(0,n));cards.append({'id':'c'+str(j),'label':'Program '+str(j),'description':'Program '+str(j),'capacity':rng.randint(0,3),'priority':priority})
 prefs={p['id']:rng.sample([c['id']for c in cards],rng.randint(0,k))for p in people};cases.append({'d':{'cards':cards,'people':people,'records':[{'id':'x','person':'p0','text':'text','rank':1}]},'prefs':prefs})
script="import {solve} from './src/core.js';import fs from 'node:fs';const cases=JSON.parse(fs.readFileSync(0,'utf8'));console.log(JSON.stringify(cases.map(c=>solve(c.d,c.prefs))));"
actual=json.loads(subprocess.check_output(['node','--input-type=module','-e',script],input=json.dumps(cases).encode()));enumerated=0
for case,result in zip(cases,actual):
 d=case['d'];prefs=case['prefs'];ps=[p['id']for p in d['people']];cs={c['id']:c for c in d['cards']};stable=[]
 for choices in itertools.product(*[[None]+prefs[p]for p in ps]):
  enumerated+=1;assign=dict(zip(ps,choices));occupied={cid:[p for p in ps if assign[p]==cid]for cid in cs}
  if any(len(v)>cs[c]['capacity']or any(p not in cs[c]['priority']for p in v)for c,v in occupied.items()):continue
  blocks=[]
  for p in ps:
   for c in prefs[p]:
    if c==assign[p]:break
    priority=cs[c]['priority'];seats=occupied[c]
    if p in priority and cs[c]['capacity']>0 and (len(seats)<cs[c]['capacity']or any(priority.index(p)<priority.index(q)for q in seats)):blocks.append((p,c))
  if not blocks:stable.append(assign)
 assert result['assignment']in stable,(case,result,stable)
 for s in stable:
  for p in ps:
   rank=lambda c: prefs[p].index(c)if c else len(prefs[p])
   assert rank(result['assignment'][p])<=rank(s[p]),'Not applicant optimal'
 assert not result['blocking'];assert result['proposals']<=sum(map(len,prefs.values()))
Path('arithmetic-validation.json').write_text(json.dumps({'independentExhaustiveCases':len(cases),'assignmentsEnumerated':enumerated,'stableAndApplicantOptimal':True,'capacityEligibilityUniqueAndTermination':True},indent=2));print('PASS',len(cases),'independent enumerated matching cases;',enumerated,'assignments')
