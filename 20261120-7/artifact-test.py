import csv,json,io
from pathlib import Path
reports=[]
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+name+'.json').read_text());audit=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())));cells=list(csv.DictReader(io.StringIO(Path('export-'+name+'-cells.csv').read_text())))
 assert len(audit)==r['total'];assert len(cells)==r['metrics']['allCells']
 for row,review,original in zip(audit,r['reviews'],r['originalInput']['records']):
  assert row['id']==review['id'];assert row['original_text']==original['text'];assert row['person']==original['person'];assert row['reviewed_question']==review['target'];assert row['reviewed_value']==review['value']
  note=review['reviewNote'];assert row['review_note']==("'"+note if note[:1] in ['=','+','-','@','\t','\r'] else note)
 expected=[(p['id'],c) for p in r['plan'] for c in p['cells']]
 for row,(pid,c) in zip(cells,expected):
  assert row['person']==pid;assert row['question']==c['question'];assert row['state']==c['state'];assert row['status']==c['status'];assert row['reviewed_value']==('' if c['value'] is None else str(c['value']))
 assert [p['id'] for p in r['plan']]==[p['id'] for p in r['originalInput']['people']]
 if name.startswith('fixture'):
  md=Path('export-'+name+'.md').read_text()
  for x in r['originalInput']['records']:assert x['text'] in md
 reports.append({'fixture':name,'auditRows':len(audit),'pathCells':len(cells),'originalsAndReviewedDataPreserved':True})
Path('artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent Python JSON/CSV/Markdown round trips, reviewed notes and formula escaping, all records/cells')
