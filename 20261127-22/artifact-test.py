import json,csv,io,sys,pathlib
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
reports=[]
for f in pathlib.Path('.').glob(prefix+'*.json'):
 a=json.loads(f.read_text())
 if not isinstance(a,dict) or a.get('schema')!='registerloom-v1':continue
 d=a['original'];rows=a['review'];jobs=a['jobs'];s=a['summary'];assert len(rows)==len(jobs)==len(d['records']);assert [r['id'] for r in rows]==[r['id'] for r in d['records']]
 baseline=0;total=0;ready=0
 for original,r,j in zip(d['records'],rows,jobs):
  assert len(original['notes'])==len(r['notes'])
  if r['decision']=='hold':assert j['status']=='held';continue
  baseline+=sum(not(r['writtenLow']<=n+d['keyShift']<=r['writtenHigh']) for n in r['notes']);total+=len(r['notes'])
  choices=[]
  for o in range(-d['maxOctaves'],d['maxOctaves']+1):
   written=[n+d['keyShift']-r['soundingOffset']+12*o for n in r['notes']];sound=[n+d['keyShift']+12*o for n in r['notes']]
   if all(r['writtenLow']<=n<=r['writtenHigh'] and 0<=n<=127 for n in written) and all(0<=n<=127 for n in sound): choices.append((abs(o),abs((min(written)+max(written))/2-(r['writtenLow']+r['writtenHigh'])/2),o,written,sound))
  if not choices:assert j['status']=='range-blocked';continue
  ready+=1;best=min(choices);assert j['status']=='ready';assert j['octaves']==best[2];assert j['written']==best[3];assert j['sounding']==best[4];assert len(j['events'])==len(original['notes'])
  for k,e in enumerate(j['events']):assert e['originalMidi']==original['notes'][k] and e['reviewedMidi']==r['notes'][k] and e['writtenMidi']==best[3][k] and e['soundingMidi']==best[4][k]
 assert s['ready']==ready and s['baselineOutside']==baseline and s['comparedNotes']==total;assert s['manifestReady']==(ready==len(rows))
 stem=str(f)[:-5]
 for suffix in ['audit.csv','pitches.csv']:
  cf=pathlib.Path(stem+'.'+suffix)
  if not cf.exists():continue
  cr=list(csv.DictReader(io.StringIO(cf.read_text())))
  if suffix=='audit.csv':
   assert len(cr)==len(rows)
   for r,rr in zip(rows,cr):assert json.loads(rr['notes'])==r['notes'] and rr['id']==r['id']
  else:
   assert s['manifestReady'];assert len(cr)==sum(len(r['notes']) for r in rows)
   ix=0
   for r,j in zip(rows,jobs):
    for e in j['events']:
     rr=cr[ix];ix+=1;assert rr['id']==r['id'];assert int(rr['originalMidi'])==e['originalMidi'];assert int(rr['reviewedMidi'])==e['reviewedMidi'];assert int(rr['writtenMidi'])==e['writtenMidi'];assert int(rr['soundingMidi'])==e['soundingMidi']
  for rr in cr:
   r=next(r for r in rows if r['id']==rr['id']);note=r['reviewerNote'];assert rr['profile']==r['profile'];assert rr['reviewerNote']==("'"+note if note and note[0] in '=+-@\t\r' else note)
 md=pathlib.Path(stem+'.md')
 if md.exists():
  text=md.read_text()
  for r in rows:assert r['id'] in text and r['reviewerNote'] in text
 reports.append({'file':str(f),'parts':len(rows),'notes':sum(len(r['notes']) for r in rows),'independentOctaveSearch':True,'csvReplay':True})
assert reports
pathlib.Path(prefix+'artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent artifacts',len(reports))
