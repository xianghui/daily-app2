import csv,io,json
from pathlib import Path
report=[]
for stem in ['reviewed','max','phone']:
 a=json.loads(Path('export-'+stem+'.json').read_text())
 rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())))
 assert len(rows)==len(a['records'])
 for r,x in zip(rows,a['records']):
  for k,field in [('id','id'),('source','text'),('queue','queue'),('decision','decision'),('note','note')]:
   expected=str(x[field])
   if expected and expected[0] in '=+-@\t\r':expected="'"+expected
   assert r[k]==expected,(k,r[k],expected)
  assert float(r['contactsPerHour'])==x['arrivalRate']
 report.append({'artifact':stem,'records':len(rows),'allReviewedFieldsPreserved':True})
a=json.loads(Path('export-reviewed.json').read_text())
assert '25.5/hour' in Path('export-reviewed.md').read_text()
assert a['records'][0]['note']=='=1+1, "review"\nsecond line'
Path('artifact-validation.json').write_text(json.dumps(report,indent=2))
print('PASS independent downloaded-artifact parse and reviewed field conservation')
