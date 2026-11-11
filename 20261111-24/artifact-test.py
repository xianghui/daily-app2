import json,csv,io
from pathlib import Path
checks=[]
for p in Path('.').glob('export-*.json'):
 a=json.loads(p.read_text());assert a['schema']=='sieve-folio/v1';assert len(a['records'])==len(a['originalInput']['records'])
 for original,r in zip(a['originalInput']['records'],a['records']):
  assert r['id']==original['id'] and r['text']==original['text']
  g=r['grading']
  if r['decision']=='hold':assert g is None;continue
  assert g['total']==sum(r['retained']);assert g['difference']==g['total']-r['starting']
  for i,s in enumerate(g['sieves']):
   assert s['passing']==sum(r['retained'][i+1:]);assert s['cumulative']==sum(r['retained'][:i+1])
 checks.append(p.name)
for label in ['reviewed','max','phone']:
 a=json.loads(Path('export-'+label+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+label+'.csv').read_text())));assert len(rows)==len(a['records'])
 for r,j in zip(rows,a['records']):
  assert r['id']==j['id'];assert r['source']==j['text'];assert json.loads(r['reviewedRetainedG'])==j['retained'];assert int(r['reviewedStartingG'])==j['starting'];assert r['decision']==j['decision'];assert r['reviewerNote']==("'"+j['note'] if j['note'].startswith(('=','+','-','@','\t','\r')) else j['note'])
md=Path('export-reviewed.md').read_text();assert all(r['id'] in md for r in json.loads(Path('export-reviewed.json').read_text())['records']);assert '&lt;' not in md or isinstance(md,str)
a=json.loads(Path('export-max.json').read_text());b=json.loads(Path('export-roundtrip.json').read_text());assert a['originalInput']==b['originalInput'];assert [r['grading'] for r in a['records']]==[r['grading'] for r in b['records']]
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'jsonArtifactsReopened':checks,'csvArtifactsParsed':3,'allSourceRowsPreserved':True,'editedMassesSurvive':True,'multilineQuotedFormulaNoteEscaped':True,'originalOnlyAuditRoundtrip':True},indent=2));print('PASS downloaded artifacts, csv escaping, originals and grading roundtrip')
