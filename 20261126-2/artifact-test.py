import csv,json,pathlib,sys,datetime as dt
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';count=0
for file in pathlib.Path('.').glob(prefix+'export-*.json'):
 a=json.loads(file.read_text());assert a['schema']=='rollforward-desk/v1';assert len(a['original']['requests'])==len(a['rows'])==len(a['review']);count+=2
 for source,row,review in zip(a['original']['requests'],a['rows'],a['review']):
  assert row['id']==source['id']==review['id'];assert row['note']==source['note'];assert row['date']==source['date'];assert row['review']==review;count+=4
  if review['decision']=='hold':assert row['output'] is None;count+=1
  else:
   date=dt.date.fromisoformat(row['output']['date']);assert (date.weekday()+1)%7 not in a['original']['weekend'];assert str(date) not in a['original']['holidays'];count+=2
 f=file.with_suffix('.csv')
 if f.exists():
  records=list(csv.DictReader(f.open(newline='')));assert len(records)==len(a['rows']);count+=1
  for r,row in zip(records,a['rows']):
   def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
   assert r['id']==row['id'];assert r['original_note']==safe(row['note']);assert r['review_note']==safe(row['review']['note']);assert r['adjusted_date']==(row['output']['date'] if row['output'] else '');assert json.loads(r['witness_json'])==(row['output']['witness'] if row['output'] else []);count+=5
 f=file.with_suffix('.md')
 if f.exists():
  s=f.read_text()
  for row in a['rows']:assert row['id'] in s;assert row['review']['note'] in s;count+=2
assert count>100
json.dump(dict(assertions=count,parser='Python csv/json/datetime; browser-downloaded current artifacts'),open(prefix+'artifact-validation.json','w'),indent=2)
print('PASS artifacts',count)
