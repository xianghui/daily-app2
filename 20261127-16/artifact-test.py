import csv,json,math,pathlib,sys
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';checks=0
for name in ['fixture0','fixture1','reviewed','held','max']:
 a=json.loads(pathlib.Path(prefix+name+'.json').read_text()); rows=list(csv.DictReader(pathlib.Path(prefix+name+'.audit.csv').open(newline='')));assert len(rows)==len(a['original']['records'])==len(a['review'])==len(a['jobs']);checks+=1
 for i,(r,j,c) in enumerate(zip(a['review'],a['jobs'],rows)):
  assert c['id']==r['id']==a['original']['records'][i]['id'];assert c['profile']==r['profile'];assert c['decision']==r['decision'];assert c['source_note']==a['original']['records'][i]['note'];checks+=4
  note=r['reviewerNote'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
  assert c['reviewer_note']==expected;checks+=1
  assert note in pathlib.Path(prefix+name+'.md').read_text();checks+=1
  if j['status']=='held':continue
  I=(r['gn']**2)*(r['iso']/100)*(2**(-r['lossStops']))/(r['distance']**2);required=r['aperture']**2/I
  errors=[math.log2(I*2**(-k)/(r['aperture']**2)) for k in range(r['maxStop']+1)]
  assert math.isclose(j['requiredFraction'],required,rel_tol=1e-12);assert abs(j['error']-errors[j['stop']])<1e-10;assert abs(j['error'])<=min(map(abs,errors))+1e-10
  assert (j['status']=='ready')==(abs(errors[j['stop']])<=r['tolerance']+1e-10);assert j['baseline']['meets']==(abs(errors[0])<=r['tolerance']+1e-10);checks+=5
 assert a['summary']['records']==len(rows);assert a['summary']['ready']==sum(j['status']=='ready' for j in a['jobs']);assert a['summary']['baselinePass']==sum(j.get('baseline',{}).get('meets',False) for j in a['jobs']);checks+=3
 if a['summary']['manifestReady']:
  release=list(csv.DictReader(pathlib.Path(prefix+name+'.power.csv').open(newline='')));assert len(release)==len(rows);checks+=1
  for r,j,c in zip(a['review'],a['jobs'],release):
   assert c['power']==j['power'];assert float(c['distance_m'])==r['distance'];assert float(c['error_stops'])==j['error'];checks+=3
json.dump({'independentAssertions':checks,'scope':'Downloaded CSV parsed with Python csv; original identity and all rows retained; independent intensity arithmetic, nearest discrete power, tolerance, baseline, multiline notes and releases'},open(prefix+'artifact-validation.json','w'),indent=2);print('PASS artifact assertions',checks)
