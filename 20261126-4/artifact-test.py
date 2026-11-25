import json,csv,sys
from pathlib import Path
from fractions import Fraction as Q
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';checks=0
for f in Path('.').glob(prefix+'export-*.json'):
 a=json.loads(f.read_text());assert a['schema']=='exit-ledger/v1';assert len(a['rows'])==len(a['original']['requests']);checks+=2
 assert [x['id'] for x in a['rows']]==[x['id'] for x in a['original']['requests']];checks+=1
 approved=[x for x in a['rows'] if x['review']['decision']=='approve'];s=Q(1);failure=Q(0);retire=Q(0);km=Q(1)
 for step in a['curve']['steps']:
  risk=[r for r in approved if int(r['review']['day'])>=step['day']];now=[r for r in risk if int(r['review']['day'])==step['day']];d=sum(r['rule']=='failure' for r in now);e=sum(r['rule']=='retirement' for r in now);failure+=s*Q(d,len(risk));retire+=s*Q(e,len(risk));s*=1-Q(d+e,len(risk));km*=1-Q(d,len(risk))
  assert step['atRiskIds']==[r['id'] for r in risk];assert step['atRisk']==len(risk);assert step['remaining']==len(risk)-len(now);checks+=3
  for k,v in [('failureIncidence',failure),('retirementIncidence',retire),('eventFree',s),('naiveFailure',1-km)]:assert Q(step[k]['exact'])==v;checks+=1
  assert s+failure+retire==1;checks+=1
 csvpath=f.with_suffix('.csv')
 if csvpath.exists():
  rows=list(csv.DictReader(csvpath.open(newline='')));assert len(rows)==len(a['rows']);checks+=1
  for x,y in zip(rows,a['rows']):
   for k,v in [('id',y['id']),('original_note',y['note']),('original_day',y['day']),('reviewed_day',y['review']['day']),('decision',y['review']['decision']),('review_note',y['review']['note'])]:
    if isinstance(v,str) and v[:1] in '=+-@\t\r' and v:v="'"+v
    assert x[k]==v,(k,x[k],v);checks+=1
 curvepath=f.with_name(f.stem+'-curve.csv')
 if curvepath.exists():
  rows=list(csv.DictReader(curvepath.open(newline='')));assert len(rows)==len(a['curve']['steps']);checks+=1
  for x,y in zip(rows,a['curve']['steps']):assert Q(x['failure_incidence_exact'])==Q(y['failureIncidence']['exact']);assert int(x['at_risk'])==y['atRisk'];checks+=2
 md=f.with_suffix('.md')
 if md.exists():
  text=md.read_text()
  for r in a['rows']:assert r['id'] in text;assert r['note'] in text;assert r['review']['note'] in text;checks+=3
report={'independentAssertions':checks,'prefix':prefix,'files':len(list(Path('.').glob(prefix+'export-*'))),'parsers':'Python json, csv and fractions.Fraction'};Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS artifacts',report)
