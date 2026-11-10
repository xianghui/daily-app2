import json,csv,glob
from pathlib import Path
for name in glob.glob('export-*.json'):
 a=json.load(open(name));assert len(a['records'])==len(a['originalInput']['jobs'])
 assert [r['id'] for r in a['records']]==[j['id'] for j in a['originalInput']['jobs']]
 if a['ready']:
  assert sorted(x['id'] for x in a['schedule'])==sorted(j['id'] for j in a['originalInput']['jobs'])
  matrix=a['originalInput']['costs'];ix={f['id']:i for i,f in enumerate(a['originalInput']['families'])};last=a['originalInput']['start'];total=0
  for s in a['schedule']:
   assert s['from']==last;assert s['changeoverMinutes']==matrix[ix[last]][ix[s['family']]];total+=s['changeoverMinutes'];assert s['cumulativeSetupMinutes']==total;last=s['family']
  assert total==a['metrics']['optimizedMinutes']
a=json.load(open('export-reviewed.json'));rows=list(csv.DictReader(open('export-reviewed.csv',newline='')));assert len(rows)==len(a['records'])
for r,source in zip(rows,a['records']):
 assert r['source']==source['original']['text'];assert r['reviewed_family']==source['family'];assert r['decision']==source['decision'];assert r['note']==("'"+source['note'] if source['note'].startswith(('=','+','-','@','\t','\r')) else source['note'])
md=Path('export-reviewed.md').read_text();assert all(r['id'] in md for r in a['records'])
Path('artifact-validation.json').write_text(json.dumps({'auditsParsed':len(glob.glob('export-*.json')),'sourceConservation':True,'independentTransitionArithmetic':True,'csvQuotesMultilineFormulaEscaping':True,'reviewedEditsSurvive':True},indent=2));print('PASS independent JSON/CSV/Markdown artifact parsing')
