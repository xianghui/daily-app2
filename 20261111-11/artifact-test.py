import csv,json,math
from pathlib import Path
checks=[]
for stem in ['reviewed','max']:
 a=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(Path('export-'+stem+'.csv').open(newline='')))
 assert len(rows)==len(a['records'])
 for r,s in zip(rows,a['records']):
  assert r['id']==s['id'] and r['original_note']==s['original']['text']
  assert float(r['distance'])==s['distance'] and r['unit']==s['unit'] and int(r['occupants'])==s['occupants']
  assert r['reviewed_factor']==s['factor'] and r['decision']==s['decision']
  if s['kgCO2e'] is not None: assert math.isclose(float(r['kgCO2e']),s['kgCO2e'],abs_tol=1e-10)
  note=s['note'];assert r['reviewer_note']==("'"+note if note and note[0] in '=+-@\t\r' else note)
 checks.append(stem+': CSV independent parse, record conservation, values, quoted newlines and formula escaping')
a=json.loads(Path('export-reviewed.json').read_text());assert a['records'][0]['note']=='=1+1, "review"\nnext line';assert a['records'][0]['original']['distance']==15 and a['records'][0]['distance']==16
md=Path('export-reviewed.md').read_text();assert all(r['id'] in md for r in a['records']);assert '16 km' in md
held=json.loads(Path('export-held.json').read_text());assert held['metrics']['totalKgCO2e'] is None and held['records'][0]['decision']=='hold'
assert json.loads(Path('export-max.json').read_text())['originalInput']==json.loads(Path('export-roundtrip.json').read_text())['originalInput']
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'checks':checks+['current reviewed Markdown and JSON; lossless original JSON roundtrip; holds remain with blocked complete totals']},indent=2));print('Artifacts independently parsed and validated')
