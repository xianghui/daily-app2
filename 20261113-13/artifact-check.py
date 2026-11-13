import json,csv,io
from pathlib import Path
checks=[]
for name in ['fixture0','fixture1','reviewed','max']:
 d=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())))
 assert len(rows)==len(d['reviews'])==len(d['originalInput']['records'])
 for i,(a,b) in enumerate(zip(rows,d['reviews'])):
  assert a['id']==b['id'] and int(a['minutes'])==b['minutes'] and a['source']==d['originalInput']['records'][i]['note']
  for key,field in [('review_note','reviewNote'),('owner','owner')]:
   text=b[field];expected="'"+text if text and text[0] in '=+-@\t\r' else text
   assert a[key]==expected,(name,key)
 assert d['actualMinutes']==d['billableMinutes']+d['nonbillableMinutes']
 assert sum(p['charge'] for p in d['plans'])==d['charge']
 checks.append({'artifact':name,'records':len(rows),'allSourcesMinutesAndEditsSurvive':True})
r=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text();assert r['reviews'][0]['reviewNote'] in md
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent CSV/JSON/Markdown round trips')
