import csv,json
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text()); rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')));md=Path('export-reviewed.md').read_text()
assert len(rows)==len(r['records'])==len(r['originalInput']['records'])
for x,y,source in zip(rows,r['records'],r['originalInput']['records']):
 assert x['id']==y['id']==source['id']
 assert x['source']==source['text']==y['text']
 for csvkey,key in [('reviewed_wording','wording'),('owner','owner'),('due','due'),('parent_decision','parent'),('decision','decision'),('reviewed_type','kind')]:
  expected=y[key]
  if expected.startswith(('=','+','-','@','\t','\r')):expected="'"+expected
  assert x[csvkey]==expected,(csvkey,x[csvkey],expected)
 assert x['note']==("'"+y['note'] if y['note'].startswith(('=','+','-','@','\t','\r')) else y['note'])
 assert y['id'] in md
assert rows[0]['note'].startswith("'=1+1\n")
assert r['records'][2]['wording']=='Send the reviewed checklist, then verify "ready".'
assert 'Leo, QA' in md and '2026-11-13' in md
assert '=1+1\nReviewed, "minutes" 🪷' in md
assert r['records'][3]['decision']=='hold' and r['records'][3]['id'] in md
assert r['register'][0]['actions']==['S3'] and r['register'][0]['reasons']==['S2']
assert r['metrics']['approved']+r['metrics']['held']==5
assert json.loads(Path('export-max.json').read_text())['originalInput']==json.loads(Path('export-roundtrip.json').read_text())['originalInput']
Path('export-validation.json').write_text(json.dumps({'allFiveOriginalsPreserved':True,'csvParsedIndependently':True,'formulaMultilineEscaping':True,'currentEditedWordingOwnerDate':True,'markdownReviewerNotePreserved':True,'heldPreserved':True,'originalInputRoundtrip':True},indent=2))
print('PASS actual downloaded JSON/CSV/Markdown independent roundtrip')
