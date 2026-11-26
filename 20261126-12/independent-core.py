import json,itertools
from pathlib import Path
cases=json.loads(Path('core-cases.json').read_text());checks=0
for case in cases:
 d,r,out=case['d'],case['review'],case['out']; ready=[x for x in r if x['decision']=='approve'];best=None
 for bits in itertools.product([False,True],repeat=len(ready)):
  if any((x['choice']=='process' and not b)or(x['choice']=='sell' and b)for x,b in zip(ready,bits)):continue
  minutes=sum(x['minutes']for x,b in zip(ready,bits)if b)
  if minutes>d['capacity']:continue
  gain=sum(x['quantity']*(int(x['final'])-int(x['split'])-int(x['extra']))for x,b in zip(ready,bits)if b)
  if best is None or gain>best:best=gain
 assert int(out['plan']['gainMinor'])==best
 selected=set(out['plan']['selected']);assert len(selected)==len(out['plan']['selected'])
 assert sum(x['minutes']for x in ready if x['id']in selected)==out['plan']['usedMinutes']<=d['capacity']
 assert sum(x['quantity']*(int(x['final'])-int(x['split'])-int(x['extra']))for x in ready if x['id']in selected)==best
 assert all((x['id']in selected)for x in ready if x['choice']=='process')
 assert not any((x['id']in selected)for x in ready if x['choice']=='sell')
 assert len(out['rows'])==len(d['requests']);assert out['original']==d
 for src,row,x in zip(d['requests'],out['rows'],r):
  for k in src:assert row[k]==src[k];checks+=1
  if x['decision']=='hold':assert row['calculation']is None and row['action']=='hold'
 checks+=8
Path('independent-core-validation.json').write_text(json.dumps({'exhaustiveSubsetCases':len(cases),'assertions':checks,'allPassed':True},indent=2));print('PASS independent exhaustive',len(cases),checks)
