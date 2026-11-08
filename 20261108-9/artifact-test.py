import json,csv
from pathlib import Path
report=[]
a=json.loads(Path('export-reviewed.json').read_text())
with open('export-reviewed.csv',newline='') as f: rows=list(csv.DictReader(f))
assert len(rows)==len(a['records'])
for r,s in zip(rows,a['records']):
 assert r['id']==s['id'] and r['original_query']==s['text'] and r['note']==s['note']
 assert r['decision']==s['decision']
assert json.loads(Path('export-reviewed.synonyms.json').read_text())==a['synonyms']
for rule in a['synonyms']:
 assert set(rule)=={'objectID','type','input','synonyms'} and rule['type']=='oneWaySynonym' and len(rule['synonyms'])==1
assert len(set(r['input'] for r in a['synonyms']))==len(a['synonyms'])
report.append('Actual reviewed CSV and one-way synonym JSON independently parsed; all records and quoted/newline edits survive')
a=json.loads(Path('export-escaping.json').read_text())
with open('export-escaping.csv',newline='') as f: rows=list(csv.DictReader(f))
assert rows[0]['original_query']=="'"+a['records'][0]['text']
assert rows[0]['note']=="'"+a['records'][0]['note']
report.append('Multiline formula-leading query and note safely apostrophe-escaped in CSV; original JSON stays exact')
a=json.loads(Path('export-max.json').read_text());b=json.loads(Path('export-roundtrip.json').read_text());assert a['input']==b['input'] and len(b['records'])==32
for t in a['tests']:
 assert t['id'] in {r['id'] for r in a['records']}
assert a['metrics']['baselineHits']==sum(bool(t['before']) for t in a['tests'])
assert a['metrics']['reviewedHits']==sum(bool(t['after']) for t in a['tests'])
assert a['metrics']['recovered']==sum(not t['before'] and bool(t['after']) for t in a['tests'])
report.append('32-row exported audit reimport conserves complete input; displayed exact-hit counts recomputed')
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('\n'.join(report))
