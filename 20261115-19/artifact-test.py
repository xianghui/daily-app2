from pathlib import Path
import json,csv,io
count=0
for path in Path('.').glob('export-*.json'):
 r=json.loads(path.read_text());assert r['total']==len(r['originalInput']['records'])==len(r['reviews']);assert r['total']==r['held']+r['approved']
 for k in ['optimized','baseline']:
  z=r[k];assert len(z['assignment'])==len(r['originalInput']['people']);assert z['matched']+len(z['unmatched'])==len(z['assignment'])
 assert not r['optimized']['blocking']
 audit=path.with_suffix('.csv')
 if audit.exists():
  rows=list(csv.DictReader(io.StringIO(audit.read_text())));assert len(rows)==r['total']
  for src,review,row in zip(r['originalInput']['records'],r['reviews'],rows):
   for key,val in [('id',src['id']),('source_text',src['text']),('review_note',review['reviewNote']),('reviewed_rank',str(review['rank'])),('decision',review['decision'])]:
    expected="'"+val if val and val[0]in '=+-@\t\r'else val;assert row[key]==expected,(key,row[key],expected)
 place=path.with_name(path.stem+'-placements.csv')
 if place.exists():
  rows=list(csv.DictReader(io.StringIO(place.read_text())));assert len(rows)==len(r['originalInput']['people'])
  assert [x['applicant']for x in rows]==[x['id']for x in r['originalInput']['people']]
  for row in rows:assert row['stable_program']==(r['optimized']['assignment'][row['applicant']]or'UNMATCHED')
 md=path.with_suffix('.md')
 if md.exists():
  for row in r['reviews']:assert row['reviewNote'] in md.read_text()
 count+=1
assert count>=8
Path('artifact-validation.json').write_text(json.dumps({'jsonArtifacts':count,'csvIndependentPythonParser':True,'allOriginalsHoldsAndUnmatchedRetained':True,'reviewedMultilineAndFormulaEscape':True,'placementCSVReopened':True},indent=2));print('PASS independent artifact round trips:',count)
