import json,csv,io,glob,os
prefix=os.getenv('PREFIX','');files=glob.glob(prefix+'export-*.json');checks=0
assert files
for f in files:
 if f.endswith('.typed.json'):continue
 d=json.load(open(f));assert len(d['originalInput']['records'])==len(d['reviews'])==len(d['checks'])==d['metrics']['records'];checks+=1
 for i,(s,r,c) in enumerate(zip(d['originalInput']['records'],d['reviews'],d['checks'])):
  assert s['id']==r['id']==c['id']
  if c['status']=='ready':
   p=next(p for p in d['originalInput']['plans'] if p['id']==r['system'])
   token=r['raw'].strip() if p['trim'] else r['raw'];token=token.lower() if p['caseFold'] else token
   # independent Python bool/null decoder; no JS implementation used
   classes=[(key,v)for key,v in [('trueTokens',True),('falseTokens',False),('nullTokens',None)] if token in [(s.strip() if p['trim'] else s).lower() if p['caseFold'] else (s.strip() if p['trim'] else s) for s in p[key]]]
   assert len(classes)==1 and c['value'] is classes[0][1]
  checks+=1
 base=f[:-5]
 if os.path.exists(base+'.typed.json'):
  t=json.load(open(base+'.typed.json'));expected=[{'id':c['id'],'field':c['field'],'value':c['value']}for c in d['checks'] if c['status']=='ready'];assert t==expected
  assert all(type(c['value']) is bool or c['value'] is None for c in t);checks+=1
 if os.path.exists(base+'.csv'):
  rows=list(csv.DictReader(open(base+'.csv',newline='')));assert len(rows)==len(d['checks'])
  for i,row in enumerate(rows):
   assert row['id']==("'" if d['reviews'][i]['id'].startswith(('=','+','-','@','\t','\r')) else '')+d['reviews'][i]['id']
   n=d['reviews'][i]['note'];assert row['review_note']==("'" if n.startswith(('=','+','-','@','\t','\r')) else '')+n
   if row['status']=='ready':assert json.loads(row['canonical_json']) is d['checks'][i]['value']
  checks+=len(rows)
 if os.path.exists(base+'.md'):
  txt=open(base+'.md').read();assert all(json.dumps(c['id'],ensure_ascii=False) in txt for c in d['checks']);checks+=1
review=json.load(open(prefix+'export-reviewed.json'));assert review['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", exactly.';assert review['checks'][0]['value'] is False;assert review['originalInput']['records'][0]['raw']=='ok'
maxi=json.load(open(prefix+'export-max.json'));assert maxi['metrics']['records']==24 and maxi['metrics']['ready']==24
json.dump({'files':len(files),'independentChecks':checks,'recordConservation':True,'typedBooleanNullRoundTrip':True,'multilineCSVFormulaEscaping':True},open(prefix+'artifact-validation.json','w'),indent=2);print('PASS independent artifacts',checks)
