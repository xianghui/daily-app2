import csv,json,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';checks=0;files=[]
def escaped(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
def mi(s):y,m=map(int,s.split('-'));return y*12+m-1
for f in sorted(Path('.').glob(prefix+'export-*.json')):
 a=json.loads(f.read_text());files.append(str(f));d=a['original'];rows=a['rows'];reviews=a['review'];w=a['worksheet'];assert len(rows)==len(d['requests'])==len(reviews)==len(w['entries']);checks+=1
 totals=[0,0,0];eligible=0;all_value=0
 for original,r,v,e in zip(d['requests'],rows,reviews,w['entries']):
  assert all(r[k]==val for k,val in original.items());assert r['review']==v;assert r['id']==e['id'];checks+=3
  all_value+=int(v['value'])
  if v['decision']=='hold':assert e['status']=='held' and not e['schedule'];checks+=1;continue
  if e['status']=='blocked':assert e['error'] and not e['schedule'];checks+=1;continue
  value=int(v['value']);eligible+=value
  months=[mi(v['deliveryMonth'])] if r['rule']=='delivery' else list(range(mi(v['startMonth']),mi(v['endMonth'])+1));q,rem=divmod(value,len(months));expected=[q+(i<rem)for i in range(len(months))]
  assert [mi(s['month']) for s in e['schedule']]==months;assert [int(s['value'])for s in e['schedule']]==expected;assert sum(expected)==value;checks+=3
  by=[sum(x for m,x in zip(months,expected) if m<mi(w['reportMonth'])),sum(x for m,x in zip(months,expected) if m==mi(w['reportMonth'])),sum(x for m,x in zip(months,expected) if m>mi(w['reportMonth']))]
  assert [int(e[k])for k in ['prior','current','future']]==by;assert int(e['recognizedThrough'])==by[0]+by[1];assert int(e['baselineImmediate'])==value;assert int(e['baselineOverstatement'])==by[2];checks+=4
  totals=[x+y for x,y in zip(totals,by)]
 assert [int(w[k])for k in ['prior','current','future']]==totals;assert int(w['baselineImmediate'])==eligible;assert int(w['baselineOverstatement'])==totals[2];assert int(w['total'])==all_value;checks+=4
 if w['status']=='ready':assert not w['errors'] and sum(totals)==all_value and w['conserved'];checks+=1
 else:assert w['errors'] and w['conserved'] is None;checks+=1
 cf=f.with_suffix('.csv')
 if cf.exists():
  data=list(csv.DictReader(cf.open(newline='')));assert len(data)==len(rows);checks+=1
  for row,r in zip(data,rows):
   for key,value in [('id',r['id']),('original_note',r['note']),('original_value',r['value']),('profile',r['review']['profile']),('rule',r['rule']),('reviewed_value',r['review']['value']),('start_month',r['review']['startMonth']),('end_month',r['review']['endMonth']),('delivery_month',r['review']['deliveryMonth']),('decision',r['review']['decision']),('review_note',r['review']['note'])]:assert row[key]==escaped(value),(f,key,row[key],value);checks+=1
 sf=f.with_name(f.stem+'-schedule.csv')
 if sf.exists():
  data=list(csv.DictReader(sf.open(newline='')));expected=[(e['id'],e['status'],s['month'],s['value'])for e in w['entries']for s in(e['schedule'] or [{'month':'','value':''}])];assert len(data)==len(expected);checks+=1
  for row,t in zip(data,expected):assert tuple(row[k]for k in ['id','status','month','minor_units'])==t;assert row['report_month']==w['reportMonth'];checks+=2
 mf=f.with_suffix('.md')
 if mf.exists():
  md=mf.read_text();assert all(r['note'] in md and r['review']['note'] in md for r in rows);assert w['status'].upper() in md;checks+=2
for tag in ['reviewed','held']:
 a=json.loads(Path(prefix+'export-'+tag+'.json').read_text());assert a['review'][0]['note']=='=SUM(1,2)\nReviewed "handover", <script> & 🧾';checks+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'jsonArtifacts':files,'independentParsers':'Python csv/json and integer-month allocation oracle','assertions':checks},indent=2));print('PASS artifacts',prefix,checks)
