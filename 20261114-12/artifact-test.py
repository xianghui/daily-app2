from pathlib import Path
from fractions import Fraction
from itertools import permutations
import csv,json
checks=[]
for f in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+f+'.json').read_text()); rows=list(csv.DictReader(Path('export-'+f+'.csv').open(newline='')))
 assert len(rows)==len(r['reviews'])==len(r['originalInput']['records'])
 for i,(x,y) in enumerate(zip(rows,r['reviews'])):
  assert x['id']==y['id'];assert x['source_note']==r['originalInput']['records'][i]['description'];assert int(x['quantity'])==y['quantity']
  for field,key in [('review_note','reviewNote'),('reviewer','owner')]:
   expected=y[key];expected="'"+expected if expected[:1] in '=+-@\t\r' and expected else expected
   assert x[field]==expected,(field,x[field],expected)
 for p in r['pools']:
  assert sum(x['cents'] for x in p['allocations'])==p['totalCents']
  assert sum(x['equalCents'] for x in p['allocations'])==p['totalCents']
  totals={t:sum(x['quantity'] for x in r['reviews'] if x['kind']==p['id'] and x['team']==t and x['decision']=='approve') for t in r['originalInput']['teams']}
  assert all(x['quantity']==totals[x['team']] for x in p['allocations'])
  tiers=next(x['tiers'] for x in r['originalInput']['pools'] if x['id']==p['id'])
  def price(n):return next(x['cents'] for x in tiers if n<=x['upTo']) if n else 0
  sums={t:0 for t in totals};orders=list(permutations(totals))
  for order in orders:
   used=0
   for t in order:sums[t]+=price(used+totals[t])-price(used);used+=totals[t]
  for x in p['allocations']:assert Fraction(int(x['exactNumerator']),int(p['denominator']))==Fraction(sums[x['team']],len(orders))
 checks.append({'artifact':f,'records':len(rows),'independentAllocationCheck':True})
r=json.loads(Path('export-reviewed.json').read_text());a=list(csv.DictReader(Path('export-reviewed.allocations.csv').open(newline='')));assert len(a)==len(r['pools'])*len(r['originalInput']['teams'])
for x,y in zip(a,[x for p in r['pools'] for x in p['allocations']]):assert int(x['cents'])==y['cents'];assert x['team']==y['team']
md=Path('export-reviewed.md').read_text();assert '\\n' in md and 'quoted' in md
assert '\n' in r['reviews'][0]['owner'];assert '\n' in r['reviews'][0]['reviewNote']
Path('artifact-validation.json').write_text(json.dumps(dict(checks=checks,multilineAndFormulaEscaping=True,allocationCsvRows=len(a),markdownAndJsonPreserveReviews=True),indent=2));print('PASS independently parsed downloaded JSON/CSV/allocation/Markdown artifacts and exact shares')
