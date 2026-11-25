import csv,json,pathlib,sys,datetime as dt
from fractions import Fraction
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';count=0
for file in pathlib.Path('.').glob(prefix+'export-*.json'):
 a=json.loads(file.read_text());assert a['schema']=='accrual-folio/v1';assert len(a['original']['requests'])==len(a['rows'])==len(a['review']);count+=2
 for source,row,v in zip(a['original']['requests'],a['rows'],a['review']):
  for k in ['id','note','start','end','principal','rate']:assert row[k]==source[k];count+=1
  assert row['review']==v;count+=1
  if v['decision']=='hold':assert row['output'] is None;count+=1
  else:
   start=dt.date.fromisoformat(v['start']);end=dt.date.fromisoformat(v['end']);days=(end-start).days
   if row['rule']=='30E/360':days=360*(end.year-start.year)+30*(end.month-start.month)+min(end.day,30)-min(start.day,30)
   den=365 if row['rule']=='ACT/365F' else 360;x=Fraction(v['principal'])*Fraction(v['rate'])*days/den;cents=(2*x.numerator+x.denominator)//(2*x.denominator)
   assert row['output']['days']==days;assert row['output']['denominator']==den;assert int(row['output']['interestCents'])==cents;count+=3
 f=file.with_suffix('.csv')
 if f.exists():
  records=list(csv.DictReader(f.open(newline='')));assert len(records)==len(a['rows']);count+=1
  def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
  for r,row in zip(records,a['rows']):
   assert r['id']==row['id'];assert r['original_note']==safe(row['note']);assert r['review_note']==safe(row['review']['note']);assert r['interest']==(row['output']['interest'] if row['output'] else '');assert json.loads(r['witness_json'])==(row['output']['witness'] if row['output'] else None);count+=5
 f=file.with_suffix('.md')
 if f.exists():
  s=f.read_text()
  for row in a['rows']:assert row['id'] in s;assert row['review']['note'] in s;count+=2
assert count>100
json.dump(dict(assertions=count,parser='Python csv/json/datetime/Fraction; browser-downloaded current artifacts'),open(prefix+'artifact-validation.json','w'),indent=2)
print('PASS artifacts',count)
