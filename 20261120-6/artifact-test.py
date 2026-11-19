import csv,json,pathlib
report=[]
for stem in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(pathlib.Path('export-'+stem+'.json').read_text())
 with open('export-'+stem+'.csv',newline='') as f:rows=list(csv.DictReader(f))
 assert len(rows)==r['total']
 for row,x,original in zip(rows,r['reviews'],r['originalInput']['records']):
  assert row['id']==x['id'] and row['person']==original['person'] and row['reviewed_question']==x['target']
  expected=x['reviewNote'];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected
  assert row['review_note']==expected
  assert row['reviewed_value']==('' if not x['value'].strip() else str(float(x['value'])).removesuffix('.0'))
 with open('export-'+stem+'-matrix.csv',newline='') as f:matrix=list(csv.DictReader(f))
 assert len(matrix)==len(r['plan'])
 for row,p in zip(matrix,r['plan']):
  assert row['person']==p['id'] and row['status']==p['status'] and row['selected']==str(p['selected']).lower()
  assert row['missing_questions']==';'.join(p['missing'])
  for cell in p['cells']:assert row[cell['question']]==('' if cell['value'] is None else str(cell['value']))
 assert r['metrics']['observedCells']+r['metrics']['missingCells']==len(matrix)*len(r['originalInput']['first'])
 report.append({'artifact':stem,'records':len(rows),'participants':len(matrix),'allRecordsValuesMissingStatesAndReviewedNotesPreserved':True})
pathlib.Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent Python CSV/JSON round-trip: records, complete roster, missing/zero, reviewed multiline/formula notes')
