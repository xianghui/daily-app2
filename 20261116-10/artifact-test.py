import csv,json,math
from pathlib import Path
checks=[]
for n in range(2):
 d=json.loads(Path(f'export-fixture{n}.json').read_text());audit=list(csv.DictReader(open(f'export-fixture{n}.csv',newline='')));forecast=list(csv.DictReader(open(f'export-fixture{n}-forecast.csv',newline='')))
 assert len(audit)==d['total']==6
 assert len(forecast)==d['nextUnits']*len(d['curves'])
 for r,x in zip(audit,d['reviews']):
  assert r['id']==x['id'] and r['reviewed_procedure']==x['item'] and float(r['reviewed_minutes'])==x['minutes']
 for c in d['curves']:
  selected=[r for r in forecast if r['procedure']==c['id']]
  expected=[c['a']*(17+i)**c['b'] for i in range(d['nextUnits'])]
  assert math.isclose(sum(float(r['forecast_minutes']) for r in selected),sum(expected),rel_tol=1e-12)
  assert math.isclose(c['b'],0 if n==0 and c['id']=='packing' else -.5,abs_tol=1e-12)
 checks.append({'fixture':n,'allRecords':len(audit),'forecastRows':len(forecast),'parsed':True})
d=json.loads(Path('export-reviewed.json').read_text());audit=list(csv.DictReader(open('export-reviewed.csv',newline='')));assert audit[0]['review_note']=="'"+d['reviews'][0]['reviewNote'];assert '\n"quoted", verify' in audit[0]['review_note'];assert d['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text()
m=json.loads(Path('export-max.json').read_text());assert len(list(csv.DictReader(open('export-max.csv',newline=''))))==len(m['reviews'])==24;assert m['reviews'][-1]['reviewNote']=='last row\nkept'
Path('artifact-validation.json').write_text(json.dumps({'fixtures':checks,'multilineFormulaEscaping':True,'maximumAuditConserved':True},indent=2))
print('PASS independent CSV/JSON/Markdown parsing and known-answer forecast checks')
