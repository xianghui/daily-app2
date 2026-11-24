import csv,io,json,os,re,urllib.parse
from pathlib import Path
prefix=os.environ.get('PREFIX',''); assertions=0;fixtures=0
normalize=lambda s:re.sub(r'\r\n|\r|\n','\r\n',s)
for suffix in ['fixture0','fixture1','reviewed','max','held','undo','blocked','impact0','impact1']:
 r=json.loads(Path(prefix+'export-'+suffix+'.json').read_text());assertions+=1
 assert len(r['checks'])==len(r['originalInput']['records'])==r['metrics']['records'];assertions+=1
 assert r['metrics']['ready']+r['metrics']['held']+r['metrics']['blocked']==r['metrics']['records'];assertions+=1
 for i,c in enumerate(r['checks']):
  assert c['id']==r['originalInput']['records'][i]['id'];assert c['raw']==r['reviews'][i]['raw'];assertions+=2
  if c['status']=='ready':
   expected=[[normalize(v) for v in pair] for pair in json.loads(c['raw'])];assert c['expected']==expected;assertions+=1
   # Python's quote_plus retains ~, whereas HTML form encoding percent-escapes it.
   encoded=urllib.parse.urlencode([tuple(pair) for pair in expected],safe='*').replace('~','%7E');assert encoded==c['result']['serialized'];assertions+=1
   assert [list(p) for p in urllib.parse.parse_qsl(encoded,keep_blank_values=True)]==expected;assertions+=1
   assert c['duplicateLoss']==len(expected)-len(dict(expected));assertions+=1
   assert c['payloadBytes']==len(encoded.encode());assertions+=1
   parsed=urllib.parse.urlsplit(c['target']['action'])
   if c['target']['method']=='GET':assert c['result']['body'] is None;assert c['result']['url']==urllib.parse.urlunsplit(parsed._replace(query=encoded))
   else:assert c['result']['body']==encoded;assert c['result']['url']==c['target']['action']
   assertions+=2
 for ext in ['csv','md']:
  path=Path(prefix+'export-'+suffix+'.'+ext)
  if not path.exists():continue
  if ext=='md':
   s=path.read_text();assert all(json.dumps(c['id'],ensure_ascii=False,separators=(',',':')) in s for c in r['checks']);assertions+=1
  else:
   audit=list(csv.DictReader(io.StringIO(path.read_bytes().decode(),newline='')));assert len(audit)==len(r['checks']);assertions+=1
   def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
   for i,row in enumerate(audit):
    assert row['id']==safe(r['checks'][i]['id']);assert row['original_text']==safe(r['originalInput']['records'][i]['raw']);assert row['reviewed_text']==safe(r['reviews'][i]['raw']);assert row['review_note']==safe(r['reviews'][i]['note']);assertions+=4
 path=Path(prefix+'export-'+suffix+'-fixtures.json')
 if path.exists():
  out=json.loads(path.read_text());ready=[c for c in r['checks'] if c['status']=='ready'];assert len(out['fixtures'])==len(ready);assertions+=1
  for fixture,c in zip(out['fixtures'],ready):
   assert fixture['id']==c['id'];assert fixture['request']==c['result'];assert fixture['expectedEntries']==c['expected'];assert fixture['originalEntries']==json.loads(c['raw']);assertions+=4;fixtures+=1
r=json.loads(Path(prefix+'export-reviewed.json').read_text());assert r['reviews'][1]['note']=='=SUM(1,2)\nReviewed "paper", exactly.';assert r['checks'][1]['expected'][-1]==['note','first\r\nsecond'];assertions+=2
Path(prefix+'artifact-validation.json').write_text(json.dumps(dict(assertions=assertions,requestFixturesReopened=fixtures,oracle='Independent Python urllib.parse urlencode/parse_qsl; all audit rows and reviewed fields checked'),indent=2))
print('PASS artifacts',assertions,'assertions',fixtures,'fixtures')
