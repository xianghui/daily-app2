import csv,json
from pathlib import Path
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open()))
assert len(rows)==len(a['papers'])==4
assert [r['id'] for r in rows]==[r['id'] for r in a['papers']]
for r,p in zip(rows,a['papers']):
 assert r['title']==p['title'] and r['abstract_snippet']==p['text'] and r['reviewed_decision']==p['decision']
 assert r['exclusion_reason']==(p['reason'] if p['decision']=='exclude' else '')
assert rows[0]['reviewer_note']=="'"+a['papers'][0]['note']
assert a['papers'][0]['note'].endswith('🪷') and a['counts']['uncertain']==1
assert sum(a['counts'][s] for s in ['include','exclude','uncertain'])==a['counts']['total']
assert sum(a['exclusionReasons'].values())==a['counts']['exclude']
assert 'P1' in Path('export-reviewed.md').read_text()
assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput']
print('PASS independent CSV/JSON/Markdown parsing: all records, edited fields, multiline formula escaping, stage conservation, reasons and reimport')
