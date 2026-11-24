from pathlib import Path
import json,csv,os
from oracle_test import oracle
prefix=os.environ.get('PREFIX','');reports=[];assertions=0
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path(prefix+'export-'+name+'.json').read_text());rel=json.loads(Path(prefix+'export-'+name+'.release.json').read_text());rows=list(csv.DictReader(Path(prefix+'export-'+name+'.csv').open(newline='')))
 assert len(r['checks'])==len(r['originalInput']['records'])==len(rows);assert len(rel['cases'])==r['metrics']['ready'];assert rel['robots']==r['originalInput']['robots'];assertions+=3
 def escaped(v):
  s=str(v or '')
  return "'"+s if s[:1]in['=','+','-','@','\t','\r']else s
 for i,(c,row)in enumerate(zip(r['checks'],rows)):
  assert row['id']==escaped(c['id']);assert row['original_case']==r['originalInput']['records'][i]['raw'];assert row['reviewed_case']==c['raw'];assert row['review_note']==escaped(r['reviews'][i]['note']);assert row['robots_policy']==r['originalInput']['robots'];assertions+=5
  if c['status']=='ready':assert row['crawl']==oracle(rel['robots'],c['agent'],c['path']);assertions+=1
 for c in rel['cases']:
  check=next(x for x in r['checks']if x['id']==c['id']);assert c['path']==json.loads(check['raw'])['path'];assert c['agent']==check['agent'];assert c['expected']==check['selected']==oracle(rel['robots'],c['agent'],c['path']);assert c['winningLine']==check['winningLine'];assertions+=4
 if name=='reviewed':assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "clock", exactly.';assert rows[0]['review_note'].startswith("'=SUM(1,2)\n");assert r['checks'][0]['selected']=='disallow';assertions+=3
 md=Path(prefix+'export-'+name+'.md').read_text();assert all(json.dumps(c['id'],ensure_ascii=False)in md for c in r['checks']);assertions+=1
 assert r['metrics']['allowed']+r['metrics']['disallowed']+r['metrics']['blocked']+r['metrics']['held']==len(rows);assertions+=1
 assert r['metrics']['disagreements']==sum(c['selected']!=c['baseline']for c in r['checks']if c['status']=='ready');assertions+=1
 reports.append({'fixture':name,'rows':len(rows),'recordsPreserved':True,'releaseMatchesReviewedSnapshot':True,'csvIndependentPythonParser':True,'releasedCasesIndependentOraclePassed':True})
for name in ['held','blocked','undo','impact0','impact1']:
 r=json.loads(Path(prefix+'export-'+name+'.json').read_text());assert len(r['checks'])==len(r['originalInput']['records']);assertions+=1
 if name=='held':assert r['metrics']['held']==1;assertions+=1
 if name=='blocked':assert r['metrics']['blocked']==1;assertions+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'fixtures':reports,'independentAssertions':assertions},indent=2));print('PASS artifacts',assertions)
