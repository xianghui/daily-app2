import csv,json,io
from pathlib import Path
checks=[]
for label in ['Art','Community','reviewed','max']:
 r=json.loads(Path('export-'+label+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+label+'.csv').read_text())));plan=list(csv.DictReader(io.StringIO(Path('export-'+label+'.plan.csv').read_text())));assert len(rows)==r['total'];assert len(plan)==len(r['originalInput']['catalog']);assert [x['id'] for x in rows]==[x['id'] for x in r['reviews']]
 for v,x in zip(r['reviews'],rows):
  assert int(x['reviewed_qty'])==v['qty'];assert x['decision']==v['decision'];assert x['reviewed_item']==v['kind']
  for key,out in [('note','review_note'),('owner','owner')]:
   expected=v[key];expected="'"+expected if expected[:1] in '=+-@\t\r' and expected else expected;assert x[out]==expected
 for x in plan:
  n=next(n for n in r['items'] if n['id']==x['id']);assert int(x['gross'])==n['gross'];assert int(x['net'])==n['net'];assert int(x['used'])+int(x['net'])==int(x['gross'])
  # Reconstruct every gross requirement from reviewed direct demand plus all net parents.
  direct=sum(v['qty'] for v in r['reviews'] if v['decision']=='approve' and v['kind']==x['id'])
  parent=sum(p['net']*link['qty'] for p in r['items'] for link in p['parts'] if link['id']==x['id']);assert direct+parent==n['gross']
 for x in r['comparison']:
  assert x['leafOnly']-x['reviewedNet']==x['avoided'];assert x['avoided']>=0
 checks.append({'file':label,'requests':len(rows),'catalogNodes':len(plan),'componentConservation':True})
r=json.loads(Path('export-reviewed.json').read_text());assert '\n' in r['reviews'][0]['note'];assert r['reviews'][0]['note'] in r['reviews'][0]['note'];assert 'quoted' in Path('export-reviewed.md').read_text();assert r['originalInput']['records'][0]['qty']==3;assert r['reviews'][0]['qty']==4
held=json.loads(Path('export-all-held.json').read_text());assert len(held['reviews'])==40;assert all(x['gross']==0 for x in held['items'])
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVParser':True,'checks':checks,'multilineFormulaEscaping':True,'allHeldConserved':True},indent=2));print('PASS independent CSV/JSON parse, reviewed multiline edits and node conservation')
