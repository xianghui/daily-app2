"""Independent Decimal replay of sampling and packed-row estimates, compared with JS."""
import json,subprocess,random
from decimal import Decimal,getcontext,ROUND_CEILING
getcontext().prec=50
rng=random.Random(2713);rows=[]
for i in range(400):
 bits=rng.choice([1,8,16]);rows.append(dict(id=str(i),decision='approve',width=rng.randint(100,20000)/10,height=rng.randint(100,20000)/10,feature=rng.randint(5,2000)/100,pages=rng.randint(1,10000),minDpi=rng.randint(1,96)*25,featurePixels=rng.randint(1,30),bits=bits,channels=1 if bits==1 else rng.choice([1,3])))
js="import {plan} from './src/core.js';let s='';for await(const c of process.stdin)s+=c;console.log(JSON.stringify(JSON.parse(s).map(r=>plan(r,{maxDpi:1200,maxMP:100}))));"
p=subprocess.run(['node','--input-type=module','-e',js],input=json.dumps(rows),text=True,capture_output=True,check=True);actual=json.loads(p.stdout);checks=0
ceil=lambda x:int(x.to_integral_value(rounding=ROUND_CEILING))
for r,a in zip(rows,actual):
 f=Decimal(str(r['feature']));dpi=max(r['minDpi'],25*ceil(Decimal(r['featurePixels'])*Decimal('25.4')/f/25));c=a['capture'];assert a['requiredDpi']==dpi;checks+=1
 for use,c in [(dpi,a['capture']),(300,a['baseline'])]:
  w=ceil(Decimal(str(r['width']))*use/Decimal('25.4'));h=ceil(Decimal(str(r['height']))*use/Decimal('25.4'));rb=ceil(Decimal(w*r['bits']*r['channels'])/8)
  for k,v in dict(widthPx=w,heightPx=h,rowBytes=rb,pageBytes=rb*h,totalBytes=rb*h*r['pages']).items():
   assert c[k]==v,(r,k,c[k],v);checks+=1
 assert (a['status']=='feasible')==(dpi<=1200 and a['capture']['widthPx']*a['capture']['heightPx']<=100000000);checks+=1
json.dump(dict(cases=len(rows),assertions=checks,result='PASS',method='50-digit Decimal independent ceiling / row packing replay'),open('oracle-validation.json','w'),indent=2);print('PASS',checks)
