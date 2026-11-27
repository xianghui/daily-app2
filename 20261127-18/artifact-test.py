import csv,json,glob,math,sys
from fractions import Fraction as F
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0
for path in glob.glob(prefix+'*.json'):
 a=json.load(open(path))
 if not isinstance(a,dict) or a.get('schema')!='looprate-v1':continue
 assert len(a['original']['records'])==len(a['review'])==len(a['jobs']);checks+=1
 for src,r,j in zip(a['original']['records'],a['review'],a['jobs']):
  assert src['id']==r['id']==j['id'];checks+=1
  if r['decision']=='hold':assert j['status']=='held';continue
  target=F(60*r['bars']*r['beatsPerBar'])/F(str(r['targetBpm']));frames=math.floor(target*a['original']['outputRate']+F(1,2));assert j['targetFrames']==frames
  ratio=target/(F(str(r['frames']))/F(str(r['rate']))*F(r['bars']*r['beatsPerBar'])/F(str(r['beats'])));assert abs(j['ratio']-float(ratio))<1e-10
  assert abs(j['roundingMs'])<=500/a['original']['outputRate']+1e-8;checks+=3
 stem=path[:-5]
 for suffix,operational in [('.audit.csv',False),('.conform.csv',True)]:
  if not glob.glob(stem+suffix):continue
  rows=list(csv.DictReader(open(stem+suffix,newline='')));assert len(rows)==len(a['review']);checks+=1
  if operational:assert a['summary']['manifestReady'];checks+=1
  for line,r,j,src in zip(rows,a['review'],a['jobs'],a['original']['records']):
   def esc(s):return "'"+s if s.startswith(('=','+','-','@','\t','\r')) else s
   assert line['id']==esc(r['id']);assert line['profile']==esc(r['profile']);assert line['reviewer_note']==esc(r['reviewerNote']);checks+=3
   if not operational:assert line['source_note']==esc(src['note']);assert line['decision']==r['decision'];checks+=2
   if j['status']!='held':assert int(line['target_frames'])==j['targetFrames'];assert abs(float(line['duration_ratio'])-j['ratio'])<1e-12;checks+=2
 if glob.glob(stem+'.md'):
  md=open(stem+'.md').read()
  for r in a['review']:assert r['id'] in md;assert r['reviewerNote'] in md;checks+=2
json.dump({'prefix':prefix,'assertions':checks,'parser':'Python stdlib csv/json, Fraction frame arithmetic; current reviewed values and all records checked'},open(prefix+'artifact-validation.json','w'),indent=2)
assert checks>200
print('PASS independent artifacts',checks)
