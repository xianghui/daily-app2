import json
cases=json.load(open('oracle-cases.json'));checks=0
for case in cases:
 active=None;witness=None;naive=None;expected=[]
 for src,review in zip(case['source']['rows'],case['review']):
  if src['group'] is not None:naive=src['group']
  group=None;source=None;status='structural'
  if review['decision']=='hold':active=None;witness=None;status='held'
  elif review['role']=='heading':active=review['group'];witness=src['id']
  elif review['role']=='boundary':active=None;witness=None
  else:
   if review['group'].strip():active=review['group'];witness=src['id']
   group=active;source=witness;status='orphan' if group is None else 'ready'
  baseline=naive if review['role']=='item' and review['decision']=='approve' else None
  expected.append((group,source,status,baseline))
 for e,r in zip(expected,case['actual']['rows']):
  assert e==(r['resolvedGroup'],r['groupSource'],r['status'],r['baselineGroup']);checks+=4
 assert len(case['actual']['rows'])==len(case['source']['rows']);checks+=1
 assert case['actual']['original']==case['source'];checks+=1
json.dump(dict(cases=len(cases),assertions=checks),open('oracle-validation.json','w'),indent=2);print('PASS independent Python propagation',checks)
