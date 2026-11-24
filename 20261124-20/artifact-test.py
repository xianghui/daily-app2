from pathlib import Path
import json,csv,os,io
import jsonpatch
prefix=os.environ.get('PREFIX','');checks=0
for r in json.loads(Path('oracle-cases.json').read_text()):
 assert jsonpatch.apply_patch(r['document'],r['patch'],in_place=False)==r['after'];checks+=1
for f in Path('.').glob(prefix+'export-*.release.json'):
 d=json.loads(f.read_text());assert d['format']=='pointer-workshop-fixtures-v1'
 for c in d['cases']:
  assert jsonpatch.apply_patch(c['document'],c['patch'],in_place=False)==c['expectedDocument'];checks+=1
  assert len(c['patch'])==2 and [x['op'] for x in c['patch']]==['test','replace'];checks+=1
  # Independently prove the test guard rejects a stale value.
  stale=jsonpatch.apply_patch(c['document'],[{'op':'replace','path':c['patch'][0]['path'],'value':{'stale':True}}],in_place=False)
  try:jsonpatch.apply_patch(stale,c['patch']);raise AssertionError('stale accepted')
  except jsonpatch.JsonPatchTestFailed:checks+=1
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path(prefix+'export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(prefix+'export-'+name+'.csv').read_text())));assert len(rows)==len(r['originalInput']['records'])==len(r['checks']);checks+=1
 for i,row in enumerate(rows):
  def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
  assert row['id']==safe(r['checks'][i]['id']);assert row['original_change']==r['originalInput']['records'][i]['raw'];assert row['reviewed_change']==r['reviews'][i]['raw'];assert row['review_note']==safe(r['reviews'][i]['note']);checks+=4
  assert json.loads(row['patch_json'])==r['checks'][i]['patch'];checks+=1
  assert json.dumps(r['originalInput']['records'][i],ensure_ascii=False,separators=(',',':')) in Path(prefix+'export-'+name+'.md').read_text();checks+=1
 rls=json.loads(Path(prefix+'export-'+name+'.release.json').read_text());assert len(rls['cases'])==r['metrics']['ready'];checks+=1
r=json.loads(Path(prefix+'export-reviewed.json').read_text());assert r['checks'][0]['value']=='=new "name",\nnext line';checks+=1
for name,count in [('held',1),('blocked',1)]:
 r=json.loads(Path(prefix+'export-'+name+'.json').read_text());assert r['metrics'][name]==count and len(r['checks'])==3;checks+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentImplementation':'Python jsonpatch 1.33','assertions':checks,'staleGuardRejection':True,'CSVParsedWithPythonStandardLibrary':True,'multilineEditsSurvived':True},indent=2));print('PASS independent artifacts',checks)
