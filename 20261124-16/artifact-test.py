from pathlib import Path
import json,csv,os,datetime
prefix=os.environ.get('PREFIX','')
reports=[]
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path(prefix+'export-'+name+'.json').read_text());rel=json.loads(Path(prefix+'export-'+name+'.release.json').read_text());rows=list(csv.DictReader(Path(prefix+'export-'+name+'.csv').open(newline='')))
 assert len(r['checks'])==len(r['originalInput']['records'])==len(rows)
 assert len(rel['cases'])==r['metrics']['ready']
 def escaped(v):
  s=str(v or '')
  return "'"+s if s[:1] in ['=','+','-','@','\t','\r'] else s
 for i,(c,row) in enumerate(zip(r['checks'],rows)):
  assert row['id']==escaped(c['id']);assert row['original_case']==r['originalInput']['records'][i]['raw'];assert row['reviewed_case']==c['raw'];assert row['review_note']==escaped(r['reviews'][i]['note'])
 for c in rel['cases']:
  check=next(x for x in r['checks'] if x['id']==c['id']);assert c['input']==json.loads(check['raw']);assert c['expectedAction']==check['selected'];assert c['expectedRetryAt']==check['retryAt']
  if c['expectedAction']=='retry':
   now=datetime.datetime.fromisoformat(c['input']['now'].replace('Z','+00:00'));at=datetime.datetime.fromisoformat(c['expectedRetryAt'].replace('Z','+00:00'));end=datetime.datetime.fromisoformat(c['input']['deadline'].replace('Z','+00:00'));assert (at-now).total_seconds()==c['requiredDelaySeconds'];assert at<=end
 if name=='reviewed':assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "clock", exactly.';assert rows[0]['review_note'].startswith("'=SUM(1,2)\n");assert r['checks'][0]['retryAt']=='2026-11-24T07:00:10.000Z'
 md=Path(prefix+'export-'+name+'.md').read_text();assert all(json.dumps(c['id'],ensure_ascii=False) in md for c in r['checks'])
 reports.append({'fixture':name,'rows':len(rows),'recordsPreserved':True,'releaseMatchesReviewedSnapshot':True,'csvIndependentPythonParser':True,'replayDeadlineInvariant':True})
Path(prefix+'artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS artifacts',reports)
