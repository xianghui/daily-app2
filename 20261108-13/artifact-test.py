import csv,json,pathlib
p=pathlib.Path('.')
a=json.loads((p/'export-reviewed.json').read_text())
rows=list(csv.DictReader((p/'export-reviewed.csv').open(newline='')))
assert len(rows)==len(a['records'])
for r,s in zip(rows,a['records']):
 assert r['id']==s['id'] and r['text']==s['text']
 assert r['note']==("'" if s['note'].startswith(('=','+','-','@','\t','\r')) else '')+s['note']
 assert r['group']==s['group']
assert a['records'][0]['note']=='=1+1\nReviewed, "quoted"'
assert a['metrics']['setupMinutes']<=a['input']['budget']
b=json.loads((p/'export-max.json').read_text());assert len(b['records'])==24
assert len(set(r['id'] for r in b['records']))==24
assert all(r['text'] in (p/'export-reviewed.md').read_text() for r in a['records'])
(p/'artifact-validation.json').write_text(json.dumps({'passed':True,'csvRows':len(rows),'maxBatchRows':24,'checks':['Python csv independent parsing','formula escaped multiline note','original IDs and descriptions retained','review changes retained','Markdown source audit','budget guard']},indent=2))
