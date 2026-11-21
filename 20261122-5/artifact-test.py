import json,csv,io
from pathlib import Path
checks=[]
for n in [0,1]:
 r=json.loads(Path(f'export-fixture{n}.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(f'export-fixture{n}-csv.csv').read_text())));assert len(rows)==len(r['reviews'])
 for x,y in zip(r['reviews'],rows):
  assert x['description']==y['source_description'];assert x['compound']==y['reviewed_compound'];assert x['decision']==y['decision']
  check=next(c for c in r['analysis']['checks']if c['id']==x['equation']);i=[z for z in r['reviews']if z['equation']==x['equation']].index(x);assert int(y['coefficient'])==check['coefficients'][i]
  # Independently count atoms using the reviewed formulas and downloaded coefficients.
 for check in r['analysis']['checks']:
  totals={'left':{},'right':{}}
  import re
  for y in rows:
   if y['equation']!=check['id']:continue
   for el,q in re.findall(r'([A-Z][a-z]?)(\d*)',y['formula']):totals[y['side']][el]=totals[y['side']].get(el,0)+int(q or 1)*int(y['coefficient'])
  assert totals['left']==totals['right']
 md=Path(f'export-fixture{n}-markdown.md').read_text();assert all(c['equation']in md for c in r['analysis']['checks']);checks.append(f'Fixture {n}: independently parsed CSV, all source rows, coefficients and atom conservation; Markdown answer key')
r=json.loads(Path('export-reviewed-json.json').read_text());note='=SUM(1,2)\nReviewed "source", preserved.';assert r['reviews'][0]['note']==note
rows=list(csv.DictReader(io.StringIO(Path('export-reviewed-csv.csv').read_text())));assert rows[0]['review_note']=="'"+note;assert 'preserved.'in Path('export-reviewed-markdown.md').read_text()
r=json.loads(Path('export-rejected.json').read_text());assert r['analysis']['checks'][0]['status']=='held';assert 'coefficients'not in r['analysis']['checks'][0];assert len(r['reviews'])==12
r=json.loads(Path('export-max.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-max-csv.csv').read_text())));assert len(rows)==len(r['reviews'])==96;assert all(row['coefficient']==''for row in rows);assert len(r['originalInput']['equations'])==12
checks+=['Multiline quoted formula-like reviewer note survives JSON/Markdown and sanitized CSV','Held equations have no released coefficients and preserve originals','Maximum batch preserves all 96 source compounds /12 equations in JSON and CSV']
Path('artifact-validation.json').write_text(json.dumps({'checks':checks,'allPassed':True},indent=2));print('PASS independently parsed actual browser artifacts')
