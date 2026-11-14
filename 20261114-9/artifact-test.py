import json,csv
from pathlib import Path
checks=[]
for jp in Path('.').glob('export-*.json'):
 r=json.loads(jp.read_text());assert len(r['reviews'])==len(r['originalInput']['records']);assert [x['id'] for x in r['reviews']]==[x['id'] for x in r['originalInput']['records']];assert r['approved']+r['held']==r['total'];t=r['totals'];assert t['price']+t['usage']+t['volume']==t['total']
 cp=jp.with_suffix('.csv')
 if cp.exists():
  rows=list(csv.DictReader(cp.open(newline='')));assert len(rows)==r['total']
  for x,y in zip(rows,r['reviews']):
   assert x['id']==y['id'];assert x['material']==y['kind'];assert int(x['actual_cost_cents'])==y['actualCostCents']
   for k in ['owner','review_note']:
    value=y['owner' if k=='owner' else 'reviewNote'];expected=("'"+value) if value and value[:1] in '=+-@\t\r' else value;assert x[k]==expected,(x[k],expected)
 checks.append(jp.name)
r=json.loads(Path('export-reviewed.json').read_text());assert '\n' in r['reviews'][0]['reviewNote'];assert '\n' in r['reviews'][0]['owner'];md=Path('export-reviewed.md').read_text();assert all(x['id'] in md for x in r['reviews']);assert r['reviews'][0]['reviewNote'] in md
Path('artifact-validation.json').write_text(json.dumps({'parsedAudits':checks,'rowConservation':True,'reviewedCSVNumericFields':True,'multilineFormulaEscaping':True,'markdownComplete':True},indent=2));print('PASS actual downloaded artifacts and multiline CSV roundtrips')
