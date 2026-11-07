import csv,json
from pathlib import Path
checks=[]
for name in ['edited','quoted']:
 a=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(Path('export-'+name+'.csv').open(newline='')))
 assert len(rows)==len(a['rows'])
 for row,original in zip(rows,a['rows']):
  for key,value in dict(id=original['id'],instructions=original['instructions'],units=original['units'],handling=original['profile'],wave=original['wave'],note=original['note']).items():
   expected=str(value)
   if isinstance(value,str) and value and value[0] in '=+-@\t\r':expected="'"+value
   assert row[key]==expected,(key,row[key],expected)
 assert sum(int(r['units']) for r in rows)==a['metrics']['units']
 checks.append({'fixture':name,'records':len(rows),'allFieldsMatched':True,'totalUnits':a['metrics']['units']})
Path('export-roundtrip-validation.json').write_text(json.dumps({'independentParser':'Python standard-library csv, generation used Papa Parse','checks':checks},indent=2));print('Independent Python CSV parser: every downloaded field and unit total matches reviewed JSON.')
