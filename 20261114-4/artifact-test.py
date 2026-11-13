from pathlib import Path
import csv,json,io
count=0
for f in Path('.').glob('export-*.json'):
 d=json.loads(f.read_text());assert len(d['reviews'])==len(d['originalInput']['records'])==d['total'];assert d['approved']+d['held']==d['total'];assert [r['id'] for r in d['reviews']]==[r['id'] for r in d['originalInput']['records']]
 if d['plan']:
  p=d['plan'];assert sum(map(sum,p['matrix']))==sum(r['votesLeft']+r['votesRight'] for r in d['reviews'])==p['voteObservations'];assert len(set(sum(p['tiers'],[])))==len(d['originalInput']['parts']);assert p['coveredPairs']+len(p['missing'])==p['totalPairs']
 else:assert d['blocked']
 count+=1
for stem in ['fixture0','fixture1','reviewed','max']:
 d=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())));assert len(rows)==d['total']
 for row,r,o in zip(rows,d['reviews'],d['originalInput']['records']):
  assert row['id']==r['id'];assert row['source_left']==o['left'];assert row['source_right']==o['right'];assert int(row['votes_left'])==r['votesLeft'];assert int(row['votes_right'])==r['votesRight'];assert row['left_option']==r['kind'];assert row['right_option']==r['other']
  for csvkey,key in [('review_note','reviewNote'),('owner','owner')]:
   expected=r[key];expected="'"+expected if expected and expected[:1] in '=+-@\t\r' else expected;assert row[csvkey]==expected
review=json.loads(Path('export-reviewed.json').read_text());assert '\n' in review['reviews'][0]['owner'] and '\n' in review['reviews'][0]['reviewNote'];assert review['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text();assert json.loads(Path('export-max.json').read_text())['total']==24
Path('artifact-validation.json').write_text(json.dumps({'jsonArtifactsParsed':count,'csvArtifactsParsed':4,'allRecordsAndDirectionalVotesPreserved':True,'multilineFormulaEscapingAndMarkdownVerified':True},indent=2));print('PASS',count,'JSON artifacts, 4 independent CSV round-trips, multiline Markdown and count conservation')
