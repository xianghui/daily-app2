import json,csv,io
from pathlib import Path
checks=[]
for f in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+f+'.json').read_text())
 rows=list(csv.DictReader(io.StringIO(Path('export-'+f+'.csv').read_text())))
 schedule=list(csv.DictReader(io.StringIO(Path('export-'+f+'-schedule.csv').read_text())))
 assert len(rows)==r['total']; assert len(schedule)==r['approved']
 for x,y in zip(rows,r['reviews']):
  assert x['id']==y['id']; assert x['profile']==y['profile']; assert int(x['first'])==y['first']; assert int(x['second'])==y['second']
  expected=y['reviewNote']; expected=("'"+expected) if expected.startswith(('=','+','-','@','\t','\r')) else expected
  assert x['reviewNote']==expected
 for x,y in zip(schedule,r['optimized']['schedule']):
  assert x['id']==y['id']
  for k in ['position','first','second','startFirst','endFirst','startSecond','endSecond','wait']:assert int(x[k])==y[k]
 checks.append({'artifact':f,'auditRecords':len(rows),'scheduleRecords':len(schedule),'exactMatch':True})
assert len(list(csv.DictReader(io.StringIO(Path('export-all-held-schedule.csv').read_text()))))==0
assert '=SUM(1,2)\n"quoted", recheck' in Path('export-reviewed.md').read_text().replace('\n  ','\n')
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCsvParser':True,'checks':checks,'multilineFormulaEscaping':True,'headerOnlyEmptySchedule':True},indent=2));print('PASS downloaded CSV/JSON/Markdown artifacts')
