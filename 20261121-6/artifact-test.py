import csv,json,io
from pathlib import Path
for i in range(2):
 r=json.loads(Path(f'export-fixture{i}.json').read_text());audit=list(csv.DictReader(io.StringIO(Path(f'export-fixture{i}-audit-csv.csv').read_text())));fits=list(csv.DictReader(io.StringIO(Path(f'export-fixture{i}-fit-csv.csv').read_text())))
 assert len(audit)==r['total']==8 and len(fits)==2
 for row,review,original in zip(audit,r['reviews'],r['originalInput']['records']):
  assert row['id']==review['id'] and row['original_text']==original['text'] and row['reviewed_group']==review['selected']
  assert float(row['reviewed_x'])==review['x'] and float(row['reviewed_y'])==review['y']
 for row,g in zip(fits,r['groups']):
  assert float(row['deming_slope'])==g['slope'] and int(row['n'])==g['n']
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-reviewed-audit.csv').read_text())));assert rows[0]['note']=="'"+r['reviews'][0]['note'];assert len(rows)==8
assert len(json.loads(Path('export-max.json').read_text())['reviews'])==48
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVParsing':True,'allOriginalsAndReviewedValuesSurvive':True,'quotedCommaNewlineFormulaSafe':True,'fitCSVNumericRoundTrip':True,'max48Rows':True},indent=2));print('PASS artifact independent CSV/JSON round trips')
