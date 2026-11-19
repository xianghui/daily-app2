from pathlib import Path
import json,csv,math
reports=[]
for file in sorted(Path('.').glob('export-*.json')):
 r=json.loads(file.read_text());assert r['total']==len(r['originalInput']['logs'])==len(r['reviews'])
 assert [x['id'] for x in r['reviews']]==[x['id'] for x in r['originalInput']['logs']]
 assert r['approved']+r['held']==r['total']
 if r['status']=='ready':
  assert len(r['plans'])==r['total']
  for p in r['plans']:
   z=next(x for x in r['originalInput']['zones'] if x['id']==p['zone'])
   gamma=math.log(z['rh']/100)+17.62*z['air']/(243.12+z['air']);dp=243.12*gamma/(17.62-gamma)
   assert abs(dp-p['dewpoint'])<1e-10
   assert abs(p['temperature']-dp-p['clearance'])<1e-10
   assert abs(max(0,dp+r['originalInput']['margin']-p['temperature'])-p['deficit'])<1e-10
  assert r['summary']['rechecks']==sum(x['recheck'] for x in r['plans'])
 else:assert not r['plans']
 f=file.with_suffix('.csv')
 if f.exists():
  with f.open(newline='') as stream: rows=list(csv.DictReader(stream))
  assert len(rows)==r['total']
  for row,review in zip(rows,r['reviews']):
   assert row['id']==review['id'];assert float(row['reviewed_temperature_C'])==review['temperature'];assert row['reviewed_zone']==review['zone']
   note=review['reviewNote'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
   assert row['review_note']==expected
 if file.name=='export-reviewed.json':assert r['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
 if file.name=='export-max.json':assert r['total']==16 and r['reviews'][-1]['reviewNote']=='last note\nkept'
 reports.append({'file':file.name,'records':r['total'],'independentRecomputation':True,'csvParsed':f.exists()})
for n in [0,1]:
 text=Path(f'export-fixture{n}.md').read_text();d=json.loads(Path(f'export-fixture{n}.json').read_text())
 assert all(x['id'] in text and x['zoneText'] in text for x in d['originalInput']['logs'])
Path('artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent JSON/CSV/Markdown parse and dewpoint recomputation:',len(reports),'audits')
