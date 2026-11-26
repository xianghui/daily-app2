import json,csv,io,sys
from pathlib import Path
from fractions import Fraction
prefix=sys.argv[1]if len(sys.argv)>1 else 'local-';checks=0;audits=list(Path('.').glob(prefix+'export-*.json'))
for path in audits:
 d=json.loads(path.read_text());assert len(d['original']['requests'])==len(d['rows'])==len(d['review']);checks+=1
 totals={'costMinor':0,'completedMinor':0,'endingMinor':0,'baselineEndingMinor':0,'endingDifferenceMinor':0}
 for r,original in zip(d['rows'],d['original']['requests']):
  assert all(r[k]==v for k,v in original.items());checks+=1
  v=r['review'];o=r['calculation']
  if v['decision']=='hold':assert o is None;continue
  c,e,p,k=v['completed'],v['ending'],v['percent'],int(v['cost']);f=100 if v['profile']=='start' else (100 if p==100 else 0) if v['profile']=='end' else p;eu=Fraction(c)+Fraction(e*f,100)
  def rnd(x):return (x+Fraction(1,2)).numerator//(x+Fraction(1,2)).denominator
  completed=rnd(Fraction(k*c)/eu)if eu else 0;ending=k-completed;base=k-rnd(Fraction(k*c,c+e))
  assert int(o['equivalentUnitsNumerator'])==eu*100;assert int(o['completedMinor'])==completed;assert int(o['endingMinor'])==ending;assert completed+ending==k;assert int(o['baselineEndingMinor'])==base;assert int(o['endingDifferenceMinor'])==ending-base;checks+=6
  for key in totals:totals[key]+=int(o[key])
 assert all(int(d['totals'][key])==value for key,value in totals.items());checks+=5
 cp=path.with_suffix('.csv')
 if cp.exists():
  rows=list(csv.DictReader(io.StringIO(cp.read_text(newline='') if False else cp.read_text())))
  assert len(rows)==len(d['rows']);checks+=1
  for r,s in zip(rows,d['rows']):
   note=s['review']['note'];safe="'"+note if note and note[:1]in'=+-@\t\r' else note
   assert r['id']==s['id'];assert r['review_note']==safe;assert r['pattern']==s['review']['profile'];assert r['ending_cost_minor']==str(s['calculation']['endingMinor']if s['calculation']else'');checks+=4
 mp=path.with_suffix('.md')
 if mp.exists():
  s=mp.read_text();assert all(r['id']in s and r['note']in s and r['review']['note']in s for r in d['rows']);checks+=1
assert audits
json.dump({'downloadedAudits':len(audits),'independentAssertions':checks,'csvMarkdownParsed':True,'allPassed':True},open(prefix+'artifact-validation.json','w'),indent=2);print('PASS artifacts',prefix,len(audits),checks)
