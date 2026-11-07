import csv,json
from pathlib import Path
results=[]
for name in ['edited','quoted']:
 a=json.loads(Path(f'export-{name}.json').read_text());rows=list(csv.DictReader(Path(f'export-{name}.csv').open(newline='')))
 assert len(rows)==len(a['rows'])
 for actual,expected in zip(rows,a['rows']):
  for field in ['id','title','summary','decision','owner','note']:
   s=expected[field];safe="'"+s if s and s[0] in '=+-@\t\r' else s
   assert actual[field]==safe,(field,actual[field],safe)
  assert actual['in_example_id']==expected['inside']['id']
  assert actual['out_example_id']==expected['outside']['id']
  assert actual['reviewed']=='true'
 assert sum(a['metrics'][x] for x in ['inScope','outOfScope','needsDiscussion'])==len(rows)
 results.append({'fixture':name,'records':len(rows),'fieldsRoundTripped':True})
a=json.loads(Path('export-max.json').read_text());assert len(a['rows'])==60;assert len({r['id'] for r in a['rows']})==60
Path('export-roundtrip-validation.json').write_text(json.dumps({'artifacts':results,'maxRecordsPreserved':60},indent=2));print('PASS independent CSV/JSON field round trips and 60-request conservation')
