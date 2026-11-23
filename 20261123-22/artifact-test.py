from pathlib import Path
import csv,json,sys,posixpath,ntpath
prefix=sys.argv[1] if len(sys.argv)>1 else ''
checks=0
for f in Path('.').glob(prefix+'export-*.json'):
 if '.manifest.' in f.name:continue
 r=json.loads(f.read_text());assert len(r['checks'])==len(r['originalInput']['records'])==len(r['reviews']);checks+=1
 for i,c in enumerate(r['checks']):
  assert c['id']==r['originalInput']['records'][i]['id']==r['reviews'][i]['id'];checks+=1
  if c['status']=='ready':
   mod=ntpath if c['kind']=='windows' else posixpath
   assert mod.normpath(c['raw']).replace('\\','/')==c['path'] if c['kind']=='windows' else mod.normpath(c['raw'])==c['path'];checks+=1
 cf=f.with_suffix('.csv');mf=f.with_suffix('.manifest.json');md=f.with_suffix('.md')
 if cf.exists():
  rows=list(csv.DictReader(cf.open(newline='')));assert len(rows)==len(r['checks']);checks+=1
  for i,row in enumerate(rows):
   def safe(x):return "'"+x if x and x[0] in '=+-@\t\r' else x
   assert row['id']==safe(r['reviews'][i]['id']);assert row['review_note']==safe(r['reviews'][i]['note']);assert row['reviewed_path']==safe(r['reviews'][i]['raw']);checks+=3
 if mf.exists():
  a=json.loads(mf.read_text());assert a==[{'id':c['id'],'destination':c['system'],'relativePath':c['path']} for c in r['checks'] if c['status']=='ready'];checks+=1
 if md.exists():assert 'Lexical checks only' in md.read_text();checks+=1
 if 'reviewed' in f.stem:assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", exactly.';assert r['checks'][0]['path']=='docs/console.txt';checks+=2
 assert r['metrics']['missedPairs']==sum(not p['rawDuplicate'] for p in r['pairs']);checks+=1
for c in json.loads(Path('path-oracle-cases.json').read_text()):
 s=c['raw'].replace('\\','/') if c['kind']=='windows' else c['raw'];depth=0;bad=False
 for part in s.split('/'):
  if part=='..':
   if depth==0:bad=True
   depth-=1
  elif part not in ('','.'):depth+=1
 expected=None if bad or depth==0 else (ntpath if c['kind']=='windows' else posixpath).normpath(c['raw']).replace('\\','/')
 assert c['got']==expected,(c,expected);checks+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentChecks':checks,'oracleCases':1200,'parsers':'Python csv/json, posixpath and ntpath'}));print('PASS artifacts',checks)
