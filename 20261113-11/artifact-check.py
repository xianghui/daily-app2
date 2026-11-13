import csv,json,io
from pathlib import Path
checks=[]
for stem in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())))
 backups=[x for x in rows if x['record_type']=='backup'];systems=[x for x in rows if x['record_type']=='system']
 assert len(backups)==r['total']==len(r['originalInput']['records'])==len(r['reviews'])
 assert len(systems)==len(r['coverage'])
 for i,row in enumerate(backups):
  original=r['originalInput']['records'][i];review=r['reviews'][i]
  for key,value in [('id',review['id']),('source_note',original['note']),('reviewed_system',review['kind']),('decision',review['decision']),('owner',review['owner']),('review_note',review['note'])]:
   expected="'"+value if value and value[0] in '=+-@\t\r' else value
   assert row[key]==expected,(stem,key,row[key],expected)
  assert int(row['age_hours'])==review['ageHours'];assert int(row['restore_minutes'])==review['restoreMinutes']
  assert row['tested'].lower()==str(review['tested']).lower();assert row['job_ok'].lower()==str(review['jobOk']).lower()
 assert r['total']==r['approved']+r['held'];checks.append({'artifact':stem,'backups':len(backups),'systems':len(systems),'independentCSVParseMatchesReviewedJSON':True})
r=json.loads(Path('export-reviewed.json').read_text());assert r['reviews'][0]['note']=='=SUM(1,2)\n"quoted", verify 🌿';assert r['reviews'][0]['owner']=='=Owner\n"second", line';md=Path('export-reviewed.md').read_text();assert r['reviews'][0]['note'] in md;assert r['reviews'][0]['owner'] in md
for stem in ['held','all-held','challenge']:
 r=json.loads(Path('export-'+stem+'.json').read_text());assert r['total']==r['approved']+r['held'];assert len(r['plans'])==r['approved'];assert len(r['coverage'])==len(r['originalInput']['systems'])
Path('artifact-validation.json').write_text(json.dumps({'checks':checks,'multilineFormulaSafe':True,'markdownPreservesReviews':True,'holdsAndMissingSystemsPreserved':True},indent=2));print('PASS independent parsed artifacts and all records')
