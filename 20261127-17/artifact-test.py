import csv,json,math,pathlib,sys
from fractions import Fraction as F
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';checks=0
for name in ['fixture0','fixture1','reviewed','held','max']:
 a=json.loads(pathlib.Path(prefix+name+'.json').read_text());rows=list(csv.DictReader(pathlib.Path(prefix+name+'.audit.csv').open(newline='')));assert len(rows)==len(a['original']['records'])==len(a['review'])==len(a['jobs']);checks+=1
 for i,(r,j,c) in enumerate(zip(a['review'],a['jobs'],rows)):
  assert c['id']==r['id']==a['original']['records'][i]['id'];assert c['profile']==r['profile'];assert c['decision']==r['decision'];assert c['source_note']==a['original']['records'][i]['note'];checks+=4
  note=r['reviewerNote'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
  assert c['reviewer_note']==expected;assert note in pathlib.Path(prefix+name+'.md').read_text();checks+=2
  for k in ['width','height','tolerance','extraPct','stock','stitchGauge','rowGauge','mass','repeatStitches','repeatRows','edgeStitches']:assert float(c[k])==r[k];checks+=1
  if j['status']=='held':assert c['cast_on']=='';checks+=1;continue
  ss=range(r['edgeStitches']+r['repeatStitches'],2001,r['repeatStitches']);rr=range(r['repeatRows'],2001,r['repeatRows']);s=min(ss,key=lambda n:(round(abs(n*10/r['stitchGauge']-r['width']),10),n));n=min(rr,key=lambda n:(round(abs(n*10/r['rowGauge']-r['height']),10),n));assert (j['castOn'],j['rows'])==(s,n);checks+=1
  w=s*10/r['stitchGauge'];h=n*10/r['rowGauge'];assert math.isclose(j['width'],w);assert math.isclose(j['height'],h);checks+=2
  yarn=math.ceil(w*h*r['mass']/100*(1+r['extraPct']/100)-1e-10);assert j['yarn']==yarn;assert j['gap']==max(0,yarn-r['stock']);checks+=2
  fits=abs(w-r['width'])<=r['tolerance']+1e-10 and abs(h-r['height'])<=r['tolerance']+1e-10;assert j['status']==('infeasible' if not fits else 'shortfall' if j['gap'] else 'ready');checks+=1
  b=j['baseline'];assert b['repeatValid']==(b['castOn']>r['edgeStitches'] and (b['castOn']-r['edgeStitches'])%r['repeatStitches']==0 and b['rows']>=r['repeatRows'] and b['rows']%r['repeatRows']==0 and max(b['castOn'],b['rows'])<=2000);checks+=1
 assert a['summary']['ready']==sum(j['status']=='ready' for j in a['jobs']);assert a['summary']['baselinePass']==sum(j.get('baseline',{}).get('repeatValid',False) for j in a['jobs']);assert a['summary']['yarn']==sum(j.get('yarn',0) for j in a['jobs']);checks+=3
 if a['summary']['manifestReady']:
  release=list(csv.DictReader(pathlib.Path(prefix+name+'.panel.csv').open(newline='')));assert len(release)==len(rows);checks+=1
  for r,j,c in zip(a['review'],a['jobs'],release):
   assert int(c['cast_on'])==j['castOn'];assert int(c['rows'])==j['rows'];assert int(c['yarn_g'])==j['yarn'];assert c['reviewer_note']==("'"+r['reviewerNote'] if r['reviewerNote'].startswith(('=','+','-','@','\t','\r')) else r['reviewerNote']);checks+=4
json.dump({'independentAssertions':checks,'scope':'Downloaded artifacts independently reopened: every source/review field, multiline/formula CSV escaping, repeat-optimal counts, size and stock gates, yarn ceiling, baseline and operational cards.'},open(prefix+'artifact-validation.json','w'),indent=2);print('PASS artifact assertions',checks)
