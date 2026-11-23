import json,csv,glob,os,math
prefix=os.environ.get('PREFIX','')
files=glob.glob(prefix+'export-*.json');assert len(files)>=6
report=[]
def safe(s):return "'"+s if s and s[0]in'=+-@\t\r'else s
for file in files:
 r=json.load(open(file));assert r['schema']=='frame-harbor/v1';n=len(r['originalInput']['records']);assert n==len(r['reviews'])==len(r['analysis']['checks']);checks=r['analysis']['checks'];ready=[];center_clips=0;compared=0;shifted=0;box_blocked=0
 for original,v,c in zip(r['originalInput']['records'],r['reviews'],checks):
  assert original['id']==c['id'] and original['note']==v['text']
  if v['decision']=='reject':assert c['status']=='held';continue
  p=next(p for p in r['originalInput']['profiles']if p['id']==v['resource']);W,H=v['width'],v['height'];g=math.gcd(p['width'],p['height']);a,b=p['width']//g,p['height']//g;k=min(W//a,H//b);w,h=a*k,b*k
  if w<p['width']or h<p['height']:assert c['status']=='blocked'and'upscaling'in c['reason'];continue
  compared+=1;cx,cy=(W-w)//2,(H-h)//2;box=v['box'];contains=lambda x,y:x<=box['x']and y<=box['y']and x+w>=box['x']+box['width']and y+h>=box['y']+box['height'];center_clips+=not contains(cx,cy)
  if box['width']>w or box['height']>h:assert c['status']=='blocked';box_blocked+=1;continue
  assert c['status']=='ready';cr=c['crop'];ready.append(c);assert cr['width']==w and cr['height']==h;assert 0<=cr['x']<=W-w and 0<=cr['y']<=H-h and contains(cr['x'],cr['y']);assert c['target']=={'width':p['width'],'height':p['height']};assert cr['width']*p['height']==cr['height']*p['width'];assert c['retainedPixels']==w*h and c['sourcePixels']==W*H;assert c['baseline']['retainsSubject']==contains(cx,cy);shifted+=cr['x']!=cx or cr['y']!=cy
 assert r['analysis']['ready']==len(ready);assert r['analysis']['centerClips']==center_clips;assert r['analysis']['shifted']==shifted;assert r['analysis']['compared']==compared;assert r['analysis']['plannedClips']==box_blocked
 base=file[:-5]
 if os.path.exists(base+'.csv'):
  rows=list(csv.DictReader(open(base+'.csv',newline='')));assert len(rows)==n
  for row,v,c,o in zip(rows,r['reviews'],checks,r['originalInput']['records']):
   assert row['id']==safe(o['id']);assert row['reviewer_note']==safe(v['note']);assert json.loads(row['original_geometry'])==o;assert row['reviewed_profile']==safe(v['resource']);assert row['status']==c['status'];assert json.loads(row['crop'])==c.get('crop');assert json.loads(row['reviewed_geometry'])=={k:v[k]for k in['width','height','box']}
 if os.path.exists(base+'.release.csv'):
  rows=list(csv.DictReader(open(base+'.release.csv',newline='')));assert len(rows)==len(ready)
  for row,c in zip(rows,ready):assert row=={'id':safe(c['id']),**{'crop_'+k:str(v)for k,v in c['crop'].items()},**{'resize_'+k:str(v)for k,v in c['target'].items()}}
 if os.path.exists(base+'.md'):
  md=open(base+'.md').read()
  for o,v,c in zip(r['originalInput']['records'],r['reviews'],checks):assert json.dumps(o,ensure_ascii=False,separators=(',',':'))in md and json.dumps(v,ensure_ascii=False,separators=(',',':'))in md and json.dumps(c,ensure_ascii=False,separators=(',',':'))in md
 if file.endswith('reviewed.json'):assert r['reviews'][0]['note']=='=SUM(1,2)\nChecked "source", raw.'and r['reviews'][0]['box']['y']==0
 report.append({'file':file,'records':n,'releaseRows':len(ready),'allOriginalsAndReviewedFieldsPreserved':True})
json.dump({'independentPythonGeometryAndCSVParser':True,'files':report},open(prefix+'artifact-validation.json','w'),indent=2);print('PASS independent Python geometry and',len(files),'downloaded artifact sets')
