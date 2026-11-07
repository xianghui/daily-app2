import json,csv,io
from pathlib import Path
report={}
for name in ['reviewed','quoted']:
 a=json.loads(Path(f'export-{name}.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path(f'export-{name}.csv').read_text())))
 assert len(rows)==len(a['rows'])==len(a['original']['claims'])
 for r,j in zip(rows,a['rows']):
  for c,k in [('id','id'),('claim','text'),('source','sourceText'),('note','note'),('decision','decision')]:
   expected=str(j[k]);expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected
   assert r[c]==expected,(name,c,r[c],expected)
  assert r['output']==(j['output'] or '')
 report[name]={'rows':len(rows),'allFieldsPreserved':True}
assert Path('export-register.md').read_text().count('## C')==4
Path('export-roundtrip-validation.json').write_text(json.dumps(report,indent=2));print(report)
