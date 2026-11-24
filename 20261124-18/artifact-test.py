from pathlib import Path
import csv,json,os,io
prefix=os.environ.get('PREFIX','');reports=[]
def protected(x):
 s=str(x or '')
 return "'"+s if s.startswith(('=','+','-','@','\t','\r')) else s
for name in ['fixture0','fixture1','reviewed','max']:
 audit=json.loads(Path(prefix+'export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(prefix+'export-'+name+'.csv').read_text())));release=json.loads(Path(prefix+'export-'+name+'.release.json').read_text());md=Path(prefix+'export-'+name+'.md').read_text()
 assert len(rows)==len(audit['originalInput']['records'])==audit['metrics']['records']
 assert audit['metrics']['ready']+audit['metrics']['held']+audit['metrics']['blocked']==len(rows)
 for row,src,review,check in zip(rows,audit['originalInput']['records'],audit['reviews'],audit['checks']):
  for k,v in [('id',src['id']),('source_context',src['context']),('original_case',src['raw']),('reviewed_case',review['raw']),('review_note',review['note']),('cors_result',check.get('selected',''))]:assert row[k]==protected(v),(name,k)
  assert json.dumps(src['raw'],ensure_ascii=False,separators=(',',':')) in md
 assert len(release['cases'])==audit['metrics']['ready']
 for case,check in zip(release['cases'],[x for x in audit['checks'] if x['status']=='ready']):assert case['snapshot']==json.loads(check['raw']) and case['expected']==check['selected']
 if name=='reviewed':assert rows[0]['review_note']=="'=SUM(1,2)\nReviewed \"origin\", exactly."
 if name=='max':assert len(rows)==24 and '\n' in rows[0]['id']
 reports.append({'case':name,'records':len(rows),'releaseCases':len(release['cases']),'exactReviewedStrings':True})
for name,status in [('held','held'),('blocked','blocked')]:assert any(x['status']==status for x in json.loads(Path(prefix+'export-'+name+'.json').read_text())['checks'])
Path(prefix+'artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent JSON/CSV/Markdown/release artifact parsing')
