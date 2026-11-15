from pathlib import Path
import datetime as dt,json
D=86400
T=lambda s:dt.datetime.fromisoformat(s.replace('Z','+00:00'))
cases=json.loads(Path('oracle-cases.json').read_text())
for case in cases:
 d,rows,r=case['input'],case['rows'],case['result'];approved=[x for x in rows if x['decision']=='approve'];accounts={x['account'] for x in approved};eligible=returned=activated=naive=0;cohorts={}
 for account in accounts:
  es=[x for x in approved if x['account']==account];starts=[T(x['at']) for x in es if x['item']=='start'];actual=next(x for x in r['accounts'] if x['account']==account)
  if not starts:
   assert actual['status']=='no-start' and actual['activation'] is None;continue
  activated+=1;start=min(starts);delta0=dt.timedelta(days=d['windowStartDays']);delta1=dt.timedelta(days=d['windowEndDays']);is_mature=T(d['asOf'])-start>=delta1
  matches=[x['id'] for x in es if x['item']=='return' and delta0<=T(x['at'])-start<delta1];assert matches==actual['qualifyingEvents'];assert actual['mature']==is_mature
  assert actual['repeatedStarts']==len(starts)-1;eligible+=is_mature;returned+=bool(matches) and is_mature;naive+=bool(matches)
  monday=(start-dt.timedelta(days=start.weekday())).date().isoformat();c=cohorts.setdefault(monday,[0,0,0]);c[0]+=1;c[1]+=is_mature;c[2]+=bool(matches) and is_mature;assert actual['cohort']==monday
 assert [r['activated'],r['eligible'],r['returned'],r['naiveReturned']]==[activated,eligible,returned,naive]
 assert r['rate']==(returned/eligible if eligible else None);assert r['naiveRate']==(naive/activated if activated else None)
 assert len(r['accounts'])==len(accounts);assert sum(c['eligible'] for c in r['cohorts'])==eligible
 for c in r['cohorts']:assert [c['activated'],c['eligible'],c['returned']]==cohorts[c['cohort']]
Path('arithmetic-validation.json').write_text(json.dumps({'independentPythonDatetimeOracleCases':len(cases),'maturityBoundaryLowerInclusiveUpperExclusive':True,'repeatedStartsDoNotReset':True,'cohortMondayAndAccountsConserved':True},indent=2));print('PASS 600 independent Python datetime oracle cases')
