import json,csv,base64,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else ''
checks=[]
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path(prefix+'export-'+name+'.json').read_text());q=json.loads(Path(prefix+'export-'+name+'.qa.json').read_text())
 assert len(r['cases'])==len(r['originalInput']['requests'])
 assert q['schema']=='cursor-lantern-qa/v1'
 for c in q['cases']:
  ordered=sorted(c['records'],key=lambda x:(x['key'],x['id'].encode('utf-16-be')),reverse=c['direction']=='desc')
  expected=[ordered[i:i+c['pageSize']] for i in range(0,len(ordered),c['pageSize'])]
  assert [[x['id'] for x in p] for p in expected]==[p['ids'] for p in c['pages']]
  for i,p in enumerate(c['pages']):
   for token,target in [(p['after'],expected[i-1][-1] if i else None),(p['nextCursor'],expected[i][-1] if i+1<len(expected) else None)]:
    if target is None:assert token is None
    else:assert json.loads(base64.b64decode(token).decode('utf8'))==[target['key'],target['id']]
 rows=list(csv.DictReader(open(prefix+'export-'+name+'.csv',newline='')))
 assert len(rows)==r['metrics']['expectedRecords']
 assert sum(len(c['pages'][0]['ids']) for c in q['cases'])>0
 if name=='reviewed':
  assert rows[0]['note']=="'"+r['review'][0]['note']
  assert '\n' in rows[0]['note'] and '🍞' in rows[0]['note']
  assert r['review'][0]['note'] in json.dumps(r,ensure_ascii=False).replace('\\n','\n').replace('\\"','"')
 checks.append({'artifact':name,'requests':len(r['cases']),'recordVisits':len(rows),'independentPageAndCursorValidation':True})
r=json.loads(Path(prefix+'export-held.json').read_text());q=json.loads(Path(prefix+'export-held.qa.json').read_text());assert len(r['cases'])==3 and len(q['cases'])==2 and r['metrics']['held']==1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'passed':True,'checks':checks,'heldExcludedFromQAOnly':True},indent=2));print('PASS independent artifacts')
