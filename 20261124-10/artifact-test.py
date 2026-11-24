from pathlib import Path
import json,csv,io,os
prefix=os.environ.get('PREFIX','');cases=0
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path(prefix+'export-'+name+'.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path(prefix+'export-'+name+'.csv').read_text())));release=json.loads(Path(prefix+'export-'+name+'.release.json').read_text());md=Path(prefix+'export-'+name+'.md').read_text()
 assert len(rows)==r['metrics']['records']==len(r['originalInput']['records'])
 ready=[c for c in r['checks'] if c['status']=='ready']; assert len(release['records'])==len(ready)
 for i,(c,row) in enumerate(zip(r['checks'],rows)):
  source=r['originalInput']['records'][i];review=r['reviews'][i]
  for k,expected in [('id',c['id']),('source_context',source['context']),('original_snapshot',source['raw']),('reviewed_snapshot',c['raw']),('contract',c['system']),('review_note',review['note'])]:
   if expected and expected[0] in '=+-@\t\r':expected="'"+expected
   assert row[k]==expected,(name,k,row[k],expected);cases+=1
  assert json.loads(row['headers'])==c.get('headers',{});assert json.dumps(c['id'],ensure_ascii=False) in md; cases+=2
 for c,out in zip(ready,release['records']):
  snap=json.loads(c['raw']);plan=next(p for p in r['originalInput']['plans'] if p['id']==c['system']);mode=plan['mode']
  # Independent precondition oracle: ASCII single ETags; weak prefix makes strong matching impossible.
  expected=(not snap['exists']) if mode=='create' else snap['exists'] if mode=='exists' else (snap['exists'] and snap['savedTag']==snap['currentTag'] and not snap['savedTag'].startswith('W/'))
  assert c['passes']==expected==out['preconditionPasses'];assert out['headers']==c['headers'];assert out['observed']==snap;assert out['method']=='PUT';assert out['path']==snap['path'];cases+=5
 assert r['metrics']['passes']+r['metrics']['failures']==len(ready);assert r['metrics']['disagreements']==r['metrics']['failures'];cases+=2
 if name=='reviewed':assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "intent", exactly.';assert json.loads(r['checks'][0]['raw'])['path']=='/new-object';cases+=2
 if name=='max':assert len(rows)==24;assert all('\n' in s['id'] for s in r['originalInput']['records']);cases+=2
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':cases,'independentPythonCSVJSONMarkdownAndHeaderOracle':True,'allPassed':True},indent=2));print('PASS artifact',cases)
