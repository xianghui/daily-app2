import json,csv,math,glob,os
prefix=os.environ.get('PREFIX','local-');checks=[]
def geometry(d,D,C):
 r,R=sorted([d/2,D/2]);a=R-r;alpha=math.acos(a/C)
 return 2*math.sqrt(C*C-a*a)+r*(2*alpha)+R*(2*math.pi-2*alpha),2*alpha*180/math.pi

def candidate(r,d,D,L):
 lo=max(r['centerMin'],(d+D)/2+1e-6);hi=r['centerMax'];rpm=r['driveRPM']*d/D;error=100*abs(rpm-r['targetRPM'])/r['targetRPM']
 if lo>hi or geometry(d,D,lo)[0]>L+1e-7 or geometry(d,D,hi)[0]<L-1e-7:return None
 for _ in range(80):
  m=(lo+hi)/2
  if geometry(d,D,m)[0]<L:lo=m
  else:hi=m
 C=(lo+hi)/2;_,wrap=geometry(d,D,C)
 if wrap<r['minWrap']-1e-7 or error>r['maxError']+1e-7:return None
 return error,abs(C-(r['centerMin']+r['centerMax'])/2),L,d,D,C,wrap,rpm
for name in ['fixture0','fixture1','reviewed','hold','max','blocked','corrected-challenge','undo']:
 s=json.load(open(prefix+name+'.json'));assert len(s['review'])==len(s['source']['records']);assert [r['id'] for r in s['review']]==[r['id'] for r in s['source']['records']];approved=[r for r in s['review'] if r['decision']=='approve'];assert s['result']['approved']==len(approved);baselineFails=0
 for r,item in zip(approved,s['result']['items']):
  assert item['id']==r['id'];all_valid=[x for d in r['drivers'] for D in r['driven'] for L in s['source']['belts'] if (x:=candidate(r,d,D,L)) is not None];p=item['chosen'];assert item['feasibleCount']==len(all_valid)
  if p:
   best=min(all_valid);assert abs(best[0]-p['errorPct'])<1e-6;assert (best[2],best[3],best[4])==(p['belt'],p['driver'],p['driven']);assert abs(p['center']-best[5])<1e-6;length,wrap=geometry(p['driver'],p['driven'],p['center']);assert abs(length-p['belt'])<1e-6;assert abs(wrap-p['wrap'])<1e-6;assert abs(p['rpm']-best[7])<1e-6
  else:assert not all_valid
  pairs=sorted((abs(r['driveRPM']*d/D-r['targetRPM']),d,D) for d in r['drivers'] for D in r['driven']);_,d,D=pairs[0];mid=(r['centerMin']+r['centerMax'])/2;nominal=geometry(d,D,mid)[0] if mid>(d+D)/2 else 0;L=min(s['source']['belts'],key=lambda L:(abs(L-nominal),L));assert (d,D,L)==(item['baseline']['driver'],item['baseline']['driven'],item['baseline']['belt']);baselineFails+=candidate(r,d,D,L) is None
 assert baselineFails==s['result']['baselineFailedJobs']
 if os.path.exists(prefix+name+'.csv'):
  with open(prefix+name+'.csv',newline='') as f:rows=list(csv.DictReader(f))
  assert len(rows)==len(s['review']);assert [r['id'] for r in rows]==[r['id'] for r in s['review']]
  for r,j in zip(s['review'],rows):
   for key,value in [('sourceNote',s['source']['records'][s['review'].index(r)]['note']),('reviewerNote',r['reviewerNote'])]:
    expected="'"+value if value and value[0] in '=+-@\t\r\n' else value;assert j[key]==expected,(name,key)
 if os.path.exists(prefix+name+'.worksheet.csv'):
  with open(prefix+name+'.worksheet.csv',newline='') as f:ws=list(csv.DictReader(f))
  assert len(ws)==len(approved);assert [r['job'] for r in ws]==[r['id'] for r in approved]
  for r,p in zip(ws,s['result']['items']):assert abs(float(r['center_mm'])-p['chosen']['center'])<1e-9
 checks.append({'artifact':name,'allRecords':len(s['review']),'approved':len(approved),'baselineFails':baselineFails,'independentOptimalityAndGeometry':True})
s=json.load(open(prefix+'reviewed.json'));assert s['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "belt", approved';assert s['review'][0]['reviewerNote'] in open(prefix+'reviewed.md').read()
json.dump(checks,open(prefix+'artifact-validation.json','w'),indent=2);print('PASS independent artifacts',len(checks))
