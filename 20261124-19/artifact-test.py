import csv,json,os
from pathlib import Path
prefix=os.environ.get('PREFIX','')
reports=[]
for name in ['fixture0','fixture1','reviewed','max']:
 p=Path(prefix+'export-'+name)
 audit=json.loads(p.with_suffix('.json').read_text());rows=list(csv.DictReader(p.with_suffix('.csv').open(newline='')));rel=json.loads(Path(str(p)+'.release.json').read_text());md=p.with_suffix('.md').read_text()
 assert len(rows)==len(audit['checks'])==len(audit['originalInput']['records'])
 def safe(v):
  s=str(v)
  return "'"+s if s and s[0] in '=+-@\t\r' else s
 for i,(c,row,review,original)in enumerate(zip(audit['checks'],rows,audit['reviews'],audit['originalInput']['records'])):
  assert row['id']==safe(c['id']);assert row['review_note']==safe(review['note']);assert row['original_snapshot']==safe(original['raw']);assert row['reviewed_snapshot']==safe(review['raw']);assert row['expected_cookie_header']==safe(c.get('header',''))
  assert c['included']+c['excluded']==len(json.loads(c['raw']))
  assert row['source_context']==safe(original['context'])
 assert len(rel['cases'])==audit['metrics']['ready']
 for fixture,c in zip(rel['cases'],[c for c in audit['checks'] if c['status']=='ready']):
  assert fixture['cookies']==json.loads(c['raw']);assert fixture['expectedCookieHeader']==c['header'];assert fixture['includedIndices']==c['sentIndices']
  cookies=fixture['cookies'];sent=fixture['includedIndices'];assert len(set(sent))==len(sent);assert all(0<=i<len(cookies)for i in sent)
  assert fixture['expectedCookieHeader']=='; '.join(cookies[i]['name']+'='+cookies[i]['value'] for i in sent)
 if name=='reviewed':assert rows[0]['review_note']=='\'=SUM(1,2)\nReviewed "cookie", exactly.' and 'reviewed-value' in rel['cases'][0]['expectedCookieHeader']
 assert 'Original input:' in md and 'Cookie Trail' in md
 reports.append({'fixture':name,'records':len(rows),'releaseCases':len(rel['cases']),'independentCSVJSONParse':True,'allOriginalsAndReviewsPreserved':True})
Path(prefix+'artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS artifacts',reports)
