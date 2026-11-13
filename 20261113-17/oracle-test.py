import random,json,subprocess
from fractions import Fraction as Q
from pathlib import Path
random.seed(17013); cases=[]
for i in range(3000):
 flour=random.randint(100,2000);milk=random.randint(0,900);egg=random.randint(0,500);butter=random.randint(0,400);salt=random.randint(1,50)
 profiles=[{'id':'flour','flour':True,'waterBP':0},{'id':'water','flour':False,'waterBP':10000},{'id':'milk','flour':False,'waterBP':8700},{'id':'egg','flour':False,'waterBP':7500},{'id':'butter','flour':False,'waterBP':1600},{'id':'salt','flour':False,'waterBP':0}]
 masses=[flour,random.randint(1,2000),milk,egg,butter,salt]; rows=[{'id':str(j),'kind':p['id'],'grams':m,'note':'synthetic','owner':'reviewer'} for j,(p,m) in enumerate(zip(profiles,masses)) if m]
 if i%3==0:rows=[r for r in rows if r['kind']!='water']
 T=random.randint(100,1000000);h=random.randint(1000,20000);W=Q(milk*87,100)+Q(egg*75,100)+Q(butter*16,100);A=Q(flour*h,10000)-W
 d={'targetGrams':T,'targetHydrationBP':h,'policies':profiles};item={'d':d,'rows':rows}
 if A<0:item['error']='below inherent'
 else:
  M=flour+milk+egg+butter+salt;s=Q(T)/(M+A);ids=[r['id'] for r in rows];ideal=[s*A if r['kind']=='water' else s*r['grams'] for r in rows]
  if not any(r['kind']=='water' for r in rows):ids.append('calculated-water');ideal.append(s*A)
  actual=[x.numerator//x.denominator for x in ideal];missing=T-sum(actual);order=sorted(range(len(ideal)),key=lambda j:(-(ideal[j]-actual[j]),j))
  for j in order[:missing]:actual[j]+=1
  f=sum(actual[j] for j,r in enumerate(rows) if r['kind']=='flour')
  if not f:item['error']='removed all flour'
  else:item.update(ids=ids,grams=actual,ideal=[float(v) for v in ideal])
 cases.append(item)
Path('oracle-cases.json').write_text(json.dumps(cases))
subprocess.run(['node','core-test.mjs'],check=True)
