import subprocess,json,math,random
random.seed(904)
cases=[(2,0,1,0),(2,2,1,0),(20,5,20,4),(20,5,20,5),(100000,1,500,0),(100000,50000,500,250),(100000,99999,500,499)]
for _ in range(180):
 N=random.randint(2,300); n=random.randint(1,min(N,150));cases.append((N,random.randint(0,N),n,random.randint(0,n)))
script="import {acceptance} from './src/core.js';const cases="+json.dumps(cases)+";console.log(JSON.stringify(cases.map(x=>[acceptance(...x),acceptance(...x,true)])));"
actual=json.loads(subprocess.check_output(['node','--input-type=module','-e',script]))
maxerr=[0,0]
for (N,D,n,c),(h,b) in zip(cases,actual):
 expected=sum(math.comb(D,k)*math.comb(N-D,n-k) for k in range(max(0,n-(N-D)),min(c,n,D)+1))/math.comb(N,n)
 p=D/N
 binom=sum(math.comb(n,k)*p**k*(1-p)**(n-k) for k in range(c+1))
 maxerr[0]=max(maxerr[0],abs(h-expected));maxerr[1]=max(maxerr[1],abs(b-binom))
 assert abs(h-expected)<1e-9,(N,D,n,c,h,expected)
 assert abs(b-binom)<1e-9
json.dump({'cases':len(cases),'independentReference':'Python exact integer combinations and binomial expansion','maximumAbsoluteError':maxerr,'passed':True},open('arithmetic-validation.json','w'),indent=2)
print('PASS independent arithmetic',len(cases),maxerr)
