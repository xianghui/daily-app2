import json,csv,io
from pathlib import Path
checks=[]
for stem in ['reviewed','max']:
 d=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())));assert len(rows)==len(d['reviews'])
 for x,r in zip(rows,d['reviews']):
  assert x['id']==r['id'];assert x['stream']==r['item'];assert float(x['mean_wip'])==r['wip'];assert int(x['completed'])==r['completed'];assert x['note']==("'"+r['note'] if r['note'].startswith(('=','+','-','@','\t','\r')) else r['note'])
 assert len({x['id'] for x in rows})==len(rows);checks.append(dict(artifact=stem,records=len(rows),reviewedFieldsSurvive=True))
assert '=SUM(1,2)' in Path('export-reviewed.md').read_text();assert 'mean WIP 8' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent JSON/CSV parser roundtrip, reviewed values, escaping and record conservation')
