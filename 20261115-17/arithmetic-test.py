import json,random,subprocess,numpy as np
random.seed(321)
cases=[]
for n in range(3,7):
 for k in range(80):
  a=np.eye(n)
  for i in range(n):
   for j in range(i+1,n):
    v=random.uniform(1/9,9);a[i,j]=v;a[j,i]=1/v
  cases.append(a.tolist())
script="import {matrixStats} from './src/core.js';let s='';for await(const b of process.stdin)s+=b;console.log(JSON.stringify(JSON.parse(s).map(matrixStats)));"
r=subprocess.run(['node','--input-type=module','-e',script],input=json.dumps(cases),text=True,capture_output=True,check=True)
results=json.loads(r.stdout);maxerr=0
for a,r in zip(cases,results):
 values,vectors=np.linalg.eig(np.array(a));idx=np.argmax(values.real);lam=values[idx].real;w=vectors[:,idx].real;w=w/w.sum();err=max(abs(w-np.array(r['weights'])));maxerr=max(maxerr,float(err));assert err<1e-9;assert abs(lam-r['lambda'])<1e-8;assert abs(sum(r['weights'])-1)<1e-12
json.dump({'independentNumpyEigenCases':len(cases),'maxWeightAbsoluteError':maxerr},open('arithmetic-validation.json','w'),indent=2)
print('PASS',len(cases),'independent numpy eigensystems',maxerr)
