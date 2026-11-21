import json,csv,io
from pathlib import Path
checks=[]
for i in [0,1]:
 r=json.loads(Path(f'export-fixture{i}.json').read_text());c=list(csv.DictReader(io.StringIO(Path(f'export-fixture{i}-csv.csv').read_text())));m=Path(f'export-fixture{i}-markdown.md').read_text()
 assert len(c)==len(r['reviews'])+len(r['analysis']['checks'])
 assert [x['id']for x in c if x['record_type']=='variable']==[x['id']for x in r['originalInput']['variables']]
 assert [x['id']for x in c if x['record_type']=='formula']==[x['id']for x in r['originalInput']['formulas']]
 for x in r['analysis']['checks']:
  row=next(y for y in c if y['record_type']=='formula'and y['id']==x['id']);assert json.loads(row['source_or_expression'])==x['expr'];assert row['decision_or_status']==x['status'];assert x['id']in m
 checks.append('fixture '+str(i)+' original records, expressions and reviewed statuses retained')
r=json.loads(Path('export-reviewed-json.json').read_text());c=list(csv.DictReader(io.StringIO(Path('export-reviewed-csv.csv').read_text())))
assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
assert r['reviews'][0]['value']==4 and r['originalInput']['variables'][0]['value']==2
assert c[0]['reason_or_note']=="'"+r['reviews'][0]['note']
assert r['analysis']['checks'][0]['value']==12
r=json.loads(Path('export-max.json').read_text());assert len(r['reviews'])==24 and len(r['analysis']['checks'])==16
assert len(list(csv.DictReader(io.StringIO(Path('export-max-csv.csv').read_text()))))==40
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'checks':checks+['reviewed edited SI value used, original preserved','multiline quoted CSV formula hardening','maximum 40 source records survived']},indent=2));print('PASS independently parsed downloaded JSON/CSV/Markdown')
