from pathlib import Path
import json,math
for f in ['export-fixture0.json','export-fixture1.json','export-reviewed.json']:
 r=json.loads(Path(f).read_text());d=r['originalInput'];active=[x for x in r['reviews'] if x['decision']=='approve']
 def score(v,weights):
  total=0
  for c,w in zip(d['criteria'],weights):
   value=next(x['value'] for x in active if x['vendor']==v and x['kind']==c['id'])
   u=min(1,max(0,(value-c['low'])/(c['high']-c['low'])))
   total+=(1-u if c['direction']=='lower' else u)*w
  return total
 for key,weights in [('ranking',[c['weight'] for c in d['criteria']]),('baseline',[100/len(d['criteria'])]*len(d['criteria']))]:
  for x in r[key]:assert math.isclose(x['score'],score(x['vendor'],weights),abs_tol=1e-10)
 for s in r['sensitivity']:
  omitted=next(c for c in d['criteria'] if c['id']==s['omitted'])
  weights=[0 if c['id']==s['omitted'] else c['weight']*100/(100-omitted['weight']) for c in d['criteria']]
  assert math.isclose(sum(weights),100)
  for x in s['ranking']:assert math.isclose(x['score'],score(x['vendor'],weights),abs_tol=1e-10)
Path('oracle-validation.json').write_text(json.dumps({'independentWeightedScores':True,'equalWeightBaseline':True,'renormalizedOmitOneSensitivity':True,'fixtures':3},indent=2))
print('PASS independent score, baseline and sensitivity oracle')
