import json,csv,io
from pathlib import Path
reports=[]
for stem in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())))
 assert len(rows)==r['total']+(1 if r['plan'] and any(l['id']=='calculated-water' for l in r['plan']['lines']) else 0)
 for j,x in enumerate(r['reviews']):
  row=rows[j];assert row['id']==x['id'];assert row['source']==r['originalInput']['records'][j]['note'];assert int(row['reviewed_grams'])==x['grams']
  for k,col in [('owner','owner'),('reviewNote','review_note')]:
   expect=x[k];expect="'"+expect if expect and expect[0] in '=+-@\t\r' else expect
   assert row[col]==expect,(stem,col)
 assert sum(int(x['planned_grams']) for x in rows)==r['originalInput']['targetGrams']
 assert {l['id']:l['grams'] for l in r['plan']['lines']}=={x['id']:int(x['planned_grams']) for x in rows}
 reports.append({'artifact':stem,'originals':r['total'],'csvRows':len(rows),'mass':r['plan']['mass']})
r=json.loads(Path('export-reviewed.json').read_text());assert r['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify 🍞';assert r['reviews'][0]['owner']=='=Owner\n"second", line';md=Path('export-reviewed.md').read_text();assert r['reviews'][0]['reviewNote'] in md
for stem in ['held','all-held','wet','duplicate','no-flour','challenge']:
 r=json.loads(Path('export-'+stem+'.json').read_text());assert r['plan'] is None;assert len(r['reviews'])==len(r['originalInput']['records'])==r['total'];assert r['blocked']
Path('artifact-validation.json').write_text(json.dumps({'independentCSVAndJSONParsing':reports,'multilineEscapingAndCompleteBlockers':True},indent=2));print('PASS independently reopened browser-downloaded CSV/JSON/Markdown artifacts')
