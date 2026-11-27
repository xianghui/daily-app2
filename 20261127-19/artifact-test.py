import csv,json,math,pathlib,sys
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';checks=0;artifacts=[]
for name in ['fixture0','fixture1','reviewed','held','max']:
 audit=json.load(open(prefix+name+'.json'));review=audit['review'];jobs=audit['jobs'];original=audit['original'];rows=list(csv.DictReader(open(prefix+name+'.audit.csv',newline='')));md=pathlib.Path(prefix+name+'.md').read_text();assert len(rows)==len(review)==len(original['records']);checks+=1
 for i,(r,j,row) in enumerate(zip(review,jobs,rows)):
  assert row['id']==r['id'];assert row['source_note']==original['records'][i]['note'];assert row['profile']==r['profile'];assert row['decision']==r['decision'];assert row['reviewer_note']==("'"+r['reviewerNote'] if r['reviewerNote'].startswith(('=','+','-','@','\t','\r')) else r['reviewerNote']);assert r['reviewerNote'] in md;checks+=6
  for k in ['sweep','overlap','maxShots','sensorW','sensorH','focal']:assert float(row[k])==r[k];checks+=1
  if j['status']=='held':assert row['shots']=='';checks+=1;continue
  width=r['sensorH'] if r['orientation']=='portrait' else r['sensorW'];fov=math.degrees(2*math.atan(width/(2*r['focal'])));max_step=fov*(1-r['overlap']/100)
  assert math.isclose(float(row['fov_degrees']),fov,abs_tol=1e-10);assert j['fov']+(j['shots']-1)*max_step>=r['sweep']-1e-9;assert j['shots']==1 or fov+(j['shots']-2)*max_step<r['sweep']+1e-9;checks+=3
 if audit['summary']['manifestReady']:
  shots=list(csv.DictReader(open(prefix+name+'.shots.csv',newline='')));assert len(shots)==sum(j['shots'] for j in jobs);checks+=1
  for r,j in zip(review,jobs):
   actual=[s for s in shots if s['id']==r['id']];assert len(actual)==j['shots'];checks+=1
   for i,s in enumerate(actual):
    assert s['profile']==r['profile'];assert int(s['shot'])==i+1;assert float(s['yaw_degrees'])==j['centers'][i];assert float(s['focal_mm'])==r['focal'];assert float(s['required_overlap_pct'])==r['overlap'];checks+=5
   if len(actual)>1:
    for x,y in zip(actual,actual[1:]):assert float(y['yaw_degrees'])-float(x['yaw_degrees'])<=j['maxStep']+1e-9;checks+=1
 summary=audit['summary'];assert summary['baselineBadSeams']==sum(j.get('baselineBadSeams',0) for j in jobs);assert summary['totalShots']==sum(j['shots'] for j in jobs if j['status']=='ready');checks+=2
 artifacts.append(name)
json.dump({'artifacts':artifacts,'independentAssertions':checks,'losslessOriginals':True,'csvFormulaEscapingAndMultiline':True,'shotGeometryAndMetricsRecomputed':True},open(prefix+'artifact-validation.json','w'),indent=2);print('PASS parsed downloaded artifacts',checks)
