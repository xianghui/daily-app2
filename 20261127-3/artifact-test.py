"""Parse actual browser downloads using Python's independent CSV/JSON/date parsers."""
from pathlib import Path
import json,csv,datetime,sys
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0

def check(x):
 global checks
 assert x;checks+=1

def csvrows(p):
 with open(p,newline='') as f:return list(csv.reader(f))
for name in ['fixture0','fixture1','reviewed','max','held','hold-undo','plants-0','plants-0-undo','dispatch-0','dispatch-0-undo','profile-0','profile-0-undo','overcapacity','late']:
 path=Path(prefix+name+'.json');r=json.loads(path.read_text());check(r['format']=='succession-bench-v1');check(len(r['review'])==len(r['original']['records']));check([x['id'] for x in r['review']]==[x['id'] for x in r['original']['records']]);check(len(r['worksheet'])==sum(x['decision']=='approve' for x in r['review']))
 if name=='reviewed':check(r['review'][0]['reviewerNote']=='=SUM(1,2)\nReviewed "tray", <script> & 🌿')
 for w in r['worksheet']:
  v=next(x for x in r['review'] if x['id']==w['id']);p=next(p for p in r['original']['profiles'] if p['id']==v['profile']);dispatch=datetime.date.fromisoformat(v['dispatch']);check(w['sow']==(dispatch-datetime.timedelta(days=p['propagationDays']+p['finishingDays'])).isoformat());check(w['potUp']==(dispatch-datetime.timedelta(days=p['finishingDays'])).isoformat());check(w['seeds']==-(-v['plants']*1000//p['successPermille']));check(w['propagationTrays']==-(-w['seeds']//p['propagationCells']));check(w['finishingTrays']==-(-v['plants']//p['finishingCells']))
 totals=[];bases=[];excess=[]
 for d in r['daily']:
  early=sum(w['propagationTrays'] for w in r['worksheet'] if w['sow']<=d['date']<w['potUp']);late=sum(w['finishingTrays'] for w in r['worksheet'] if w['potUp']<=d['date']<w['dispatch']);baseline=sum(w['baselineTrays'] for w in r['worksheet'] if w['sow']<=d['date']<w['dispatch']);check(d['trays']==early+late);check(d['propagationTrays']==early);check(d['finishingTrays']==late);check(d['baselineTrays']==baseline);check(d['overBy']==max(0,early+late-r['original']['capacityTrays']));totals.append(early+late);bases.append(baseline);excess.append(d['overBy'])
 check(r['summary']['peakTrays']==max([0]+totals));check(r['summary']['baselinePeakTrays']==max([0]+bases));check(r['summary']['overloadedDays']==sum(x>0 for x in excess));check(r['summary']['excessTrayDays']==sum(excess))
 audit=Path(prefix+name+'.audit.csv')
 if audit.exists():
  data=csvrows(audit);check(len(data)-1==len(r['review']))
  for row,review,orig in zip(data[1:],r['review'],r['original']['records']):
   check(row[:4]==[orig['id'],orig['note'],str(orig['plants']),orig['dispatch']]);check(row[4:8]==[review['profile'],str(review['plants']),review['dispatch'],review['decision']]);note=review['reviewerNote'];check(row[8]==("'"+note if note and note[0] in '=+-@\t\r' else note))
 plan=Path(prefix+name+'.plan.csv')
 if plan.exists():
  data=csvrows(plan);check(r['releaseReady']);check(len(data)-1==len(r['worksheet']))
  for row,w in zip(data[1:],r['worksheet']):check(row==[w['id'],w['profile'],str(w['plants']),str(w['seeds']),w['sow'],w['potUp'],w['dispatch'],str(w['propagationTrays']),str(w['finishingTrays'])])
 daily=Path(prefix+name+'.daily.csv')
 if daily.exists():
  data=csvrows(daily);check(len(data)-1==len(r['daily']))
  for row,d in zip(data[1:],r['daily']):check(row[:6]==[d['date'],str(d['propagationTrays']),str(d['finishingTrays']),str(d['trays']),str(d['baselineTrays']),str(d['overBy'])]);check(json.loads(row[6])==d['orders'])
 md=Path(prefix+name+'.md')
 if md.exists():
  txt=md.read_text();check(all(x['id'] in txt and x['note'] in txt for x in r['original']['records']));check(all(x['reviewerNote'] in txt for x in r['review']))
Path(prefix+'artifact-validation.json').write_text(json.dumps(dict(assertions=checks,parser='Python csv/json/datetime, real browser downloads',prefix=prefix),indent=2));print('PASS',prefix,checks,'artifact assertions')
