import csv,json
from pathlib import Path
results=[]
for name in ['edited','quoted']:
 a=json.loads(Path(f'export-{name}.json').read_text()); rows=list(csv.DictReader(Path(f'export-{name}.csv').open(newline='')))
 assert len(rows)==len(a['rows'])
 for actual,expected in zip(rows,a['rows']):
  for field,source in [('id','id'),('source','path'),('destination','destination'),('summary','summary'),('folder','folder'),('note','note')]:
   s=expected[source];safe="'"+s if s and s[0] in '=+-@\t\r' else s
   assert actual[field]==safe,(field,actual[field],safe)
 assert len({r['destination'].lower() for r in a['rows']})==len(rows)
 results.append({'fixture':name,'records':len(rows),'fieldsRoundTripped':True})
maxi=json.loads(Path('export-max.json').read_text()); assert len(maxi['rows'])==60;assert len({r['destination'].lower() for r in maxi['rows']})==60
Path('export-roundtrip-validation.json').write_text(json.dumps({'artifacts':results,'maxRecordsPreserved':60,'uniqueDestinations':60},indent=2));print('PASS independent CSV/JSON field round trips and 60 unique destinations')
