from pathlib import Path
import json,csv,io,os
prefix=os.environ.get('PREFIX','');count=0;files=[]
def check(v):
 global count
 assert v
 count+=1
def protect(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
def oracle(header,n):
 intervals=[]
 for part in header[6:].split(','):
  first,last=part.strip().split('-')
  if first:
   lo=int(first);hi=min(int(last),n-1) if last else n-1
  else:lo=max(0,n-int(last));hi=n-1
  if 0<=lo<=hi<n:intervals.append([lo,hi])
 out=[]
 for lo,hi in sorted(intervals):
  if out and lo<=out[-1][1]+1:out[-1][1]=max(hi,out[-1][1])
  else:out.append([lo,hi])
 return out
for path in sorted(Path('.').glob(prefix+'export-*.json')):
 if path.name.endswith('.release.json'):continue
 r=json.loads(path.read_text());check(r['app']=='Range Relay');check(len(r['checks'])==len(r['reviews'])==len(r['originalInput']['records']))
 for i,c in enumerate(r['checks']):
  original=r['originalInput']['records'][i];review=r['reviews'][i]
  check(c['id']==original['id']==review['id']);check(c['raw']==review['raw'])
  if c['status']=='ready':
   plan=next(p for p in r['originalInput']['plans'] if p['id']==c['system']);n=json.loads(c['raw'])['length'];intervals=oracle(plan['range'],n)
   check(c['intervals']==intervals);check(c['statusCode']==(206 if intervals else 416));check(c['payloadBytes']==sum(b-a+1 for a,b in intervals));check(c['length']==n);check(c['baseline']==n);check(c['payloadBytes']+c['omittedPayloadBytes']==n);check(c['contentRanges']==[f'bytes {a}-{b}/{n}' for a,b in intervals]);check(c['unsatisfiedContentRange']==(None if intervals else f'bytes */{n}'))
 check(r['metrics']['records']==len(r['checks']))
 for k in ['ready','held','blocked']:check(r['metrics'][k]==sum(c['status']==k for c in r['checks']))
 check(r['metrics']['disagreements']==sum(c.get('disagreement',False) for c in r['checks']));check(r['metrics']['unacceptable']==sum(c.get('statusCode')==416 for c in r['checks']))
 check(r['metrics']['payloadBytes']==sum(c.get('payloadBytes',0) for c in r['checks']));check(r['metrics']['omittedPayloadBytes']==sum(c.get('omittedPayloadBytes',0) for c in r['checks']))
 cp=path.with_suffix('.csv')
 if cp.exists():
  rows=list(csv.DictReader(io.StringIO(cp.read_text())));check(len(rows)==len(r['checks']))
  for i,c in enumerate(r['checks']):
   row=rows[i]
   for field,expected in [('id',c['id']),('review_note',r['reviews'][i]['note']),('source_context',r['originalInput']['records'][i]['context']),('reviewed_case',c['raw']),('original_case',r['originalInput']['records'][i]['raw']),('status',c['status'])]:check(row[field]==protect(expected))
   check(row['content_ranges']==c.get('selected',''))
 md=path.with_suffix('.md')
 if md.exists():
  for review in r['reviews']:check(json.dumps(review['note'],ensure_ascii=False) in md.read_text())
 rel=path.with_suffix('.release.json')
 if rel.exists():
  out=json.loads(rel.read_text());ready=[c for c in r['checks'] if c['status']=='ready'];check(len(out['cases'])==len(ready))
  for a,b in zip(out['cases'],ready):
   for key,target in [('id','id'),('contract','system'),('range','range'),('length','length'),('intervals','intervals'),('contentRanges','contentRanges'),('unsatisfiedContentRange','unsatisfiedContentRange'),('multipart','multipart'),('payloadBytes','payloadBytes'),('expectedStatus','statusCode')]:check(a[key]==b[target])
 files.append(path.name)
check(len(files)>=9)
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':count,'audits':files,'independentParsing':'Python csv / JSON / independent interval oracle'},indent=2));print('PASS artifacts',count,'assertions',len(files),'audits')
