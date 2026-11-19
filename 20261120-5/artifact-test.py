from pathlib import Path
import json,csv,io,math
reports=[]
for name in ['fixture0','fixture1','reviewed','max']:
 p=Path('export-'+name);r=json.loads(p.with_suffix('.json').read_text());rows=list(csv.DictReader(io.StringIO(p.with_suffix('.csv').read_text())));pts=list(csv.DictReader(io.StringIO(Path(str(p)+'-points.csv').read_text())))
 assert len(rows)==len(r['originalInput']['records'])==r['total']
 assert len(pts)==len(r['originalInput']['queries'])
 for row,x,original in zip(rows,r['reviews'],r['originalInput']['records']):
  assert row['id']==x['id']==original['id'];assert row['original_text']==original['text'];assert float(row['original_value'])==original['value'];assert float(row['reviewed_value'])==float(x['value']);assert row['reviewed_station']==x['target'];assert row['decision']==x['decision']
  expected=x['reviewNote'];expected=("'"+expected) if expected and expected[0] in '=+-@\t\r' else expected
  assert row['review_note']==expected
 for point,x in zip(pts,r['plan']):
  assert point['id']==x['id'];assert json.loads(point['contributors_json'])==x['contributors'];assert (point['estimate']=='')==(x['estimate'] is None)
  if x['estimate'] is not None:assert float(point['estimate'])==x['estimate']
 assert len(r['reviews'])==len(r['originalInput']['records'])
 reports.append({'artifact':name,'originalRecords':len(rows),'queryPoints':len(pts),'reviewedFieldsPreserved':True,'contributorsPreserved':True})
Path('artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent Python CSV/JSON actual-download round trips, reviewed multiline formula escaping, numeric values, all rows and query evidence')
