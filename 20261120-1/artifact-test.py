import csv,json
from pathlib import Path
p=Path(__file__).resolve().parent
for i in (0,1):
 r=json.loads((p/f'export-fixture{i}.json').read_text());rows=list(csv.DictReader((p/f'export-fixture{i}.csv').open(newline='')));coverage=list(csv.DictReader((p/f'export-fixture{i}-coverage.csv').open(newline='')))
 assert len(rows)==len(r['originalInput']['records'])==len(r['allocations'])
 assert [x['id'] for x in rows]==[x['id'] for x in r['originalInput']['records']]
 for orig,review,alloc,x in zip(r['originalInput']['records'],r['reviews'],r['allocations'],rows):
  assert x['original_text']==orig['text'] and x['original_start']==orig['start'] and x['original_end']==orig['end'] and int(x['original_priority'])==orig['priority']
  assert x['staff']==review['staff'] and x['start']==review['start'] and x['end']==review['end'] and int(x['priority'])==review['priority'] and x['outcome']==alloc['outcome']
 expected=[(d['day'],t['team'],str(t['minimum']),str(t['present']),';'.join(t['absent'])) for d in r['coverage'] for t in d['teams']]
 actual=[(x['date'],x['team'],x['minimum'],x['present'],x['absent_staff']) for x in coverage];assert actual==expected
 assert 'Priority points: '+str(r['metrics']['optimalPoints']) in (p/f'export-fixture{i}.md').read_text()
r=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed.csv').open(newline='')));assert rows[0]['review_note']=="'"+r['reviews'][0]['reviewNote'];assert '\n' in rows[0]['review_note']
r=json.loads((p/'export-max.json').read_text());rows=list(csv.DictReader((p/'export-max.csv').open(newline='')));assert len(rows)==12 and rows[-1]['review_note']=='last note\nkept';assert r['metrics']['optimalPoints']==12
r=json.loads((p/'export-held.json').read_text());assert r['total']==3 and r['held']==1 and r['allocations'][1]['outcome']=='held'
(p/'artifact-validation.json').write_text(json.dumps({'passed':True,'independentPythonCSVParser':True,'knownFixtureArtifacts':2,'maxRecordsPreserved':12,'multilineFormulaLikeTextEscaped':True,'dailyCoverageRowsPreserved':True,'heldRecordsPreserved':True},indent=2));print('PASS real JSON/CSV/coverage CSV/Markdown downloads, multiline escaping and maximum preservation')
