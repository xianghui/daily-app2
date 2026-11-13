import csv,json,io
from pathlib import Path
checks=[]
for name in ['fixture0','fixture1','reviewed','max']:
 d=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())))
 assert len(rows)==d['total']==len(d['originalInput']['records'])
 for x,r,o in zip(rows,d['reviews'],d['originalInput']['records']):
  assert x['id']==r['id']==o['id']
  def esc(v): return "'"+v if v and v[0] in '=+-@\t\r' else v
  assert x['source']==esc(o['note']);assert x['review_note']==esc(r['reviewNote']);assert x['owner']==esc(r['owner'])
  assert int(x['received_grams'])==r['mass'];assert int(x['moisture_basis_points'])==r['moisture']
  line=next((l for l in d['lines'] if l['id']==r['id']),None)
  if line:
   for key,col in [('dry','dry_grams'),('water','water_grams'),('standard','standard_grams'),('change','change_grams')]: assert int(x[col])==line[key]
 checks.append(dict(artifact=name,records=len(rows)))
d=json.loads(Path('export-reviewed.json').read_text());assert '\n' in d['reviews'][0]['reviewNote'] and '\n' in d['reviews'][0]['owner'];md=Path('export-reviewed.md').read_text();assert d['reviews'][0]['reviewNote'] in md and d['reviews'][0]['owner'] in md
Path('artifact-validation.json').write_text(json.dumps(dict(independentlyParsedCSV=checks,multilineEditsPreserved=True,formulaEscaping=True),indent=2));print('PASS independently parsed artifact conservation')
