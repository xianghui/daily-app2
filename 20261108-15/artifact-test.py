import csv,json,pathlib
p=pathlib.Path('.')
a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed.csv').open(newline='')))
assert len(rows)==len(a['records'])==4
for r,s in zip(rows,a['records']):
 assert r['id']==s['id'] and r['text']==s['text']
 assert int(r['originalScore'])==s['score'] and int(r['reviewedScore'])==s['finalScore']
 assert r['note']==("'" if s['note'].startswith(('=','+','-','@','\t','\r')) else '')+s['note']
 assert int(r['queuePosition'])==a['queue'].index(s['id'])+1
 assert int(r['releasedScore'])==s['finalScore']
assert a['records'][0]['note']=='=1+1\nReviewed, "quoted"'
assert a['records'][0]['score']==2 and a['records'][0]['finalScore']==1
assert a['metrics']['changed']==1 and a['metrics']['originalTotal']==5 and a['metrics']['reviewedTotal']==4
b=json.loads((p/'export-max.json').read_text());assert len(b['records'])==24 and len(set(b['queue']))==24
md=(p/'export-reviewed.md').read_text()
for r in a['records']:
 assert json.dumps(r['text'],ensure_ascii=False) in md
 assert json.dumps(r['note'],ensure_ascii=False) in md
held=json.loads((p/'export-held.json').read_text());assert len(held['records'])==4 and held['metrics']['approved']==3 and held['metrics']['held']==1
assert sum(x['count'] for x in held['metrics']['reviewedHistogram'])==3
(p/'artifact-validation.json').write_text(json.dumps({'passed':True,'csvRows':4,'maxBatchRows':24,'checks':['independent Python CSV parse','formula escaped multiline note','reviewed and original marks preserved','released marks match reviewed register','queue positions match discrepancy ordering','held answer preserved outside confirmed totals','Markdown reflects reviewed content']},indent=2));print('PASS artifact parsing and content invariants')
