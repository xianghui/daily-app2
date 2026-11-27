import json,csv,io,sys,math
from decimal import Decimal as D,localcontext
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';checks=0;cases=[]
for name in ['fixture0','fixture1','reviewed','held','max']:
 a=json.load(open(prefix+name+'.json'));rows=a['review'];original=a['original'];jobs=a['jobs'];assert len(rows)==len(original['records'])==len(jobs);checks+=1
 audit=list(csv.DictReader(open(prefix+name+'.audit.csv',newline='')));assert len(audit)==len(rows);checks+=1
 md=open(prefix+name+'.md').read();approved=[]
 for i,r in enumerate(rows):
  j=jobs[i];c=audit[i];assert r['id']==original['records'][i]['id']==c['id']==j['id'];checks+=1
  def safe(v):return "'"+v if v and v[0] in '=+-@\t\r' else v
  assert c['source_note']==safe(original['records'][i]['note']);assert c['reviewer_note']==safe(r['reviewerNote']);assert r['reviewerNote'] in md;checks+=3
  for k in ['targetWidth','targetAperture','speedFactor','maxSeconds','negativeWidth','testWidth','testAperture','testSeconds']:assert float(c[k])==r[k];checks+=1
  if r['decision']=='hold':assert j['status']=='held';assert c['seconds']=='';checks+=2;continue
  with localcontext() as ctx:
   ctx.prec=50
   v={k:D(str(x)) for k,x in r.items() if isinstance(x,(int,float))}
   expected=v['testSeconds']*((v['negativeWidth']+v['targetWidth'])/(v['negativeWidth']+v['testWidth']))**2*(v['targetAperture']/v['testAperture'])**2*v['speedFactor']
   baseline=v['testSeconds']*(v['targetWidth']/v['testWidth'])**2*(v['targetAperture']/v['testAperture'])**2*v['speedFactor']
   assert math.isclose(float(expected),j['seconds'],rel_tol=1e-12);assert math.isclose(float(baseline),j['baselineSeconds'],rel_tol=1e-12);assert float(c['seconds'])==j['seconds'];assert (expected<=v['maxSeconds'])==(j['status']=='ready');checks+=4
  approved.append(j)
 s=a['summary'];assert s['records']==len(rows);assert s['held']==sum(r['decision']=='hold' for r in rows);assert s['ready']==sum(j['status']=='ready' for j in jobs);assert s['compared']==len(approved);assert s['baselineOutsideTenthStop']==sum(abs(math.log2(j['baselineSeconds']/j['seconds']))>.1 for j in approved);checks+=5
 if s['manifestReady']:
  ops=list(csv.DictReader(open(prefix+name+'.exposures.csv',newline='')));assert len(ops)==len(rows);checks+=1
  for i,o in enumerate(ops):assert o['id']==rows[i]['id'];assert float(o['seconds'])==jobs[i]['seconds'];assert o['reviewer_note']==safe(rows[i]['reviewerNote']);checks+=3
 cases.append(name)
json.dump({'independentArtifactAssertions':checks,'cases':cases,'formats':['JSON','CSV','Markdown'],'decimalPrecision':50},open(prefix+'artifact-validation.json','w'),indent=2);print('PASS independently parsed downloads',checks)
