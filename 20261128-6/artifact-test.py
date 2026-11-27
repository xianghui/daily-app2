import csv,json,math,pathlib
for prefix in ['local-','assembled-','public-']:
 found=0
 for name in ['fixture0','fixture1','reviewed','max','relink','pooling']:
  f=pathlib.Path(prefix+name+'.json')
  if not f.exists():continue
  found+=1
  s=json.loads(f.read_text());rows=list(csv.DictReader(open(prefix+name+'.csv',newline='')))
  assert len(rows)==len(s['source']['records'])==len(s['jobs'])
  for i,(j,row) in enumerate(zip(s['jobs'],rows)):
   assert row['id']==s['source']['records'][i]['id']
   assert row['originalNote']==s['source']['records'][i]['note']
   note=j['reviewerNote'];expected="'"+note if note[:1] in ['=','+','-','@','\t','\r'] else note
   assert row['reviewerNote']==expected
   required=j['areaM2']*j['dryMicrons']*j['coats']/1000/(j['solidsPct']/100)/(j['transferPct']/100)
   assert math.isclose(float(row['requiredLitres']),required,rel_tol=1e-12)
  if name=='reviewed':assert s['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "finish", approved'
  packs=pathlib.Path(prefix+name+'.packs.csv')
  if packs.exists():
   p=list(csv.DictReader(open(packs,newline='')));assert len(p)==len(s['pools'])
   for pool,row in zip(s['pools'],p):
    need=sum(j['requiredLitres'] for j in s['jobs'] if j['profileId']==pool['profileId'] and j['decision']=='approve')
    n=math.ceil(max(0,need-pool['stockLitres'])/pool['packLitres']-1e-10)
    assert n==int(row['newPacks']);assert math.isclose(float(row['endingLitres']),pool['stockLitres']+n*pool['packLitres']-need,abs_tol=1e-8)
 if found: print('PASS independent Python CSV/JSON volume and pack checks',prefix,found,'audits')
