import csv,json
from pathlib import Path
checks=[]
for f in Path('.').glob('export-*.json'):
 d=json.loads(f.read_text());assert len(d['reviews'])==len(d['originalInput']['records'])==d['total']
 assert [r['id'] for r in d['reviews']]==[r['id'] for r in d['originalInput']['records']]
 for item in d['items']:
  if item['status']=='blocked':assert 'optimized' not in item;continue
  z=item['optimized'];assert len(z['schedule'])==len(d['originalInput']['periods'])
  assert sum(x['order'] for x in z['schedule'])==sum(item['demand'])
  assert z['schedule'][-1]['closing']==0
  assert sum(x['setupCost']+x['holdingCost'] for x in z['schedule'])==z['cost']
 c=f.with_suffix('.csv')
 if c.exists():
  rows=list(csv.DictReader(c.open(newline='')));assert len(rows)==d['total']
  for x,y in zip(rows,d['reviews']):
   assert x['id']==y['id'];assert int(x['quantity'])==y['quantity']
   expected=y['reviewNote'];expected=("'"+expected) if expected.startswith(('=','+','-','@','\t','\r')) else expected
   assert x['reviewNote']==expected
 sc=f.with_name(f.stem+'-schedule.csv')
 if sc.exists():
  rows=list(csv.DictReader(sc.open(newline='')));expected=[dict(item=x['id'],periodLabel=d['originalInput']['periods'][z['period']],**z) for x in d['items'] if x['status']=='ready' for z in x['optimized']['schedule']]
  assert len(rows)==len(expected)
  for a,b in zip(rows,expected):assert a=={k:str(v) for k,v in b.items()}
 checks.append(f.name)
r=json.loads(Path('export-reviewed.json').read_text());assert r['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", recheck';assert r['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text().replace('\n  ','\n')
Path('artifact-validation.json').write_text(json.dumps(dict(independentPythonJsonCsvParse=checks,rowsConserved=True,scheduleConservation=True,reviewedMultilineFormulaEscaping=True),indent=2));print('PASS artifacts',len(checks))
