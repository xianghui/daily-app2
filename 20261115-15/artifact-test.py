import csv,json
from pathlib import Path
checks=[]
for prefix in ['export-fixture0','export-fixture1','export-reviewed','export-max']:
 r=json.loads(Path(prefix+'.json').read_text());rows=list(csv.DictReader(open(prefix+'.csv',newline='')));stations=list(csv.DictReader(open(prefix+'-stations.csv',newline='')))
 assert len(rows)==r['total'];assert [x['id'] for x in rows]==[x['id'] for x in r['reviews']]
 for x,y in zip(rows,r['reviews']):
  note=y['reviewNote'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
  assert x['reviewNote']==expected
  assert int(x['seconds'])==y['seconds']
 assert len(stations)==r['approved'];assert {x['id'] for x in stations}=={x['id'] for x in r['reviews'] if x['decision']=='approve'}
 for x in stations:
  assert int(x['endSeconds'])-int(x['startSeconds'])==int(x['seconds'])
  assert int(x['stationLoadSeconds'])+int(x['stationIdleSeconds'])==r['originalInput']['cycleSeconds']
 checks.append(dict(artifact=prefix,rows=len(rows),stationTasks=len(stations),roundTrip=True))
assert '=SUM(1,2)\n  "quoted", verify method' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent Python JSON/CSV parse, all IDs, multiline/formula strings and station timings')
