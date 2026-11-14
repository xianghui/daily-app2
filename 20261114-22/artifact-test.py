import json,csv,io
from pathlib import Path
checks=[]
for name in ['fixture0','fixture1','reviewed','max']:
 d=json.loads(Path('export-'+name+'.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())))
 assert len(rows)==len(d['reviews'])==len(d['originalInput']['records'])
 assert [r['id'] for r in rows]==[r['id'] for r in d['reviews']]
 for i,(r,x) in enumerate(zip(rows,d['reviews'])):
  assert json.loads(r['original'])==d['originalInput']['records'][i]
  for k in ['demand','scenario_weight']: assert int(r[k])==x['demand' if k=='demand' else 'weight']
  assert r['review_note']==("'" if x['reviewNote'].startswith(('=','+','-','@','\t','\r')) else '')+x['reviewNote']
  assert r['owner']==("'" if x['owner'].startswith(('=','+','-','@','\t','\r')) else '')+x['owner']
 assert d['total']==d['approved']+d['held'];checks.append({'artifact':name,'preservedRows':len(rows)})
d=json.loads(Path('export-reviewed.json').read_text());assert '\n' in d['reviews'][0]['reviewNote'];assert 'quoted' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVAndJSONParsing':checks,'multilineFormulaEscaping':True,'reviewedMarkdownReopened':True},indent=2));print('PASS artifacts parsed with originals, numbers, edits and multiline formula-safe text')
