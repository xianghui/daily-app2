import json,csv,sys,math
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
files=list(Path('.').glob(prefix+'*.json'));count=0;audits=0
for p in files:
 try:a=json.loads(p.read_text())
 except:continue
 if not isinstance(a,dict) or a.get('schema')!='brewpath-v1':continue
 audits+=1
 assert len(a['original']['records'])==len(a['review'])==len(a['jobs'])
 for i,r in enumerate(a['review']):
  assert r['id']==a['original']['records'][i]['id']==a['jobs'][i]['id'];assert r['note']==a['original']['records'][i]['note']
  j=a['jobs'][i]
  if j['status']!='held':
   solids=r['beverageG']*r['tdsPercent']/100
   assert math.isclose(j['solidsG'],solids)
   assert math.isclose(j['extractionYieldPercent'],100*solids/r['doseG'])
   assert math.isclose(j['servingG'],r['beverageG']+j['bypassG'])
   assert math.isclose(j['servingG']*j['servingTDS']/100,solids)
  if j['status']=='ready':
   assert r['minTDS']-1e-8<=j['servingTDS']<=r['maxTDS']+1e-8
   assert r['minEY']-1e-8<=j['extractionYieldPercent']<=r['maxEY']+1e-8
   assert j['bypassG']<=r['maxBypassG']+1e-8 and j['servingG']<=r['maxServeG']+1e-8
   if j['bypassG']>=.1:assert 100*j['solidsG']/(j['servingG']-.1)>r['maxTDS']-1e-8
 base=str(p)[:-5]
 for ext in ['audit.csv','service.csv']:
  path=Path(base+'.'+ext)
  if not path.exists():continue
  with path.open(newline='') as f:rows=list(csv.DictReader(f))
  assert len(rows)==len(a['review'])
  for i,row in enumerate(rows):
   expected={**a['review'][i],**a['jobs'][i]}
   for k,v in row.items():
    raw=expected.get(k,'');escaped="'"+raw if isinstance(raw,str) and raw and raw[0] in '=+-@\t\r' else raw
    if isinstance(raw,bool):assert v==str(raw).lower()
    elif isinstance(raw,(int,float)):assert math.isclose(float(v),raw,rel_tol=1e-12,abs_tol=1e-12)
    else:assert v==escaped,(path,k,v,escaped)
   if ext=='service.csv':assert a['summary']['manifestReady']
  count+=1
 md=Path(base+'.md')
 if md.exists():
  m=md.read_text()
  for r in a['review']:assert r['id'] in m and r['note'] in m and r['reviewerNote'] in m
review=json.loads(Path(prefix+'reviewed.json').read_text());assert review['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "brew", approved'
maximum=json.loads(Path(prefix+'max.json').read_text());assert len(maximum['review'])==12
assert audits>=10 and count>=10
Path(prefix+'artifact-validation.json').write_text(json.dumps({'auditEnvelopesParsed':audits,'csvFilesIndependentlyParsed':count,'allIdsAndRecordsPreserved':True,'multilineQuotedFormulaTextSurvives':True,'massBalanceMinimalityAndConstraintsRecomputed':True},indent=2));print('PASS independent Python artifacts',audits,count)
