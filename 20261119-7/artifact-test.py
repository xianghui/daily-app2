import csv,json,pathlib,math
report=[]
for name in ['fixture0','fixture1','reviewed','max']:
 p=pathlib.Path('export-'+name);r=json.loads(p.with_suffix('.json').read_text());rows=list(csv.DictReader(p.with_suffix('.csv').open(newline='')));assert len(rows)==r['total']
 for i,(row,rev) in enumerate(zip(rows,r['reviews'])):
  assert row['id']==rev['id'];assert float(row['original_x_cm'])==r['originalInput']['observations'][i]['x'];assert float(row['original_y_cm'])==r['originalInput']['observations'][i]['y'];assert row['reviewed_inventory']==rev['item'];assert float(row['reviewed_mass_kg'])==rev['mass'];assert float(row['reviewed_x_cm'])==rev['x'];assert float(row['reviewed_y_cm'])==rev['y'];assert row['decision']==rev['decision'];expected=rev['reviewNote'];expected=("'"+expected)if expected and expected[0]in'=+-@\t\r'else expected;assert row['review_note']==expected
  candidate=next((c for c in r['candidates']if c['id']==rev['id']),None)
  if candidate:assert float(row['proposed_x_cm'])==candidate['to']['x'];assert float(row['proposed_y_cm'])==candidate['to']['y'];assert float(row['move_cm'])==candidate['distance']
 mass=math.fsum(x['mass']for x in r['reviews']);assert mass==r['totalMass'];assert abs(math.fsum(x['mass']*x['x']for x in r['reviews'])/mass-r['center']['x'])<1e-8
 if name.startswith('fixture'):assert all(x['id']+':'in p.with_suffix('.md').read_text()for x in r['reviews'])
 report.append({'artifact':str(p),'records':len(rows),'currentReviewAndOriginalsSurvive':True})
for j in [0,1]:
 r=json.loads(pathlib.Path(f'export-move{j}.json').read_text());assert r['inTarget'];assert not r['candidates'];assert r['originalInput']['observations']!=[{k:v for k,v in x.items()if k in['id','description','x','y']}for x in r['reviews']]
assert json.loads(pathlib.Path('export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
pathlib.Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent JSON/CSV/Markdown parses; mass/position/records; staged move; quoted multiline/formula escaping')
