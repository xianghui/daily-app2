import json,itertools
cases=json.load(open('independent-fixtures.json'));checks=0
# Independently enumerate all legal assignments, then check blocking pairs without the JS helpers.
for c in cases:
 d=c['data'];rv=c['review'];r=c['actual'];ls=[l for l in rv['learners'] if l['decision']=='approve'];ms=[m for m in rv['mentors'] if m['decision']=='approve'];M={m['id']:m for m in ms};L={l['id']:l for l in ls};mutual={l['id']:[m for m in l['preferences'] if m in M and l['id'] in M[m]['preferences']] for l in ls}
 def blocks(a):
  b=[]
  for l in ls:
   lid=l['id'];cur=a[lid]
   for mid in mutual[lid]:
    if mid==cur:continue
    if cur is not None and l['preferences'].index(cur)<l['preferences'].index(mid):continue
    occupants=[i for i in a if a[i]==mid];m=M[mid]
    if len(occupants)<m['capacity'] or any(m['preferences'].index(lid)<m['preferences'].index(o) for o in occupants):b.append((lid,mid))
  return sorted(b)
 actual=r['allocation'];assert set(actual)==set(L);checks+=1
 assert not blocks(actual);checks+=1
 for lid,mid in actual.items():assert mid is None or mid in mutual[lid];checks+=1
 for m in ms:assert list(actual.values()).count(m['id'])<=m['capacity'];checks+=1
 expectedbase=[]
 for lid,mid in blocks(r['baseline']['allocation']):expectedbase.append((lid,mid))
 assert sorted((x['learner'],x['mentor'])for x in r['baseline']['blockingPairs'])==expectedbase;checks+=1
 # Enumerate stable solutions for small rosters, verify learner-optimality, not maximum score.
 if len(ls)<=5:
  ids=list(L)
  for vals in itertools.product(*[[None]+mutual[lid] for lid in ids]):
   a=dict(zip(ids,vals))
   if any(vals.count(m['id'])>m['capacity'] for m in ms) or blocks(a):continue
   for lid in ids:
    rank=lambda mid: L[lid]['preferences'].index(mid) if mid is not None else 999
    assert rank(actual[lid])<=rank(a[lid]);checks+=1
 assert len(r['roster'])==len(d['learners']);checks+=1
json.dump({'cases':len(cases),'assertions':checks,'method':'Independent Python exhaustive stable-assignment enumeration and direct blocking predicates; checks mutual admissibility, capacity, baseline witnesses, roster conservation and learner-optimality on rosters up to 5.'},open('independent-validation.json','w'),indent=2)
print('PASS independent',checks)
