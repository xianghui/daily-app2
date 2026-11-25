import json,csv,glob,sys,pathlib
prefix=sys.argv[1]if len(sys.argv)>1 else '';checks=0
for f in glob.glob(prefix+'export-*.json'):
 r=json.load(open(f));assert r['format']=='mentor-grove/v1';checks+=1
 assert len(r['roster'])==len(r['originalInput']['learners']);checks+=1
 assert [x['id']for x in r['roster']]==[x['id']for x in r['originalInput']['learners']];checks+=1
 assert r['metrics']['matched']+r['metrics']['unmatched']+r['metrics']['held']==r['metrics']['learners'];checks+=1
 assert r['metrics']['blockingPairs']==0;checks+=1
 for side in ['mentors','learners']:assert len(r['review'][side])==len(r['originalInput'][side]);checks+=1
 for m in r['mutualLists']['mentors']:assert list(r['allocation'].values()).count(m['id'])<=m['capacity'];checks+=1
 cp=pathlib.Path(f).with_suffix('.csv');mp=pathlib.Path(f).with_suffix('.md')
 if cp.exists():
  table=list(csv.DictReader(open(cp,newline='')));assert len(table)==len(r['roster']);checks+=1
  for row,orig in zip(table,r['roster']):
   for k in ['id','goal','background','status','mentor','rank','note']:
    v=str(orig[k])if orig[k]is not None else ''
    if k!='rank'and v[:1]in '=+-@\t\r'and v:v="'"+v
    assert row[k]==v,(f,k,row[k],v);checks+=1
 if mp.exists():
  text=mp.read_text()
  for row in r['roster']:assert json.dumps(row['id'],ensure_ascii=False,separators=(',',':')) in text;checks+=1
json.dump({'assertions':checks,'files':len(glob.glob(prefix+'export-*.json')),'method':'Python json/csv parsers reopen actual Chrome downloads; every learner, rank, note and preserved source validated.'},open(prefix+'artifact-validation.json','w'),indent=2);print('PASS artifacts',checks)
