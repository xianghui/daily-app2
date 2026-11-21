import json,csv,io
from pathlib import Path
out=[]
for k in ['fixture0','fixture1','reviewed','held','max']:
 r=json.loads(Path('export-'+k+'.json').read_text());assert len(r['reviews'])==len(r['originalInput']['paths'])==r['total'];assert r['total']==r['approved']+r['held']+r['excluded'];at=r['originalInput']['start'];total=0
 for s in r['optimal']['steps']:
  assert s['from']==at;at=s['to'];total+=s['minutes']
 assert at==r['originalInput']['start'];assert total==r['optimal']['minutes'];assert set(s['id'] for s in r['optimal']['steps'])==set(e['id'] for e in r['reviews'] if e['decision']=='approve')
 if k in ['fixture0','fixture1','reviewed']:
  suffix='reviewed-audit' if k=='reviewed' else k+'-audit-csv';rows=list(csv.DictReader(io.StringIO(Path('export-'+suffix+'.csv').read_text())));assert len(rows)==r['total']
  for i,e in enumerate(rows):
   assert e['original_from']==r['originalInput']['paths'][i]['from'];assert e['reviewed_from']==r['reviews'][i]['from'];assert int(e['reviewed_minutes'])==r['reviews'][i]['minutes'];assert json.loads(e['from_evidence_json'])==r['reviews'][i]['fromRank']
  suffix='reviewed-walk' if k=='reviewed' else k+'-walk-csv';walk=list(csv.DictReader(io.StringIO(Path('export-'+suffix+'.csv').read_text())));assert len(walk)==len(r['optimal']['steps'])
  for a,b in zip(walk,r['optimal']['steps']):assert a['transition']==b['id'] and a['from']==b['from'] and int(a['estimated_execution_minutes'])==b['minutes']
  if k=='reviewed':
   assert rows[0]['note']=="'=SUM(1,2)\n\"owner\", recheck";assert any(e['review_note']==rows[0]['note'] for e in walk);assert r['reviews'][0]['note']=='=SUM(1,2)\n"owner", recheck';assert r['reviews'][0]['note'] in Path('export-reviewed.md').read_text()
 out.append({'artifact':k,'records':r['total'],'walkSteps':len(r['optimal']['steps']),'covered':r['optimal']['covered'],'closed':True,'conserved':True})
Path('artifact-validation.json').write_text(json.dumps(out,indent=2));print('PASS independent JSON/CSV/Markdown reopened, multiline formula escaping, every source and route step conserved')
