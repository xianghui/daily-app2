import json,csv,pathlib,sys
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0

def check(b):
 global checks
 assert b
 checks+=1

def escape(s):return "'"+s if s and s[0] in '=+-@\t\r' else s

def validate(a):
 original=a['original'];rows=a['review'];jobs=a['jobs'];check(len(rows)==len(jobs)==len(original['records']))
 for source,r,j in zip(original['records'],rows,jobs):
  check(source['id']==r['id']==j['id'])
  if r['decision']=='hold':check(j['status']=='held');continue
  check(r['decision']=='approve')
  span=r['duration']*1000-r['exposureMs'];required=r['fps']*r['minPlayback']
  possible=[]
  for interval in range(1,r['maxInterval']+1):
   if interval*1000<r['exposureMs']+r['overheadMs'] or span<0:continue
   n=span//(interval*1000)+1
   if n>=required:possible.append((n,-interval))
  if not possible:check(j['status']=='infeasible');continue
  n,negative=min(possible);interval=-negative
  check(j['frames']==n);check(j['interval']==interval);check(j['storageKB']==n*r['frameKB']);check(j['lastStartMs']==(n-1)*interval*1000);check(j['finishMs']==(n-1)*interval*1000+r['exposureMs']);check(j['finishMs']<=r['duration']*1000);check(j['lastStartMs']+interval*1000+r['exposureMs']>r['duration']*1000);check(j['status']==('ready' if n*r['frameKB']<=r['storageKB'] else 'infeasible'))
  check(abs(j['playback']-n/r['fps'])<1e-10)
  count=0 if span<0 else span//60000+1
  check(j['baseline']['frames']==count)
  check(j['baseline']['meets']==(60*1000>=r['exposureMs']+r['overheadMs'] and 60<=r['maxInterval'] and count>=required and count*r['frameKB']<=r['storageKB']))
 ready=[j for j in jobs if j['status']=='ready'];approved=[j for j in jobs if j['status']!='held'];s=a['summary']
 check(s['records']==len(rows));check(s['frames']==sum(j['frames'] for j in ready));check(s['storageKB']==sum(j['storageKB'] for j in ready));check(s['manifestReady']==(len(ready)==len(rows)));check(s['baselinePass']==sum(j['baseline']['meets'] for j in approved));check(s['compared']==len(approved))
for path in pathlib.Path('.').glob(prefix+'*.json'):
 a=json.loads(path.read_text())
 if not isinstance(a,dict) or a.get('schema')!='framecadence-v1':continue
 validate(a)
 cp=path.with_suffix('.audit.csv')
 if cp.exists():
  with cp.open(newline='') as f:out=list(csv.DictReader(f))
  check(len(out)==len(a['review']))
  for original,r,j,c in zip(a['original']['records'],a['review'],a['jobs'],out):
   check(c['id']==escape(r['id']));check(c['source_note']==escape(original['note']));check(c['reviewer_note']==escape(r['reviewerNote']));check(c['decision']==r['decision']);check(c['status']==j['status'])
   for k in ['duration','fps','minPlayback','frameKB','storageKB','exposureMs','overheadMs']:check(int(c[k])==r[k])
 cp=path.with_suffix('.capture.csv')
 if cp.exists():
  check(a['summary']['manifestReady'])
  with cp.open(newline='') as f:out=list(csv.DictReader(f))
  check(len(out)==len(a['review']))
  for r,j,c in zip(a['review'],a['jobs'],out):
   check(c['id']==escape(r['id']));check(int(c['frames'])==j['frames']);check(int(c['interval_s'])==j['interval']);check(int(c['finish_ms'])==j['finishMs']);check(int(c['estimated_KB'])==j['storageKB']);check(c['reviewer_note']==escape(r['reviewerNote']))
 mp=path.with_suffix('.md')
 if mp.exists():
  m=mp.read_text()
  for r in a['review']:check(r['reviewerNote'] in m);check(r['id'] in m)
json.dump({'assertions':checks,'method':'Independent Python interval enumeration; csv.DictReader round trips every source/review row and current settings; exact accounting of frame/storage totals.'},open(prefix+'artifact-validation.json','w'),indent=2)
print('PASS independently parsed artifacts',checks)
