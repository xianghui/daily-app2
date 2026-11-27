import json,math
cases=json.load(open('core-cases.json'));checks=0
for c in cases:
 r,j=c['r'],c['j'];w=r['sensorH'] if r['orientation']=='portrait' else r['sensorW'];fov=math.degrees(2*math.atan(w/(2*r['focal'])));limit=fov*(1-r['overlap']/100)
 # Independent exhaustive candidate enumeration; no reuse of JS plan.
 n=next(n for n in range(1,4000) if fov+(n-1)*limit>=r['sweep']-1e-10)
 assert n==j['shots'];assert math.isclose(fov,j['fov'],abs_tol=1e-10)
 centers=[0.] if n==1 else [-max(0,r['sweep']-fov)/2+k*max(0,r['sweep']-fov)/(n-1) for k in range(n)]
 assert all(math.isclose(a,b,abs_tol=1e-9) for a,b in zip(centers,j['centers']))
 assert centers[0]-fov/2<=-r['sweep']/2+1e-9;assert centers[-1]+fov/2>=r['sweep']/2-1e-9
 assert all((b-a)<=limit+1e-9 for a,b in zip(centers,centers[1:]));checks+=6
json.dump({'cases':len(cases),'assertions':checks,'method':'Independent Python math and exhaustive integer shot enumeration, including all center endpoints and spacing'},open('core-replay.json','w'),indent=2);print('PASS independent geometry',len(cases),checks)
