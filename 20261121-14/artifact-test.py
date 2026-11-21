from pathlib import Path
import json,csv
for i in range(2):
 d=json.loads(Path(f'export-fixture{i}.json').read_text());rows=list(csv.DictReader(Path(f'export-fixture{i}-audit-csv.csv').open(newline='')));assert len(rows)==len(d['reviews'])==12;assert [r['id'] for r in rows]==[r['id'] for r in d['reviews']]
 for row,review,original in zip(rows,d['reviews'],d['originalInput']['records']):
  assert row['original_text']==original['text'];assert row['reviewed_group']==d['originalInput']['groups'][review['group']]['id']
 for output in d['outputs']:
  row=next(r for r in rows if r['id']==output['id']);assert float(row['lower_minutes'])==output['lower'];assert float(row['upper_minutes'])==output['upper']
d=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed-audit.csv').open(newline='')));assert rows[0]['note']=="'=SUM(1,2)\n\"owner\", recheck";assert d['reviews'][0]['note']=='=SUM(1,2)\n"owner", recheck';assert rows[0]['reviewed_predicted']=='16';assert rows[0]['original_predicted']=='15';assert '=SUM(1,2)\n  "owner", recheck' in Path('export-reviewed.md').read_text()
d=json.loads(Path('export-max.json').read_text());assert len(d['reviews'])==len(d['originalInput']['records'])==32
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCsvParse':True,'allOriginalsSurvive':True,'currentReviewedRangesAndNumericEdits':True,'formulaLikeMultilineEscaped':True,'maximumEnvelopeReimport':32},indent=2));print('PASS downloaded artifacts independently parsed / current edits / originals / multiline')
