import json,csv,io
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text()))); assert len(rows)==r['total']; assert [x['id'] for x in rows]==[x['id'] for x in r['reviews']]
assert rows[0]['reviewNote']=="'"+r['reviews'][0]['reviewNote']; assert rows[0]['owner']=="'"+r['reviews'][0]['owner'];assert '\n' in rows[0]['reviewNote'];assert r['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text().replace('\n  ','\n')
r=json.loads(Path('export-max.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-max.csv').read_text())));assert len(rows)==32;assert rows[-1]['reviewNote']=='last row\nkept';assert r['total']==32
Path('artifact-validation.json').write_text(json.dumps({'jsonCsvMarkdownRoundTrip':True,'formulaEscaping':True,'multilineQuotesCommasPreserved':True,'all32RowsPreserved':True},indent=2));print('PASS independent artifact parsing')
for stem in ['export-fixture0','export-fixture1','export-reviewed','export-max']:
 audit=json.loads(Path(stem+'.json').read_text()); data=list(csv.DictReader(io.StringIO(Path(stem+'.csv').read_text())))
 assert len(data)==audit['total']
 for x,y,original in zip(data,audit['reviews'],audit['originalInput']['records']):
  assert x['id']==y['id']==original['id']
  assert int(x['originalSuccesses'])==original['weight']
  assert int(x['originalTrials'])==original['trials']
  assert int(x['reviewedSuccesses'])==y['weight']
  assert int(x['reviewedTrials'])==y['trials']
  assert x['pilot']==y['kind'] and x['decision']==y['decision']
  if y['decision']=='approve':
   p=next(z for z in audit['pilots'] if z['id']==y['kind'])
   assert x['pilotRecommendation']==p['decision']
   assert abs(float(x['posteriorMean'])-p['posterior']['mean'])<1e-12
report=json.loads(Path('artifact-validation.json').read_text());report.update(originalAndReviewedSuccessTrialCountsPreserved=True,csvRecommendationsMatchReviewedPosterior=True);Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS every original/reviewed success/trial count and linked decision in actual CSV')
