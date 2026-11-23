import json,csv,base64,os
from pathlib import Path
prefix=os.getenv('PREFIX',''); files=list(Path('.').glob(prefix+'export-*.json')); checks=0
for f in files:
 if '.manifest.' in f.name:continue
 r=json.loads(f.read_text()); cs=r['checks']; assert len(cs)==len(r['originalInput']['records'])==len(r['reviews'])
 ready=[c for c in cs if c['status']=='ready'];assert r['metrics']['readyBytes']==sum(c['bytes'] for c in ready)
 for c in ready:
  raw=base64.urlsafe_b64decode(c['canonical']+'='*((-len(c['canonical']))%4));assert raw.hex()==c['hex'];assert len(raw)==c['bytes'];checks+=1
 stem=f.with_suffix('');mf=Path(str(stem)+'.manifest.json')
 if mf.exists():
  m=json.loads(mf.read_text());assert [x['id'] for x in m['records']]==[c['id'] for c in ready];assert m['totalBytes']==sum(len(bytes.fromhex(x['hex'])) for x in m['records'])
  for x in m['records']:assert base64.urlsafe_b64decode(x['base64']+'='*((-len(x['base64']))%4)).hex()==x['hex']
 cf=stem.with_suffix('.csv')
 if cf.exists():
  rows=list(csv.DictReader(cf.open(newline='')));assert len(rows)==len(cs)
  def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
  for i,(row,c) in enumerate(zip(rows,cs)):
   for k,v in [('id',c['id']),('source_context',r['originalInput']['records'][i]['context']),('original_payload',r['originalInput']['records'][i]['raw']),('reviewed_payload',c['raw']),('review_note',r['reviews'][i]['note']),('hex',c.get('hex','')),('canonical_base64',c.get('canonical',''))]:assert row[k]==safe(v),(f,k,row[k],v)
  checks+=len(rows)
 if 'reviewed' in f.name:assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "contract", exactly.'
report={'jsonArtifacts':len(files),'auditFiles':sum('.manifest.' not in f.name for f in files),'independentByteAndCSVChecks':checks,'parser':'Python json/csv/base64','allRecordsSurvive':True};Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print(report)
corpus=json.loads(Path('codec-corpus.json').read_text())
for x in corpus:
 s=x['raw'].replace('\r\n','');b=base64.urlsafe_b64decode(s+'='*((-len(s))%4));assert b.hex()==x['hex'];canonical=(base64.urlsafe_b64encode(b).decode().rstrip('=') if x['mode']=='url' else base64.b64encode(b).decode());assert canonical==s
Path('independent-codec-validation.json').write_text(json.dumps({'cases':len(corpus),'allMatchPythonBase64':True}));print('PASS independent codec',len(corpus))
