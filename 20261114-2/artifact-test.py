import csv,json
from pathlib import Path
checks=[]
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(Path('export-'+name+'.csv').open(newline='')))
 assert len(rows)==r['total']==len(r['originalInput']['records'])
 for i,(c,v) in enumerate(zip(rows,r['reviews'])):
  assert c['id']==v['id'];assert c['source']==r['originalInput']['records'][i]['note'];assert int(c['total'])==v['total'];assert int(c['converted'])==v['converted'];assert c['stage']==v['kind'];assert c['period']==v['period']
  for field in ['owner','review_note']:
   value=v['owner' if field=='owner' else 'reviewNote'];expected=("'"+value) if value and value[0] in '=+-@\t\r' else value
   assert c[field]==expected,(field,c[field],expected)
 checks.append(dict(name=name,rows=len(rows),allFieldsRetained=True))
r=json.loads(Path('export-reviewed.json').read_text());assert '\n' in r['reviews'][0]['reviewNote'];assert r['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text();assert r['reviews'][0]['owner'] in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent JSON/CSV/Markdown artifact parsing and multiline escaping')
