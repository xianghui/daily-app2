from pathlib import Path
import csv,io,json,sys
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0
for path in Path('.').glob(prefix+'*.audit.csv'):
 stem=str(path).removesuffix('.audit.csv');a=json.loads(Path(stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(path.open(newline='').read())));assert len(rows)==len(a['review']);checks+=1
 for i,(actual,r) in enumerate(zip(rows,a['review'])):
  expected={'request_id':r['id'],'source_note':a['original']['records'][i]['note'],'object_id':r['profile'],'decision':r['decision'],**{k:r[k] for k in ['location','title','maker','date','medium','credit','caption','reviewerNote']}}
  for k,v in expected.items():
   if v and v[0] in '=+-@\t\r':v="'"+v
   assert actual[k]==v,(path,k,repr(actual[k]),repr(v));checks+=1
  assert r['id']==a['original']['records'][i]['id'];checks+=1
for path in Path('.').glob(prefix+'*.json'):
 try:a=json.loads(path.read_text())
 except:continue
 if not isinstance(a,dict) or a.get('schema')!='caption-folio-v1':continue
 review=a['review'];approved=[r for r in review if r['decision']=='approve'];seen=set();issues=0
 for r in approved:
  issues+=not bool(r['credit'].strip());issues+=len(r['caption'])>a['original']['captionLimit'];issues+=r['profile'] in seen;seen.add(r['profile'])
 assert a['summary']['approved']==len(approved);assert a['summary']['held']==len(review)-len(approved);assert a['summary']['issues']==issues;assert a['releaseReady']==(len(approved)==len(review) and not issues);checks+=4
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':checks,'parser':'Python csv.DictReader + json; independent issue-count/conservation replay; formula-safe multiline strings'},indent=2));print('PASS independent artifact checks',checks)
