import json,itertools
xs=json.load(open('independent-fixtures.json'));count=0
for fixture in xs:
 p,cases,s=fixture['p'],fixture['cases'],fixture['suite'];t=json.loads(p['target']);keys=sorted(t['conditions']);e=t['expression'].replace('&',' and ').replace('|',' or ').replace('!',' not ')
 def evaluate(v):return bool(eval(e,{'__builtins__':{}},v))
 table={x['mask']:x for x in s['table']}
 for row in table.values():assert evaluate(row['values'])==row['outcome'];count+=1
 covered=0
 for witness in s['witnesses']:
  expected=set()
  for left,right in itertools.combinations(cases,2):
   diff=[k for k in keys if left['values'][k]!=right['values'][k]]
   if diff==[witness['key']] and evaluate(left['values'])!=evaluate(right['values']):expected.add(tuple(sorted([left['id'],right['id']])))
  actual={tuple(sorted([a,b]))for pair in witness['pairs'] for a in pair['left']for b in pair['right']}
  assert actual==expected;covered+=bool(expected);count+=1
 assert covered==s['covered'];count+=1
 assert s['baselineBranchComplete']==(len({evaluate(c['values'])for c in cases})==2);count+=1
 assert len(s['additions'])<=t['budget'];assert all(not x['executed']for x in s['additions']);count+=2
 union={c['mask']for c in cases}|{c['mask']for c in s['additions']};planned=0
 for k in keys:
  found=False
  for a,b in itertools.combinations(union,2):
   va,vb=table[a]['values'],table[b]['values']
   if [j for j in keys if va[j]!=vb[j]]==[k] and evaluate(va)!=evaluate(vb):found=True
  planned+=found
 assert planned==s['plannedCovered'];count+=1
json.dump({'expressions':len(xs),'independentAssertions':count,'oracle':'Python Boolean evaluation and direct pair enumeration, not app parser or inverse'},open('independent-validation.json','w'),indent=2)
print('PASS independent Boolean oracle',count)
