import json,csv,io
from pathlib import Path
checks=[]
for f in Path('.').glob('export-*.json'):
 r=json.loads(f.read_text()); assert r['total']==len(r['reviews'])==len(r['originalInput']['records']);assert r['total']==r['approved']+r['held']
 assert [x['id'] for x in r['reviews']]==[x['id'] for x in r['originalInput']['records']]
 assert sum(x['allocated'] for x in r['reviews'])==r['optimized']['served']
 assert sum(x['quantity']*x['cents'] for x in r['optimized']['shipments'])==r['optimized']['costCents']
 checks.append(f.name)
for f in Path('.').glob('export-*.csv'):
 if 'lanes' in f.name:continue
 rows=list(csv.DictReader(io.StringIO(f.read_text())));r=json.loads(f.with_suffix('.json').read_text());assert len(rows)==r['total']
 for x,y in zip(rows,r['reviews']):
  assert x['id']==y['id'];assert int(x['quantity'])==y['quantity'];assert int(x['allocated'])==y['allocated']
  for k in ['owner','reviewNote']:
   safe="'"+y[k] if y[k] and y[k][0] in '=+-@\t\r' else y[k];assert x[k]==safe,(k,x[k],safe)
 checks.append(f.name)
r=json.loads(Path('export-reviewed.json').read_text());assert r['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", recheck';assert r['reviews'][0]['owner']=='=Owner\nline, "two"';assert '"quoted", recheck' in Path('export-reviewed.md').read_text()
lanes=list(csv.DictReader(Path('export-reviewed-lanes.csv').open()));assert len(lanes)==len(r['originalInput']['routes']);assert sum(int(x['lineCents'])for x in lanes)==r['optimized']['costCents'];assert sum(int(x['quantity'])for x in lanes)==r['optimized']['served']
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCsvJsonRoundtrip':True,'allRecordIdsPreserved':True,'multilineFormulaSafeFields':True,'laneTotalsReconciled':True,'files':checks},indent=2));print('PASS independent JSON/CSV/Markdown and lane reconciliation')
