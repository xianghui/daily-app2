import csv,json,glob,os
prefix=os.environ.get('PREFIX','');checks=0;files=[]
def safe(v):
 s='' if v is None else str(v)
 return "'"+s if isinstance(v,str) and s and s[0] in '=+-@\t\r' else s
for path in glob.glob(prefix+'export-*.json'):
 a=json.load(open(path));assert a['schema']=='carryfield-desk/v1';assert len(a['rows'])==len(a['original']['rows']);checks+=2
 assert [r['id'] for r in a['rows']]==[r['id'] for r in a['original']['rows']];checks+=1
 for r,s in zip(a['rows'],a['original']['rows']):
  for k in ['id','text','group','value']:assert r[k]==s[k];checks+=1
  if r['status']=='ready':
   w=next(w for w in a['rows'] if w['id']==r['groupSource']);assert w['review']['group']==r['resolvedGroup'];assert w['review']['decision']=='approve';checks+=2
 csvpath=path[:-5]+'.csv'
 if os.path.exists(csvpath):
  rows=list(csv.DictReader(open(csvpath,newline='')));assert len(rows)==len(a['rows']);checks+=1
  for row,r in zip(rows,a['rows']):
   for k,v in [('id',r['id']),('original_text',r['text']),('original_group',r['group']),('note',r['review']['note']),('resolved_group',r['resolvedGroup']),('group_source',r['groupSource']),('status',r['status'])]:assert row[k]==safe(v),(k,row[k],v);checks+=1
 tidypath=path[:-5]+'.tidy.csv'
 if os.path.exists(tidypath):
  assert a['metrics']['orphans']==0;rows=list(csv.DictReader(open(tidypath,newline='')));ready=[r for r in a['rows']if r['status']=='ready'];assert len(rows)==len(ready);checks+=2
  for row,r in zip(rows,ready):assert row['source_id']==r['id'];assert row['group_source']==r['groupSource'];assert row['group']==safe(r['resolvedGroup']);checks+=3
 files.append(path)
assert files
json.dump(dict(assertions=checks,files=files),open(prefix+'artifact-validation.json','w'),indent=2);print('PASS independent CSV/JSON parsing',checks)
