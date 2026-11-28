import json,csv,io,sys
from pathlib import Path
from decimal import Decimal as D
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0
def check(x,msg=''):
 global checks
 assert x,msg
 checks+=1
def near(x,y):check(abs(D(str(x))-y)<D('0.00000001'))
def escape(x):return "'"+x if x and x[0] in '=+-@\t\r\n' else x
def table(p):
 with open(p,newline='') as f:return list(csv.DictReader(f))
for path in sorted(Path('.').glob(prefix+'*.json')):
 s=json.loads(path.read_text())
 if not isinstance(s,dict) or s.get('format')!='grainshift-desk-v1':continue
 source,review,result=s['source'],s['review'],s['result'];items={x['id']:x for x in result['items']}
 check(len(source['records'])==len(review))
 approved=0;failures=0;unplanned=0
 for orig,r in zip(source['records'],review):
  check(orig['id']==r['id']);check(r['decision'] in ['approve','hold'])
  if r['decision']=='hold':check(r['id'] not in items);continue
  approved+=1;q=items[r['id']]
  width,coef,low,ref,high=(D(str(v)) for v in [r['widthMm'],r[r['orientation']],r['lowMC'],r['referenceMC'],r['highMC']])
  minimum=width*(1+coef*(low-ref));maximum=width*(1+coef*(high-ref));travel=maximum-minimum
  near(q['minWidth'],minimum);near(q['maxWidth'],maximum);near(q['contraction'],width-minimum);near(q['expansion'],maximum-width);near(q['travel'],travel)
  needed=travel+D(str(r['screwMm']))+D(str(r['extraMm']));near(q['requiredSlotMm'],needed)
  eligible=sorted(x for x in source['slotsMm'] if x<=r['maxSlotMm'] and D(str(x))+D('1e-9')>=needed)
  check(q['chosenSlotMm']==(eligible[0] if eligible else None))
  if not eligible:unplanned+=1
  else:near(q['spareTravelMm'],D(str(eligible[0]))-needed)
  base=D(str(source['baselineGapMm']));near(q['baselineShortfallMm'],max(D(0),travel-base));failures+=travel>base+D('1e-9')
 check(result['approved']==approved);check(result['held']==len(review)-approved);check(result['unplanned']==unplanned);check(result['baselineFailures']==failures);check(result['ready']==(approved>0 and unplanned==0))
 csvp=path.with_suffix('.csv')
 if csvp.exists():
  rows=table(csvp);check(len(rows)==len(review))
  for orig,r,c in zip(source['records'],review,rows):
   check(c['id']==orig['id']);check(c['sourceNote']==escape(orig['note']));check(c['reviewerNote']==escape(r['reviewerNote']));check(c['profile']==r['profileId']);check(c['decision']==r['decision']);check(c['orientation']==r['orientation'])
   for k in ['widthMm','referenceMC','lowMC','highMC','radial','tangential','screwMm','extraMm','maxSlotMm']:near(c[k],D(str(r[k])))
   if r['decision']=='hold':check(c['travelMm']=='')
 worksheet=path.with_suffix('.worksheet.csv')
 if worksheet.exists():
  check(result['ready']);w=table(worksheet);check(len(w)==approved)
  for c,q in zip(w,result['items']):
   check(c['panel']==q['id']);check(c['profile']==q['profileId'])
   for field,key in [('totalTravelMm','travel'),('slotLengthMm','chosenSlotMm'),('requiredSlotMm','requiredSlotMm'),('contractionFromReferenceMm','contraction'),('expansionFromReferenceMm','expansion'),('spareTravelMm','spareTravelMm')]:near(c[field],D(str(q[key])))
 md=path.with_suffix('.md')
 if md.exists():
  m=md.read_text()
  for orig,r in zip(source['records'],review):check(orig['note'] in m);check(r['reviewerNote'] in m)
check(json.loads(Path(prefix+'reviewed.json').read_text())['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "kit", approved')
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentAssertions':checks,'method':'Python csv parser and Decimal recomputation from source/review; widths, travel, exact offered minimum, baseline failures, all-record conservation, holds, formula escaping, edited multiline notes and Markdown'},indent=2))
print('PASS independent artifact checks',checks)
