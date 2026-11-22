from pathlib import Path
import json,csv,io
checks=[]
for p in Path('.').glob('export-*-json.json'):
 r=json.loads(p.read_text());assert r['schema']=='shard-shelter/1';d=r['originalInput'];assert len(r['reviews'])==len(d['shards']);a=r['analysis'];plan=a.get('plan')
 if plan:
  assert len(plan['placements'])==len(d['shards']);assert sum(x['cost'] for x in plan['placements'])==plan['cost'];assert sum(x['moved']for x in plan['placements'])==plan['moves'];assert all(x['used']<=x['capacity']for x in plan['loads']);assert all(c['lost']<=s['parity']for s in plan['stripes']for c in s['cases']);assert all(not x['pinned']or x['from']==x['to']for x in plan['placements'])
 c=p.with_name(p.name.replace('-json.json','-csv.csv'))
 if c.exists():
  rows=list(csv.DictReader(io.StringIO(c.read_text(newline='') if False else c.read_text())));assert len(rows)==len(d['shards'])
  for i,row in enumerate(rows):
   expected=r['reviews'][i]['note'];protected="'"+expected if expected and expected[0]in '=+-@\t\r'else expected
   assert row['note']==protected;raw=d['shards'][i]['id'];assert row['shard']==("'"+raw if raw and raw[0]in '=+-@\t\r'else raw)
   if plan:assert row['planned_domain']==plan['placements'][i]['to']
 checks.append({'file':p.name,'rows':len(d['shards']),'status':a['status'],'independentlyParsedCSV':c.exists()})
r=json.loads(Path('export-reviewed-json.json').read_text());assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", preserved.';assert r['reviews'][0]['note']in Path('export-reviewed-markdown.md').read_text().replace('\\n','\n').replace('\\"','"')
Path('artifact-validation.json').write_text(json.dumps({'artifacts':checks,'reviewedMultilineEscapingPreserved':True,'allRecordsRetained':True},indent=2));print('PASS independent artifact parses',len(checks))
