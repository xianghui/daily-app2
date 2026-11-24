import json,random,subprocess
from decimal import Decimal
random.seed(7)
tokens=['9007199254740991','9007199254740992','9007199254740993','-9007199254740993','9007199254740991.1','9.007199254740991e15','0','-0','1e309','1e-400']
for _ in range(700):
 n=random.randint(-10**18,10**18);e=random.randint(-25,15);tokens.append(str(n)+'e'+str(e))
raws=['{"v":'+t+'}' for t in tokens]
script="import{auditJSON}from'./src/core.js';let s='';for await(const c of process.stdin)s+=c;console.log(JSON.stringify(JSON.parse(s).map(x=>auditJSON(x).issues.some(x=>x.kind==='number'))));"
r=subprocess.run(['node','--input-type=module','-e',script],input=json.dumps(raws),text=True,capture_output=True,check=True);actual=json.loads(r.stdout)
for t,out in zip(tokens,actual):
 d=Decimal(t);v=float(t);expected=abs(d)>Decimal(9007199254740991) or (d!=0 and v==0) or (v==0 and t.startswith('-'))
 assert out==expected,(t,out,expected)
open('independent-number-validation.json','w').write(json.dumps({'cases':len(tokens),'oracle':'Python decimal.Decimal exact magnitude vs 2^53-1; Python float underflow and signed zero'},indent=2))
print('PASS',len(tokens),'independent exact-number cases')
