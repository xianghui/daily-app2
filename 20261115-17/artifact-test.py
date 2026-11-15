import csv,json,io
from pathlib import Path
report=[]
for name in ['fixture0','fixture1','reviewed','max']:
 j=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())));weights=list(csv.DictReader(io.StringIO(Path('export-'+name+'-weights.csv').read_text())))
 assert len(rows)==len(j['reviews'])
 for x,r,orig in zip(rows,j['reviews'],j['originalInput']['records']):
  for k in ['id','from','to','decision','reviewNote','ratio']:
   expected=str(r[k]);expected="'"+expected if k!='ratio' and expected.startswith(('=','+','-','@','\t','\r')) else expected
   assert x[k]==expected,(k,x[k],expected)
  assert x['fromText']==orig['fromText'] and x['toText']==orig['toText']
 assert len(weights)==len(j['priorities'])
 for x,r in zip(weights,j['priorities']):assert abs(float(x['weight'])-r['weight'])<1e-14
 report.append({'artifact':name,'allRecords':len(rows),'weightRows':len(weights),'roundtrip':True})
assert json.loads(Path('export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify direction'
json.dump(report,open('artifact-validation.json','w'),indent=2);print('PASS independent CSV/JSON artifacts')
