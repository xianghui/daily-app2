import csv,json,io
from pathlib import Path
checks=[]
a=json.loads(Path('export-reviewed.json').read_text());rs=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())));assert len(rs)==len(a['records'])
for row,r,original in zip(rs,a['records'],a['originalInput']['records']):
 assert row['id']==r['id'];assert row['source']==r['text'];assert row['originalBasket']==original['basket'];assert row['reviewedBasket']==r['basket'];assert row['reviewedProduct']==r['item'];assert row['decision']==r['decision'];assert row['note']==("'"+r['note'] if r['note'].startswith(('=','+','-','@','\t','\r')) else r['note'])
assert rs[0]['note']=='\'=1+1, "review"\nsecond line';checks.append('independent Python CSV parser preserves all original/reviewed rows and quoted multiline formula-like notes safely')
ps=list(csv.DictReader(io.StringIO(Path('export-pairs.csv').read_text())));assert len(ps)==len(a['pairs'])
for row,p in zip(ps,a['pairs']):
 for key in ['a','b']:assert row['product'+key.upper()]==p[key]
 assert int(row['togetherBaskets'])==p['count'];assert json.loads(row['sourceBaskets'])==p['baskets'];assert float(row['lift'])==p['lift']
 assert (row['meetsThresholds']=='yes')==p['qualifies']
checks.append('every unordered pair including below-threshold pairs survives independent CSV parse with exact counts and source baskets')
for f in ['export-Cafe.json','export-Garden.json','export-held.json','export-no-records.json','export-max.json','export-dedup.json']:
 a=json.loads(Path(f).read_text());assert len(a['records'])==len(a['originalInput']['records']);assert len([l for b in a['baskets'] for l in b['lines']])==len(a['records'])
 for b in a['baskets']:
  lines=[r for r in a['records'] if r['id'] in b['lines']];assert b['complete']==all(r['decision']=='approve' for r in lines)
  if b['complete']:assert set(b['products'])=={r['item'] for r in lines}
  else:assert b['products']==[]
 for p in a['pairs']:
  hits=[b['id'] for b in a['baskets'] if b['complete'] and p['a'] in b['products'] and p['b'] in b['products']];assert hits==p['baskets'];assert p['count']==len(hits)
checks.append('JSON line conservation, whole-basket holds, deduplication and all source-evidence counts verified independently')
x=json.loads(Path('export-max.json').read_text());y=json.loads(Path('export-roundtrip.json').read_text());assert x['originalInput']==y['originalInput'];assert x['pairs']==y['pairs'];assert len(list(csv.DictReader(io.StringIO(Path('export-max.csv').read_text()))))==24
checks.append('maximum 24-line JSON export/import/reinference round trip and complete CSV')
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'checks':checks},indent=2));print('PASS artifacts',len(checks))
