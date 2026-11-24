import csv,json,hashlib,base64,glob,os
from pathlib import Path
prefix=os.environ.get('PREFIX','');count=0
for path in glob.glob(prefix+'export-*.json'):
 if path.endswith('-manifest.json'):continue
 r=json.load(open(path));assert len(r['checks'])==len(r['originalInput']['records'])==len(r['reviews']);count+=1
 seen=set()
 for i,c in enumerate(r['checks']):
  assert c['id']==r['originalInput']['records'][i]['id'];assert c['raw']==r['reviews'][i]['raw'];count+=2
  if 'actual' in c:
   raw=c['raw'].encode('utf-8');digest=hashlib.sha256(raw).hexdigest();assert c['actual']==dict(bytes=len(raw),sha256=digest);assert c['sameBytes']==(len(raw)==c['target']['bytes']);assert c['match']==(digest==c['target']['sha256']);count+=3
  if c['status']=='ready':assert c['match'] and c['target']['path'] not in seen;seen.add(c['target']['path']);count+=1
 assert r['metrics']['records']==len(r['checks']);assert r['metrics']['ready']==sum(c['status']=='ready' for c in r['checks']);assert r['metrics']['disagreements']==sum(c.get('sameBytes',False) and not c.get('match',False) for c in r['checks']);count+=3
 csvpath=Path(path).with_suffix('.csv')
 if csvpath.exists():
  rows=list(csv.DictReader(csvpath.open(newline='')));assert len(rows)==len(r['checks']);count+=1
  def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
  for i,row in enumerate(rows):
   for name,value in [('id',r['checks'][i]['id']),('source_context',r['originalInput']['records'][i]['context']),('original_text',r['originalInput']['records'][i]['raw']),('reviewed_text',r['checks'][i]['raw']),('review_note',r['reviews'][i]['note'])]:assert row[name]==safe(value),(name,path);count+=1
 manifest=Path(path.removesuffix('.json')+'-manifest.json')
 if manifest.exists():
  m=json.load(manifest.open());ready=[c for c in r['checks'] if c['status']=='ready'];assert len(m['assets'])==len(ready);count+=1
  for x,c in zip(m['assets'],ready):
   assert x['id']==c['id'] and x['path']==c['target']['path'];assert x['sha256']==hashlib.sha256(c['raw'].encode()).hexdigest();assert x['integrity']=='sha256-'+base64.b64encode(bytes.fromhex(x['sha256'])).decode();assert x['bytes']==len(c['raw'].encode());count+=4
 md=Path(path).with_suffix('.md')
 if md.exists():
  s=md.read_text();assert 'Integrity Folio' in s
  for c in r['checks']:assert json.dumps(c['id'],ensure_ascii=False) in s;count+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps(dict(assertions=count,independentParser='Python csv/json/hashlib/base64',losslessAuditRecords=True),indent=2));print('PASS',count,'independent artifact assertions')
