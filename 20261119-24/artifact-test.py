import csv,json
from pathlib import Path
p=Path(__file__).resolve().parent
for i in (0,1):
 r=json.loads((p/f'export-fixture{i}.json').read_text());rows=list(csv.DictReader((p/f'export-fixture{i}.csv').open(newline='')));outline=list(csv.DictReader((p/f'export-fixture{i}-outline.csv').open(newline='')))
 assert len(rows)==len(outline)==len(r['originalInput']['records'])
 assert [x['id'] for x in rows]==[x['id'] for x in r['originalInput']['records']]
 assert [x['landmark'] for x in outline]==[x['id'] for x in r['outline']]
 for x,y in zip(outline,r['outline']):
  assert int(x['position'])==y['order'] and float(x['x_m'])==y['x'] and float(x['y_m'])==y['y'] and x['source_note_id']==y['recordId']
 for x in rows:
  l=next(l for l in r['originalInput']['landmarks'] if l['id']==x['reviewed_landmark']); assert float(x['x_m'])==l['x'] and float(x['y_m'])==l['y']
 for o,x,y in zip(r['originalInput']['records'],r['reviews'],rows):
  assert y['original_text']==o['text'] and int(y['original_order'])==o['order'] and y['reviewed_landmark']==x['landmark'] and int(y['reviewed_order'])==x['order']
 assert 'whole bags: '+str(r['estimate']['bags']) in (p/f'export-fixture{i}.md').read_text()
r=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed.csv').open(newline='')));assert rows[0]['review_note']=="'"+r['reviews'][0]['reviewNote'];assert '\n' in rows[0]['review_note']
r=json.loads((p/'export-max.json').read_text());rows=list(csv.DictReader((p/'export-max.csv').open(newline='')));assert len(rows)==12 and rows[-1]['review_note']=='last note\nkept'
assert json.loads((p/'export-held.json').read_text())['total']==4
(p/'artifact-validation.json').write_text(json.dumps({'passed':True,'independentPythonCSVParser':True,'knownFixtureArtifacts':2,'maxRecordsPreserved':12,'multilineFormulaLikeTextEscaped':True,'outlineOrderAndCoordinatesPreserved':True,'heldRecordsPreserved':True},indent=2));print('PASS complete JSON/CSV/outline CSV/Markdown artifacts, multiline escaping and maximum preservation')
