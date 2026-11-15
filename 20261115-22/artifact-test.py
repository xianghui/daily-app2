import csv,json,io
from pathlib import Path
out=[]
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())));assert len(rows)==r['total']
 for row,review,original in zip(rows,r['reviews'],r['originalInput']['records']):
  assert row['id']==original['id']==review['id'];assert row['source_text']==original['text'];assert row['task']==review['item'];assert row['decision']==review['decision'];assert row['review_note']==("'"+review['reviewNote'] if review['reviewNote'].startswith(('=','+','-','@','\t','\r')) else review['reviewNote']);assert float(row['low_hours'])==review['low'];assert float(row['high_hours'])==review['high'];assert float(row['probability_high'])==review['pHigh']
 if name!='max':
  md=Path('export-'+name+'.md').read_text();assert all(x['id']+':' in md for x in rows);assert all(str(x['hours'])+' hours' in md for x in r['distribution'])
 out.append(dict(artifact=name,rows=len(rows),allRecordsAndReviewedFieldsSurvive=True))
assert json.loads(Path('export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", discuss'
Path('artifact-validation.json').write_text(json.dumps(out,indent=2));print('PASS independent CSV/JSON/Markdown artifact round trips')
