import json,csv,itertools,sys
from pathlib import Path
prefix=sys.argv[1]if len(sys.argv)>1 else 'local-';checks=0;files=sorted(Path('.').glob(prefix+'export-*.json'))
assert len(files)>=14
for f in files:
 out=json.loads(f.read_text());d=out['original'];r=out['review'];ready=[x for x in r if x['decision']=='approve'];selected=set(out['plan']['selected']);assert len(out['rows'])==len(d['requests'])==len(r);checks+=1
 minutes=0;increment=0;revenue=0;extra=0;sunk=0
 for src,x,row in zip(d['requests'],r,out['rows']):
  for k,v in src.items():assert row[k]==v;checks+=1
  assert row['review']==x;checks+=1
  if x['decision']=='hold':assert row['action']=='hold'and row['calculation']is None;checks+=1;continue
  delta=x['quantity']*(int(x['final'])-int(x['split'])-int(x['extra']));assert str(delta)==row['calculation']['incrementMinor'];checks+=1
  choose=x['id']in selected
  assert row['action']==('process further'if choose else 'sell at split-off');assert x['choice']!='process'or choose;assert x['choice']!='sell'or not choose;checks+=3
  minutes+=x['minutes']if choose else 0;increment+=delta if choose else 0;revenue+=x['quantity']*int(x['final']if choose else x['split']);extra+=x['quantity']*int(x['extra'])if choose else 0;sunk+=int(x['sunk'])
 assert minutes==out['plan']['usedMinutes']<=out['capacity'];assert increment==int(out['plan']['gainMinor']);assert revenue==int(out['totals']['revenueMinor']);assert extra==int(out['totals']['extraCostMinor']);assert revenue-extra-sunk==int(out['totals']['netAfterSunkMinor']);assert int(out['totals']['fifoGapMinor'])==increment-int(out['baseline']['gainMinor'])>=0;checks+=6
 if len(ready)<=10:
  values=[]
  for bits in itertools.product([False,True],repeat=len(ready)):
   if any((x['choice']=='process'and not b)or(x['choice']=='sell'and b)for x,b in zip(ready,bits)):continue
   if sum(x['minutes']for x,b in zip(ready,bits)if b)>out['capacity']:continue
   values.append(sum(x['quantity']*(int(x['final'])-int(x['split'])-int(x['extra']))for x,b in zip(ready,bits)if b))
  assert increment==max(values);checks+=1
 csvpath=f.with_suffix('.csv')
 if csvpath.exists():
  rows=list(csv.DictReader(csvpath.open(newline='')));assert len(rows)==len(out['rows']);checks+=1
  for x,row in zip(rows,out['rows']):
   assert x['id']==row['id'];assert x['action']==row['action'];assert x['original_note']==("'"if row['note'].startswith(('=','+','-','@','\t','\r'))else '')+row['note'];assert x['review_note']==("'"if row['review']['note'].startswith(('=','+','-','@','\t','\r'))else '')+row['review']['note'];assert x['increment_minor']==(row['calculation']['incrementMinor']if row['calculation']else '');checks+=5
 md=f.with_suffix('.md')
 if md.exists():
  s=md.read_text()
  for row in out['rows']:assert row['note']in s and row['review']['note']in s and row['action']in s;checks+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'downloadedAudits':len(files),'independentAssertions':checks,'csvMarkdownParsed':True,'allPassed':True},indent=2));print('PASS artifacts',len(files),checks)
