import json,csv,math
from pathlib import Path
checks=[]
for suffix in ['fixture0','fixture1','reviewed','held','undo','reassigned','max','zero','unmet','challenge-held','changed']:
 d=json.loads(Path('export-'+suffix+'.json').read_text());assert d['total']==len(d['reviews'])==len(d['originalInput']['records']);assert d['approved']+d['held']==d['total'];assert [r['id'] for r in d['reviews']]==[r['id'] for r in d['originalInput']['records']]
 assert sum(len(c['records']) for c in d['calculations'])==d['approved']
 for z in d['calculations']:
  rows=[r for r in d['reviews'] if r['decision']=='approve' and r['procedure']==z['pool']]
  assert math.isclose(z['load'],sum(r['arrivals']*r['minutes']/60 for r in rows),abs_tol=1e-10)
 for key in ['fixture0','fixture1','reviewed','max']:
  if suffix!=key:continue
  rows=list(csv.DictReader(Path('export-'+key+'.csv').open(newline='')));assert len(rows)==d['total']
  for r,j in zip(rows,d['reviews']):
   assert r['id']==j['id'];assert float(r['arrivals'])==j['arrivals'];assert float(r['minutes'])==j['minutes'];assert r['decision']==j['decision'];assert r['pool']==j['procedure']
   for k in ['owner','reviewNote']:
    expected=j[k];expected=("'"+expected) if expected and expected[0] in '=+-@\t\r' else expected
    assert r[k]==expected,(r[k],expected)
 checks.append(suffix)
d=json.loads(Path('export-reviewed.json').read_text());assert d['reviews'][0]['owner']=='=Owner\nline, "two"';assert d['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", recheck';assert '"quoted", recheck' in Path('export-reviewed.md').read_text();assert json.loads(Path('export-max.json').read_text())['reviews'][-1]['reviewNote']=='last row\nkept'
Path('artifact-validation.json').write_text(json.dumps(dict(downloadedJSONParsed=checks,csvRowsValuesMultilineEscapingPassed=True,markdownReviewedNoteSurvives=True,originalsAndHoldsConserved=True),indent=2));print('PASS downloaded artifacts independently parsed')
