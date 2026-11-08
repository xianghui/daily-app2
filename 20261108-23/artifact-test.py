import json,csv,io
from pathlib import Path
x=json.loads(Path('export-reviewed.json').read_text());rs=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())));tasks=[r for r in rs if r['kind']=='task'];req=[r for r in rs if r['kind']=='requirement'];assert len(tasks)==len(x['tasks'])==5;assert len(req)==len(x['requirements'])==3
for r,t in zip(tasks,x['tasks']):
 assert r['id']==t['id'] and r['source']==t['output'] and int(r['hours'])==t['hours'];assert json.loads(r['needs'])==t['needs']
for r,t in zip(req,x['requirements']):
 assert r['id']==t['id'] and r['source']==t['text'] and r['status']==t['decision'] and r['provider']==t['provider'];assert r['note']==("'"+t['note'] if t['note'].startswith(('=','+','-','@','\t','\r')) else t['note'])
assert req[0]['note']=="'=1+1\nReviewed, \"quoted\"";assert 'BLOCKED' in Path('export-reviewed.md').read_text();assert json.loads(Path('export-max.json').read_text())['originalInput']==json.loads(Path('export-roundtrip.json').read_text())['originalInput'];Path('artifact-validation.json').write_text(json.dumps({'taskRows':len(tasks),'requirementRows':len(req),'escapingRoundtrip':True,'originalsConserved':True,'maxBatchReimport':True}));print('PASS independent JSON/CSV/Markdown parse and maximum-batch reimport')
