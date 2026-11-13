import csv,json
from pathlib import Path
checks=[]
for stem in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(Path('export-'+stem+'.csv').open(newline='')))
 assert len(rows)==len(r['reviews'])==len(r['originalInput']['records'])==r['total']
 for row,review,original in zip(rows,r['reviews'],r['originalInput']['records']):
  assert row['id']==review['id']==original['id']
  assert row['source_note']==original['description']
  assert row['scenario']==review['kind'] and row['option']==review['option']
  assert int(row['payoff_cents'])==review['payoffCents']
  assert int(row['source_payoff_cents'])==original['payoffCents']
  for key in ['owner','review_note']:
   expected=review['owner' if key=='owner' else 'reviewNote'];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected
   assert row[key]==expected,(row[key],expected)
 checks.append({'artifact':stem,'records':len(rows),'originalsAndReviewedFieldsPreserved':True})
r=json.loads(Path('export-reviewed.json').read_text());assert '\n' in r['reviews'][0]['reviewNote'] and '\n' in r['reviews'][0]['owner'];m=Path('export-reviewed.md').read_text();assert r['reviews'][0]['reviewNote'] in m;assert all(x['id'] in m for x in r['reviews']);assert '-80000' in Path('export-fixture1.csv').read_text()
assert json.loads(Path('export-weight.json').read_text())['analysis']['expectedChoice']==['open']
assert json.loads(Path('export-held.json').read_text())['analysis'] is None
assert json.loads(Path('export-undo.json').read_text())['analysis'] is not None
Path('artifact-validation.json').write_text(json.dumps({'reopenedArtifacts':checks,'multilineFormulaProtection':True,'signedNumericPayoffsNotEscaped':True,'holdsAndUndoAndCurrentWeights':True},indent=2));print('PASS independent CSV/JSON/Markdown originals, reviewed edits, holds, signed cents and multiline escaping')
