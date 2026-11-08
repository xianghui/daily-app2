import csv,json,pathlib
p=pathlib.Path('.')
a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed.csv').open(newline='')))
assert len(rows)==len(a['records'])
for r,s in zip(rows,a['records']):
 assert r['id']==s['id'] and r['text']==s['text'] and r['answer']==s['answer']
 assert r['note']==("'" if s['note'].startswith(('=','+','-','@','\t','\r')) else '')+s['note']
 assert r['group']==s['group']
 assert int(r['position'])==a['sequence'].index(s['id'])+1
 assert r['originalAnswer']==next(x['answer'] for x in a['input']['records'] if x['id']==s['id'])
assert a['records'][0]['note']=='=1+1\nReviewed, "quoted"'
assert a['metrics']['adjacentTopics']==0
b=json.loads((p/'export-max.json').read_text());assert len(b['records'])==12 and len(set(b['sequence']))==12
md=(p/'export-reviewed.md').read_text();key=(p/'export-reviewed-key.md').read_text()
for i,id in enumerate(a['sequence']):
 r=next(r for r in a['records'] if r['id']==id)
 # JSON string escaping is deliberately used in Markdown so embedded newlines cannot create new questions.
 assert json.dumps(r['text'],ensure_ascii=False) in md
 assert json.dumps(r['answer'],ensure_ascii=False) in key
 assert r['answer'] not in md
assert a['input']['records'][0]['answer']!=a['records'][0]['answer']
held=json.loads((p/'export-held.json').read_text());assert len(held['records'])==4 and len(held['sequence'])==3
(p/'artifact-validation.json').write_text(json.dumps({'passed':True,'csvRows':len(rows),'maxBatchRows':12,'checks':['independent Python CSV parse','formula escaped multiline note','reviewed and original answers preserved','worksheet excludes answers','answer key includes current edits','positions match optimized sequence','held question preserved outside worksheet']},indent=2));print('PASS artifact parsing and content invariants')
