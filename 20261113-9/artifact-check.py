import csv,json,io
from pathlib import Path
checks=[]
for stem in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())))
 assert len(rows)==r['total']==len(r['originalInput']['records'])==len(r['reviews'])
 for i,row in enumerate(rows):
  original=r['originalInput']['records'][i];review=r['reviews'][i]
  for key,value in [('id',review['id']),('source_note',original['note']),('source_owner',original['owner']),('reviewed_impact',review['kind']),('decision',review['decision']),('owner',review['owner']),('review_note',review['note'])]:
   expected="'"+value if value and value[0] in '=+-@\t\r' else value
   assert row[key]==expected,(stem,key,row[key],expected)
  assert row['version_candidate']==(r['candidate'] or '')
 assert r['total']==r['approved']+r['held'];checks.append({'artifact':stem,'records':len(rows),'independentCSVParseMatchesReviewedJSON':True})
r=json.loads(Path('export-reviewed.json').read_text());assert r['reviews'][0]['note']=='=SUM(1,2)\n"quoted", migrate 🌿';assert r['reviews'][0]['owner']=='=Owner\n"second", line';md=Path('export-reviewed.md').read_text();assert r['reviews'][0]['note'] in md;assert r['reviews'][0]['owner'] in md
for stem in ['held','all-held','challenge','internal']:assert json.loads(Path('export-'+stem+'.json').read_text())['candidate'] is None
Path('artifact-validation.json').write_text(json.dumps({'checks':checks,'multilineFormulaSafe':True,'markdownPreservesReviews':True,'holdsAndInternalNoCandidate':True},indent=2));print('PASS independent parsed artifacts and all records')
