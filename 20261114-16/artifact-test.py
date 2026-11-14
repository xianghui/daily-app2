import csv,json,io
from pathlib import Path
checks=[]
for stem in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())))
 assert len(rows)==len(r['reviews'])==len(r['originalInput']['records'])
 for i,(x,y,z) in enumerate(zip(rows,r['reviews'],r['originalInput']['records'])):
  assert x['id']==y['id']==z['id'];assert json.loads(x['original'])==z;assert int(x['count'])==y['count'];assert x['actual']==str(y['actual']).lower();assert x['alerted']==str(y['alerted']).lower()
  for k in ['owner','review_note']:
   v=y['owner' if k=='owner' else 'reviewNote'];assert x[k]==("'"+v if v and v[0] in '=+-@\t\r' else v)
 assert sum(x['count'] for x in r['reviews'] if x['decision']=='approve')==sum(x['total'] for x in r['rules'])
 checks.append({'artifact':stem,'rows':len(rows),'allOriginalsAndReviewedCountsPreserved':True})
r=json.loads(Path('export-reviewed.json').read_text());assert '\n' in r['reviews'][0]['reviewNote'];assert 'quoted' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent CSV/JSON original/count/multiline round-trips',checks)
