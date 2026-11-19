import csv,json,statistics
from pathlib import Path
p=Path(__file__).resolve().parent
for i in (0,1):
 r=json.loads((p/f'export-fixture{i}.json').read_text());rows=list(csv.DictReader((p/f'export-fixture{i}.csv').open(newline='')));plan=list(csv.DictReader((p/f'export-fixture{i}-plan.csv').open(newline='')))
 assert len(rows)==len(plan)==len(r['originalInput']['records'])==len(r['plan'])
 assert [x['id'] for x in rows]==[x['id'] for x in r['originalInput']['records']]
 for orig,review,alloc,x,y in zip(r['originalInput']['records'],r['reviews'],r['plan'],rows,plan):
  assert x['original_text']==y['description']==orig['text']
  assert int(x['reviewed_minutes'])==int(y['estimated_minutes'])==review['minutes']==alloc['minutes']
  assert x['donors']==';'.join(review['donorIds'])
 for b in r['benchmark']['rows']:
  vals=[h['minutes'] for h in r['originalInput']['history'] if h['id']!=b['id']]
  assert b['baseline']==int(statistics.median(vals)+0.5) and b['id'] not in b['donors']
 assert str(r['metrics']['reviewedMinutes'])+' reviewed minutes' in (p/f'export-fixture{i}.md').read_text()
r=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed.csv').open(newline='')));plan=list(csv.DictReader((p/'export-reviewed-plan.csv').open(newline='')));assert rows[0]['review_note']==plan[0]['review_note']=="'"+r['reviews'][0]['reviewNote'];assert '\n' in rows[0]['review_note'];assert int(rows[0]['reviewed_minutes'])==int(plan[0]['estimated_minutes'])==123
r=json.loads((p/'export-max.json').read_text());rows=list(csv.DictReader((p/'export-max.csv').open(newline='')));assert len(rows)==12 and rows[-1]['review_note']=='last note\nkept'
r=json.loads((p/'export-held.json').read_text());rows=list(csv.DictReader((p/'export-held.csv').open(newline='')));plan=list(csv.DictReader((p/'export-held-plan.csv').open(newline='')));assert r['total']==3 and r['held']==1 and r['plan'][1]['minutes'] is None and rows[1]['released_minutes']==plan[1]['estimated_minutes']==''
(p/'artifact-validation.json').write_text(json.dumps({'passed':True,'independentPythonCSVParser':True,'knownFixtureArtifacts':2,'maxRecordsPreserved':12,'multilineFormulaLikeTextEscaped':True,'reviewedEffortPreserved':True,'heldMinutesBlank':True,'leaveOneOutBaselineIndependent':True},indent=2));print('PASS real JSON/CSV/plan CSV/Markdown downloads, multiline escaping and maximum preservation')
