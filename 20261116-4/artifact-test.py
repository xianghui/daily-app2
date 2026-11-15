from pathlib import Path
import csv,json,io,math
checks=[]
for f in sorted(Path('.').glob('export-*.json')):
 d=json.loads(f.read_text());assert d['schema']=='pilot-bridge/v1';assert len(d['reviews'])==len(d['originalInput']['observations'])==d['total'];assert d['approved']+d['held']==d['total']
 for i,r in enumerate(d['reviews']):assert r['id']==d['originalInput']['observations'][i]['id']
 for m in d['metrics']:
  rs=[r for r in d['reviews'] if r['metric']==m['id']]
  groups=[[r for r in rs if r['arm']==a and r['period']==p] for a in ['pilot','reference'] for p in ['before','after']]
  valid=all(len(g)==1 and g[0]['decision']=='approve' for g in groups)
  assert (m['status']=='ready')==valid
  if not valid:assert m['issues'] and 'netChange' not in m
  else:
   values=[g[0]['value'] for g in groups];pc=values[1]-values[0];rc=values[3]-values[2];net=pc-rc
   assert math.isclose(m['netChange'],net,abs_tol=1e-12)
   sign=1 if m['direction']=='increase' else -1
   assert m['baselineMeets']==(sign*pc>=m['minimum']);assert m['netMeets']==(sign*net>=m['minimum'])
 c=f.with_suffix('.csv')
 if c.exists():
  rows=list(csv.DictReader(io.StringIO(c.read_text())));assert len(rows)==d['total']
  for i,r in enumerate(rows):
   src=d['originalInput']['observations'][i];rev=d['reviews'][i];assert r['id']==src['id'];assert float(r['original_value'])==src['value'];assert float(r['reviewed_value'])==rev['value'];assert r['decision']==rev['decision'];assert r['reviewed_metric']==rev['metric'];assert r['reviewed_arm']==rev['arm'];assert r['reviewed_period']==rev['period'];assert r['review_note']==("'" if rev['reviewNote'][:1] in '=+-@\t\r' and rev['reviewNote'] else '')+rev['reviewNote']
 c=Path(f.stem+'-metrics.csv')
 if c.exists():
  rows=list(csv.DictReader(io.StringIO(c.read_text())));assert len(rows)==len(d['metrics']);assert [x['metric'] for x in rows]==[m['id'] for m in d['metrics']]
  for row,m in zip(rows,d['metrics']):
   assert row['status']==m['status']
   if m['status']=='blocked':assert row['net_change']==row['pilot_change']==row['reference_change']==''
   else:assert float(row['net_change'])==m['netChange']
 md=f.with_suffix('.md')
 if md.exists():
  s=md.read_text();assert all(x['description'] in s for x in d['originalInput']['observations']);assert all(x['reviewNote'] in s for x in d['reviews'])
 checks.append(f.name)
assert json.loads(Path('export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
Path('artifact-validation.json').write_text(json.dumps({'parsedJSONArtifacts':checks,'csvIndependentPythonParser':True,'allObservationsAndMetricsPreserved':True,'currentReviewedValuesAndFormulaEscaping':True,'netChangesIndependentlyRecomputed':True,'blockedMetricsNeverEmitChanges':True},indent=2));print('PASS independent JSON CSV Markdown round trips',len(checks))
