import json,csv,itertools
from pathlib import Path
checks=[]
for name in ['Print','Wood','max','reviewed','roundtrip','offline','phone']:
 a=json.loads(Path('export-'+name+'.json').read_text());d=a['originalInput'];rs={r['id']:r for r in a['reviews']};jobs=d['jobs'];ids={r['id'] for r in jobs}
 assert {r['id'] for r in a['records']}==ids
 assert {r['id'] for r in a['schedule']}|{r['id'] for r in a['held']}==ids
 assert not {r['id'] for r in a['schedule']}&{r['id'] for r in a['held']}
 families=[f['id'] for f in d['families']]
 def cost(order):
  now=0;setup=0;late=0;prev=d['initial']
  for r in order:
   family=rs[r['id']]['selected'];n=d['setup'][families.index(prev)][families.index(family)];now+=n+r['minutes'];setup+=n;late+=max(0,now-r['due'])*r['weight'];prev=family
  return setup+late
 active=[r for r in jobs if rs[r['id']]['decision']=='approve'];best=min(map(cost,itertools.permutations(active)))
 assert a['metrics']['objective']==best
 assert a['metrics']['baselineObjective']==cost(active)
 end=0
 for r in a['schedule']:
  assert r['setupStart']==end and r['start']==end+r['setupMinutes'] and r['end']==r['start']+r['minutes'];end=r['end']
 checks.append({'artifact':name,'jobsRetained':len(ids),'optimalObjectiveIndependentlyVerified':best})
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(a['records'])
for row,r in zip(rows,a['records']):
 assert row['id']==r['id'] and row['description']==r['text']
 expected=("'" if r['note'].startswith(('=','+','-','@','\t','\r')) else '')+r['note']
 assert row['note']==expected
 assert row['decision']==r['decision']
 assert int(row['processing_minutes'])==r['minutes']
 assert row['end']==str(r.get('end',''))
md=Path('export-reviewed.md').read_text()
assert all(r['id'] in md for r in a['records'])
json.dump({'checks':checks,'csvRows':len(rows),'multilineFormulaLikeNoteEscaped':True,'markdownAllJobs':True},open('artifact-validation.json','w'),indent=2)
print('PASS independent optimality, no overlap, conservation, CSV/Markdown artifacts')
