import json,csv,glob,os
from decimal import Decimal as D
from datetime import date,timedelta
prefix=os.getenv('PREFIX','local-');checks=0
for path in glob.glob(prefix+'*.json'):
 r=json.load(open(path))
 if not isinstance(r,dict) or r.get('format')!='heatfield-scout-v1':continue
 d=r['original'];assert len(d['records'])==len(r['review']);checks+=1
 for i,v in enumerate(r['review']):assert v['id']==d['records'][i]['id'];checks+=1
 expected=[]
 for v in r['review']:
  if v['decision']!='approve':continue
  p=next(p for p in d['profiles'] if p['id']==v['profile']);acc=D(0);trail=[]
  for weather in d['weather']:
   if weather['date']<v['start']:continue
   clamp=lambda t:max(D(str(p['baseC'])),min(D(str(p['capC'])),D(str(t))))
   g=(clamp(weather['minC'])+clamp(weather['maxC']))/2-D(str(p['baseC']));acc+=g
   trail.append(dict(id=v['id'],date=weather['date'],minC=weather['minC'],maxC=weather['maxC'],gdd=float(g),cumulativeGDD=float(acc),frost=weather['minC']<0));checks+=1
  expected+=trail;w=next(w for w in r['worksheet'] if w['id']==v['id']);assert D(str(w['totalGDD']))==acc;checks+=1
  for s in w['stages']:
   cross=next((t['date'] for t in trail if D(str(t['cumulativeGDD']))>=s['targetGDD']),None)
   assert s['date']==cross;assert D(str(s['remainingGDD']))==max(D(0),D(s['targetGDD'])-acc);checks+=2
 assert expected==r['daily'];checks+=1
 stem=path[:-5]
 def rows(suffix):return list(csv.DictReader(open(stem+suffix,newline='')))
 if os.path.exists(stem+'.audit.csv'):
  ar=rows('.audit.csv');assert len(ar)==len(r['review']);checks+=1
  for a,v,orig in zip(ar,r['review'],d['records']):
   for k,col in [('id','id'),('profile','profile'),('start','start'),('decision','decision'),('reviewerNote','reviewer_note')]:
    val=str(v[k]);val="'"+val if val and val[0] in '=+-@\t\r' else val;assert a[col]==val;checks+=1
   assert a['original_note']==("'"+orig['note'] if orig['note'][0] in '=+-@\t\r' else orig['note']);checks+=1
 if os.path.exists(stem+'.daily.csv'):
  a=rows('.daily.csv');assert len(a)==len(expected);checks+=1
  for x,y in zip(a,expected):
   assert x['field_id']==y['id'];assert x['date']==y['date'];assert D(x['daily_gdd'])==D(str(y['gdd']));assert D(x['cumulative_gdd'])==D(str(y['cumulativeGDD']));checks+=4
 if os.path.exists(stem+'.plan.csv'):
  a=rows('.plan.csv');expectedstages=[(w,s) for w in r['worksheet'] for s in w['stages']];assert len(a)==len(expectedstages);checks+=1
  for x,(w,s) in zip(a,expectedstages):assert x['field_id']==w['id'] and x['threshold_date']==(s['date'] or '') and x['baseline_date']==s['baselineDate'];checks+=1
 if os.path.exists(stem+'.md'):
  md=open(stem+'.md').read()
  for v in r['review']:assert v['id'] in md and v['reviewerNote'] in md;checks+=1
json.dump(dict(assertions=checks,passed=True,method='Independent csv parser, Decimal heat replay and source/review reconciliation'),open(prefix+'artifact-validation.json','w'),indent=2);print('PASS artifacts',checks)
