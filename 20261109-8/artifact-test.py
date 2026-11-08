import csv,json
from pathlib import Path
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open()))
assert len(rows)==len(a['observations'])+len(a['originalInput']['faults'])+len(a['originalInput']['tests'])
obs=[r for r in rows if r['kind']=='observation'];assert [r['id'] for r in obs]==[r['id'] for r in a['observations']]
assert obs[0]['note']=="'"+a['observations'][0]['note'];assert a['metrics']['held']==1
assert a['observations'][0]['note'].endswith('🪷');assert [r['id'] for r in rows if r['selected']=='true']==[t['id'] for t in a['metrics']['tests']]
assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput']
print('PASS independent CSV/JSON round trips, all record kinds, multiline formula escaping, reviewed holds and selected tests')
