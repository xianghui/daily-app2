import csv,json,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
n=0
for path in Path('.').glob(prefix+'*.json'):
 s=json.loads(path.read_text())
 if not isinstance(s,dict) or s.get('format')!='border-folio-v1':continue
 assert len(s['jobs'])==len(s['source']['records'])
 for i,j in enumerate(s['jobs']):
  assert j['id']==s['source']['records'][i]['id']
  assert j['openingWidth']==j['artWidth']-2*j['overlap']
  assert j['openingHeight']==j['artHeight']-2*j['overlap']
  assert j['left']+j['openingWidth']+j['right']==j['width']
  assert j['top']+j['openingHeight']+j['bottom']==j['height']
  assert j['bottom']-j['top']==j['bottomExtra']
  if j['feasible']:assert min(j['left'],j['right'],j['top'],j['bottom'])>=max(j['minBorder'],j['overlap'])
 csvpath=path.with_suffix('.csv')
 if csvpath.exists():
  rows=list(csv.DictReader(csvpath.open(newline='')));assert len(rows)==len(s['jobs'])
  for j,r in zip(s['jobs'],rows):
   assert j['id']==r['id'];note=j['reviewerNote'];assert r['reviewerNote']==("'"+note if note.startswith(('=','+','-','@','\t','\r')) else note)
   assert float(r['openingWidth'])==j['openingWidth']
 cut=path.with_suffix('.cut.csv')
 if cut.exists():
  assert s['summary']['planReady']
  rows=list(csv.DictReader(cut.open(newline='')));assert len(rows)==len(s['jobs'])
  for j,r in zip(s['jobs'],rows):
   assert r['id']==j['id'];assert r['decision']=='approve';assert r['feasible']=='true'
   for k in ['width','height','openingWidth','openingHeight','left','right','top','bottom']:assert float(r[k])==j[k]
 md=path.with_suffix('.md')
 if md.exists():
  text=md.read_text()
  for j,orig in zip(s['jobs'],s['source']['records']):assert orig['note'] in text and j['reviewerNote'] in text
 n+=1
print('PASS independently parsed geometry and CSV artifacts:',n)
assert n>=5
