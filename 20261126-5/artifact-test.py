import csv,json,sys
from fractions import Fraction as Q
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';checks=0;files=[]
for f in sorted(Path('.').glob(prefix+'export-*.json')):
 a=json.loads(f.read_text());files.append(str(f));original=a['original'];rows=a['rows'];reviews=a['review'];w=a['worksheet']
 assert len(rows)==len(original['requests'])==len(reviews)==len(w['steps']);checks+=1
 for o,r,v,s in zip(original['requests'],rows,reviews,w['steps']):
  assert all(r[k]==val for k,val in o.items());assert r['review']==v;assert r['id']==s['id'];checks+=3
 if w['status']=='ready':
  capital=int(w['opening']);F=Q(1);adds=takes=0;prev=None;day=0
  for r,s in zip(rows,w['steps']):
   v=r['review'];amount=int(v['amount']);assert v['decision']=='approve';assert int(v['day'])>=day;day=int(v['day']);assert int(s['capitalBefore'])==capital;checks+=3
   if r['rule']=='valuation':
    F*=Q(amount,capital);capital=amount
   else:
    assert prev and prev['rule']=='valuation' and prev['review']['day']==v['day'];checks+=1
    if r['rule']=='contribution':adds+=amount;capital+=amount
    else:takes+=amount;capital-=amount
   assert capital>0;assert int(s['capitalAfter'])==capital;assert Q(s['cumulativeFactor']['exact'])==F;checks+=3;prev=r
  gain=capital-int(w['opening'])-adds+takes
  assert prev['rule']=='valuation';assert Q(w['timeWeightedReturn']['exact'])==F-1;assert Q(w['naiveNetGainReturn']['exact'])==Q(gain,int(w['opening']));assert int(w['closing'])==capital;assert int(w['netGain'])==gain;checks+=5
 else:assert w['timeWeightedReturn'] is None and w['closing'] is None and len(w['errors'])>0;checks+=1
 cf=f.with_suffix('.csv')
 if cf.exists():
  data=list(csv.DictReader(cf.open(newline='')));assert len(data)==len(rows);checks+=1
  def escaped(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
  for row,r in zip(data,rows):
   for key,value in [('id',r['id']),('original_note',r['note']),('original_day',r['day']),('original_minor_units',r['amount']),('profile',r['review']['profile']),('rule',r['rule']),('reviewed_day',r['review']['day']),('reviewed_minor_units',r['review']['amount']),('decision',r['review']['decision']),('review_note',r['review']['note'])]:assert row[key]==escaped(value),(f,key,row[key],value);checks+=1
 sf=f.with_name(f.stem+'-steps.csv')
 if sf.exists():
  data=list(csv.DictReader(sf.open(newline='')));assert len(data)==len(w['steps']);checks+=1
  for row,s in zip(data,w['steps']):
   assert row['id']==s['id'];assert row['account_status']==w['status'];assert row['capital_before']==(s['capitalBefore'] or '');assert row['period_factor_exact']==(s.get('periodFactor') or {}).get('exact','');assert row['cumulative_factor_exact']==(s.get('cumulativeFactor') or {}).get('exact','');checks+=5
 mf=f.with_suffix('.md')
 if mf.exists():
  md=mf.read_text();assert all(r['note'] in md and r['review']['note'] in md for r in rows);assert w['status']!='ready' or w['timeWeightedReturn']['exact'] in md;checks+=2
for tag in ['reviewed','held']:
 a=json.loads(Path(prefix+'export-'+tag+'.json').read_text());assert a['review'][0]['note']=='=SUM(1,2)\nReviewed "cash", <script> & 🧾';checks+=1
report={'jsonArtifacts':files,'independentParsers':'Python csv + json + fractions.Fraction','assertions':checks};Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS artifacts',prefix,checks)
