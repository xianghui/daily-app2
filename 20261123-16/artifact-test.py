import csv,json,datetime,pathlib,sys
prefix=sys.argv[1] if len(sys.argv)>1 else ''
checks=[]
for label in ['fixture0','fixture1','reviewed','held','max']:
 r=json.loads(pathlib.Path(prefix+'export-'+label+'.json').read_text());rows=list(csv.DictReader(pathlib.Path(prefix+'export-'+label+'.csv').open(newline='')))
 assert len(rows)==len(r['originalInput']['records'])==len(r['reviews'])==r['metrics']['records']
 def escaped(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
 for i,(row,c) in enumerate(zip(rows,r['checks'])):
  assert row['id']==escaped(c['id']);assert row['review_note']==escaped(r['reviews'][i]['note']);assert row['original_value']==escaped(r['originalInput']['records'][i]['value'])
  if c['status']=='ready':
   val=float(c['value']);system=c['system']
   if system.startswith('excel'):
    assert not(system=='excel1900' and 60<=val<61)
    base=datetime.datetime(1904,1,1,tzinfo=datetime.timezone.utc) if system=='excel1904' else datetime.datetime(1899,12,31,tzinfo=datetime.timezone.utc)
    dt=base+datetime.timedelta(days=val-(1 if system=='excel1900' and val>=61 else 0))
   else:dt=datetime.datetime.fromtimestamp(val/(1000 if system=='unixMillis' else 1),datetime.timezone.utc)
   assert dt.isoformat(timespec='milliseconds').replace('+00:00','Z')==c['iso']
 release=list(csv.DictReader(pathlib.Path(prefix+'export-'+label+'.release.csv').open(newline='')))
 assert len(release)==r['metrics']['ready'];assert all(row['status']=='ready' and row['decision']=='approve' for row in release)
 if label=='reviewed':assert rows[0]['review_note']=='\'=SUM(1,2)\nReviewed "source", exactly.';assert r['checks'][0]['iso'].startswith('2024-01-02')
 checks.append({'label':label,'records':len(rows),'release':len(release),'independentDatetimeOracle':True,'csvParsed':True})
pathlib.Path(prefix+'artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent artifacts',len(checks))
