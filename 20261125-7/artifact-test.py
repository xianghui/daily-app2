import json,csv,glob,os,decimal
from pathlib import Path
prefix=os.environ.get('PREFIX','');count=0
for file in glob.glob(prefix+'export-*.json'):
 if file.endswith('-payloads.json'):continue
 r=json.load(open(file));assert len(r['checks'])==len(r['originalInput']['records'])==len(r['reviews']);count+=1
 def issues(raw):
  duplicate=[]
  def pairs(ps):
   keys=[k for k,v in ps]
   if len(set(keys))!=len(keys):duplicate.append(1)
   return dict(ps)
  try:v=json.loads(raw,object_pairs_hook=pairs,parse_int=decimal.Decimal,parse_float=decimal.Decimal)
  except json.JSONDecodeError:return ['syntax'],None
  errors=['duplicate'] if duplicate else []
  def walk(v):
   if isinstance(v,decimal.Decimal) and (abs(v)>decimal.Decimal(9007199254740991) or not v.is_finite()):errors.append('number')
   elif isinstance(v,dict):
    for x in v.values():walk(x)
   elif isinstance(v,list):
    for x in v:walk(x)
  walk(v);return errors,v
 for c,rev,orig in zip(r['checks'],r['reviews'],r['originalInput']['records']):
  assert c['id']==rev['id']==orig['id'];assert c['raw']==rev['raw'];count+=2
  if c['status']=='held':continue
  errs,value=issues(c['raw']);target=next(p for p in r['originalInput']['plans'] if p['id']==c['system']);required=json.loads(target['target'])['required']
  if not isinstance(value,dict):errs.append('root')
  elif any(k not in value for k in required):errs.append('missing')
  assert c['match']==(not errs);assert c['status']==('ready' if not errs else 'blocked');count+=2
 if Path(file.replace('.json','.csv')).exists():
  rows=list(csv.DictReader(open(file.replace('.json','.csv'),newline='')));assert len(rows)==len(r['checks']);count+=1
  for row,c,rev,orig in zip(rows,r['checks'],r['reviews'],r['originalInput']['records']):
   for key,expected in [('id',c['id']),('source_context',orig['context']),('original_json',orig['raw']),('reviewed_json',c['raw']),('review_note',rev['note'])]:
    if expected.startswith(('=','+','-','@','\t','\r')):expected="'"+expected
    assert row[key]==expected,(file,key);count+=1
 rel=Path(file.replace('.json','-payloads.json'))
 if rel.exists():
  out=json.load(open(rel))['payloads'];ready=[c for c in r['checks'] if c['status']=='ready'];assert len(out)==len(ready);count+=1
  for x,y in zip(out,ready):
   assert x['id']==y['id'] and x['raw']==y['raw'] and x['value']==json.loads(y['raw']);count+=3
for f in glob.glob(prefix+'export-*.md'):assert 'Member Sentinel' in Path(f).read_text();count+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentAssertions':count,'parsers':'Python json/csv/Decimal and duplicate-member object_pairs_hook'},indent=2));print('PASS artifact assertions',count)
