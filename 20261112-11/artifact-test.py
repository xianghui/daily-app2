import json,csv,io
from pathlib import Path
checked=[]
for path in Path('.').glob('export-*.json'):
 a=json.loads(path.read_text());assert a['schema']=='share-tapestry/v1';assert len(a['records'])==len(a['originalInput']['records']);assert [r['id'] for r in a['records']]==[r['id'] for r in a['originalInput']['records']]
 if a['released']:
  assert sum(b['netCents'] for b in a['balances'])==0
  assert sum(b['paidCents'] for b in a['balances'])==sum(b['owedCents'] for b in a['balances'])==sum(r['qty'] for r in a['records'])
  for r in a['records']:
   parts=next(x['parts'] for x in a['allocations'] if x['expense']==r['id']);assert sum(p['cents'] for p in parts)==r['qty']
   assert len(parts)==len(a['originalInput']['catalog'])
   for p in parts:
    if not r['weights'][p['id']]:assert p['cents']==0
  for b in a['balances']:assert sum(t['cents'] for t in a['transfers'] if t['to']==b['id'])-sum(t['cents'] for t in a['transfers'] if t['from']==b['id'])==b['netCents']
 else:assert not a['transfers'] and not a['balances'] and not a['allocations']
 checked.append(path.name)
for name in ['reviewed','max']:
 a=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())));assert len(rows)==len(a['records'])
 for x,r in zip(rows,a['records']):
  assert x['id']==r['id'];assert int(x['reviewedCents'])==r['qty'];assert json.loads(x['reviewedWeights'])==r['weights'];assert x['reviewedPayer']==r['item'];assert json.loads(x['centAllocations'])==next(q['parts'] for q in a['allocations'] if q['expense']==r['id']);assert x['note']==("'" if r['note'][:1] in '=+-@\t\r' and r['note'] else '')+r['note']
a=json.loads(Path('export-reviewed.json').read_text());assert a['records'][0]['qty']==17;assert a['originalInput']['records'][0]['qty']==1001;assert a['allocations'][0]['parts']==[{'id':'p0','cents':3},{'id':'p1','cents':6},{'id':'p2','cents':0},{'id':'p3','cents':8}]
md=Path('export-reviewed.md').read_text();assert '17' in md and '&lt;check&gt;' in md and 'BLOCKED' not in md
for t in a['transfers']:assert f"{t['from']} → {t['to']}: {t['cents']} cents" in md
assert json.loads(Path('export-max.json').read_text())['originalInput']==json.loads(Path('export-roundtrip.json').read_text())['originalInput']
Path('artifact-validation.json').write_text(json.dumps({'jsonArtifactsIndependentlyParsed':checked,'csvRowsAllPreserved':True,'reviewedFieldsAndRoundingRetained':True,'formulaNewlineEscaping':True,'centConservationAndNetBalances':True,'markdownTransfersVerified':True,'maximumAuditOriginalsRoundtrip':True},indent=2));print('PASS independent Python artifact parsing',len(checked))
