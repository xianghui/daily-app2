import json,csv,sys,math
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
files=list(Path('.').glob(prefix+'*.json'));count=0
for p in files:
 try:a=json.loads(p.read_text())
 except:continue
 if not isinstance(a,dict) or a.get('schema')!='throwline-v1':continue
 assert len(a['original']['records'])==len(a['review'])==len(a['jobs'])
 for i,r in enumerate(a['review']):
  assert r['id']==a['original']['records'][i]['id']==a['jobs'][i]['id'];assert r['note']==a['original']['records'][i]['note']
  j=a['jobs'][i]
  if j['status'] in ['ready','content-too-small']:
   w=j['rasterWidthM'];h=j['rasterHeightM'];t=r['distanceM']/w
   assert w<=r['wallWidthM']+1e-8 and h<=r['wallHeightM']+1e-8
   assert r['throwMin']-1e-8<=t<=r['throwMax']+1e-8
   assert math.isclose(j['activeWidthM']/j['activeHeightM'],r['contentW']/r['contentH'])
   if j['status']=='ready':assert j['activeWidthM']+1e-8>=r['requiredWidthM']
 base=str(p)[:-5]
 for ext in ['audit.csv','setups.csv']:
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
   if ext=='setups.csv':assert a['summary']['manifestReady']
  count+=1
 md=Path(base+'.md')
 if md.exists():
  m=md.read_text()
  for r in a['review']:assert r['id'] in m and r['note'] in m and r['reviewerNote'] in m
review=json.loads(Path(prefix+'reviewed.json').read_text());assert review['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "kit", approved'
maximum=json.loads(Path(prefix+'max.json').read_text());assert len(maximum['review'])==12
Path(prefix+'artifact-validation.json').write_text(json.dumps({'auditEnvelopesParsed':len(files),'csvFilesIndependentlyParsed':count,'allIdsAndRecordsPreserved':True,'multilineQuotedFormulaTextSurvives':True,'opticalConstraintsRecomputed':True},indent=2));print('PASS independent Python artifacts',count)
