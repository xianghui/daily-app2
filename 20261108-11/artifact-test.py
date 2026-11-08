from pathlib import Path
import json,csv,io
checks=[]
for stem in ['reviewed','escaping']:
 a=json.loads(Path('export-'+stem+'.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())));triplets=[json.loads(x) for x in Path('export-'+stem+'.jsonl').read_text().splitlines()]
 assert len(rows)==len(a['input']['records'])==len(a['records'])
 for r,e in zip(rows,a['records']):
  for key,original in [('id','id'),('text','text'),('label','label'),('group','group'),('split','split'),('decision','decision'),('positive_id','positive'),('negative_id','negative'),('note','note')]:
   value=e[original];safe="'"+value if value and value[0] in '=+-@\t\r' else value
   assert r[key]==safe,(key,r[key],safe)
 assert len(triplets)==a['metrics']['approved']
 lookup={r['id']:r for r in a['input']['records']};accepted=[r for r in a['records'] if r['decision']=='accept'];uses={}
 for t,r in zip(triplets,accepted):
  anchor=lookup[r['id']];p=lookup[r['positive']];n=lookup[r['negative']]
  assert set(t)=={'anchor','positive','negative'}
  assert t=={'anchor':anchor['text'],'positive':p['text'],'negative':n['text']}
  assert anchor['label']==p['label']!=n['label']
  assert len({anchor['group'],p['group'],n['group']})==3
  assert {anchor['split'],p['split'],n['split']}=={'train'}
  uses[n['id']]=uses.get(n['id'],0)+1
 assert all(x<=a['input']['maxNegativeReuse'] for x in uses.values())
 checks.append(stem+': audit CSV lossless with formula-safe strings; training JSONL reopens with exact reviewed text and all constraints')
for name in ['Service','Library','max','offline','roundtrip']:
 a=json.loads(Path('export-'+name+'.json').read_text());assert [r['id'] for r in a['records']]==[r['id'] for r in a['input']['records']];assert a['metrics']['approved']+a['metrics']['held']==len(a['records'])
 for metric,key in [('baselineSimilarity','baselineNegative'),('aiSimilarity','suggestedNegative')]:
  values=[next(n['score'] for n in r['negatives'] if n['id']==r[key]) for r in a['records'] if r[key]]
  assert abs(a['metrics'][metric]-sum(values)/len(values))<1e-12
 checks.append(name+': every original survives, counts reconcile, displayed cosine means recomputed')
Path('artifact-validation.json').write_text(json.dumps({'checks':checks},indent=2));print('\n'.join(checks))
