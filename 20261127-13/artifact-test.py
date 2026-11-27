import csv,json,sys,io
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';n=0
for f in Path('.').glob(prefix+'*.json'):
 try:a=json.loads(f.read_text())
 except:continue
 if not isinstance(a,dict) or a.get('schema')!='scanfolio-v1':continue
 assert len(a['original']['records'])==len(a['review'])==len(a['jobs']);n+=1
 assert [r['id'] for r in a['review']]==[r['id'] for r in a['original']['records']];n+=1
 assert a['summary']['rawBytes']==sum((j['capture'] or {}).get('totalBytes',0) for j in a['jobs']);n+=1
 for row,j in zip(a['review'],a['jobs']):
  if j['capture']:
   c=j['capture'];assert c['totalBytes']==c['rowBytes']*c['heightPx']*row['pages'];n+=1
   assert c['pageBytes']==c['rowBytes']*c['heightPx'];n+=1
 audit=f.with_suffix('.audit.csv')
 if audit.exists():
  rs=list(csv.DictReader(io.StringIO(audit.read_text())));assert len(rs)==len(a['review']);n+=1
  for r,s in zip(a['review'],rs):
   for k in ['profile','width','height','feature','pages','minDpi','featurePixels','bits','channels','decision','reviewerNote']:
    expected=str(r[k]);expected="'"+expected if k=='reviewerNote' and expected and expected[:1] in '=+-@\t\r' else expected
    assert s[k]==expected,(f,k,s[k],expected);n+=1
 manifest=f.with_suffix('.field.csv')
 if manifest.exists():
  assert a['summary']['manifestReady'];rs=list(csv.DictReader(io.StringIO(manifest.read_text())));assert len(rs)==len(a['review']);n+=2
  for r,s,j in zip(a['review'],rs,a['jobs']):
   assert s['job_id']==r['id'];assert int(s['total_raw_bytes'])==j['capture']['totalBytes'];n+=2
 md=f.with_suffix('.md')
 if md.exists():
  for r in a['review']:assert r['reviewerNote'] in md.read_text();n+=1
assert n>100,n
json.dump(dict(assertions=n,result='PASS',parsers='Python json and csv independent parsers'),open(prefix+'artifact-validation.json','w'),indent=2);print('PASS artifacts',n)
