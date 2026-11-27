import json,csv,io,math,sys,pathlib
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
reports=[]
def near(a,b):assert abs(a-b)<1e-8,(a,b)
for f in pathlib.Path('.').glob(prefix+'*.json'):
 a=json.loads(f.read_text())
 if not isinstance(a,dict) or a.get('schema')!='delayfield-v1':continue
 d=a['original'];rows=a['review'];jobs=a['jobs'];s=a['summary'];assert len(rows)==len(jobs)==len(d['records']);assert [r['id'] for r in rows]==[r['id'] for r in d['records']]
 speed=331.3+0.606*d['temperatureC'];approved=[r for r in rows if r['decision']=='approve'];target=max([1000*r['distanceM']/speed+r['hardwareMs'] for r in approved],default=0);maxdist=max([r['distanceM'] for r in approved],default=0);arr=[];base=[]
 for r,j in zip(rows,jobs):
  if r['decision']=='hold':assert j['status']=='held';continue
  raw=1000*r['distanceM']/speed+r['hardwareMs'];samples=math.floor((target-raw)*d['sampleRate']/1000+0.5);ms=1000*samples/d['sampleRate'];near(j['delaySamples'],samples);near(j['delayMs'],ms);near(j['arrivalMs'],raw+ms);arr.append(raw+ms)
  bsamples=math.floor((maxdist-r['distanceM'])/speed*d['sampleRate']+0.5);near(j['baselineSamples'],bsamples);base.append(raw+bsamples*1000/d['sampleRate']);assert j['status']==('ready' if ms<=r['maxDelayMs']+1e-9 else 'delay-limit')
 near(s['arrivalSpreadMs'],max(arr,default=0)-min(arr,default=0));near(s['baselineSpreadMs'],max(base,default=0)-min(base,default=0));assert s['manifestReady']==(all(j['status']=='ready' for j in jobs) and s['arrivalSpreadMs']<=d['toleranceMs']+1e-9)
 stem=str(f)[:-5]
 for suffix in ['audit.csv','delays.csv']:
  cf=pathlib.Path(stem+'.'+suffix)
  if not cf.exists():continue
  cr=list(csv.DictReader(io.StringIO(cf.read_text())));assert len(cr)==len(rows)
  for r,j,rr in zip(rows,jobs,cr):
   assert rr['id']==r['id'];assert rr['profile']==r['profile'];note=r['reviewerNote'];expected="'"+note if note and note[0] in '=+-@\t\r' else note;assert rr['reviewerNote']==expected
   if j['status']!='held':near(float(rr['delaySamples']),j['delaySamples']);near(float(rr['arrivalMs']),j['arrivalMs'])
  if suffix=='delays.csv':assert s['manifestReady']
 md=pathlib.Path(stem+'.md')
 if md.exists():
  text=md.read_text()
  for r in rows:assert r['id'] in text and r['reviewerNote'] in text
 reports.append({'file':str(f),'rows':len(rows),'independentPhysicsReplay':True,'csv':True})
assert reports
pathlib.Path(prefix+'artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent artifacts',len(reports))
