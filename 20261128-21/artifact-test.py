import json,csv,io,itertools,sys,re
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';checks=0

def check(x):
 global checks
 assert x
 checks+=1

def decoded(s):return "'"+s if s and s[0] in '=+-@\t\r' else s

def test(name,has_audit=True,has_placement=True):
 s=json.loads(Path(prefix+name+'.json').read_text());src=s['source'];rs=s['review'];v=s['result'];by={r['id']:r for r in rs};active=[r for r in rs if r['decision']=='approve'];cap=src['shelves']['widthMm']-src['shelves']['reserveMm'];check([r['id'] for r in rs]==[r['id'] for r in src['records']]);check(v['totalMm']==sum(r['widthMm'] for r in active));check(v['approved']==len(active));check(v['held']==len(rs)-len(active));check(v['capacityMm']==cap)
 # Recompute pasted-order next-fit and both adjacency counts independently.
 check(v['baseline']['topicChanges']==sum(a['setupId']!=b['setupId'] for a,b in zip(active,active[1:])))
 if all(r['widthMm']<=cap for r in active):
  bins=[]
  for r in active:
   if not bins or sum(by[x]['widthMm'] for x in bins[-1])+r['widthMm']>cap:bins.append([])
   bins[-1].append(r['id'])
  check(v['baseline']['requiredShelves']==len(bins));check(v['baseline']['topicSplits']==sum(by[a[-1]]['setupId']==by[b[0]]['setupId'] for a,b in zip(bins,bins[1:])))
 else:check(v['baseline']['requiredShelves'] is None)
 rank={x['id']:i for i,x in enumerate(src['setups'])}
 def natural(t):return tuple((0,int(x)) if x.isdigit() else (1,x.casefold()) for x in re.split('(\d+)',t))
 expected_order=sorted(active,key=lambda r:(rank[r['setupId']],natural(r['author']),natural(r['title'])))
 ordered=v['order'];check(ordered==[r['id'] for r in expected_order]);check(set(ordered)==set(r['id'] for r in active));check(len(ordered)==len(active));check(v['topicChanges']==sum(by[a]['setupId']!=by[b]['setupId'] for a,b in zip(ordered,ordered[1:])))
 if v['shelves']:
  check([i for sh in v['shelves'] for i in sh['ids']]==ordered)
  for sh in v['shelves']:
   used=sum(by[x]['widthMm'] for x in sh['ids']);check(sh['usedMm']==used);check(used<=cap);check(sh['freeMm']==src['shelves']['widthMm']-used);check(sh['reserveMm']==src['shelves']['reserveMm']);check(sh['usableSlackMm']==cap-used)
  check(v['ready']==(len(v['shelves'])<=src['shelves']['count']))
 # Independently enumerate every contiguous partition for small actual artifacts.
 if len(active)<=8 and all(r['widthMm']<=cap for r in active) and active:
  best=None
  for cuts in itertools.product([False,True],repeat=len(active)-1):
   partitions=[];start=0
   for i,c in enumerate(cuts):
    if c:partitions.append(ordered[start:i+1]);start=i+1
   partitions.append(ordered[start:]);widths=[sum(by[x]['widthMm'] for x in group) for group in partitions]
   if any(w>cap for w in widths):continue
   score=(len(partitions),sum(by[a[-1]]['setupId']==by[b[0]]['setupId'] for a,b in zip(partitions,partitions[1:])),sum((cap-w)**2 for w in widths));best=score if best is None or score<best else best
  check(tuple(v[k] for k in ['requiredShelves','topicSplits','squaredSlack'])==best)
 if has_audit:
  audit=list(csv.DictReader(io.StringIO(open(prefix+name+'.csv',newline='').read())));check(len(audit)==len(rs))
  for i,(r,line) in enumerate(zip(rs,audit)):
   for key,val in [('id',r['id']),('reviewedTitle',r['title']),('sortAuthor',r['author']),('reviewerNote',r['reviewerNote']),('sourceNote',src['records'][i]['note']),('originalTitle',src['records'][i]['title'])]:check(line[key]==decoded(val))
   check(line['decision']==r['decision']);check(int(line['widthMm'])==r['widthMm'])
   if not v['ready'] or r['decision']=='hold':check(line['shelf']=='' and line['leftToRight']=='')
 if has_placement:
  release=list(csv.DictReader(open(prefix+name+'.placement.csv',newline='')));check(v['ready']);check([r['id'] for r in release]==ordered)
  for line in release:
   r=by[line['id']];sh=v['shelves'][int(line['shelf'])-1];check(sh['ids'][int(line['leftToRight'])-1]==r['id']);check(line['title']==decoded(r['title']));check(line['sortAuthor']==decoded(r['author']));check(int(line['widthMm'])==r['widthMm'])
 return s

for name in ['fixture0','fixture1','reviewed','max']:test(name)
h=test('hold',False,True);check(h['result']['held']==1)
b=test('blocked',False,False);check(not b['result']['ready'])
b=test('capacity-blocked',True,False);check(not b['result']['ready']);check('No actionable placement released' in Path(prefix+'capacity-blocked.md').read_text())
r=json.loads(Path(prefix+'reviewed.json').read_text());check(r['review'][0]['title']=='=New, "title"\nSecond line');check(r['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "spine", approved');check('=New, "title"\nSecond line' in Path(prefix+'reviewed.md').read_text())
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':checks,'method':'Python csv/json parsers; independent capacity/record/baseline recomputation and exhaustive small-artifact shelf partition comparison; multiline formula escaping checked'}));print('PASS',checks,'independent artifact assertions')
