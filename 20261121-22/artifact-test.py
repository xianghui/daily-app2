import csv,json,io
from pathlib import Path
checks=[]
for label in ['fixture0','fixture1','reviewed']:
 r=json.loads(Path('export-'+label+'.json').read_text());cs=list(csv.DictReader(io.StringIO(Path('export-'+label+'-audit-csv.csv').read_text())));ps=list(csv.DictReader(io.StringIO(Path('export-'+label+'-plan-csv.csv').read_text())))
 assert len(cs)==len(r['reviews'])==len(r['originalInput']['offers'])
 for x,y in zip(cs,r['reviews']):
  assert x['id']==y['id'] and x['source_description']==y['description'] and x['reviewed_profile']==y['profile']
  expected=y['note'];expected="'"+expected if expected[:1] in '=+-@\t\r' and expected else expected
  assert x['note']==expected
 assert len(ps)==len(r['reviews'])
 for x,y in zip(ps,r['analysis']['assignments']):
  assert x['id']==y['id'];assert x['units']==('' if y['units'] is None else str(y['units']))
 if r['analysis']['best']:
  b=r['analysis']['best'];assert sum(int(x['units']) for x in ps)==b['units'];assert sum(int(x['installed_cost_cents']) for x in ps)==b['costCents'];assert sum(int(x['total_watts']) for x in ps)==b['watts'];assert b['watts']<=r['originalInput']['wattCap']
 assert r['reviews'][0]['description'] in Path('export-'+label+'-markdown.md').read_text()
 checks.append({'artifact':label,'records':len(cs),'planRows':len(ps),'currentReviewedFieldsPreserved':True})
h=json.loads(Path('export-held.json').read_text());assert h['analysis'] is None and len(h['reviews'])==3;assert len(list(csv.DictReader(open('export-held-plan.csv'))))==0
assert json.loads(Path('export-reviewed.json').read_text())['reviews'][0]['note']=='=SUM(1,2)\n"reviewer", verify profile'
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVJSONRoundtrip':checks,'multilineCommaQuoteAndFormulaSafety':True,'heldAuditComplete':True},indent=2));print('PASS actual downloaded artifact roundtrips')
