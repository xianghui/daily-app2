from pathlib import Path
import csv,json,io,math
checks=[]
for f in sorted(Path('.').glob('export-*.json')):
 d=json.loads(f.read_text());assert d['schema']=='discovery-ledger/v1';assert len(d['reviews'])==len(d['originalInput']['observations'])==d['total'];assert d['approved']+d['held']==d['total']
 for i,r in enumerate(d['reviews']):assert r['id']==d['originalInput']['observations'][i]['id']
 for family in d['families']:
  if family['status']=='blocked':assert family['tests']==[] and family['issues']
  else:
   tests=family['tests'];assert len(tests)==family['expected'];ps=[x['p'] for x in tests];m=len(ps)
   for i,t in enumerate(tests):
    assert math.isclose(t['bh'],min([1]+[ps[j]*m/(j+1) for j in range(i,m)]),abs_tol=1e-12)
    assert math.isclose(t['holm'],min(1,max(ps[j]*(m-j) for j in range(i+1))),abs_tol=1e-12)
 c=f.with_suffix('.csv')
 if c.exists():
  rows=list(csv.DictReader(io.StringIO(c.read_text())));assert len(rows)==d['total']
  for i,r in enumerate(rows):
   src=d['originalInput']['observations'][i];rev=d['reviews'][i];assert r['id']==src['id'];assert float(r['original_p'])==src['p'];assert float(r['reviewed_p'])==rev['p'];assert r['decision']==rev['decision'];assert r['reviewed_hypothesis']==rev['hypothesis'];assert r['review_note']==("'" if rev['reviewNote'][:1] in '=+-@\t\r' and rev['reviewNote'] else '')+rev['reviewNote']
 c=Path(f.stem+'-register.csv')
 if c.exists():
  rows=list(csv.DictReader(io.StringIO(c.read_text())));assert len(rows)==len(d['originalInput']['hypotheses']);assert [x['hypothesis'] for x in rows]==[h['id'] for h in d['originalInput']['hypotheses']]
  for row,h in zip(rows,d['originalInput']['hypotheses']):
   family=next(x for x in d['families'] if x['id']==h['family']);assert row['status']==family['status']
   if family['status']=='blocked':assert row['bh_adjusted_p']==row['holm_adjusted_p']==''
   else:
    t=next(x for x in family['tests'] if x['hypothesis']==h['id']);assert float(row['bh_adjusted_p'])==t['bh'];assert float(row['holm_adjusted_p'])==t['holm']
 md=f.with_suffix('.md')
 if md.exists():
  s=md.read_text();assert all(x['description'] in s for x in d['originalInput']['observations']);assert all(x['reviewNote'] in s for x in d['reviews'])
 checks.append(f.name)
assert json.loads(Path('export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
Path('artifact-validation.json').write_text(json.dumps({'parsedJSONArtifacts':checks,'csvIndependentPythonParser':True,'allObservationsAndHypothesesPreserved':True,'currentReviewedValuesAndFormulaEscaping':True,'adjustmentsIndependentlyRecomputed':True,'blockedFamiliesNeverEmitCorrections':True},indent=2));print('PASS JSON CSV register Markdown round trips',len(checks))
