import json,csv,sys
from pathlib import Path
from decimal import Decimal
prefix=sys.argv[1] if len(sys.argv)>1 else ''
checks=0
for c in json.loads(Path('decimal-oracle-cases.json').read_text()):
 normalized=c['raw'].replace(c['plan']['group'],'').replace(c['plan']['decimal'],'.')
 assert Decimal(normalized)==Decimal(c['actual']);assert c['actual']==c['expected'];checks+=1
files=list(Path('.').glob(prefix+'export-*.json'))
for p in files:
 if '.decimal.' in p.name:continue
 d=json.loads(p.read_text());assert len(d['originalInput']['records'])==len(d['checks'])==len(d['reviews'])
 if p.with_suffix('.csv').exists():
  rows=list(csv.DictReader(p.with_suffix('.csv').open(newline='')));assert len(rows)==len(d['checks'])
  def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
  for i,(r,c) in enumerate(zip(rows,d['checks'])):
   assert r['id']==safe(c['id']);assert r['original_token']==safe(d['originalInput']['records'][i]['raw']);assert r['review_note']==safe(d['reviews'][i]['note']);assert r['reviewed_token']==safe(c['raw']);assert r['exact_decimal']==safe(c.get('value',''));checks+=1
  rel=json.loads(p.with_suffix('.decimal.json').read_text());assert len(rel)==d['metrics']['ready']
  assert rel==[{'id':c['id'],'convention':c['system'],'decimal':c['value']} for c in d['checks'] if c['status']=='ready']
  assert all(isinstance(r['decimal'],str) for r in rel)
  assert p.with_suffix('.md').read_text().startswith('# Decimal Harbor')
 assert d['metrics']['baselineDisagreements']==sum(c['status']=='ready' and c.get('baseline') is not None and Decimal(c['value'])!=Decimal(c['baseline']) for c in d['checks'])
 assert d['metrics']['baselineUnavailable']==sum(c['status']=='ready' and c.get('baseline') is None for c in d['checks'])
 for c in d['checks']:
  if c['status']=='ready':
   plan=next(x for x in d['originalInput']['plans'] if x['id']==c['system']);normalized=c['raw'].replace(plan['group'],'').replace(plan['decimal'],'.');assert Decimal(normalized)==Decimal(c['value']);checks+=1
 reviewed=prefix+'export-reviewed.json'
 if p.name==reviewed:assert '\n' in d['reviews'][0]['note'];assert d['checks'][0]['value']=='-3210.25'
Path(prefix+'artifact-validation.json').write_text(json.dumps({'checks':checks,'auditFiles':len([p for p in files if '.decimal.' not in p.name]),'independentParser':'Python csv + decimal.Decimal','allPassed':True},indent=2));print('PASS independent artifacts',checks)
