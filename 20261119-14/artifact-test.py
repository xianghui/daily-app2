from pathlib import Path
import csv,json,os
os.chdir(Path(__file__).resolve().parent)
files=list(Path('.').glob('export-*.csv'))
for p in files:
 rows=list(csv.DictReader(p.open(newline='')));d=json.load(p.with_suffix('.json').open());assert len(rows)==d['total']
 for x,r,o in zip(rows,d['reviews'],d['originalInput']['logs']):
  assert x['id']==r['id']==o['id'];assert x['original_workload_text']==o['workloadText'];assert x['reviewed_profile']==r['profile']
  note=r['reviewNote'];note="'"+note if note and note[0] in '=+-@\t\r' else note
  assert x['review_note']==note;assert float(x['reviewed_exposure_minutes'])==r['exposureMinutes'];assert int(x['reviewed_interruptions'])==r['interruptions']
Path('artifact-validation.json').write_text(json.dumps({'csvFilesParsed':len(files),'everyRowAndMultilineReviewSurvived':True},indent=2));print('PASS',len(files),'independently parsed CSV/audit round trips')
