import csv,json,io
from pathlib import Path
checks=[]
for stem in ['export-fixture0','export-fixture1','export-reviewed','export-max']:
 d=json.loads(Path(stem+'.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path(stem+'.csv').read_text())))
 assert len(rows)==d['total']
 assert [r['id'] for r in rows]==[r['id'] for r in d['reviews']]
 for r,x in zip(rows,d['reviews']):
  assert json.loads(r['original'])==d['originalInput']['records'][rows.index(r)]
  assert float(r['nominal'])==x['nominal'] and float(r['half_tolerance'])==x['tolerance'] and int(r['sign'])==x['sign']
  for k,v in [('owner',x['owner']),('review_note',x['reviewNote'])]:
   assert r[k]==("'"+v if v.startswith(('=','+','-','@','\t','\r')) else v)
 checks.append({'artifact':stem,'rows':len(rows),'allRecordsPreserved':True})
r=json.loads(Path('export-reviewed.json').read_text()); assert '\n' in r['reviews'][0]['owner'] and '\n' in r['reviews'][0]['reviewNote'];assert 'quoted' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent CSV parser, signed numbers, multiline formula escaping, JSON originals and Markdown')
